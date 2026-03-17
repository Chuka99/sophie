const ADMIN_PRODUCTS_KEY = "stylegod_custom_products_v1";

const yearEl = document.getElementById("year");
const form = document.getElementById("productForm");
const formTitle = document.getElementById("formTitle");

const idEl = document.getElementById("productId");
const nameEl = document.getElementById("productName");
const categoryEl = document.getElementById("productCategory");
const priceEl = document.getElementById("productPrice");
const imageUrlEl = document.getElementById("productImageUrl");
const imageFileEl = document.getElementById("productImageFile");
const descEl = document.getElementById("productDesc");

const previewBox = document.getElementById("previewBox");
const productListEl = document.getElementById("productList");

const resetBtn = document.getElementById("resetBtn");
const exportBtn = document.getElementById("exportBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const toastEl = document.getElementById("toast");

let editingId = "";
let uploadedImageData = "";

yearEl.textContent = new Date().getFullYear();

renderList();
renderPreview("");

imageUrlEl.addEventListener("input", () => {
  if (!uploadedImageData) {
    renderPreview(clean(imageUrlEl.value));
  }
});

imageFileEl.addEventListener("change", async (event) => {
  const file = event.target.files && event.target.files[0] ? event.target.files[0] : null;
  if (!file) {
    uploadedImageData = "";
    renderPreview(clean(imageUrlEl.value));
    return;
  }

  try {
    uploadedImageData = await fileToDataUrl(file);
    renderPreview(uploadedImageData);
    toast("Image ready ✔️");
  } catch (error) {
    console.error(error);
    uploadedImageData = "";
    renderPreview(clean(imageUrlEl.value));
    toast("Could not read image ❗");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const product = buildProductFromForm();
  if (!product) return;

  const products = loadCustomProducts();
  const index = products.findIndex((item) => item.id === product.id);

  if (index >= 0) {
    products[index] = product;
    saveCustomProducts(products);
    toast("Product updated ✔️");
  } else {
    products.unshift(product);
    saveCustomProducts(products);
    toast("Product added ✔️");
  }

  resetForm();
  renderList();
});

resetBtn.addEventListener("click", () => {
  resetForm();
});

exportBtn.addEventListener("click", () => {
  const products = loadCustomProducts();
  const blob = new Blob([JSON.stringify(products, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "stylegod-custom-products.json";
  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
  toast("JSON exported ✔️");
});

clearAllBtn.addEventListener("click", () => {
  const products = loadCustomProducts();
  if (products.length === 0) {
    toast("No custom products to clear");
    return;
  }

  const ok = window.confirm("Delete all custom products?");
  if (!ok) return;

  localStorage.removeItem(ADMIN_PRODUCTS_KEY);
  resetForm();
  renderList();
  toast("All custom products cleared ✔️");
});

function buildProductFromForm() {
  const name = clean(nameEl.value);
  const category = clean(categoryEl.value).toLowerCase();
  const price = Number(priceEl.value);
  const desc = clean(descEl.value);
  const imageUrl = clean(imageUrlEl.value);
  const img = uploadedImageData || imageUrl;

  if (!name) {
    toast("Enter product name ❗");
    nameEl.focus();
    return null;
  }

  if (!["wears", "hair", "skincare", "makeup"].includes(category)) {
    toast("Choose a valid category ❗");
    categoryEl.focus();
    return null;
  }

  if (!Number.isFinite(price) || price < 0) {
    toast("Enter a valid price ❗");
    priceEl.focus();
    return null;
  }

  if (!desc) {
    toast("Enter product description ❗");
    descEl.focus();
    return null;
  }

  return {
    id: editingId || createId(),
    category,
    name,
    price: Math.round(price),
    desc,
    img,
    isCustom: true,
    createdAt: editingId ? undefined : new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function renderList() {
  const products = loadCustomProducts();

  if (products.length === 0) {
    productListEl.innerHTML = `
      <div class="emptyState">
        No custom products yet. Add a product from the form and it will appear here and in the shop.
      </div>
    `;
    return;
  }

  productListEl.innerHTML = products.map((product) => `
    <article class="adminItem">
      <img src="${escapeHtml(product.img || placeholderDataUrl(product.name))}" alt="${escapeHtml(product.name)}" loading="lazy" />
      <div>
        <h4>${escapeHtml(product.name)}</h4>
        <div class="adminMeta">
          <span class="badge">${labelCategory(product.category)}</span>
          <span class="badge">${formatMoney(product.price)}</span>
        </div>
        <p class="adminDesc">${escapeHtml(product.desc || "")}</p>

        <div class="adminItemActions">
          <button class="btn btn--primary" type="button" data-edit="${product.id}">Edit</button>
          <button class="btn btn--ghost" type="button" data-delete="${product.id}">Delete</button>
        </div>
      </div>
    </article>
  `).join("");

  productListEl.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = loadCustomProducts().find((item) => item.id === button.dataset.edit);
      if (!product) return;

      editingId = product.id;
      formTitle.textContent = "Edit product";

      idEl.value = product.id;
      nameEl.value = product.name || "";
      categoryEl.value = product.category || "";
      priceEl.value = String(product.price ?? "");
      imageUrlEl.value = product.img && !String(product.img).startsWith("data:") ? product.img : "";
      descEl.value = product.desc || "";

      uploadedImageData = product.img && String(product.img).startsWith("data:") ? product.img : "";
      renderPreview(uploadedImageData || clean(imageUrlEl.value));

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  productListEl.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const ok = window.confirm("Delete this product?");
      if (!ok) return;

      const next = loadCustomProducts().filter((item) => item.id !== button.dataset.delete);
      saveCustomProducts(next);

      if (editingId === button.dataset.delete) {
        resetForm();
      }

      renderList();
      toast("Product deleted ✔️");
    });
  });
}

function resetForm() {
  editingId = "";
  uploadedImageData = "";
  form.reset();
  idEl.value = "";
  formTitle.textContent = "Add new product";
  renderPreview("");
}

function renderPreview(src) {
  const value = clean(src);
  if (!value) {
    previewBox.innerHTML = `<div class="previewPlaceholder">Image preview will appear here</div>`;
    return;
  }

  previewBox.innerHTML = `<img src="${escapeHtml(value)}" alt="Product preview" />`;
}

function loadCustomProducts() {
  try {
    const raw = localStorage.getItem(ADMIN_PRODUCTS_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data.filter(isValidProduct) : [];
  } catch {
    return [];
  }
}

function saveCustomProducts(products) {
  localStorage.setItem(ADMIN_PRODUCTS_KEY, JSON.stringify(products));
}

function isValidProduct(product) {
  return !!product &&
    typeof product === "object" &&
    clean(product.id) &&
    clean(product.name) &&
    ["wears", "hair", "skincare", "makeup"].includes(clean(product.category).toLowerCase()) &&
    Number.isFinite(Number(product.price));
}

function createId() {
  return `custom_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function formatMoney(n) {
  return `₦${Number(n || 0).toLocaleString("en-NG")}`;
}

function labelCategory(cat) {
  return ({ wears: "Wears", hair: "Hair", skincare: "Skincare", makeup: "Makeup" }[cat] || cat);
}

function clean(value) {
  return String(value ?? "").trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

function placeholderDataUrl(label) {
  const safe = escapeXml(String(label || "Stylegod").slice(0, 18));
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#ff4fd8" stop-opacity="0.75"/>
          <stop offset="0.5" stop-color="#7c4dff" stop-opacity="0.65"/>
          <stop offset="1" stop-color="#2fe6ff" stop-opacity="0.55"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <text x="50%" y="52%" text-anchor="middle" font-family="Inter, Arial" font-size="56" fill="rgba(255,255,255,0.95)" font-weight="800">${safe}</text>
      <text x="50%" y="62%" text-anchor="middle" font-family="Inter, Arial" font-size="26" fill="rgba(255,255,255,0.82)" font-weight="700">Stylegod • ₦</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function escapeXml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

let toastTimer;
function toast(text) {
  toastEl.textContent = text;
  toastEl.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.hidden = true;
  }, 1800);
}
// // Simple Stylegod-like shop with WhatsApp checkout (₦ only)

// const CONFIG = {
//   currencySymbol: "₦",
//   storeName: "Stylegod",
//   paymentNote: "Payment in Naira (₦) only",
//   whatsAppNumber: "2348132986908", // no +, no spaces
//   quickChatText: "Hi Stylegod! 👋 I want to ask about your products / availability.",
// };

// const STORAGE_KEY = "stylegod_simple_cart_v1";

// /**
//  * Use built-in placeholder images so you ALWAYS see images,
//  * even without uploading files. Replace img with your own later.
//  */
// function placeholderDataUrl(label) {
//   const safe = String(label).slice(0, 18);
//   const svg = `
//   <svg xmlns="http://www.w3.org/2000/svg" width="900" height="600">
//     <defs>
//       <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
//         <stop offset="0" stop-color="#ff4fd8" stop-opacity="0.75"/>
//         <stop offset="0.5" stop-color="#7c4dff" stop-opacity="0.65"/>
//         <stop offset="1" stop-color="#2fe6ff" stop-opacity="0.55"/>
//       </linearGradient>
//     </defs>
//     <rect width="100%" height="100%" fill="url(#g)"/>
//     <circle cx="180" cy="170" r="140" fill="#c6ff4f" fill-opacity="0.25"/>
//     <circle cx="700" cy="210" r="190" fill="#ffffff" fill-opacity="0.10"/>
//     <circle cx="560" cy="520" r="220" fill="#000000" fill-opacity="0.12"/>
//     <text x="50%" y="52%" text-anchor="middle" font-family="Inter, Arial" font-size="56" fill="rgba(255,255,255,0.95)" font-weight="800">
//       ${escapeXml(safe)}
//     </text>
//     <text x="50%" y="62%" text-anchor="middle" font-family="Inter, Arial" font-size="26" fill="rgba(255,255,255,0.80)" font-weight="700">
//       Stylegod • ₦
//     </text>
//   </svg>`;
//   return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
// }

// const PRODUCTS = [
//   // WEARS
//   { id:"w1", category:"wears", name:"Luxury Halter Neck Jumpsuit", price:75000, desc:"Elegant silhouette for occasions.", img:"assets/images/wears1.jpg" },
//   { id:"w2", category:"wears", name:"2-in-1 Bodysuit & Skirt Set", price:125000, desc:"Soft luxury set, perfect fit.", img:"assets/images/product-2.jpg"},
//   { id:"w3", category:"wears", name:"Stylish Short Dress", price:86000, desc:"Classy and feminine.", img:"assets/images/product-3.jpg" },
//   { id:"w4", category:"wears", name:"Stylish Short Dress", price:50000, desc:"Classy and feminine.", img:"assets/images/product-4.jpg" },
//   { id:"w5", category:"wears", name:"Luxury Halter Neck Jumpsuit", price:75000, desc:"Elegant silhouette for occasions.", img:"assets/images/product-6.jpeg" },
//   { id:"w6", category:"wears", name:"2-in-1 Bodysuit & Skirt Set", price:125000, desc:"Soft luxury set, perfect fit.", img: placeholderDataUrl("Wears") },
//   { id:"w7", category:"wears", name:"Stylish Short Dress", price:86000, desc:"Classy and feminine.", img: placeholderDataUrl("Wears") },
//   { id:"w8", category:"wears", name:"Stylish Short Dress", price:50000, desc:"Classy and feminine.", img: placeholderDataUrl("Wears") },
//   { id:"w9",  category:"wears", name:"BLACK & WHITE COWL BLOUSE", price:13000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2025/11/20251127_201718-300x450.jpg" },
//   { id:"w10", category:"wears", name:"LITTLE PRINT SLEEVELESS JUMPSUIT", price:17000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20251230_163945-300x450.jpg" },
//   { id:"w11", category:"wears", name:"BUTTERFLY PRINT PLAYSUIT", price:12000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20251230_160048-300x450.jpg" },
//   { id:"w12", category:"wears", name:"MINI PLEATED DRESS", price:17000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_135646-300x450.jpg" },
//   { id:"w13", category:"wears", name:"TULLE SLEEVE V-NECK BLOUSE", price:13000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_144807-300x450.jpg" },
//   { id:"w14", category:"wears", name:"BLACK CREPE TROUSER", price:15000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_144803-300x450.jpg" },
//   { id:"w15", category:"wears", name:"SWIRL SIDE SLIT DRESS", price:20000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_155146-300x450.jpg" },
//   { id:"w16", category:"wears", name:"BISHOP NECK SKATER DRESS", price:17000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_154448-300x450.jpg" },
//   { id:"w17", category:"wears", name:"TIE NECK SHOW SHOULDER BLOUSE", price:14000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_151917-300x450.jpg" },
//   { id:"w18", category:"wears", name:"RED LACE BODYCON DRESS", price:14000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_152740-300x450.jpg" },

//   // HAIR
//   { id:"h1", category:"hair", name:"Body Wave Wig (10–12\")", price:45000, desc:"Natural finish, soft waves.", img:"assets/images/hair-1.jpg" },
//   { id:"h2", category:"hair", name:"Hair Growth Oil (30ml)", price:85000, desc:"Nourish scalp + edges.", img:"assets/images/hair-2.jpg" },
//   { id:"h3", category:"hair", name:"Silk Bonnet", price:18000, desc:"Protects hair overnight.", img:"assets/images/hair-3.jpg" },
//   { id:"h4", category:"hair", name:"Silk Bonnet", price:25000, desc:"Protects hair overnight.", img:"assets/images/hair-4.jpg" },
//   { id:"h5",  category:"hair", name:"Darling Superstar", price:4100, desc:"Braids hair extension.", img:"https://thedivashop.ng/cdn/shop/products/Darling-Super-Star-350_e5884fcb-5c65-49c5-9c76-d3d6d63d87ea_600x.jpg?v=1756462851" },
//   { id:"h6",  category:"hair", name:"Darling Natural Twist", price:3400, desc:"Crochet hair extension.", img:"https://thedivashop.ng/cdn/shop/products/natural_twist_600x.jpg?v=1658430128" },
//   { id:"h7",  category:"hair", name:"Darling Duchess Regular Cut", price:4100, desc:"Braids hair extension.", img:"https://thedivashop.ng/cdn/shop/files/DUCHESS_07_new_600x.png?v=1685632749" },
//   { id:"h8",  category:"hair", name:"Darling Duchess Pre-Cut", price:7700, desc:"Braids hair extension.", img:"https://thedivashop.ng/cdn/shop/files/Duchess_Funke_a3798497-d91e-42a6-98e1-ad6fe1754729_600x.png?v=1714140233" },
//   { id:"h9",  category:"hair", name:"Darling Empress Curly Braid", price:8200, desc:"Braids hair extension.", img:"https://thedivashop.ng/cdn/shop/files/Curly-Braid_600x.png?v=1715838879" },
//   { id:"h10", category:"hair", name:"Darling Empress Loose Braid", price:8600, desc:"Braids hair extension.", img:"https://thedivashop.ng/cdn/shop/files/Loose-Braid_600x.png?v=1715838053" },
//   { id:"h11", category:"hair", name:"Darling Super Soft", price:5700, desc:"Braids hair extension.", img:"https://thedivashop.ng/cdn/shop/files/SUPERSOFT_New_600x.png?v=1717565422" },
//   { id:"h12", category:"hair", name:"Darling Passion Twist", price:7100, desc:"Crochet hair extension.", img:"https://thedivashop.ng/cdn/shop/products/Passion-Twist-02_600x.png?v=1589283215" },
//   { id:"h13", category:"hair", name:"Darling Natural Twist Long", price:4320, desc:"Crochet hair extension.", img:"https://thedivashop.ng/cdn/shop/products/Natural-Twist-Long_600x.png?v=1659692725" },
//   { id:"h14", category:"hair", name:"Darling Bohemian Passion Twist", price:7400, desc:"Crochet hair extension.", img:"https://thedivashop.ng/cdn/shop/products/Bohemain-520-x-600_600x.png?v=1633417421" },

//   // SKINCARE
//   { id:"s1", category:"skincare", name:"Hydrating Cleanser", price:12000, desc:"Gentle daily cleanse.", img:"assets/images/skin1.jpg" },
//   { id:"s2", category:"skincare", name:"Vitamin C Serum", price:18500, desc:"Brightens and evens tone.", img:"assets/images/skin2.jpg" },
//   { id:"s3", category:"skincare", name:"SPF 50 Sunscreen", price:15000, desc:"Daily protection.", img:"assets/images/skin3.jpg" },
//   { id:"s4", category:"skincare", name:"SPF 50 Sunscreen", price:55000, desc:"Daily protection.", img:"assets/images/skin4.jpg"},
//     { id:"s5",  category:"skincare", name:"Timeless Skincare 20% VITAMIN C + E FERULIC ACID SERUM", price:23716, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/30ml.png?v=1722141002&width=720" },
//   { id:"s6",  category:"skincare", name:"Timeless Skincare 10% VITAMIN C + E FERULIC ACID SERUM", price:23716, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/1.1_3e028168-8aff-4b11-9398-c10332cfadd7.jpg?v=1722140684&width=640" },
//   { id:"s7",  category:"skincare", name:"Timeless Skincare VITAMIN B5 SERUM", price:21076, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/7.jpg?v=1722141793&width=640" },
//   { id:"s8",  category:"skincare", name:"Nars Light Reflecting Advanced Skincare Foundaition", price:114400, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/aruba.png?v=1722152621&width=750" },
//   { id:"s9",  category:"skincare", name:"Timeless Skincare HYALURONIC ACID + VITAMIN C SERUM", price:20196, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/5_92fe660c-eac5-4777-a523-a53368c62f6c.jpg?v=1722141562&width=640" },
//   { id:"s10", category:"skincare", name:"Timeless Skincare HYALURONIC ACID 100% PURE", price:13145, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/6_d115147e-9811-4302-9450-0a3d1baa1246.jpg?v=1722141691&width=640" },
//   { id:"s11", category:"skincare", name:"Timeless Skincare HA Matrixyl®️ 3000 w/Rose Spray", price:17556, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/4.jpg?v=1722141427&width=640" },
//   { id:"s12", category:"skincare", name:"Rare Beauty Find Comfort Niacinamide Hydrating Body Lotion", price:61600, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/s2734028-main-zoom_jpg.webp?v=1760972365&width=350" },
//   { id:"s13", category:"skincare", name:"Beauty of Joseon Red Bean Refreshing Pore Mask", price:35200, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/IMG-6361.webp?v=1761835018&width=944" },
//   { id:"s14", category:"skincare", name:"Fresh Kombucha Facial Treatment Essence 2.0", price:75504, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/images_21.avif?v=1752146381&width=1970" },
//   { id:"s15", category:"skincare", name:"SKIN1004 Madagascar Centella Toning Toner", price:29920, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/IMG-6434.jpg?v=1761845295&width=800" },
//   { id:"s16", category:"skincare", name:"Fresh Daily Hydration To Go", price:103400, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/a38c8dae-5667-4f3f-adcd-83c3fabfcb39__57621_1.jpg?v=1751982850&width=1280" },
//   { id:"s17", category:"skincare", name:"Anua Heartleaf 77 Soothing Toner", price:36960, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/Anua-soothing-toner-500x500.webp?v=1773154351&width=500" },
//   { id:"s18", category:"skincare", name:"Glow Recipe dewy skin dazzlers", price:118800, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/P10060008_principal.jpg?v=1744125290&width=1248" },
//   { id:"s19", category:"skincare", name:"MURAD MULTI VITAMIN CLEAR COAT BROAD SPECTRUM SPF50", price:77440, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/564900_MVCC_Carousel_1_MURAD.webp?v=1771436083&width=1000" },
//   { id:"s20", category:"skincare", name:"Mario Badescu Witch Hazel & Rose Water Toner", price:26400, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/IMG-7967.jpg?v=1767011636&width=4000" },

//   // MAKEUP
//   { id:"m1", category:"makeup", name:"Soft Glam Lip Gloss", price:6500, desc:"High shine, comfy wear.", img:"assets/images/makeup1.jpg" },
//   { id:"m2", category:"makeup", name:"Everyday Brow Gel", price:7000, desc:"Clean defined brows.", img:"assets/images/makeup2.jpg" },
//   { id:"m3", category:"makeup", name:"Glow Setting Spray", price:10500, desc:"Locks makeup with glow.", img:"assets/images/makeup3.jpg" },
//   { id:"m4", category:"makeup", name:"Glow Setting Spray", price:20500, desc:"Locks makeup with glow.", img:"assets/images/makeup4.jpg" },
//   { id:"m5",  category:"makeup", name:"Danessa Myricks Beauty Yummy Skin Blurring Balm", price:75504, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/11.png?v=1722002636&width=872" },
//   { id:"m6",  category:"makeup", name:"Nars Radiant Longwear Foundation", price:118800, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/barcelona.png?v=1722152864&width=750" },
//   { id:"m7",  category:"makeup", name:"Fenty Beauty Pro Filt’r Soft Matte Powder Foundation", price:88000, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/840026645966_1.jpg?v=1734521673&width=500" },
//   { id:"m8",  category:"makeup", name:"Charlotte Tilbury Airbrush Flawless Setting Spray", price:55000, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/34ml.jpg?v=1721972049&width=640" },
//   { id:"m9",  category:"makeup", name:"Morphe Continuous Setting Mist", price:28600, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/2528888.avif?v=1758841454&width=1080" },
//   { id:"m10", category:"makeup", name:"Fenty Beauty Gloss Bomb Universal Lip Luminizer", price:46200, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/choco1.png?v=1721025569&width=1400" },
//   { id:"m11", category:"makeup", name:"Haus Labs By Lady Gaga Triclone Skin Tech Medium Coverage Foundation", price:107800, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/HL_MAY24_PDP_AllureReadersChoice_230_25a3b748-8f89-4392-ae94-b4af8185c13b.jpg?v=1734186707&width=1250" },
//   { id:"m12", category:"makeup", name:"Patrick TA Major Headlines Double - Take Crème & Powder Blush Duo", price:88000, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/wanted1.png?v=1722128379&width=700" },
//   { id:"m13", category:"makeup", name:"PAT McGRATH LABS Skin Fetish: Sublime Perfection Concealer", price:74800, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/2020_01_PMG_Concealer_LightMedium_12_FINAL_1200x1200_0813abc5-5492-47e6-aebe-7a28367fb239.webp?v=1751908184&width=1100" },
//   { id:"m14", category:"makeup", name:"Danessa Myricks Beauty Yummy Skin Serum Skin Tint Foundation with Peptides + Ceramide", price:75504, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/YS-SST_C_S_-_01.jpg?v=1747467604&width=785" },
// ];

// // --- State ---
// let cart = loadCart();        // { [id]: qty }
// let filter = "all";

// // --- DOM ---
// const yearEl = document.getElementById("year");
// const productGrid = document.getElementById("productGrid");
// const miniGrid = document.getElementById("miniGrid");

// const cartCountEl = document.getElementById("cartCount");
// const cartListEl  = document.getElementById("cartList");
// const cartTotalEl = document.getElementById("cartTotal");

// const openCartBtn  = document.getElementById("openCartBtn");
// const closeCartBtn = document.getElementById("closeCartBtn");
// const drawer   = document.getElementById("cartDrawer");
// const backdrop = document.getElementById("backdrop");

// const checkoutBtn = document.getElementById("checkoutBtn");
// const clearBtn    = document.getElementById("clearBtn");
// const quickChatBtn = document.getElementById("quickChatBtn");

// const contactForm = document.getElementById("contactForm");

// const cartDelivery = document.getElementById("cartDelivery");
// const cartLocation = document.getElementById("cartLocation");
// const cartName     = document.getElementById("cartName");
// const cartPhone    = document.getElementById("cartPhone");

// const toastEl = document.getElementById("toast");

// // --- Init ---
// yearEl.textContent = new Date().getFullYear();
// renderMini();
// renderProducts();
// renderCart();

// // Filters
// document.querySelectorAll(".filter").forEach(btn => {
//   btn.addEventListener("click", () => {
//     document.querySelectorAll(".filter").forEach(b => b.classList.remove("is-active"));
//     btn.classList.add("is-active");
//     filter = btn.dataset.filter;
//     renderProducts();
//   });
// });

// // Category cards -> filter + scroll to shop
// document.querySelectorAll(".catCard").forEach(btn => {
//   btn.addEventListener("click", () => {
//     const f = btn.dataset.filter;
//     const filterBtn = document.querySelector(`.filter[data-filter="${f}"]`);
//     if (filterBtn) filterBtn.click();
//     document.getElementById("shop").scrollIntoView({ behavior:"smooth", block:"start" });
//   });
// });

// // Drawer open/close
// // Drawer open/close (robust + toggle)
// openCartBtn.addEventListener("click", () => {
//   if (!drawer.hidden) closeDrawer();
//   else openDrawer();
// });

// closeCartBtn.addEventListener("click", closeDrawer);
// backdrop.addEventListener("click", closeDrawer);

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape" && !drawer.hidden) closeDrawer();
// });

// function openDrawer(){
//   drawer.hidden = false;
//   backdrop.hidden = false;
//   document.body.style.overflow = "hidden";
// }

// function closeDrawer(){
//   drawer.hidden = true;
//   backdrop.hidden = true;
//   document.body.style.overflow = "";
// }

// // Quick chat
// quickChatBtn.addEventListener("click", () => openWhatsApp(CONFIG.quickChatText));

// // Contact form -> WhatsApp
// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const fd = new FormData(contactForm);
//   const name = clean(fd.get("name"));
//   const phone = clean(fd.get("phone"));
//   const delivery = clean(fd.get("delivery"));
//   const location = clean(fd.get("location"));
//   const message = clean(fd.get("message"));

//   const text =
// `Hi ${CONFIG.storeName}! 👋

// ${CONFIG.paymentNote}.

// Contact request:
// Name: ${name}
// Phone: ${phone}
// Delivery option: ${delivery}
// Location/Address: ${location}

// Message:
// ${message}`;

//   openWhatsApp(text);
// });

// // Cart actions
// clearBtn.addEventListener("click", () => {
//   cart = {};
//   saveCart(cart);
//   renderProducts();
//   renderCart();
//   toast("Cart cleared ✔️");
// });

// checkoutBtn.addEventListener("click", () => {
//   const items = getCartItems();
//   if (items.length === 0) return toast("Cart is empty ❗");

//   const details = {
//     delivery: clean(cartDelivery.value),
//     location: clean(cartLocation.value),
//     name: clean(cartName.value),
//     phone: clean(cartPhone.value),
//   };

//   const msg = buildOrderMessage(items, details);
//   openWhatsApp(msg);
// });

// // --- Render ---
// function renderMini(){
//   const picks = PRODUCTS.slice(0, 3);
//   miniGrid.innerHTML = picks.map(p => `
//     <div class="miniItem">
//       <img src="${p.img}" alt="${escapeHtml(p.name)}" loading="lazy" />
//       <div>
//         <strong>${escapeHtml(p.name)}</strong>
//         <small>${formatMoney(p.price)} • ${labelCategory(p.category)}</small>
//       </div>
//     </div>
//   `).join("");
// }

// function renderProducts(){
//   const list = PRODUCTS.filter(p => filter === "all" ? true : p.category === filter);

//   productGrid.innerHTML = list.map(p => {
//     const qty = cart[p.id] || 0;
//     return `
//       <article class="card">
//         <div class="card__img">
//           <img src="${p.img}" alt="${escapeHtml(p.name)}" loading="lazy" />
//         </div>
//         <div class="card__body">
//           <h3 class="card__title">${escapeHtml(p.name)}</h3>
//           <div class="card__meta">
//             <span class="price">${formatMoney(p.price)}</span>
//             <span class="badge">${labelCategory(p.category)}</span>
//           </div>
//           <p class="card__desc">${escapeHtml(p.desc)}</p>

//           <div class="card__actions">
//             <button class="btn btn--primary" type="button" data-add="${p.id}">Add</button>

//             <div class="qty" aria-label="Quantity controls">
//               <button type="button" data-dec="${p.id}" aria-label="Decrease">−</button>
//               <span>${qty}</span>
//               <button type="button" data-inc="${p.id}" aria-label="Increase">+</button>
//             </div>
//           </div>
//         </div>
//       </article>
//     `;
//   }).join("");

//   productGrid.querySelectorAll("[data-add]").forEach(b => b.addEventListener("click", () => {
//     addToCart(b.dataset.add, 1);
//     toast("Added to cart ✔️");
//   }));
//   productGrid.querySelectorAll("[data-inc]").forEach(b => b.addEventListener("click", () => addToCart(b.dataset.inc, 1)));
//   productGrid.querySelectorAll("[data-dec]").forEach(b => b.addEventListener("click", () => addToCart(b.dataset.dec, -1)));
// }

// function renderCart(){
//   const items = getCartItems();
//   cartCountEl.textContent = String(items.reduce((s, it) => s + it.qty, 0));
//   cartTotalEl.textContent = formatMoney(items.reduce((s, it) => s + it.qty * it.price, 0));

//   if (items.length === 0) {
//     cartListEl.innerHTML = `<div class="cartItem"><strong>Your cart is empty</strong><br><small>Add items from the shop.</small></div>`;
//     return;
//   }

//   cartListEl.innerHTML = items.map(it => `
//     <div class="cartItem">
//       <div class="cartItem__row">
//         <div>
//           <strong>${escapeHtml(it.name)}</strong>
//           <small>${formatMoney(it.price)} each • ${labelCategory(it.category)}</small>
//         </div>
//         <div><strong>${formatMoney(it.price * it.qty)}</strong></div>
//       </div>
//       <div class="cartItem__actions">
//         <div class="qty">
//           <button type="button" data-dec="${it.id}">−</button>
//           <span>${it.qty}</span>
//           <button type="button" data-inc="${it.id}">+</button>
//         </div>
//         <button class="removeBtn" type="button" data-remove="${it.id}">Remove</button>
//       </div>
//     </div>
//   `).join("");

//   cartListEl.querySelectorAll("[data-inc]").forEach(b => b.addEventListener("click", () => addToCart(b.dataset.inc, 1)));
//   cartListEl.querySelectorAll("[data-dec]").forEach(b => b.addEventListener("click", () => addToCart(b.dataset.dec, -1)));
//   cartListEl.querySelectorAll("[data-remove]").forEach(b => b.addEventListener("click", () => {
//     delete cart[b.dataset.remove];
//     saveCart(cart);
//     renderProducts();
//     renderCart();
//   }));
// }

// // --- Cart helpers ---
// function addToCart(id, delta){
//   const current = cart[id] || 0;
//   const next = Math.max(0, current + delta);
//   if (next === 0) delete cart[id];
//   else cart[id] = next;
//   saveCart(cart);
//   renderProducts();
//   renderCart();
// }

// function getCartItems(){
//   return Object.entries(cart).map(([id, qty]) => {
//     const p = PRODUCTS.find(x => x.id === id);
//     return p ? ({ ...p, qty }) : null;
//   }).filter(Boolean);
// }

// // --- Drawer ---
// function openDrawer(){
//   drawer.hidden = false;
//   backdrop.hidden = false;
//   document.body.style.overflow = "hidden";
// }
// function closeDrawer(){
//   drawer.hidden = true;
//   backdrop.hidden = true;
//   document.body.style.overflow = "";
// }

// // --- WhatsApp ---
// function buildOrderMessage(items, details){
//   const total = items.reduce((s, it) => s + it.qty * it.price, 0);
//   const lines = items.map((it, i) =>
//     `${i+1}) ${it.name} — ${it.qty} × ${formatMoney(it.price)} = ${formatMoney(it.qty * it.price)}`
//   ).join("\n");

//   return `Hi ${CONFIG.storeName}! 👋
// I want to place an order.

// ${CONFIG.paymentNote}.

// Items:
// ${lines}

// Total: ${formatMoney(total)}

// Delivery option: ${details.delivery || "—"}
// Location/Address: ${details.location || "—"}
// Name: ${details.name || "—"}
// Phone: ${details.phone || "—"}

// Please confirm availability + delivery fee.`;
// }

// function openWhatsApp(message){
//   const num = String(CONFIG.whatsAppNumber || "").trim();
//   if (!num) return toast("Set your WhatsApp number ❗");
//   const url = `https://wa.me/${encodeURIComponent(num)}?text=${encodeURIComponent(message)}`;
//   window.open(url, "_blank", "noopener,noreferrer");
// }

// // --- Storage ---
// function loadCart(){
//   try{
//     const raw = localStorage.getItem(STORAGE_KEY);
//     if (!raw) return {};
//     const data = JSON.parse(raw);
//     return data && typeof data === "object" ? data : {};
//   } catch {
//     return {};
//   }
// }
// function saveCart(next){
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
// }

// // --- Utils ---
// function formatMoney(n){
//   return `${CONFIG.currencySymbol}${Number(n || 0).toLocaleString("en-NG")}`;
// }
// function labelCategory(cat){
//   return ({ wears:"Wears", hair:"Hair", skincare:"Skincare", makeup:"Makeup" }[cat] || cat);
// }
// function clean(v){ return String(v ?? "").trim(); }
// function escapeHtml(s){
//   return String(s ?? "")
//     .replaceAll("&","&amp;")
//     .replaceAll("<","&lt;")
//     .replaceAll(">","&gt;")
//     .replaceAll('"',"&quot;")
//     .replaceAll("'","&#039;");
// }
// function escapeXml(s){
//   return String(s ?? "")
//     .replaceAll("&","&amp;")
//     .replaceAll("<","&lt;")
//     .replaceAll(">","&gt;")
//     .replaceAll('"',"&quot;")
//     .replaceAll("'","&apos;");
// }

// // Toast
// let toastTimer;
// function toast(text){
//   toastEl.textContent = text;
//   toastEl.hidden = false;
//   clearTimeout(toastTimer);
//   toastTimer = setTimeout(() => { toastEl.hidden = true; }, 1600);
// }



// function loadProducts() {
//   const container = document.getElementById("shop");

//   const defaultProducts = []; // keep your existing products here if any
//   const customProducts = JSON.parse(localStorage.getItem("products")) || [];

//   const allProducts = [...defaultProducts, ...customProducts];

//   container.innerHTML = "";

//   allProducts.forEach(product => {
//     const div = document.createElement("div");

//     div.innerHTML = `
//       <h3>${product.name}</h3>
//       <img src="${product.image}" width="150">
//       <p>₦${product.price}</p>
//       <button>Add to Cart</button>
//     `;

//     container.appendChild(div);
//   });
// }

// loadProducts();













// Stylegod shop with WhatsApp checkout + custom admin products

const CONFIG = {
  currencySymbol: "₦",
  storeName: "Stylegod",
  paymentNote: "Payment in Naira (₦) only",
  whatsAppNumber: "2348132986908",
  quickChatText: "Hi Stylegod! 👋 I want to ask about your products / availability.",
};

const STORAGE_KEY = "stylegod_simple_cart_v1";
const CUSTOM_PRODUCTS_KEY = "stylegod_custom_products_v1";

/**
 * Built-in placeholder image generator
 */
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
    <circle cx="180" cy="170" r="140" fill="#c6ff4f" fill-opacity="0.25"/>
    <circle cx="700" cy="210" r="190" fill="#ffffff" fill-opacity="0.10"/>
    <circle cx="560" cy="520" r="220" fill="#000000" fill-opacity="0.12"/>
    <text x="50%" y="52%" text-anchor="middle" font-family="Inter, Arial" font-size="56" fill="rgba(255,255,255,0.95)" font-weight="800">
      ${safe}
    </text>
    <text x="50%" y="62%" text-anchor="middle" font-family="Inter, Arial" font-size="26" fill="rgba(255,255,255,0.80)" font-weight="700">
      Stylegod • ₦
    </text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/**
 * Base products
 * I used a clean starter set here.
 * You can add more entries later without changing any other logic.
 */
const BASE_PRODUCTS = [
  // WEARS
  { id:"w1", category:"wears", name:"Luxury Halter Neck Jumpsuit", price:75000, desc:"Elegant silhouette for occasions.", img:"assets/images/wears1.jpg" },
  { id:"w2", category:"wears", name:"2-in-1 Bodysuit & Skirt Set", price:125000, desc:"Soft luxury set, perfect fit.", img:"assets/images/product-2.jpg"},
  { id:"w3", category:"wears", name:"Stylish Short Dress", price:86000, desc:"Classy and feminine.", img:"assets/images/product-3.jpg" },
  { id:"w4", category:"wears", name:"Stylish Short Dress", price:50000, desc:"Classy and feminine.", img:"assets/images/product-4.jpg" },
  { id:"w5", category:"wears", name:"Luxury Halter Neck Jumpsuit", price:75000, desc:"Elegant silhouette for occasions.", img:"assets/images/product-6.jpeg" },
  { id:"w6", category:"wears", name:"2-in-1 Bodysuit & Skirt Set", price:125000, desc:"Soft luxury set, perfect fit.", img: placeholderDataUrl("Wears") },
  { id:"w7", category:"wears", name:"Stylish Short Dress", price:86000, desc:"Classy and feminine.", img: placeholderDataUrl("Wears") },
  { id:"w8", category:"wears", name:"Stylish Short Dress", price:50000, desc:"Classy and feminine.", img: placeholderDataUrl("Wears") },
  { id:"w9",  category:"wears", name:"BLACK & WHITE COWL BLOUSE", price:13000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2025/11/20251127_201718-300x450.jpg" },
  { id:"w10", category:"wears", name:"LITTLE PRINT SLEEVELESS JUMPSUIT", price:17000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20251230_163945-300x450.jpg" },
  { id:"w11", category:"wears", name:"BUTTERFLY PRINT PLAYSUIT", price:12000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20251230_160048-300x450.jpg" },
  { id:"w12", category:"wears", name:"MINI PLEATED DRESS", price:17000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_135646-300x450.jpg" },
  { id:"w13", category:"wears", name:"TULLE SLEEVE V-NECK BLOUSE", price:13000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_144807-300x450.jpg" },
  { id:"w14", category:"wears", name:"BLACK CREPE TROUSER", price:15000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_144803-300x450.jpg" },
  { id:"w15", category:"wears", name:"SWIRL SIDE SLIT DRESS", price:20000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_155146-300x450.jpg" },
  { id:"w16", category:"wears", name:"BISHOP NECK SKATER DRESS", price:17000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_154448-300x450.jpg" },
  { id:"w17", category:"wears", name:"TIE NECK SHOW SHOULDER BLOUSE", price:14000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_151917-300x450.jpg" },
  { id:"w18", category:"wears", name:"RED LACE BODYCON DRESS", price:14000, desc:"Women's wear.", img:"https://midrra.com/wp-content/uploads/2026/02/20260212_152740-300x450.jpg" },

  // HAIR
  { id:"h1", category:"hair", name:"Body Wave Wig (10–12\")", price:45000, desc:"Natural finish, soft waves.", img:"assets/images/hair-1.jpg" },
  { id:"h2", category:"hair", name:"Hair Growth Oil (30ml)", price:85000, desc:"Nourish scalp + edges.", img:"assets/images/hair-2.jpg" },
  { id:"h3", category:"hair", name:"Silk Bonnet", price:18000, desc:"Protects hair overnight.", img:"assets/images/hair-3.jpg" },
  { id:"h4", category:"hair", name:"Silk Bonnet", price:25000, desc:"Protects hair overnight.", img:"assets/images/hair-4.jpg" },
  { id:"h5",  category:"hair", name:"Darling Superstar", price:4100, desc:"Braids hair extension.", img:"https://thedivashop.ng/cdn/shop/products/Darling-Super-Star-350_e5884fcb-5c65-49c5-9c76-d3d6d63d87ea_600x.jpg?v=1756462851" },
  { id:"h6",  category:"hair", name:"Darling Natural Twist", price:3400, desc:"Crochet hair extension.", img:"https://thedivashop.ng/cdn/shop/products/natural_twist_600x.jpg?v=1658430128" },
  { id:"h7",  category:"hair", name:"Darling Duchess Regular Cut", price:4100, desc:"Braids hair extension.", img:"https://thedivashop.ng/cdn/shop/files/DUCHESS_07_new_600x.png?v=1685632749" },
  { id:"h8",  category:"hair", name:"Darling Duchess Pre-Cut", price:7700, desc:"Braids hair extension.", img:"https://thedivashop.ng/cdn/shop/files/Duchess_Funke_a3798497-d91e-42a6-98e1-ad6fe1754729_600x.png?v=1714140233" },
  { id:"h9",  category:"hair", name:"Darling Empress Curly Braid", price:8200, desc:"Braids hair extension.", img:"https://thedivashop.ng/cdn/shop/files/Curly-Braid_600x.png?v=1715838879" },
  { id:"h10", category:"hair", name:"Darling Empress Loose Braid", price:8600, desc:"Braids hair extension.", img:"https://thedivashop.ng/cdn/shop/files/Loose-Braid_600x.png?v=1715838053" },
  { id:"h11", category:"hair", name:"Darling Super Soft", price:5700, desc:"Braids hair extension.", img:"https://thedivashop.ng/cdn/shop/files/SUPERSOFT_New_600x.png?v=1717565422" },
  { id:"h12", category:"hair", name:"Darling Passion Twist", price:7100, desc:"Crochet hair extension.", img:"https://thedivashop.ng/cdn/shop/products/Passion-Twist-02_600x.png?v=1589283215" },
  { id:"h13", category:"hair", name:"Darling Natural Twist Long", price:4320, desc:"Crochet hair extension.", img:"https://thedivashop.ng/cdn/shop/products/Natural-Twist-Long_600x.png?v=1659692725" },
  { id:"h14", category:"hair", name:"Darling Bohemian Passion Twist", price:7400, desc:"Crochet hair extension.", img:"https://thedivashop.ng/cdn/shop/products/Bohemain-520-x-600_600x.png?v=1633417421" },

  // SKINCARE
  { id:"s1", category:"skincare", name:"Hydrating Cleanser", price:12000, desc:"Gentle daily cleanse.", img:"assets/images/skin1.jpg" },
  { id:"s2", category:"skincare", name:"Vitamin C Serum", price:18500, desc:"Brightens and evens tone.", img:"assets/images/skin2.jpg" },
  { id:"s3", category:"skincare", name:"SPF 50 Sunscreen", price:15000, desc:"Daily protection.", img:"assets/images/skin3.jpg" },
  { id:"s4", category:"skincare", name:"SPF 50 Sunscreen", price:55000, desc:"Daily protection.", img:"assets/images/skin4.jpg"},
    { id:"s5",  category:"skincare", name:"Timeless Skincare 20% VITAMIN C + E FERULIC ACID SERUM", price:23716, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/30ml.png?v=1722141002&width=720" },
  { id:"s6",  category:"skincare", name:"Timeless Skincare 10% VITAMIN C + E FERULIC ACID SERUM", price:23716, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/1.1_3e028168-8aff-4b11-9398-c10332cfadd7.jpg?v=1722140684&width=640" },
  { id:"s7",  category:"skincare", name:"Timeless Skincare VITAMIN B5 SERUM", price:21076, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/7.jpg?v=1722141793&width=640" },
  { id:"s8",  category:"skincare", name:"Nars Light Reflecting Advanced Skincare Foundaition", price:114400, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/aruba.png?v=1722152621&width=750" },
  { id:"s9",  category:"skincare", name:"Timeless Skincare HYALURONIC ACID + VITAMIN C SERUM", price:20196, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/5_92fe660c-eac5-4777-a523-a53368c62f6c.jpg?v=1722141562&width=640" },
  { id:"s10", category:"skincare", name:"Timeless Skincare HYALURONIC ACID 100% PURE", price:13145, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/6_d115147e-9811-4302-9450-0a3d1baa1246.jpg?v=1722141691&width=640" },
  { id:"s11", category:"skincare", name:"Timeless Skincare HA Matrixyl®️ 3000 w/Rose Spray", price:17556, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/4.jpg?v=1722141427&width=640" },
  { id:"s12", category:"skincare", name:"Rare Beauty Find Comfort Niacinamide Hydrating Body Lotion", price:61600, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/s2734028-main-zoom_jpg.webp?v=1760972365&width=350" },
  { id:"s13", category:"skincare", name:"Beauty of Joseon Red Bean Refreshing Pore Mask", price:35200, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/IMG-6361.webp?v=1761835018&width=944" },
  { id:"s14", category:"skincare", name:"Fresh Kombucha Facial Treatment Essence 2.0", price:75504, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/images_21.avif?v=1752146381&width=1970" },
  { id:"s15", category:"skincare", name:"SKIN1004 Madagascar Centella Toning Toner", price:29920, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/IMG-6434.jpg?v=1761845295&width=800" },
  { id:"s16", category:"skincare", name:"Fresh Daily Hydration To Go", price:103400, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/a38c8dae-5667-4f3f-adcd-83c3fabfcb39__57621_1.jpg?v=1751982850&width=1280" },
  { id:"s17", category:"skincare", name:"Anua Heartleaf 77 Soothing Toner", price:36960, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/Anua-soothing-toner-500x500.webp?v=1773154351&width=500" },
  { id:"s18", category:"skincare", name:"Glow Recipe dewy skin dazzlers", price:118800, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/P10060008_principal.jpg?v=1744125290&width=1248" },
  { id:"s19", category:"skincare", name:"MURAD MULTI VITAMIN CLEAR COAT BROAD SPECTRUM SPF50", price:77440, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/564900_MVCC_Carousel_1_MURAD.webp?v=1771436083&width=1000" },
  { id:"s20", category:"skincare", name:"Mario Badescu Witch Hazel & Rose Water Toner", price:26400, desc:"Skincare product.", img:"https://mirrorsbeauty.com/cdn/shop/files/IMG-7967.jpg?v=1767011636&width=4000" },

  // MAKEUP
  { id:"m1", category:"makeup", name:"Soft Glam Lip Gloss", price:6500, desc:"High shine, comfy wear.", img:"assets/images/makeup1.jpg" },
  { id:"m2", category:"makeup", name:"Everyday Brow Gel", price:7000, desc:"Clean defined brows.", img:"assets/images/makeup2.jpg" },
  { id:"m3", category:"makeup", name:"Glow Setting Spray", price:10500, desc:"Locks makeup with glow.", img:"assets/images/makeup3.jpg" },
  { id:"m4", category:"makeup", name:"Glow Setting Spray", price:20500, desc:"Locks makeup with glow.", img:"assets/images/makeup4.jpg" },
  { id:"m5",  category:"makeup", name:"Danessa Myricks Beauty Yummy Skin Blurring Balm", price:75504, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/11.png?v=1722002636&width=872" },
  { id:"m6",  category:"makeup", name:"Nars Radiant Longwear Foundation", price:118800, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/barcelona.png?v=1722152864&width=750" },
  { id:"m7",  category:"makeup", name:"Fenty Beauty Pro Filt’r Soft Matte Powder Foundation", price:88000, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/840026645966_1.jpg?v=1734521673&width=500" },
  { id:"m8",  category:"makeup", name:"Charlotte Tilbury Airbrush Flawless Setting Spray", price:55000, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/34ml.jpg?v=1721972049&width=640" },
  { id:"m9",  category:"makeup", name:"Morphe Continuous Setting Mist", price:28600, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/2528888.avif?v=1758841454&width=1080" },
  { id:"m10", category:"makeup", name:"Fenty Beauty Gloss Bomb Universal Lip Luminizer", price:46200, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/choco1.png?v=1721025569&width=1400" },
  { id:"m11", category:"makeup", name:"Haus Labs By Lady Gaga Triclone Skin Tech Medium Coverage Foundation", price:107800, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/HL_MAY24_PDP_AllureReadersChoice_230_25a3b748-8f89-4392-ae94-b4af8185c13b.jpg?v=1734186707&width=1250" },
  { id:"m12", category:"makeup", name:"Patrick TA Major Headlines Double - Take Crème & Powder Blush Duo", price:88000, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/wanted1.png?v=1722128379&width=700" },
  { id:"m13", category:"makeup", name:"PAT McGRATH LABS Skin Fetish: Sublime Perfection Concealer", price:74800, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/2020_01_PMG_Concealer_LightMedium_12_FINAL_1200x1200_0813abc5-5492-47e6-aebe-7a28367fb239.webp?v=1751908184&width=1100" },
  { id:"m14", category:"makeup", name:"Danessa Myricks Beauty Yummy Skin Serum Skin Tint Foundation with Peptides + Ceramide", price:75504, desc:"Luxury makeup product.", img:"https://mirrorsbeauty.com/cdn/shop/files/YS-SST_C_S_-_01.jpg?v=1747467604&width=785" },
];

// --- State ---
let cart = loadCart();
let filter = "all";

// --- DOM ---
const yearEl = document.getElementById("year");
const productGrid = document.getElementById("productGrid");
const miniGrid = document.getElementById("miniGrid");

const cartCountEl = document.getElementById("cartCount");
const cartListEl = document.getElementById("cartList");
const cartTotalEl = document.getElementById("cartTotal");

const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const drawer = document.getElementById("cartDrawer");
const backdrop = document.getElementById("backdrop");

const checkoutBtn = document.getElementById("checkoutBtn");
const clearBtn = document.getElementById("clearBtn");
const quickChatBtn = document.getElementById("quickChatBtn");

const contactForm = document.getElementById("contactForm");

const cartDelivery = document.getElementById("cartDelivery");
const cartLocation = document.getElementById("cartLocation");
const cartName = document.getElementById("cartName");
const cartPhone = document.getElementById("cartPhone");

const toastEl = document.getElementById("toast");

// --- Init ---
if (yearEl) yearEl.textContent = new Date().getFullYear();
renderMini();
renderProducts();
renderCart();
bindFilters();
bindCategoryCards();
bindDrawer();
bindQuickChat();
bindContactForm();
bindCheckout();
bindClearCart();

/* -------------------------
   Product loading
------------------------- */

function loadCustomProducts() {
  try {
    const raw = localStorage.getItem(CUSTOM_PRODUCTS_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data.filter(isValidCustomProduct).map(normalizeProduct);
  } catch (error) {
    console.error("Failed to load custom products:", error);
    return [];
  }
}

function isValidCustomProduct(product) {
  return !!product &&
    typeof product === "object" &&
    clean(product.id) &&
    clean(product.name) &&
    ["wears", "hair", "skincare", "makeup"].includes(clean(product.category).toLowerCase()) &&
    Number.isFinite(Number(product.price));
}

function normalizeProduct(product) {
  return {
    id: clean(product.id),
    category: clean(product.category).toLowerCase(),
    name: clean(product.name),
    price: Number(product.price) || 0,
    desc: clean(product.desc),
    img: clean(product.img) || placeholderDataUrl(clean(product.name) || "Stylegod"),
  };
}

function getAllProducts() {
  return [...BASE_PRODUCTS, ...loadCustomProducts()];
}

function getProductById(id) {
  return getAllProducts().find((product) => product.id === id) || null;
}

/* -------------------------
   Rendering
------------------------- */

function renderMini() {
  if (!miniGrid) return;

  const picks = getAllProducts().slice(0, 3);

  miniGrid.innerHTML = picks.map((p) => `
    <div class="miniItem">
      <img src="${escapeAttr(p.img)}" alt="${escapeAttr(p.name)}" loading="lazy" />
      <div>
        <strong>${escapeHtml(p.name)}</strong>
        <small>${formatMoney(p.price)} • ${labelCategory(p.category)}</small>
      </div>
    </div>
  `).join("");
}

function renderProducts() {
  if (!productGrid) return;

  const list = getAllProducts().filter((p) => filter === "all" ? true : p.category === filter);

  if (list.length === 0) {
    productGrid.innerHTML = `
      <div class="note" style="grid-column: 1 / -1;">
        <div>
          <h3>No products found</h3>
          <p>Try another category or add a new product from the admin page.</p>
        </div>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = list.map((p) => {
    const qty = cart[p.id] || 0;

    return `
      <article class="card">
        <div class="card__img">
          <img src="${escapeAttr(p.img)}" alt="${escapeAttr(p.name)}" loading="lazy" />
        </div>

        <div class="card__body">
          <h3 class="card__title">${escapeHtml(p.name)}</h3>

          <div class="card__meta">
            <span class="price">${formatMoney(p.price)}</span>
            <span class="badge">${labelCategory(p.category)}</span>
          </div>

          <p class="card__desc">${escapeHtml(p.desc)}</p>

          <div class="card__actions">
            <button class="btn btn--primary" type="button" data-add="${escapeAttr(p.id)}">Add</button>

            <div class="qty" aria-label="Quantity controls">
              <button type="button" data-dec="${escapeAttr(p.id)}" aria-label="Decrease">−</button>
              <span>${qty}</span>
              <button type="button" data-inc="${escapeAttr(p.id)}" aria-label="Increase">+</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  productGrid.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(button.dataset.add, 1);
      toast("Added to cart ✔️");
    });
  });

  productGrid.querySelectorAll("[data-inc]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.inc, 1));
  });

  productGrid.querySelectorAll("[data-dec]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.dec, -1));
  });
}

function renderCart() {
  if (!cartCountEl || !cartListEl || !cartTotalEl) return;

  const items = getCartItems();
  const totalCount = items.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.qty), 0);

  cartCountEl.textContent = String(totalCount);
  cartTotalEl.textContent = formatMoney(totalPrice);

  if (items.length === 0) {
    cartListEl.innerHTML = `
      <div class="emptyCart">
        <p>Your cart is empty.</p>
      </div>
    `;
    return;
  }

  cartListEl.innerHTML = items.map((item) => `
    <article class="cartItem">
      <img src="${escapeAttr(item.img)}" alt="${escapeAttr(item.name)}" loading="lazy" />
      <div class="cartItem__body">
        <h4>${escapeHtml(item.name)}</h4>
        <p>${formatMoney(item.price)} • ${labelCategory(item.category)}</p>

        <div class="cartItem__actions">
          <div class="qty" aria-label="Cart quantity controls">
            <button type="button" data-cart-dec="${escapeAttr(item.id)}" aria-label="Decrease">−</button>
            <span>${item.qty}</span>
            <button type="button" data-cart-inc="${escapeAttr(item.id)}" aria-label="Increase">+</button>
          </div>

          <button class="removeBtn" type="button" data-cart-remove="${escapeAttr(item.id)}">Remove</button>
        </div>
      </div>
    </article>
  `).join("");

  cartListEl.querySelectorAll("[data-cart-inc]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.cartInc, 1));
  });

  cartListEl.querySelectorAll("[data-cart-dec]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.cartDec, -1));
  });

  cartListEl.querySelectorAll("[data-cart-remove]").forEach((button) => {
    button.addEventListener("click", () => removeFromCart(button.dataset.cartRemove));
  });
}

function getCartItems() {
  return Object.entries(cart).map(([id, qty]) => {
    const product = getProductById(id);
    return product ? { ...product, qty } : null;
  }).filter(Boolean);
}

/* -------------------------
   Cart actions
------------------------- */

function addToCart(id, amount) {
  const product = getProductById(id);
  if (!product) return;

  const currentQty = Number(cart[id] || 0);
  const nextQty = currentQty + amount;

  if (nextQty <= 0) {
    delete cart[id];
  } else {
    cart[id] = nextQty;
  }

  persistCart();
  renderProducts();
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  persistCart();
  renderProducts();
  renderCart();
  toast("Removed from cart");
}

function clearCart() {
  cart = {};
  persistCart();
  renderProducts();
  renderCart();
  toast("Cart cleared");
}

function persistCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const data = JSON.parse(raw);
    return data && typeof data === "object" ? data : {};
  } catch {
    return {};
  }
}

/* -------------------------
   Drawer controls
------------------------- */

function bindDrawer() {
  if (!openCartBtn || !drawer || !backdrop) return;

  openCartBtn.addEventListener("click", () => {
    if (drawer.hidden) {
      openDrawer();
    } else {
      closeDrawer();
    }
  });

  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", closeDrawer);
  }

  backdrop.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !drawer.hidden) {
      closeDrawer();
    }
  });
}

function openDrawer() {
  if (!drawer || !backdrop) return;
  drawer.hidden = false;
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  if (!drawer || !backdrop) return;
  drawer.hidden = true;
  backdrop.hidden = true;
  document.body.style.overflow = "";
}

/* -------------------------
   Filters and categories
------------------------- */

function bindFilters() {
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
      button.classList.add("is-active");
      filter = button.dataset.filter || "all";
      renderProducts();
    });
  });
}

function bindCategoryCards() {
  document.querySelectorAll(".catCard").forEach((button) => {
    button.addEventListener("click", () => {
      const nextFilter = button.dataset.filter || "all";
      const filterBtn = document.querySelector(`.filter[data-filter="${nextFilter}"]`);

      if (filterBtn) {
        filterBtn.click();
      } else {
        filter = nextFilter;
        renderProducts();
      }

      const shopSection = document.getElementById("shop");
      if (shopSection) {
        shopSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* -------------------------
   WhatsApp actions
------------------------- */

function bindQuickChat() {
  if (!quickChatBtn) return;
  quickChatBtn.addEventListener("click", () => {
    openWhatsApp(CONFIG.quickChatText);
  });
}

function bindContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fd = new FormData(contactForm);
    const name = clean(fd.get("name"));
    const phone = clean(fd.get("phone"));
    const delivery = clean(fd.get("delivery"));
    const location = clean(fd.get("location"));
    const message = clean(fd.get("message"));

    const text = [
      `Hello ${CONFIG.storeName},`,
      "",
      "I want to make an enquiry.",
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      `Delivery: ${delivery || "-"}`,
      `Location: ${location || "-"}`,
      `Message: ${message || "-"}`,
      "",
      CONFIG.paymentNote,
    ].join("\n");

    openWhatsApp(text);
  });
}

function bindCheckout() {
  if (!checkoutBtn) return;

  checkoutBtn.addEventListener("click", () => {
    const items = getCartItems();

    if (items.length === 0) {
      toast("Your cart is empty ❗");
      return;
    }

    const delivery = clean(cartDelivery?.value);
    const location = clean(cartLocation?.value);
    const name = clean(cartName?.value);
    const phone = clean(cartPhone?.value);

    if (!delivery || !location || !name || !phone) {
      toast("Fill checkout details first ❗");
      return;
    }

    const lines = items.map((item, index) => {
      const lineTotal = item.qty * item.price;
      return `${index + 1}. ${item.name} — ${item.qty} × ${formatMoney(item.price)} = ${formatMoney(lineTotal)}`;
    });

    const total = items.reduce((sum, item) => sum + (item.qty * item.price), 0);

    const text = [
      `Hello ${CONFIG.storeName},`,
      "",
      "I want to place an order:",
      ...lines,
      "",
      `Total: ${formatMoney(total)}`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Delivery: ${delivery}`,
      `Location: ${location}`,
      "",
      CONFIG.paymentNote,
    ].join("\n");

    openWhatsApp(text);
  });
}

function bindClearCart() {
  if (!clearBtn) return;

  clearBtn.addEventListener("click", () => {
    if (getCartItems().length === 0) {
      toast("Cart is already empty");
      return;
    }

    clearCart();
  });
}

function openWhatsApp(text) {
  const url = `https://wa.me/${CONFIG.whatsAppNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/* -------------------------
   Helpers
------------------------- */

function formatMoney(n) {
  return `${CONFIG.currencySymbol}${Number(n || 0).toLocaleString("en-NG")}`;
}

function labelCategory(cat) {
  const map = {
    wears: "Wears",
    hair: "Hair",
    skincare: "Skincare",
    makeup: "Makeup",
  };
  return map[cat] || cat;
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

function escapeAttr(value) {
  return escapeHtml(value);
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
  if (!toastEl) return;
  toastEl.textContent = text;
  toastEl.hidden = false;

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.hidden = true;
  }, 1800);
}
const PRODUCTS = [
  {
    id: 1,
    name: "Hand-Knotted Wool Carpet",
    price: 189,
    rating: 4.8,
    reviews: 134,
    category: "Textiles",
    seller: "Maryam's Loom",
    sellerJoined: "2021",
    sellerSales: 312,
    image: "🪨",
    bg: "#f5efe6",
    desc: "Meticulously hand-knotted over 3 months using natural wool and vegetable dyes. Each piece is unique, featuring traditional geometric patterns inspired by Persian village motifs.",
    tags: ["Handmade", "Wool", "Traditional"],
  },
  {
    id: 2,
    name: "Blue Ceramic Coffee Set",
    price: 64,
    rating: 4.9,
    reviews: 89,
    category: "Ceramics",
    seller: "Kiln & Clay Studio",
    sellerJoined: "2020",
    sellerSales: 521,
    image: "🏺",
    bg: "#e8f0f5",
    desc: "Wheel-thrown stoneware coffee set glazed in rich cobalt blue. Set includes 2 mugs and a pour-over dripper. Dishwasher safe and food-safe glazes.",
    tags: ["Ceramic", "Coffee", "Kitchen"],
  },
  {
    id: 3,
    name: "Organic Mountain Coffee Beans",
    price: 18,
    rating: 4.7,
    reviews: 203,
    category: "Food & Drink",
    seller: "Highland Roasters",
    sellerJoined: "2022",
    sellerSales: 1204,
    image: "☕",
    bg: "#f0ebe3",
    desc: "Single-origin Arabica beans from 2,000m elevation farms. Medium roast with notes of dark chocolate, dried fruit, and a clean bright finish. 250g bag.",
    tags: ["Organic", "Coffee", "Food"],
  },
  {
    id: 4,
    name: "Handwoven Kilim Cushion",
    price: 38,
    rating: 4.6,
    reviews: 67,
    category: "Textiles",
    seller: "Maryam's Loom",
    sellerJoined: "2021",
    sellerSales: 312,
    image: "🛋️",
    bg: "#f5ede8",
    desc: "Flat-woven kilim cushion cover in warm terracotta and ivory. Cotton filling included. Each cushion is handwoven on a traditional loom in a small family workshop.",
    tags: ["Handwoven", "Cushion", "Decor"],
  },
  {
    id: 5,
    name: "Pressed Flower Notebook",
    price: 22,
    rating: 4.5,
    reviews: 45,
    category: "Stationery",
    seller: "Paper Garden",
    sellerJoined: "2023",
    sellerSales: 88,
    image: "📓",
    bg: "#edf5ec",
    desc: "A5 notebook with a cover adorned with real pressed wildflowers set in resin. 120 pages of 100gsm dot-grid paper. Perfect for journaling or sketching.",
    tags: ["Handmade", "Notebook", "Gift"],
  },
  {
    id: 6,
    name: "Beeswax Pillar Candles (3-pack)",
    price: 34,
    rating: 4.9,
    reviews: 112,
    category: "Home Decor",
    seller: "Hive & Wick",
    sellerJoined: "2021",
    sellerSales: 445,
    image: "🕯️",
    bg: "#faf3e0",
    desc: "Pure beeswax candles with a natural honey scent. Long-burning (30+ hrs each), drip-free, and 100% natural. Available in cream and warm amber.",
    tags: ["Natural", "Candles", "Home"],
  },
  {
    id: 7,
    name: "Indigo Tie-Dye Table Runner",
    price: 45,
    rating: 4.7,
    reviews: 58,
    category: "Textiles",
    seller: "Dye House Collective",
    sellerJoined: "2022",
    sellerSales: 167,
    image: "🎨",
    bg: "#eceef8",
    desc: "Hand-dyed cotton table runner using traditional Japanese shibori technique. No two pieces are identical. Machine washable. 40cm × 180cm.",
    tags: ["Tie-dye", "Textile", "Table"],
  },
  {
    id: 8,
    name: "Handmade Sourdough Starter Kit",
    price: 28,
    rating: 4.8,
    reviews: 176,
    category: "Food & Drink",
    seller: "Wild Culture Co.",
    sellerJoined: "2020",
    sellerSales: 892,
    image: "🍞",
    bg: "#f7f0e8",
    desc: "Everything you need to start your sourdough journey. Includes a 10-year-old active starter, glass jar, wooden spoon, and printed recipe booklet.",
    tags: ["Food", "Baking", "Kit"],
  },
  {
    id: 9,
    name: "Embossed Leather Journal",
    price: 55,
    rating: 4.6,
    reviews: 93,
    category: "Stationery",
    seller: "The Bindery",
    sellerJoined: "2019",
    sellerSales: 634,
    image: "📖",
    bg: "#ede8e3",
    desc: "Hand-stitched genuine leather journal with embossed botanical cover. 200 pages of unlined cream paper. Lay-flat binding. A perfect heirloom gift.",
    tags: ["Leather", "Journal", "Gift"],
  },
  {
    id: 10,
    name: "Raku-Fired Bowl Set",
    price: 95,
    rating: 4.9,
    reviews: 41,
    category: "Ceramics",
    seller: "Kiln & Clay Studio",
    sellerJoined: "2020",
    sellerSales: 521,
    image: "🍜",
    bg: "#f2ede8",
    desc: "Three raku-fired bowls with stunning metallic iridescent finishes. Each bowl is unique due to the unpredictable raku firing process. Not for food use — decorative.",
    tags: ["Ceramic", "Raku", "Art"],
  },
  {
    id: 11,
    name: "Sun-Dried Herbal Tea Blend",
    price: 14,
    rating: 4.7,
    reviews: 142,
    category: "Food & Drink",
    seller: "Mountain Herbalist",
    sellerJoined: "2022",
    sellerSales: 764,
    image: "🌿",
    bg: "#eaf5ea",
    desc: "A calming blend of hand-harvested chamomile, rose petals, lavender, and lemon balm. Naturally caffeine-free. 50g resealable pouch.",
    tags: ["Herbal", "Tea", "Organic"],
  },
  {
    id: 12,
    name: "Block-Print Linen Tote Bag",
    price: 29,
    rating: 4.5,
    reviews: 79,
    category: "Accessories",
    seller: "Studio Mudra",
    sellerJoined: "2021",
    sellerSales: 298,
    image: "👜",
    bg: "#f5f0e8",
    desc: "Natural linen tote with a hand block-printed botanical illustration. Sturdy enough for groceries, stylish enough for everywhere else. 38cm × 42cm.",
    tags: ["Linen", "Tote", "Eco"],
  },
];

let cart = [];
let currentQty = 1;
let currentProduct = null;
let activeCategory = "All";
let minRating = 0;
let searchQuery = "";
let prevPage = "shop";

function stars(rating) {
  let s = "";
  for (let i = 1; i <= 5; i++)
    s +=
      i <= Math.floor(rating)
        ? "★"
        : i === Math.ceil(rating) && rating % 1 >= 0.5
          ? "⯨"
          : "☆";
  return s;
}

function productCardHTML(p) {
  return `<div class="product-card" onclick="showProduct(${p.id})">
    <div class="product-img" style="background:${p.bg}">${p.image}</div>
    <div class="product-body">
      <div class="product-cat">${p.category}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-rating">
        <span class="stars">${stars(p.rating)}</span>
        <span class="review-count">(${p.reviews})</span>
      </div>
      <div class="product-footer">
        <span class="product-price">€${p.price}</span>
        <span class="product-seller">${p.seller}</span>
      </div>
    </div>
  </div>`;
}

function renderFeatured() {
  document.getElementById("featured-grid").innerHTML = PRODUCTS.slice(0, 4)
    .map(productCardHTML)
    .join("");
}

function renderShop() {
  let list = PRODUCTS.filter((p) => {
    if (activeCategory !== "All" && p.category !== activeCategory) return false;
    const pr = parseInt(document.getElementById("price-filter").value);
    if (p.price > pr) return false;
    if (p.rating < minRating) return false;
    if (
      searchQuery &&
      !p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !p.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });
  const sort = document.getElementById("sort-select").value;
  if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
  else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
  document.getElementById("shop-count").textContent =
    list.length + " products found";
  document.getElementById("shop-title").textContent = searchQuery
    ? `Results for "${searchQuery}"`
    : "All Products";
  document.getElementById("shop-grid").innerHTML = list
    .map(productCardHTML)
    .join("");
  document.getElementById("shop-empty").style.display = list.length
    ? "none"
    : "block";
  document.getElementById("shop-grid").style.display = list.length
    ? "grid"
    : "none";
}

function renderCatFilters() {
  const cats = [
    "All",
    "Textiles",
    "Ceramics",
    "Food & Drink",
    "Home Decor",
    "Stationery",
    "Accessories",
  ];
  document.getElementById("cat-filters").innerHTML = cats
    .map(
      (c) =>
        `<div class="filter-option${activeCategory === c ? " active" : ""}" onclick="setCat('${c}',this)">${c}</div>`,
    )
    .join("");
}

function setCat(cat, el) {
  activeCategory = cat;
  document
    .querySelectorAll("#cat-filters .filter-option")
    .forEach((e) => e.classList.remove("active"));
  el.classList.add("active");
  applyFilters();
}

function setRating(r, el) {
  minRating = r;
  document
    .querySelectorAll('.filter-panel .filter-option[onclick^="setRating"]')
    .forEach((e) => e.classList.remove("active"));
  el.classList.add("active");
  applyFilters();
}

function applyFilters() {
  const pr = parseInt(document.getElementById("price-filter").value);
  document.getElementById("price-val").textContent = "up to €" + pr;
  renderShop();
}

function handleSearch(val) {
  searchQuery = val;
  if (val) showPage("shop");
  renderShop();
}

function showProduct(id) {
  currentProduct = PRODUCTS.find((p) => p.id === id);
  currentQty = 1;
  prevPage = document.querySelector(".page.active").id.replace("page-", "");

  document.getElementById("detail-img-main").style.background =
    currentProduct.bg;
  document.getElementById("detail-img-main").textContent = currentProduct.image;
  document.getElementById("detail-img-main").style.fontSize = "100px";

  let thumbs = "";
  for (let i = 0; i < 4; i++)
    thumbs += `<div class="thumb${i === 0 ? " active" : ""}" style="background:${currentProduct.bg}">${currentProduct.image}</div>`;
  document.getElementById("detail-thumbs").innerHTML = thumbs;

  document.getElementById("detail-cat").textContent = currentProduct.category;
  document.getElementById("detail-name").textContent = currentProduct.name;
  document.getElementById("detail-stars").textContent = stars(
    currentProduct.rating,
  );
  document.getElementById("detail-rating-num").textContent =
    currentProduct.rating;
  document.getElementById("detail-reviews").textContent =
    `(${currentProduct.reviews} reviews)`;
  document.getElementById("detail-price").textContent =
    "€" + currentProduct.price;
  document.getElementById("detail-desc").textContent = currentProduct.desc;
  document.getElementById("detail-tags").innerHTML = currentProduct.tags
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");
  document.getElementById("qty-val").textContent = 1;
  document.getElementById("add-to-cart-btn").textContent = "Add to Cart";
  document.getElementById("add-to-cart-btn").classList.remove("added");
  document.getElementById("seller-avatar").textContent =
    currentProduct.seller[0];
  document.getElementById("seller-name").textContent = currentProduct.seller;
  document.getElementById("seller-meta").textContent =
    `Member since ${currentProduct.sellerJoined} · ${currentProduct.sellerSales} sales`;

  const related = PRODUCTS.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id,
  ).slice(0, 3);
  document.getElementById("related-grid").innerHTML = related
    .map(productCardHTML)
    .join("");

  showPage("product");
}

function goBack() {
  showPage(prevPage || "shop");
}

function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById("qty-val").textContent = currentQty;
}

function addCurrentToCart() {
  if (!currentProduct) return;
  const existing = cart.find((i) => i.id === currentProduct.id);
  if (existing) existing.qty += currentQty;
  else cart.push({ ...currentProduct, qty: currentQty });
  updateCartBadge();
  const btn = document.getElementById("add-to-cart-btn");
  btn.textContent = "✓ Added to Cart";
  btn.classList.add("added");
  setTimeout(() => {
    btn.textContent = "Add to Cart";
    btn.classList.remove("added");
  }, 2000);
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cart-badge");
  if (total > 0) {
    badge.style.display = "inline";
    badge.textContent = total;
  } else badge.style.display = "none";
}

function renderCart() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  if (cart.length === 0) {
    document.getElementById("cart-empty").style.display = "block";
    document.getElementById("cart-content").style.display = "none";
    return;
  }
  document.getElementById("cart-empty").style.display = "none";
  document.getElementById("cart-content").style.display = "block";
  document.getElementById("cart-items").innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <div class="cart-item-img" style="background:${item.bg}">${item.image}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-seller">${item.seller}</div>
      </div>
      <div class="cart-item-qty">
        <button onclick="updateCart(${item.id},-1)">−</button>
        <span>${item.qty}</span>
        <button onclick="updateCart(${item.id},1)">+</button>
      </div>
      <div class="cart-item-price">€${item.price * item.qty}</div>
      <button class="cart-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `,
    )
    .join("");
  document.getElementById("cart-subtotal").textContent = "€" + total;
  document.getElementById("cart-total").textContent = "€" + total;
}

function updateCart(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateCartBadge();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  updateCartBadge();
  renderCart();
}

function filterByCategory(cat) {
  activeCategory = cat;
  searchQuery = "";
  document.getElementById("search-input").value = "";
  renderCatFilters();
  renderShop();
  showPage("shop");
}

function showPage(name) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + name).classList.add("active");
  document
    .querySelectorAll(".nav-link")
    .forEach((l) => l.classList.remove("active"));
  const navEl = document.getElementById("nav-" + name);
  if (navEl) navEl.classList.add("active");
  if (name === "cart") renderCart();
  if (name === "shop") renderShop();
  window.scrollTo(0, 0);
}

// Init
renderFeatured();
renderCatFilters();
renderShop();

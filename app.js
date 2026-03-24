// ============================================================
//  CSFC STORE — APP LOGIC
//  Handles rendering, filtering, modal, and order submission.
// ============================================================

// ──────────────────────────────────────────────
//  CONFIGURATION — update this URL after you
//  deploy your Google Apps Script web app.
// ──────────────────────────────────────────────
const APPS_SCRIPT_URL = "YOUR_APPS_SCRIPT_URL_HERE";

// ──────────────────────────────────────────────
//  STATE
// ──────────────────────────────────────────────
let activeCategory = "All";
let currentItem = null;

// ──────────────────────────────────────────────
//  INIT
// ──────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderGrid("All");
  bindModal();
});

// ──────────────────────────────────────────────
//  FILTER BAR
// ──────────────────────────────────────────────
function renderFilters() {
  const bar = document.getElementById("filterBar");
  bar.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === "All" ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = cat;
      renderGrid(cat);
    });
    bar.appendChild(btn);
  });
}

// ──────────────────────────────────────────────
//  CATALOG GRID
// ──────────────────────────────────────────────
function renderGrid(category) {
  const grid = document.getElementById("catalogGrid");
  const items = category === "All" ? CATALOG : CATALOG.filter(i => i.category === category);

  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = `<p style="color:#888;font-size:.9rem;grid-column:1/-1;">No items in this category yet.</p>`;
    return;
  }

  items.forEach((item, index) => {
    const card = buildCard(item);
    card.style.animationDelay = `${index * 0.04}s`;
    card.classList.add("card-animate");
    grid.appendChild(card);
  });
}

function buildCard(item) {
  const dollars = (item.pointCost * 0.20).toFixed(2);

  const card = document.createElement("div");
  card.className = "item-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `${item.name} — ${item.pointCost} points`);

  card.innerHTML = `
    <div class="card-image-wrap">
      <img class="card-image" src="${item.image}" alt="${item.name}" loading="lazy" onerror="if('${item.imageFallback||''}')this.src='${item.imageFallback||''}'" />
      <span class="card-category-badge">${item.category}</span>
      ${item.inStock ? `<span class="card-instock-badge">In Stock</span>` : ""}
    </div>
    <div class="card-body">
      <div class="card-name">${item.name}</div>
      <div class="card-desc">${item.description}</div>
      <div class="card-footer">
        <div>
          <div class="card-points">$${dollars}</div>
          <div class="card-dollars">${item.pointCost.toLocaleString()} pts</div>
        </div>
        <button class="card-order-btn" tabindex="-1">Order</button>
      </div>
    </div>
  `;

  card.addEventListener("click", () => openModal(item));
  card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") openModal(item); });

  return card;
}

// ──────────────────────────────────────────────
//  MODAL
// ──────────────────────────────────────────────
function bindModal() {
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalClose");
  const resetBtn = document.getElementById("btnReset");
  const submitBtn = document.getElementById("btnSubmit");

  closeBtn.addEventListener("click", closeModal);
  resetBtn.addEventListener("click", resetForm);
  submitBtn.addEventListener("click", handleSubmit);

  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
}

function openModal(item) {
  currentItem = item;
  const dollars = (item.pointCost * 0.20).toFixed(2);

  // Populate info
  document.getElementById("modalImage").src = item.image;
  document.getElementById("modalImage").alt = item.name;
  document.getElementById("modalCategory").textContent = item.category;
  document.getElementById("modalTitle").textContent = item.name;
  document.getElementById("modalDescription").textContent = item.description;
  document.getElementById("modalPoints").textContent = `$${dollars}`;
  document.getElementById("modalDollars").textContent = `${item.pointCost.toLocaleString()} pts`;

  // Vendor — link to product page if available
  const vendorEl = document.getElementById("modalVendor");
  if (item.vendorUrl) {
    vendorEl.innerHTML = `<a href="${item.vendorUrl}" target="_blank" rel="noopener" style="color:var(--red);text-decoration:underline;">${item.vendor}</a>`;
  } else {
    vendorEl.textContent = item.vendor;
  }

  // Retail price
  const retailEl = document.getElementById("modalRetail");
  if (retailEl) retailEl.textContent = item.retailPrice || "—";

  document.getElementById("modalLead").textContent = item.leadTime;

  // Image with fallback for Galls/vendor images that may block hotlinking
  const img = document.getElementById("modalImage");
  img.src = item.image;
  img.onerror = () => { if (item.imageFallback) img.src = item.imageFallback; };

  // Stock badge
  const badge = document.getElementById("modalBadge");
  badge.textContent = item.inStock ? "✔ Available at Station" : "";

  // Stock note
  const stockNote = document.getElementById("modalStockNote");
  if (item.inStock && item.stockNote) {
    stockNote.textContent = "📦 " + item.stockNote;
    stockNote.classList.add("visible");
  } else {
    stockNote.textContent = "";
    stockNote.classList.remove("visible");
  }

  // Size dropdown
  const groupSize = document.getElementById("groupSize");
  const fieldSize = document.getElementById("fieldSize");
  if (item.sizes && item.sizes.length > 0) {
    fieldSize.innerHTML = `<option value="">Select size…</option>` +
      item.sizes.map(s => `<option value="${s}">${s}</option>`).join("");
    groupSize.style.display = "flex";
  } else {
    groupSize.style.display = "none";
  }

  // Color dropdown
  const groupColor = document.getElementById("groupColor");
  const fieldColor = document.getElementById("fieldColor");
  if (item.colors && item.colors.length > 0) {
    fieldColor.innerHTML = `<option value="">Select color…</option>` +
      item.colors.map(c => `<option value="${c}">${c}</option>`).join("");
    groupColor.style.display = "flex";
  } else {
    groupColor.style.display = "none";
  }

  // Customization field
  const groupCustom = document.getElementById("groupCustom");
  if (item.customizable && item.customLabel) {
    document.getElementById("labelCustom").textContent = item.customLabel;
    groupCustom.style.display = "flex";
  } else {
    groupCustom.style.display = "none";
  }

  // Show form, hide success
  document.getElementById("orderForm").style.display = "flex";
  document.getElementById("orderSuccess").style.display = "none";

  // Open overlay
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";

  // Focus name field
  setTimeout(() => document.getElementById("fieldName").focus(), 150);
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(resetForm, 300);
}

function resetForm() {
  document.getElementById("fieldName").value = "";
  document.getElementById("fieldSize").value = "";
  document.getElementById("fieldColor").value = "";
  document.getElementById("fieldCustom").value = "";
  document.getElementById("fieldQty").value = "1";
  document.getElementById("fieldNotes").value = "";
  document.getElementById("btnSubmit").disabled = false;
  document.getElementById("btnSubmit").textContent = "Submit Order";
  document.getElementById("orderForm").style.display = "flex";
  document.getElementById("orderSuccess").style.display = "none";
}

// ──────────────────────────────────────────────
//  ORDER SUBMISSION
// ──────────────────────────────────────────────
async function handleSubmit() {
  const item = currentItem;
  const name = document.getElementById("fieldName").value.trim();
  const email = document.getElementById("fieldEmail").value.trim();
  const size = document.getElementById("fieldSize").value;
  const color = document.getElementById("fieldColor").value;
  const custom = document.getElementById("fieldCustom").value.trim();
  const qty = parseInt(document.getElementById("fieldQty").value, 10);
  const notes = document.getElementById("fieldNotes").value.trim();

  // Basic validation
  if (!name) { alert("Please enter your full name."); return; }
  if (!email || !email.includes("@")) { alert("Please enter a valid email address."); return; }
  if (item.sizes && item.sizes.length > 0 && !size) { alert("Please select a size."); return; }
  if (item.colors && item.colors.length > 0 && !color) { alert("Please select a color."); return; }
  if (!qty || qty < 1) { alert("Please enter a valid quantity."); return; }

  const payload = {
    memberName:   name,
    email:        email,
    itemId:       item.id,
    itemName:     item.name,
    category:     item.category,
    pointCost:    item.pointCost,
    totalPoints:  item.pointCost * qty,
    size:         size || "N/A",
    color:        color || "N/A",
    customization: custom || "None",
    quantity:     qty,
    vendor:       item.vendor,
    notes:        notes || "None",
    submittedAt:  new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  };

  const btn = document.getElementById("btnSubmit");
  btn.disabled = true;
  btn.textContent = "Submitting…";

  // If Apps Script URL is not yet configured, simulate success for testing
  if (APPS_SCRIPT_URL === "YOUR_APPS_SCRIPT_URL_HERE") {
    console.log("ORDER PAYLOAD (Apps Script not yet connected):", payload);
    setTimeout(showSuccess, 800);
    return;
  }

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",   // required for Apps Script
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    // no-cors means we can't read the response — assume success
    showSuccess();
  } catch (err) {
    console.error("Submission error:", err);
    btn.disabled = false;
    btn.textContent = "Submit Order";
    alert("There was a problem submitting your order. Please try again or contact the store committee.");
  }
}

function showSuccess() {
  document.getElementById("orderForm").style.display = "none";
  document.getElementById("orderSuccess").style.display = "flex";
}

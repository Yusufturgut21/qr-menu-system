/* ========================================
   ADMİN PANELİ İŞLEVSELLİĞİ
   ======================================== */

let data = null;

// ===== SAYFA YÜKLENDİĞİNDE =====
document.addEventListener("DOMContentLoaded", async () => {
  data = await fetchData();
  loadAllSections();
});

// ===== GÖRSEL YÜKLEME (DOSYA / KAMERA / URL) =====

async function processFile(file, targetInputId, callback) {
  if (file.size > 10 * 1024 * 1024) {
    showToast("Dosya 10MB'den küçük olmalı!", "error");
    return;
  }
  showToast("Yükleniyor...", "info");
  const url = await uploadImage(file);
  if (url) {
    document.getElementById(targetInputId).value = url;
    document.getElementById(targetInputId).dispatchEvent(new Event("input"));
    if (callback) callback(url);
    showToast("Görsel yüklendi!");
  } else {
    showToast("Yükleme başarısız!", "error");
  }
}

// Bilgisayardan dosya seç
function triggerImageUpload(targetInputId, callback) {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) processFile(file, targetInputId, callback);
  });
  fileInput.click();
}

// Kamera ile fotoğraf çek
function triggerCamera(targetInputId, callback) {
  // Mobilde doğrudan kamera açılır, masaüstünde webcam kullanılır
  if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
    // Mobil: native kamera
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.setAttribute("capture", "environment");
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) processFile(file, targetInputId, callback);
    });
    fileInput.click();
  } else {
    // Masaüstü: webcam modal
    openCameraModal(targetInputId, callback);
  }
}

function openCameraModal(targetInputId, callback) {
  openModal(`
    <div class="modal-header">
      <h3>📸 Fotoğraf Çek</h3>
      <button class="modal-close" onclick="stopCamera(); closeModal();">✕</button>
    </div>
    <div class="camera-container">
      <video id="cameraVideo" autoplay playsinline></video>
      <canvas id="cameraCanvas" style="display:none;"></canvas>
    </div>
    <div class="modal-footer">
      <button class="btn-admin btn-admin-secondary" onclick="stopCamera(); closeModal();">İptal</button>
      <button class="btn-admin btn-admin-primary" id="captureBtn" onclick="capturePhoto('${targetInputId}')">📸 Çek</button>
    </div>
  `);
  startCamera();

  // Callback'i geçici sakla
  window._cameraCallback = callback;
}

let cameraStream = null;

function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } } })
    .then(stream => {
      cameraStream = stream;
      const video = document.getElementById("cameraVideo");
      if (video) video.srcObject = stream;
    })
    .catch(() => {
      showToast("Kamera erişimi sağlanamadı!", "error");
      closeModal();
    });
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
}

function capturePhoto(targetInputId) {
  const video = document.getElementById("cameraVideo");
  const canvas = document.getElementById("cameraCanvas");
  if (!video || !canvas) return;
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);
  // Canvas'tan blob oluştur ve server'a yükle
  canvas.toBlob(async (blob) => {
    const file = new File([blob], "camera-" + Date.now() + ".jpg", { type: "image/jpeg" });
    const url = await uploadImage(file);
    if (url) {
      document.getElementById(targetInputId).value = url;
      document.getElementById(targetInputId).dispatchEvent(new Event("input"));
      if (window._cameraCallback) window._cameraCallback(url);
      showToast("Fotoğraf çekildi ve yüklendi!");
    }
  }, "image/jpeg", 0.85);
  stopCamera();
  closeModal();
}

function updateImagePreview(inputId) {
  const val = document.getElementById(inputId).value;
  const preview = document.getElementById(inputId + "Preview");
  if (!preview) return;
  if (val) {
    preview.innerHTML = `<img src="${val}" alt="Önizleme" onerror="this.parentElement.innerHTML='<span class=\\'form-hint\\'>Görsel yüklenemedi</span>'">`;
  } else {
    preview.innerHTML = "";
  }
}

function initImagePreviewListeners() {
  document.querySelectorAll(".image-input-row input[type='text']").forEach(input => {
    // İlk yüklemede önizleme göster
    updateImagePreview(input.id);
    // Değiştiğinde güncelle
    input.addEventListener("input", () => updateImagePreview(input.id));
  });
}

// ===== BÖLÜM GEÇİŞLERİ =====
function showSection(sectionId) {
  document.querySelectorAll(".admin-section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".sidebar-link").forEach(l => l.classList.remove("active"));
  const section = document.getElementById("section-" + sectionId);
  if (section) section.classList.add("active");
  const links = document.querySelectorAll(".sidebar-link");
  links.forEach(l => {
    if (l.getAttribute("onclick") && l.getAttribute("onclick").includes(sectionId)) {
      l.classList.add("active");
    }
  });
  // Mobil sidebar kapat
  document.querySelector(".admin-sidebar").classList.remove("open");
}

// ===== TOAST BİLDİRİM =====
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  const icons = { success: "✅", error: "❌", info: "ℹ️" };
  const toast = document.createElement("div");
  toast.className = "toast " + type;
  toast.innerHTML = `<span>${icons[type] || "✅"}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ===== MODAL =====
function openModal(html) {
  document.getElementById("modalContent").innerHTML = html;
  document.getElementById("modalOverlay").classList.add("active");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
}

document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeModal();
});

// ===== TÜM BÖLÜMLERİ YÜKLE =====
function loadAllSections() {
  data = getData();
  renderDashboard();
  renderSectors();
  loadSiteSettings();
  renderThemes();
  loadHero();
  loadAbout();
  renderCategoriesTable();
  renderProductsTable();
  renderBranchesTable();
  renderGallery();
  loadContact();
  loadSocial();
  populateCategoryFilters();
}

// ===== DASHBOARD =====
function renderDashboard() {
  const stats = document.getElementById("statsGrid");
  const catCount = data.categories.length;
  const prodCount = data.products.length;
  const branchCount = data.branches.length;
  const galCount = data.gallery.length;
  stats.innerHTML = `
    <div class="stat-card"><div class="stat-icon">📂</div><div class="stat-value">${catCount}</div><div class="stat-label">Kategori</div></div>
    <div class="stat-card"><div class="stat-icon">🍽️</div><div class="stat-value">${prodCount}</div><div class="stat-label">Ürün</div></div>
    <div class="stat-card"><div class="stat-icon">📍</div><div class="stat-value">${branchCount}</div><div class="stat-label">Şube</div></div>
    <div class="stat-card"><div class="stat-icon">🖼️</div><div class="stat-value">${galCount}</div><div class="stat-label">Galeri Görseli</div></div>
  `;
}

// ===== SİTE AYARLARI =====
function loadSiteSettings() {
  document.getElementById("siteName").value = data.site.name;
  document.getElementById("siteNameAccent").value = data.site.nameAccent;
  document.getElementById("siteSlogan").value = data.site.slogan;
  document.getElementById("siteDescription").value = data.site.description;
  document.getElementById("siteCopyright").value = data.site.copyright;
  document.getElementById("siteLogo").value = data.site.logo || "";
  document.getElementById("siteLogoIcon").value = data.site.logoIcon || "☕";
  document.getElementById("siteLogoSize").value = data.site.logoSize || 52;
  document.getElementById("logoSizeValue").textContent = data.site.logoSize || 52;
  renderLogoPreview();

  // Anlık önizleme
  document.getElementById("siteLogo").addEventListener("input", renderLogoPreview);
  document.getElementById("siteLogoIcon").addEventListener("input", renderLogoPreview);
}

function renderLogoPreview() {
  const logoUrl = document.getElementById("siteLogo").value.trim();
  const icon = document.getElementById("siteLogoIcon").value || "☕";
  const size = document.getElementById("siteLogoSize").value || 52;
  const box = document.getElementById("logoPreviewBox");
  const miniPreview = document.getElementById("siteLogoPreview");
  if (miniPreview) {
    miniPreview.innerHTML = logoUrl ? `<img src="${logoUrl}" alt="Logo">` : "";
  }

  if (logoUrl) {
    box.innerHTML = `
      <img src="${logoUrl}" alt="Logo" style="max-height:${size}px;max-width:${size * 2}px;" onerror="this.style.display='none'">
      <div><strong>Logo görseli — ${size}px</strong><br><span class="preview-label">Slider ile boyutu ayarlayabilirsiniz</span></div>
    `;
  } else {
    box.innerHTML = `
      <div class="preview-icon" style="width:${size}px;height:${size}px;font-size:${size * 0.45}px;border-radius:${Math.max(10, size * 0.2)}px;">${icon}</div>
      <div><strong>Emoji ikon — ${size}px</strong><br><span class="preview-label">Slider ile boyutu ayarlayabilirsiniz</span></div>
    `;
  }
}

function previewLogoSize(val) {
  document.getElementById("logoSizeValue").textContent = val;
  renderLogoPreview();
}

function saveSiteSettings() {
  data.site.name = document.getElementById("siteName").value;
  data.site.nameAccent = document.getElementById("siteNameAccent").value;
  data.site.slogan = document.getElementById("siteSlogan").value;
  data.site.description = document.getElementById("siteDescription").value;
  data.site.copyright = document.getElementById("siteCopyright").value;
  data.site.logo = document.getElementById("siteLogo").value.trim();
  data.site.logoIcon = document.getElementById("siteLogoIcon").value || "☕";
  data.site.logoSize = parseInt(document.getElementById("siteLogoSize").value) || 52;
  saveData(data);
  showToast("Site ayarları kaydedildi!");
}

// ===== TEMA SEÇİCİ =====
const cssVarMap = {
  primary: "--color-primary",
  primaryDark: "--color-primary-dark",
  accent: "--color-accent",
  accentLight: "--color-accent-light",
  cream: "--color-cream",
  background: "--color-bg",
  text: "--color-text",
  textLight: "--color-text-light"
};

const colorLabels = {
  primary: "Ana", primaryDark: "Koyu", accent: "Vurgu", accentLight: "Açık Vurgu",
  cream: "Krem", background: "Arkaplan", text: "Metin", textLight: "Açık Metin"
};

function renderThemes() {
  const grid = document.getElementById("themesGrid");
  const activeId = getActiveThemeId();

  grid.innerHTML = THEMES.map(t => `
    <div class="theme-card ${t.id === activeId ? "active" : ""}" onclick="applyTheme('${t.id}')">
      <div class="theme-preview">
        <div class="theme-preview-hero" style="background:linear-gradient(135deg, ${t.colors.primary}, ${t.colors.primaryDark});">
          <h4>${t.name}</h4>
        </div>
        <div class="theme-preview-body" style="background:${t.colors.background};">
          <div class="theme-preview-card" style="background:${t.colors.cream};"></div>
          <div class="theme-preview-card" style="background:${t.colors.cream};"></div>
          <div class="theme-preview-btn" style="background:${t.colors.accent};"></div>
          <div class="theme-preview-btn" style="background:${t.colors.accentLight};"></div>
          <div class="theme-preview-card" style="background:${t.colors.cream};"></div>
        </div>
      </div>
      <div class="theme-info">
        <h3>${t.name} <span style="font-size:0.7rem;color:var(--admin-text-muted);font-weight:400;margin-left:4px;">${t.tag}</span></h3>
        <div class="theme-swatches">
          <div class="theme-swatch" style="background:${t.colors.primary};"></div>
          <div class="theme-swatch" style="background:${t.colors.primaryDark};"></div>
          <div class="theme-swatch" style="background:${t.colors.accent};"></div>
          <div class="theme-swatch" style="background:${t.colors.accentLight};"></div>
          <div class="theme-swatch" style="background:${t.colors.cream};"></div>
          <div class="theme-swatch" style="background:${t.colors.background};"></div>
        </div>
      </div>
    </div>
  `).join("");

  renderActiveThemeInfo();
}

function getActiveThemeId() {
  // Mevcut renklere en yakın temayı bul
  const current = JSON.stringify(data.colors);
  const match = THEMES.find(t => JSON.stringify(t.colors) === current);
  return match ? match.id : null;
}

function renderActiveThemeInfo() {
  const activeId = getActiveThemeId();
  const theme = THEMES.find(t => t.id === activeId);
  const nameEl = document.getElementById("activeThemeName");
  const colorsEl = document.getElementById("activeThemeColors");

  if (theme) {
    nameEl.textContent = theme.name;
    colorsEl.innerHTML = Object.entries(theme.colors).map(([key, val]) => `
      <div class="active-color-chip">
        <div class="chip-dot" style="background:${val};"></div>
        <span>${colorLabels[key] || key}: ${val}</span>
      </div>
    `).join("");
  } else {
    nameEl.textContent = "Özel Tema";
    colorsEl.innerHTML = Object.entries(data.colors).map(([key, val]) => `
      <div class="active-color-chip">
        <div class="chip-dot" style="background:${val};"></div>
        <span>${colorLabels[key] || key}: ${val}</span>
      </div>
    `).join("");
  }
}

function applyTheme(themeId) {
  const theme = THEMES.find(t => t.id === themeId);
  if (!theme) return;

  // Verileri güncelle
  data.colors = { ...theme.colors };
  saveData(data);

  // Kart aktif durumlarını güncelle
  document.querySelectorAll(".theme-card").forEach(card => card.classList.remove("active"));
  const activeCard = document.querySelector(`.theme-card[onclick="applyTheme('${themeId}')"]`);
  if (activeCard) activeCard.classList.add("active");

  renderActiveThemeInfo();

  // Önizleme iframe'ine anlık renk uygula
  const frame = document.getElementById("previewFrame");
  if (frame && frame.contentDocument) {
    const root = frame.contentDocument.documentElement;
    Object.entries(cssVarMap).forEach(([key, cssVar]) => {
      root.style.setProperty(cssVar, theme.colors[key]);
    });
    // Hero arka planı
    const hero = frame.contentDocument.querySelector(".hero");
    if (hero) {
      const r1 = hexToRgb(theme.colors.primary);
      const r2 = hexToRgb(theme.colors.primaryDark);
      hero.style.background = `linear-gradient(135deg, rgba(${r1},0.85), rgba(${r2},0.75)), url('${data.hero.bgImage}') center/cover no-repeat`;
    }
    // Menu header
    const menuHeader = frame.contentDocument.querySelector(".menu-header");
    if (menuHeader) {
      menuHeader.style.background = theme.colors.primary;
    }
    // Footer
    const footer = frame.contentDocument.querySelector(".footer, .menu-footer");
    if (footer) {
      footer.style.background = theme.colors.primary;
    }
  }

  showToast(`"${theme.name}" teması uygulandı!`);
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

function switchPreview(page, btn) {
  document.querySelectorAll(".preview-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  const frame = document.getElementById("previewFrame");
  frame.src = page === "menu" ? "menu.html" : "index.html";
}

// ===== HERO =====
function loadHero() {
  document.getElementById("heroBadge").value = data.hero.badge;
  document.getElementById("heroTitle").value = data.hero.title;
  document.getElementById("heroTitleAccent").value = data.hero.titleAccent;
  document.getElementById("heroTitleEnd").value = data.hero.titleEnd;
  document.getElementById("heroSubtitle").value = data.hero.subtitle;
  document.getElementById("heroBgImage").value = data.hero.bgImage;
  document.getElementById("heroBtnPrimary").value = data.hero.btnPrimaryText;
  document.getElementById("heroBtnSecondary").value = data.hero.btnSecondaryText;
  updateImagePreview("heroBgImage");
  document.getElementById("heroBgImage").addEventListener("input", () => updateImagePreview("heroBgImage"));
}

function saveHero() {
  data.hero.badge = document.getElementById("heroBadge").value;
  data.hero.title = document.getElementById("heroTitle").value;
  data.hero.titleAccent = document.getElementById("heroTitleAccent").value;
  data.hero.titleEnd = document.getElementById("heroTitleEnd").value;
  data.hero.subtitle = document.getElementById("heroSubtitle").value;
  data.hero.bgImage = document.getElementById("heroBgImage").value;
  data.hero.btnPrimaryText = document.getElementById("heroBtnPrimary").value;
  data.hero.btnSecondaryText = document.getElementById("heroBtnSecondary").value;
  saveData(data);
  showToast("Hero bölümü kaydedildi!");
}

// ===== HAKKIMIZDA =====
function loadAbout() {
  document.getElementById("aboutTitle").value = data.about.title;
  document.getElementById("aboutP1").value = data.about.paragraph1;
  document.getElementById("aboutP2").value = data.about.paragraph2;
  document.getElementById("aboutImage").value = data.about.image;
  renderAboutFeatures();
  updateImagePreview("aboutImage");
  document.getElementById("aboutImage").addEventListener("input", () => updateImagePreview("aboutImage"));
}

function renderAboutFeatures() {
  const container = document.getElementById("aboutFeaturesContainer");
  container.innerHTML = data.about.features.map((f, i) => `
    <div class="form-row" style="align-items:end;">
      <div class="form-group">
        <label>İkon ${i + 1}</label>
        <input type="text" id="aboutFeatureIcon${i}" value="${f.icon}" style="width:60px;">
      </div>
      <div class="form-group">
        <label>Metin ${i + 1}</label>
        <input type="text" id="aboutFeatureText${i}" value="${f.text}">
      </div>
    </div>
  `).join("");
}

function saveAbout() {
  data.about.title = document.getElementById("aboutTitle").value;
  data.about.paragraph1 = document.getElementById("aboutP1").value;
  data.about.paragraph2 = document.getElementById("aboutP2").value;
  data.about.image = document.getElementById("aboutImage").value;
  data.about.features = data.about.features.map((f, i) => ({
    icon: document.getElementById("aboutFeatureIcon" + i).value,
    text: document.getElementById("aboutFeatureText" + i).value
  }));
  saveData(data);
  showToast("Hakkımızda bölümü kaydedildi!");
}

// ===== KATEGORİLER =====
function renderCategoriesTable() {
  const tbody = document.getElementById("categoriesTableBody");
  tbody.innerHTML = data.categories.map(cat => {
    const prodCount = data.products.filter(p => p.categoryId === cat.id).length;
    return `<tr>
      <td><img class="product-thumb" src="${cat.image}" alt="${cat.name}"></td>
      <td><strong>${cat.name}</strong></td>
      <td>${cat.desc}</td>
      <td>${prodCount}</td>
      <td>
        <div class="btn-group">
          <button class="btn-admin btn-admin-secondary btn-admin-sm" onclick="openCategoryModal(${cat.id})">✏️</button>
          <button class="btn-admin btn-admin-danger btn-admin-sm" onclick="deleteCategory(${cat.id})">🗑️</button>
        </div>
      </td>
    </tr>`;
  }).join("");
}

function openCategoryModal(id = null) {
  const cat = id ? data.categories.find(c => c.id === id) : null;
  const title = cat ? "Kategori Düzenle" : "Yeni Kategori";
  openModal(`
    <div class="modal-header">
      <h3>${title}</h3>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="form-group">
      <label>Kategori Adı</label>
      <input type="text" id="catName" value="${cat ? cat.name : ""}">
    </div>
    <div class="form-group">
      <label>Açıklama</label>
      <input type="text" id="catDesc" value="${cat ? cat.desc : ""}">
    </div>
    <div class="form-group">
      <label>Görsel</label>
      <div class="image-input-row">
        <input type="text" id="catImage" value="${cat ? cat.image : ""}" placeholder="URL veya dosya yükleyin">
        <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm upload-btn" onclick="triggerImageUpload('catImage')">📁</button>
        <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm upload-btn" onclick="triggerCamera('catImage')">📸</button>
      </div>
      <div class="image-input-preview" id="catImagePreview"></div>
    </div>
    <div class="form-group">
      <label>Anchor (URL kısaltma)</label>
      <input type="text" id="catAnchor" value="${cat ? cat.anchor : ""}" placeholder="ornek: kahveler">
    </div>
    <div class="modal-footer">
      <button class="btn-admin btn-admin-secondary" onclick="closeModal()">İptal</button>
      <button class="btn-admin btn-admin-primary" onclick="saveCategory(${id})">${cat ? "Güncelle" : "Ekle"}</button>
    </div>
  `);
  updateImagePreview("catImage");
  document.getElementById("catImage").addEventListener("input", () => updateImagePreview("catImage"));
}

function saveCategory(id) {
  const name = document.getElementById("catName").value;
  const desc = document.getElementById("catDesc").value;
  const image = document.getElementById("catImage").value;
  const anchor = document.getElementById("catAnchor").value;
  if (!name) { showToast("Kategori adı gerekli!", "error"); return; }
  if (id) {
    const cat = data.categories.find(c => c.id === id);
    cat.name = name; cat.desc = desc; cat.image = image; cat.anchor = anchor;
  } else {
    data.categories.push({ id: getNextId(data.categories), name, desc, image, anchor });
  }
  saveData(data);
  closeModal();
  renderCategoriesTable();
  populateCategoryFilters();
  renderDashboard();
  showToast(id ? "Kategori güncellendi!" : "Yeni kategori eklendi!");
}

function deleteCategory(id) {
  if (!confirm("Bu kategoriyi silmek istediğinize emin misiniz?")) return;
  data.categories = data.categories.filter(c => c.id !== id);
  data.products = data.products.filter(p => p.categoryId !== id);
  saveData(data);
  renderCategoriesTable();
  renderProductsTable();
  renderDashboard();
  showToast("Kategori silindi!", "info");
}

// ===== ÜRÜNLER =====
function populateCategoryFilters() {
  const sel = document.getElementById("productFilterCategory");
  const current = sel.value;
  sel.innerHTML = '<option value="all">Tüm Kategoriler</option>';
  data.categories.forEach(cat => {
    sel.innerHTML += `<option value="${cat.id}">${cat.name}</option>`;
  });
  sel.value = current;
}

function getBadgeLabel(badge) {
  const map = { recommended: "Önerilen", new: "Yeni", discount: "İndirim", seasonal: "Sezonluk" };
  return map[badge] || "—";
}

function renderProductsTable() {
  ensureProductOrder(data);
  const filter = document.getElementById("productFilterCategory").value;
  let prods = [...data.products];
  if (filter !== "all") prods = prods.filter(p => p.categoryId === parseInt(filter));
  prods.sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));

  const tbody = document.getElementById("productsTableBody");
  tbody.innerHTML = prods.map((p, idx) => {
    const cat = data.categories.find(c => c.id === p.categoryId);
    const badgeClass = p.badge ? "badge-" + p.badge : "badge-none";
    const isFirst = idx === 0;
    const isLast = idx === prods.length - 1;
    return `<tr data-id="${p.id}">
      <td class="order-cell">
        <div class="order-buttons">
          <button class="order-btn ${isFirst ? 'disabled' : ''}" onclick="moveProduct(${p.id}, 'up')" ${isFirst ? 'disabled' : ''} title="Yukarı">▲</button>
          <span class="order-num">${idx + 1}</span>
          <button class="order-btn ${isLast ? 'disabled' : ''}" onclick="moveProduct(${p.id}, 'down')" ${isLast ? 'disabled' : ''} title="Aşağı">▼</button>
        </div>
      </td>
      <td><img class="product-thumb" src="${p.image}" alt="${p.name}"></td>
      <td><strong>${p.name}</strong><br><small style="color:var(--admin-text-muted)">${p.desc.substring(0, 40)}...</small></td>
      <td>${cat ? cat.name : "—"}</td>
      <td>
        <strong>₺${p.price}</strong>
        ${p.oldPrice ? `<br><small style="text-decoration:line-through;color:var(--admin-text-muted)">₺${p.oldPrice}</small>` : ""}
      </td>
      <td><span class="badge-cell ${badgeClass}">${getBadgeLabel(p.badge)}</span></td>
      <td>${p.featured ? "⭐" : "—"}</td>
      <td>
        <div class="btn-group">
          <button class="btn-admin btn-admin-secondary btn-admin-sm" onclick="openProductModal(${p.id})">✏️</button>
          <button class="btn-admin btn-admin-danger btn-admin-sm" onclick="deleteProduct(${p.id})">🗑️</button>
        </div>
      </td>
    </tr>`;
  }).join("");
}

// Ürün sırasını değiştir (yukarı/aşağı)
function moveProduct(id, direction) {
  const filter = document.getElementById("productFilterCategory").value;
  let prods;
  if (filter !== "all") {
    prods = data.products.filter(p => p.categoryId === parseInt(filter));
  } else {
    prods = [...data.products];
  }
  prods.sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));

  const idx = prods.findIndex(p => p.id === id);
  if (idx === -1) return;
  const swapIdx = direction === "up" ? idx - 1 : idx + 1;
  if (swapIdx < 0 || swapIdx >= prods.length) return;

  // Order değerlerini swap
  const tempOrder = prods[idx].order;
  prods[idx].order = prods[swapIdx].order;
  prods[swapIdx].order = tempOrder;

  saveData(data);
  renderProductsTable();
}

function openProductModal(id = null) {
  const prod = id ? data.products.find(p => p.id === id) : null;
  const title = prod ? "Ürün Düzenle" : "Yeni Ürün";
  const catOptions = data.categories.map(c =>
    `<option value="${c.id}" ${prod && prod.categoryId === c.id ? "selected" : ""}>${c.name}</option>`
  ).join("");

  openModal(`
    <div class="modal-header">
      <h3>${title}</h3>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="form-group">
      <label>Ürün Adı</label>
      <input type="text" id="prodName" value="${prod ? prod.name : ""}">
    </div>
    <div class="form-group">
      <label>Açıklama</label>
      <textarea id="prodDesc" rows="2">${prod ? prod.desc : ""}</textarea>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Kategori</label>
        <select id="prodCategory">${catOptions}</select>
      </div>
      <div class="form-group">
        <label>Fiyat (₺)</label>
        <input type="number" id="prodPrice" value="${prod ? prod.price : ""}">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Eski Fiyat (İndirim varsa)</label>
        <input type="number" id="prodOldPrice" value="${prod && prod.oldPrice ? prod.oldPrice : ""}">
        <div class="form-hint">Boş bırakırsanız indirim gösterilmez</div>
      </div>
      <div class="form-group">
        <label>Puan (1-5)</label>
        <select id="prodRating">
          ${[1,2,3,4,5].map(r => `<option value="${r}" ${prod && prod.rating === r ? "selected" : ""}>${r} ★</option>`).join("")}
        </select>
      </div>
    </div>
    <div class="form-group">
      <label>Görsel</label>
      <div class="image-input-row">
        <input type="text" id="prodImage" value="${prod ? prod.image : ""}" placeholder="URL veya dosya yükleyin">
        <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm upload-btn" onclick="triggerImageUpload('prodImage')">📁</button>
        <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm upload-btn" onclick="triggerCamera('prodImage')">📸</button>
      </div>
      <div class="image-input-preview" id="prodImagePreview"></div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Etiket</label>
        <select id="prodBadge">
          <option value="" ${!prod || !prod.badge ? "selected" : ""}>Yok</option>
          <option value="recommended" ${prod && prod.badge === "recommended" ? "selected" : ""}>Önerilen</option>
          <option value="new" ${prod && prod.badge === "new" ? "selected" : ""}>Yeni</option>
          <option value="discount" ${prod && prod.badge === "discount" ? "selected" : ""}>İndirim</option>
          <option value="seasonal" ${prod && prod.badge === "seasonal" ? "selected" : ""}>Sezonluk</option>
        </select>
      </div>
      <div class="form-group">
        <label>Öne Çıkan</label>
        <select id="prodFeatured">
          <option value="false" ${!prod || !prod.featured ? "selected" : ""}>Hayır</option>
          <option value="true" ${prod && prod.featured === true ? "selected" : ""}>Evet</option>
        </select>
        <div class="form-hint">Ana sayfada gösterilsin mi?</div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-admin btn-admin-secondary" onclick="closeModal()">İptal</button>
      <button class="btn-admin btn-admin-primary" onclick="saveProduct(${id})">${prod ? "Güncelle" : "Ekle"}</button>
    </div>
  `);
  updateImagePreview("prodImage");
  document.getElementById("prodImage").addEventListener("input", () => updateImagePreview("prodImage"));
}

function saveProduct(id) {
  const name = document.getElementById("prodName").value;
  const desc = document.getElementById("prodDesc").value;
  const categoryId = parseInt(document.getElementById("prodCategory").value);
  const price = parseFloat(document.getElementById("prodPrice").value);
  const oldPriceVal = document.getElementById("prodOldPrice").value;
  const oldPrice = oldPriceVal ? parseFloat(oldPriceVal) : null;
  const image = document.getElementById("prodImage").value;
  const badge = document.getElementById("prodBadge").value;
  const rating = parseInt(document.getElementById("prodRating").value);
  const featured = document.getElementById("prodFeatured").value === "true";

  if (!name || !price) { showToast("Ürün adı ve fiyat gerekli!", "error"); return; }

  if (id) {
    const prod = data.products.find(p => p.id === id);
    const wasFeatured = prod.featured;
    Object.assign(prod, { name, desc, categoryId, price, oldPrice, image, badge, rating, featured });
    // Öne çıkan değiştiyse featuredOrder güncelle
    if (featured && !wasFeatured) {
      const maxFO = Math.max(0, ...data.products.filter(p => p.featured).map(p => p.featuredOrder ?? 0));
      prod.featuredOrder = maxFO + 1;
    }
    if (!featured) { delete prod.featuredOrder; }
  } else {
    // Yeni ürün — en sona ekle
    const catProds = data.products.filter(p => p.categoryId === categoryId);
    const maxOrder = catProds.length ? Math.max(...catProds.map(p => p.order ?? 0)) + 1 : 0;
    const newProd = { id: getNextId(data.products), name, desc, categoryId, price, oldPrice, image, badge, rating, featured, order: maxOrder };
    if (featured) {
      const maxFO = Math.max(0, ...data.products.filter(p => p.featured).map(p => p.featuredOrder ?? 0));
      newProd.featuredOrder = maxFO + 1;
    }
    data.products.push(newProd);
  }
  saveData(data);
  closeModal();
  renderProductsTable();
  renderDashboard();
  showToast(id ? "Ürün güncellendi!" : "Yeni ürün eklendi!");
}

function deleteProduct(id) {
  if (!confirm("Bu ürünü silmek istediğinize emin misiniz?")) return;
  data.products = data.products.filter(p => p.id !== id);
  saveData(data);
  renderProductsTable();
  renderDashboard();
  showToast("Ürün silindi!", "info");
}

// ===== ŞUBELER =====
function renderBranchesTable() {
  const tbody = document.getElementById("branchesTableBody");
  tbody.innerHTML = data.branches.map(b => `
    <tr>
      <td><img class="product-thumb" src="${b.image}" alt="${b.name}"></td>
      <td><strong>${b.name}</strong></td>
      <td>${b.address}</td>
      <td>${b.hours}</td>
      <td>
        <div class="btn-group">
          <button class="btn-admin btn-admin-secondary btn-admin-sm" onclick="openBranchModal(${b.id})">✏️</button>
          <button class="btn-admin btn-admin-danger btn-admin-sm" onclick="deleteBranch(${b.id})">🗑️</button>
        </div>
      </td>
    </tr>
  `).join("");
}

function openBranchModal(id = null) {
  const branch = id ? data.branches.find(b => b.id === id) : null;
  const title = branch ? "Şube Düzenle" : "Yeni Şube";
  openModal(`
    <div class="modal-header">
      <h3>${title}</h3>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="form-group">
      <label>Şube Adı</label>
      <input type="text" id="branchName" value="${branch ? branch.name : ""}">
    </div>
    <div class="form-group">
      <label>Adres</label>
      <textarea id="branchAddress" rows="2">${branch ? branch.address : ""}</textarea>
    </div>
    <div class="form-group">
      <label>Çalışma Saatleri</label>
      <input type="text" id="branchHours" value="${branch ? branch.hours : ""}">
    </div>
    <div class="form-group">
      <label>Görsel</label>
      <div class="image-input-row">
        <input type="text" id="branchImage" value="${branch ? branch.image : ""}" placeholder="URL veya dosya yükleyin">
        <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm upload-btn" onclick="triggerImageUpload('branchImage')">📁</button>
        <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm upload-btn" onclick="triggerCamera('branchImage')">📸</button>
      </div>
      <div class="image-input-preview" id="branchImagePreview"></div>
    </div>
    <div class="modal-footer">
      <button class="btn-admin btn-admin-secondary" onclick="closeModal()">İptal</button>
      <button class="btn-admin btn-admin-primary" onclick="saveBranch(${id})">${branch ? "Güncelle" : "Ekle"}</button>
    </div>
  `);
  updateImagePreview("branchImage");
  document.getElementById("branchImage").addEventListener("input", () => updateImagePreview("branchImage"));
}

function saveBranch(id) {
  const name = document.getElementById("branchName").value;
  const address = document.getElementById("branchAddress").value;
  const hours = document.getElementById("branchHours").value;
  const image = document.getElementById("branchImage").value;
  if (!name) { showToast("Şube adı gerekli!", "error"); return; }
  if (id) {
    const branch = data.branches.find(b => b.id === id);
    Object.assign(branch, { name, address, hours, image });
  } else {
    data.branches.push({ id: getNextId(data.branches), name, address, hours, image });
  }
  saveData(data);
  closeModal();
  renderBranchesTable();
  renderDashboard();
  showToast(id ? "Şube güncellendi!" : "Yeni şube eklendi!");
}

function deleteBranch(id) {
  if (!confirm("Bu şubeyi silmek istediğinize emin misiniz?")) return;
  data.branches = data.branches.filter(b => b.id !== id);
  saveData(data);
  renderBranchesTable();
  renderDashboard();
  showToast("Şube silindi!", "info");
}

// ===== GALERİ =====
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = data.gallery.map((url, i) => `
    <div class="gallery-admin-item">
      <img src="${url}" alt="Galeri ${i + 1}">
      <button class="gallery-remove" onclick="removeGalleryImage(${i})">✕</button>
    </div>
  `).join("") + `
    <button class="gallery-add-btn" onclick="addGalleryURL()">
      <span>🔗</span>
      URL ile Ekle
    </button>
    <button class="gallery-add-btn" onclick="addGalleryFile()">
      <span>📁</span>
      Dosya Yükle
    </button>
    <button class="gallery-add-btn" onclick="addGalleryCamera()">
      <span>📸</span>
      Kamera ile Çek
    </button>
  `;
}

function addGalleryURL() {
  const url = prompt("Görsel URL'sini girin:");
  if (url) {
    data.gallery.push(url);
    saveData(data);
    renderGallery();
    renderDashboard();
    showToast("Görsel eklendi!");
  }
}

function addGalleryFile() {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    showToast("Yükleniyor...", "info");
    const url = await uploadImage(file);
    if (url) {
      data.gallery.push(url);
      saveData(data);
      renderGallery();
      renderDashboard();
      showToast("Görsel yüklendi!");
    } else {
      showToast("Yükleme başarısız!", "error");
    }
  });
  fileInput.click();
}

function addGalleryCamera() {
  // Geçici gizli input oluştur
  const tmpId = "_galleryTmpCam";
  let tmpInput = document.getElementById(tmpId);
  if (!tmpInput) {
    tmpInput = document.createElement("input");
    tmpInput.type = "hidden";
    tmpInput.id = tmpId;
    document.body.appendChild(tmpInput);
  }
  triggerCamera(tmpId, (dataUrl) => {
    data.gallery.push(dataUrl);
    saveData(data);
    renderGallery();
    renderDashboard();
  });
}

function removeGalleryImage(index) {
  data.gallery.splice(index, 1);
  saveData(data);
  renderGallery();
  renderDashboard();
  showToast("Görsel kaldırıldı!", "info");
}

function saveGallery() {
  saveData(data);
  showToast("Galeri kaydedildi!");
}

// ===== İLETİŞİM =====
function loadContact() {
  document.getElementById("contactPhone").value = data.contact.phone;
  document.getElementById("contactEmail").value = data.contact.email;
  document.getElementById("contactAddress").value = data.contact.address;
  document.getElementById("contactHours").value = data.contact.hours;
  document.getElementById("contactMap").value = data.contact.mapEmbed;
}

function saveContact() {
  data.contact.phone = document.getElementById("contactPhone").value;
  data.contact.email = document.getElementById("contactEmail").value;
  data.contact.address = document.getElementById("contactAddress").value;
  data.contact.hours = document.getElementById("contactHours").value;
  data.contact.mapEmbed = document.getElementById("contactMap").value;
  saveData(data);
  showToast("İletişim bilgileri kaydedildi!");
}

// ===== SOSYAL MEDYA =====
function loadSocial() {
  document.getElementById("socialInstagram").value = data.social.instagram;
  document.getElementById("socialFacebook").value = data.social.facebook;
  document.getElementById("socialTiktok").value = data.social.tiktok;
  document.getElementById("socialTwitter").value = data.social.twitter;
}

function saveSocial() {
  data.social.instagram = document.getElementById("socialInstagram").value;
  data.social.facebook = document.getElementById("socialFacebook").value;
  data.social.tiktok = document.getElementById("socialTiktok").value;
  data.social.twitter = document.getElementById("socialTwitter").value;
  saveData(data);
  showToast("Sosyal medya bağlantıları kaydedildi!");
}

// ===== SIFIRLA =====
async function resetAllData() {
  if (!confirm("Tüm verileri varsayılana sıfırlamak istediğinize emin misiniz?")) return;
  data = await resetData();
  loadAllSections();
  showToast("Tüm veriler sıfırlandı!", "info");
}

// ===== SEKTÖR SEÇİCİ =====
function renderSectors() {
  const grid = document.getElementById("sectorGrid");
  const activeSectorId = data.site.sectorId || null;

  grid.innerHTML = SECTORS.map(s => {
    const catNames = s.categories.map(c => c.name);
    return `
      <div class="sector-card ${s.id === activeSectorId ? "active" : ""}" onclick="applySector('${s.id}')">
        <span class="sector-icon">${s.icon}</span>
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <div class="sector-includes">
          ${catNames.map(n => `<span class="sector-tag">${n}</span>`).join("")}
          <span class="sector-tag">+${s.products.length} ürün</span>
        </div>
      </div>
    `;
  }).join("");

  // Aktif sektör bilgisi
  const nameEl = document.getElementById("activeSectorName");
  const descEl = document.getElementById("activeSectorDesc");
  const active = SECTORS.find(s => s.id === activeSectorId);
  if (active) {
    nameEl.textContent = active.icon + " " + active.name;
    descEl.textContent = `${active.categories.length} kategori, ${active.products.length} ürün hazır yüklendi. Tüm içerikleri admin panelden özelleştirebilirsiniz.`;
  } else {
    nameEl.textContent = "Seçilmedi";
    descEl.textContent = "Bir işletme tipi seçerek hızlıca başlayın.";
  }
}

function applySector(sectorId) {
  const sector = SECTORS.find(s => s.id === sectorId);
  if (!sector) return;

  const msg = `"${sector.name}" şablonu uygulanacak.\n\nMevcut kategoriler, ürünler, tema, hero ve hakkımızda bilgileri bu sektöre göre güncellenecektir.\n\nDevam etmek istiyor musunuz?`;
  if (!confirm(msg)) return;

  // Tema uygula
  const theme = THEMES.find(t => t.id === sector.theme);
  if (theme) {
    data.colors = { ...theme.colors };
  }

  // Site bilgileri
  data.site.name = sector.site.name;
  data.site.nameAccent = sector.site.nameAccent;
  data.site.slogan = sector.site.slogan;
  data.site.logoIcon = sector.site.logoIcon;
  data.site.sectorId = sector.id;

  // Hero
  data.hero = { ...data.hero, ...sector.hero };

  // Hakkımızda
  data.about = {
    ...data.about,
    title: sector.about.title,
    paragraph1: sector.about.paragraph1,
    paragraph2: sector.about.paragraph2,
    image: sector.about.image,
    features: [...sector.about.features]
  };

  // Kategoriler (yeni id'lerle)
  let catIdStart = 1;
  data.categories = sector.categories.map((c, i) => ({
    id: catIdStart + i,
    name: c.name,
    desc: c.desc,
    image: c.image,
    anchor: c.anchor
  }));

  // Ürünler (kategori id'leri eşleştir)
  let prodIdStart = 1;
  let featuredIdx = 0;
  // Kategori başına order sayacı
  const catOrderCounters = {};
  data.products = sector.products.map((p, i) => {
    const catId = catIdStart + p.catIdx;
    if (!catOrderCounters[catId]) catOrderCounters[catId] = 0;
    const prod = {
      id: prodIdStart + i,
      categoryId: catId,
      name: p.name,
      desc: p.desc,
      price: p.price,
      oldPrice: p.oldPrice || null,
      image: p.image,
      badge: p.badge || "",
      rating: p.rating || 5,
      featured: p.featured || false,
      order: catOrderCounters[catId]++
    };
    if (prod.featured) prod.featuredOrder = featuredIdx++;
    return prod;
  });

  // Galeri
  if (sector.gallery && sector.gallery.length) {
    data.gallery = [...sector.gallery];
  }

  // Kaydet ve yenile
  saveData(data);
  loadAllSections();
  showSection("sector");
  showToast(`"${sector.name}" şablonu başarıyla uygulandı!`);
}

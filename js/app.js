/* ========================================
   FRONTEND DİNAMİK İÇERİK YÜKLEYİCİ
   localStorage'dan veri okur ve sayfayı render eder
   ======================================== */

document.addEventListener("DOMContentLoaded", async () => {
  // Server'dan veri çek, yoksa default kullan
  const data = await fetchData();
  applyColors(data.colors);
  const page = document.body.dataset.page;
  if (page === "index") {
    renderIndex(data);
    // Render sonrası tüm reveal'ları başlat
    setTimeout(() => initScrollReveal(), 100);
  }
  if (page === "menu") renderMenu(data);
});

// ===== RENK UYGULA =====
function applyColors(colors) {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", colors.primary);
  root.style.setProperty("--color-primary-dark", colors.primaryDark);
  root.style.setProperty("--color-accent", colors.accent);
  root.style.setProperty("--color-accent-light", colors.accentLight);
  root.style.setProperty("--color-cream", colors.cream);
  root.style.setProperty("--color-bg", colors.background);
  root.style.setProperty("--color-text", colors.text);
  root.style.setProperty("--color-text-light", colors.textLight);
}

// ===== SVG İKONLAR =====
const socialIcons = {
  instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  facebook: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>`,
  tiktok: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.65a8.35 8.35 0 0 0 4.76 1.49V6.69h-1z"/></svg>`,
  twitter: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
};

function socialLinksHTML(social) {
  let html = "";
  if (social.instagram) html += `<a href="${social.instagram}" class="social-link" target="_blank" title="Instagram">${socialIcons.instagram}</a>`;
  if (social.facebook) html += `<a href="${social.facebook}" class="social-link" target="_blank" title="Facebook">${socialIcons.facebook}</a>`;
  if (social.tiktok) html += `<a href="${social.tiktok}" class="social-link" target="_blank" title="TikTok">${socialIcons.tiktok}</a>`;
  if (social.twitter) html += `<a href="${social.twitter}" class="social-link" target="_blank" title="Twitter/X">${socialIcons.twitter}</a>`;
  return html;
}

// ===== BADGE HTML =====
function badgeHTML(badge) {
  const map = {
    recommended: '<span class="product-badge badge-recommended">Önerilen</span>',
    new: '<span class="product-badge badge-new">Yeni</span>',
    discount: '<span class="product-badge badge-discount">İndirim</span>',
    seasonal: '<span class="product-badge badge-seasonal">Sezonluk</span>'
  };
  return map[badge] || "";
}

function starsHTML(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

// ===== LOGO & MARKA RENDER =====
function renderLogo(data) {
  const brandFull = `${data.site.name} ${data.site.nameAccent}`.trim();
  const logoSize = data.site.logoSize || 72;

  // CSS değişkeni ile logo boyutu
  document.documentElement.style.setProperty("--logo-size", logoSize + "px");

  // Sayfa başlığı
  document.title = brandFull + (document.body.dataset.page === "menu" ? " — Dijital Menü" : " — Anasayfa");

  // Logo text
  document.querySelectorAll(".logo-text").forEach(el => {
    el.innerHTML = `${data.site.name} <span>${data.site.nameAccent}</span>`;
  });

  // Logo icon (emoji veya resim)
  document.querySelectorAll(".logo-icon").forEach(el => {
    if (data.site.logo) {
      el.innerHTML = `<img src="${data.site.logo}" alt="Logo" style="width:100%;height:100%;object-fit:contain;border-radius:inherit;">`;
      el.style.background = "transparent";
    } else {
      el.textContent = data.site.logoIcon || "☕";
      el.style.background = "";
    }
  });

  // Footer marka adı
  document.querySelectorAll(".footer-brand .logo-text").forEach(el => {
    el.innerHTML = `${data.site.name} <span>${data.site.nameAccent}</span>`;
  });
}

// ===== INDEX SAYFASI =====
function renderIndex(data) {
  renderLogo(data);

  // Hero — admin'den gelen arka plan görseli
  const heroBgImg = document.getElementById("heroBgImg");
  const heroSection = document.querySelector(".hero");
  if (heroBgImg) {
    const bgUrl = data.hero.bgImage || "";
    heroBgImg.src = bgUrl;
    heroBgImg.style.display = bgUrl ? "block" : "none";
    // Fallback: CSS background olarak da uygula (img yüklenmezse)
    if (bgUrl) {
      heroSection.style.background = "none";
      heroBgImg.onerror = function() {
        heroSection.style.background = `url('${bgUrl}') center/cover no-repeat`;
      };
    }
  }
  document.getElementById("heroBadgeText").textContent = data.hero.badge;
  document.getElementById("heroTitleMain").innerHTML = `${data.hero.title} <span>${data.hero.titleAccent}</span> ${data.hero.titleEnd}`;
  document.getElementById("heroSubtitleText").textContent = data.hero.subtitle;
  document.getElementById("heroBtnPrimaryText").textContent = data.hero.btnPrimaryText;
  document.getElementById("heroBtnSecondaryText").textContent = data.hero.btnSecondaryText;

  // Hakkımızda
  document.getElementById("aboutTitleText").textContent = data.about.title;
  document.getElementById("aboutP1Text").textContent = data.about.paragraph1;
  document.getElementById("aboutP2Text").textContent = data.about.paragraph2;
  document.getElementById("aboutImg").src = data.about.image;
  const featContainer = document.getElementById("aboutFeaturesGrid");
  featContainer.innerHTML = data.about.features.map(f => `
    <div class="about-feature">
      <div class="about-feature-icon">${f.icon}</div>
      <span>${f.text}</span>
    </div>
  `).join("");

  // Kategoriler
  const catGrid = document.getElementById("categoriesGrid");
  catGrid.innerHTML = data.categories.map(cat => `
    <a href="menu.html#${cat.anchor}" class="category-card">
      <div class="category-icon-img"><img src="${cat.image}" alt="${cat.name}"></div>
      <div class="category-card-text">
        <h3>${cat.name}</h3>
        <p>${cat.desc}</p>
      </div>
    </a>
  `).join("");

  // Tüm Ürünler — Kategorilere Göre
  const allContainer = document.getElementById("allProductsContainer");
  allContainer.innerHTML = data.categories.map(cat => {
    const catProds = sortByOrder(data.products.filter(p => p.categoryId === cat.id));
    if (!catProds.length) return "";
    return `
      <div class="home-cat-section reveal">
        <div class="home-cat-header">
          <h3 class="home-cat-title">${cat.name}</h3>
          <div class="home-cat-line"></div>
          <span class="home-cat-count">${catProds.length} ürün</span>
        </div>
        <div class="featured-grid">
          ${catProds.map(p => `
            <div class="product-card">
              <div class="product-image">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                ${badgeHTML(p.badge)}
              </div>
              <div class="product-info">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div class="product-footer">
                  <span class="product-price">₺${p.price}${p.oldPrice ? ` <span class="old-price">₺${p.oldPrice}</span>` : ""}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }).join("");

  // Şubeler
  const branchGrid = document.getElementById("branchesGrid");
  branchGrid.innerHTML = data.branches.map(b => `
    <div class="branch-card">
      <div class="branch-image"><img src="${b.image}" alt="${b.name}"></div>
      <div class="branch-info">
        <h3>${b.name}</h3>
        <p>${b.address}</p>
        <div class="branch-hours">🕐 ${b.hours}</div>
      </div>
    </div>
  `).join("");

  // Harita
  if (data.contact.mapEmbed) {
    document.getElementById("mapFrame").src = data.contact.mapEmbed;
  }

  // Galeri
  const galGrid = document.getElementById("galleryGrid");
  galGrid.innerHTML = data.gallery.map(url => `
    <div class="gallery-item"><img src="${url}" alt="Galeri"></div>
  `).join("");

  // İletişim
  document.getElementById("contactAddressText").innerHTML = data.contact.address.replace(/\n/g, "<br>");
  document.getElementById("contactPhoneText").textContent = data.contact.phone;
  document.getElementById("contactEmailText").textContent = data.contact.email;
  document.getElementById("contactHoursText").innerHTML = data.contact.hours.replace(/\n/g, "<br>");

  // Footer
  document.getElementById("footerSocial").innerHTML = socialLinksHTML(data.social);
  document.getElementById("footerCopyright").textContent = data.site.copyright;

  // Footer menü kategorileri
  const footerMenu = document.getElementById("footerMenuLinks");
  footerMenu.innerHTML = data.categories.map(c => `<li><a href="menu.html#${c.anchor}">${c.name}</a></li>`).join("");
}

// ===== MENÜ SAYFASI =====
function renderMenu(data) {
  renderLogo(data);

  // Tabs — aktif tab tıklanınca güncellenir
  const tabsContainer = document.getElementById("menuTabs");
  tabsContainer.innerHTML = data.categories.map((cat, i) => `
    <a href="#${cat.anchor}" class="tab-btn ${i === 0 ? "active" : ""}" data-cat="${cat.anchor}">
      ${cat.name}
    </a>
  `).join("");

  // Tab tıklama — aktif state yönetimi
  tabsContainer.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      tabsContainer.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Ürün bölümleri — yeni yatay kart layout
  const sectionsContainer = document.getElementById("menuSections");
  sectionsContainer.innerHTML = data.categories.map(cat => {
    const catProducts = sortByOrder(data.products.filter(p => p.categoryId === cat.id));
    return `
      <section class="menu-section" id="${cat.anchor}">
        <div class="menu-section-header">
          <h2 class="menu-category-title">${cat.name}</h2>
          <div class="cat-line"></div>
          <span class="menu-category-count">${catProducts.length} ürün</span>
        </div>
        <div class="menu-grid">
          ${catProducts.map(p => `
            <div class="menu-card">
              <div class="menu-card-image">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                ${badgeHTML(p.badge)}
              </div>
              <div class="menu-card-body">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div class="menu-card-footer">
                  <span class="menu-price">₺${p.price}${p.oldPrice ? ` <span class="old-price">₺${p.oldPrice}</span>` : ""}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");

  // Scroll spy — hangi bölüm görünüyorsa o tab aktif olsun
  initMenuScrollSpy();

  // Footer
  document.getElementById("menuFooterSocial").innerHTML = socialLinksHTML(data.social);
  document.getElementById("menuFooterCopyright").textContent = data.site.copyright;
}

// ===== MENÜ SCROLL SPY =====
function initMenuScrollSpy() {
  const sections = document.querySelectorAll(".menu-section");
  const tabs = document.querySelectorAll(".tab-btn[data-cat]");
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tabs.forEach(t => t.classList.remove("active"));
        const activeTab = document.querySelector(`.tab-btn[data-cat="${id}"]`);
        if (activeTab) {
          activeTab.classList.add("active");
          // Aktif tab'ı görünür alana kaydır
          activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      }
    });
  }, { rootMargin: "-120px 0px -60% 0px", threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

// ===== YARDIMCI =====
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

// ===== SCROLL REVEAL ANİMASYON =====
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  reveals.forEach(el => observer.observe(el));
}

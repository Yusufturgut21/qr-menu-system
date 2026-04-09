/* ========================================
   VERİ YÖNETİM SİSTEMİ
   localStorage tabanlı içerik yönetimi
   ======================================== */

const DEFAULT_DATA = {
  // ===== GENEL AYARLAR =====
  site: {
    name: "Brew &",
    nameAccent: "Co.",
    slogan: "Her Yudumda Özel Bir Hikâye",
    description: "Özenle seçilmiş kahve çekirdekleri, ev yapımı tatlılar ve sıcak bir atmosferle sizi bekliyoruz. Kahvenin ritüele dönüştüğü yer.",
    favicon: "☕",
    logo: "",
    logoIcon: "☕",
    logoSize: 72,
    sectorId: "cafe",
    copyright: "© 2025 Brew & Co. Tüm hakları saklıdır."
  },

  // ===== RENK AYARLARI =====
  colors: {
    primary: "#6F4E37",
    primaryDark: "#5A3D2B",
    accent: "#D4853A",
    accentLight: "#E8A65D",
    cream: "#FDF6EC",
    background: "#FAFAF7",
    text: "#2C2C2C",
    textLight: "#6B6B6B"
  },

  // ===== HERO BÖLÜMÜ =====
  hero: {
    badge: "✦ Premium Kafe Deneyimi",
    title: "Her Yudumda",
    titleAccent: "Özel",
    titleEnd: "Bir Hikâye",
    subtitle: "Özenle seçilmiş kahve çekirdekleri, ev yapımı tatlılar ve sıcak bir atmosferle sizi bekliyoruz. Kahvenin ritüele dönüştüğü yer.",
    bgImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920",
    btnPrimaryText: "☕ Menüyü Keşfet",
    btnSecondaryText: "Bizi Tanıyın →"
  },

  // ===== HAKKIMIZDA =====
  about: {
    title: "Hikâyemiz",
    paragraph1: "2018 yılında küçük bir tutkuyla başlayan yolculuğumuz, bugün şehrin en sevilen buluşma noktalarından biri haline geldi. Her sabah taze kavrulmuş çekirdeklerimizi özenle hazırlıyor, her bardakta aynı kaliteyi sunuyoruz.",
    paragraph2: "Amacımız sadece kahve sunmak değil; bir deneyim yaratmak. Kitabınızı okuyabileceğiniz, arkadaşlarınızla sohbet edebileceğiniz veya çalışabileceğiniz sıcak bir üçüncü mekan olmayı hedefliyoruz.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    features: [
      { icon: "🌱", text: "Organik Çekirdek" },
      { icon: "🏆", text: "Ödüllü Barista" },
      { icon: "🍰", text: "Ev Yapımı Tatlılar" },
      { icon: "🌍", text: "Sürdürülebilir Kaynak" }
    ]
  },

  // ===== KATEGORİLER =====
  categories: [
    { id: 1, name: "Kahveler", desc: "Espresso, Latte, Cappuccino ve daha fazlası", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80", anchor: "kahveler" },
    { id: 2, name: "Tatlılar", desc: "Ev yapımı kek, cheesecake, brownie", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&q=80", anchor: "tatlilar" },
    { id: 3, name: "Çaylar", desc: "Bitki çayları, soğuk çay, matcha", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&q=80", anchor: "caylar" },
    { id: 4, name: "Atıştırmalıklar", desc: "Sandviç, tost, kruvasan, salata", image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=200&q=80", anchor: "atistirmaliklar" },
    { id: 5, name: "Soğuk İçecekler", desc: "Buzlu kahve, smoothie, limonata", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=200&q=80", anchor: "soguk-icecekler" }
  ],

  // ===== ÜRÜNLER =====
  products: [
    // KAHVELER
    { id: 1, categoryId: 1, name: "Espresso", desc: "Yoğun aromalı, tek veya çift shot seçeneğiyle klasik İtalyan espresso.", price: 55, oldPrice: null, image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500&q=80", badge: "recommended", rating: 5, featured: true },
    { id: 2, categoryId: 1, name: "Caramel Macchiato", desc: "Espresso, buharlanmış süt ve ev yapımı karamel sos ile mükemmel uyum.", price: 95, oldPrice: null, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80", badge: "recommended", rating: 5, featured: true },
    { id: 3, categoryId: 1, name: "Cappuccino", desc: "Eşit oranda espresso, buharlanmış süt ve süt köpüğü ile hazırlanır.", price: 80, oldPrice: null, image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&q=80", badge: "", rating: 4, featured: false },
    { id: 4, categoryId: 1, name: "Flat White", desc: "Yoğun espresso ve kadifemsi mikro süt köpüğü ile Avustralya klasiği.", price: 85, oldPrice: null, image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=500&q=80", badge: "new", rating: 5, featured: false },
    { id: 5, categoryId: 1, name: "Mocha", desc: "Espresso, çikolata sosu ve buharlanmış süt ile çikolata severler için.", price: 76, oldPrice: 90, image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&q=80", badge: "discount", rating: 4, featured: false },
    { id: 6, categoryId: 1, name: "Latte", desc: "Yumuşak espresso ve bol buharlanmış süt ile günün her saatine uygun.", price: 78, oldPrice: null, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80", badge: "", rating: 4, featured: false },
    { id: 7, categoryId: 1, name: "Türk Kahvesi", desc: "Geleneksel yöntemle pişirilen, orta şekerli veya sade seçenekli.", price: 50, oldPrice: null, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=500&q=80", badge: "", rating: 5, featured: false },
    { id: 8, categoryId: 1, name: "Pumpkin Spice Latte", desc: "Balkabağı püresi, tarçın, karanfil ve zencefil ile sonbahar favorisi.", price: 100, oldPrice: null, image: "https://images.unsplash.com/photo-1574914629385-46448b767aec?w=500&q=80", badge: "seasonal", rating: 5, featured: false },

    // ÇAYLAR
    { id: 9, categoryId: 3, name: "Earl Grey", desc: "Bergamot aromalı klasik İngiliz çayı, sıcak veya buzlu seçeneğiyle.", price: 45, oldPrice: null, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&q=80", badge: "recommended", rating: 5, featured: false },
    { id: 10, categoryId: 3, name: "Matcha Latte", desc: "Japonya'dan özel ithal matcha tozu ile hazırlanan kremsi latte.", price: 85, oldPrice: null, image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&q=80", badge: "new", rating: 5, featured: true },
    { id: 11, categoryId: 3, name: "Papatya Çayı", desc: "Rahatlatıcı etkisiyle bilinen doğal papatya çayı, ballı seçenek mevcut.", price: 40, oldPrice: null, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&q=80", badge: "", rating: 4, featured: false },
    { id: 12, categoryId: 3, name: "Yeşil Çay", desc: "Antioksidan bakımından zengin, taze ve hafif yeşil çay.", price: 40, oldPrice: null, image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&q=80", badge: "", rating: 4, featured: false },
    { id: 13, categoryId: 3, name: "Kış Çayı", desc: "Tarçın, karanfil, elma ve portakal ile hazırlanan sıcak kış karışımı.", price: 50, oldPrice: null, image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=500&q=80", badge: "seasonal", rating: 5, featured: false },
    { id: 14, categoryId: 3, name: "Ihlamur", desc: "Doğal ıhlamur yaprakları ile demlenen geleneksel şifalı çay.", price: 35, oldPrice: null, image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=500&q=80", badge: "", rating: 4, featured: false },

    // TATLILAR
    { id: 15, categoryId: 2, name: "San Sebastian Cheesecake", desc: "Hafif yanık karamelize yüzeyi ve kremsi dokusuyla efsanevi lezzet.", price: 130, oldPrice: null, image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=500&q=80", badge: "recommended", rating: 5, featured: true },
    { id: 16, categoryId: 2, name: "Red Velvet Cupcake", desc: "Kadifemsi dokusu ve cream cheese frosting ile muhteşem sunum.", price: 72, oldPrice: 90, image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&q=80", badge: "discount", rating: 4, featured: true },
    { id: 17, categoryId: 2, name: "Brownie", desc: "Yoğun çikolatalı, ıslak kıvamlı, yanında dondurma ile servis edilir.", price: 95, oldPrice: null, image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=500&q=80", badge: "", rating: 5, featured: false },
    { id: 18, categoryId: 2, name: "Tiramisu", desc: "İtalyan usulü mascarpone, espresso ve kakao ile hazırlanan klasik.", price: 110, oldPrice: null, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80", badge: "new", rating: 5, featured: false },
    { id: 19, categoryId: 2, name: "Cookie (3'lü)", desc: "Çikolata parçalı, yumuşak dokulu Amerikan kurabiyesi. Kahveyle ideal.", price: 65, oldPrice: null, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80", badge: "", rating: 4, featured: false },
    { id: 20, categoryId: 2, name: "Elmalı Turta", desc: "Taze elmalar, tarçın ve tereyağlı hamurla pişirilen ev yapımı turta.", price: 85, oldPrice: null, image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=500&q=80", badge: "seasonal", rating: 5, featured: false },

    // ATIŞTIRMALIKLAR
    { id: 21, categoryId: 4, name: "Avokadolu Tost", desc: "Ekşi maya ekmeği, ezilmiş avokado, poşe yumurta ve çeri domates.", price: 120, oldPrice: null, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&q=80", badge: "recommended", rating: 5, featured: true },
    { id: 22, categoryId: 4, name: "Kulüp Sandviç", desc: "Tavuk, marul, domates, peynir ve özel sos ile üç katlı sandviç.", price: 110, oldPrice: null, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80", badge: "", rating: 4, featured: false },
    { id: 23, categoryId: 4, name: "Tereyağlı Kruvasan", desc: "Fransız usulü, kat kat açılmış, tereyağlı ve çıtır dış dokulu kruvasan.", price: 65, oldPrice: null, image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=500&q=80", badge: "new", rating: 5, featured: false },
    { id: 24, categoryId: 4, name: "Sezar Salata", desc: "Marul, parmesan, kruton, tavuk ve ev yapımı sezar sosu ile.", price: 105, oldPrice: null, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80", badge: "", rating: 4, featured: false },
    { id: 25, categoryId: 4, name: "Peynir Tabağı", desc: "Seçilmiş Türk ve dünya peynirleri, ceviz, üzüm ve bal ile sunum.", price: 135, oldPrice: 150, image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=500&q=80", badge: "discount", rating: 5, featured: false },
    { id: 26, categoryId: 4, name: "Wrap", desc: "Izgara tavuk, roka, avokado ve ranch sos ile dürüm wrap.", price: 100, oldPrice: null, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80", badge: "", rating: 4, featured: false },

    // SOĞUK İÇECEKLER
    { id: 27, categoryId: 5, name: "Iced Americano", desc: "Espresso ve soğuk su ile buzlu, canlandırıcı Americano.", price: 70, oldPrice: null, image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&q=80", badge: "recommended", rating: 5, featured: false },
    { id: 28, categoryId: 5, name: "Tropical Smoothie", desc: "Mango, ananas, hindistan cevizi sütü ve chia tohumları.", price: 78, oldPrice: null, image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=500&q=80", badge: "seasonal", rating: 5, featured: true },
    { id: 29, categoryId: 5, name: "Limonata", desc: "Taze sıkılmış limon, nane ve hafif şekerle hazırlanan ev yapımı limonata.", price: 55, oldPrice: null, image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&q=80", badge: "", rating: 4, featured: false },
    { id: 30, categoryId: 5, name: "Açaí Bowl", desc: "Açaí püresi, granola, taze meyveler ve bal ile sağlıklı atıştırmalık.", price: 95, oldPrice: null, image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&q=80", badge: "new", rating: 5, featured: false },
    { id: 31, categoryId: 5, name: "Iced Latte", desc: "Espresso ve soğuk süt ile hazırlanan, buzlu ve ferahlatıcı latte.", price: 80, oldPrice: null, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80", badge: "", rating: 4, featured: false },
    { id: 32, categoryId: 5, name: "Berry Smoothie", desc: "Çilek, ahududu, yaban mersini ve yoğurt ile hazırlanan smoothie.", price: 68, oldPrice: 80, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&q=80", badge: "discount", rating: 4, featured: false }
  ],

  // ===== ŞUBELER =====
  branches: [
    { id: 1, name: "Brew & Co. — Kadıköy", address: "Moda Caddesi No: 42, Kadıköy / İstanbul", hours: "Hafta içi 08:00 – 23:00 | Hafta sonu 09:00 – 00:00", image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&q=80" },
    { id: 2, name: "Brew & Co. — Beşiktaş", address: "Çırağan Caddesi No: 18, Beşiktaş / İstanbul", hours: "Her gün 08:30 – 23:30", image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80" },
    { id: 3, name: "Brew & Co. — Bebek", address: "Bebek Sahil Yolu No: 7, Bebek / İstanbul", hours: "Her gün 09:00 – 00:00", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80" }
  ],

  // ===== GALERİ =====
  gallery: [
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80",
    "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400&q=80",
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&q=80",
    "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&q=80",
    "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=400&q=80"
  ],

  // ===== İLETİŞİM =====
  contact: {
    address: "Moda Caddesi No: 42\nKadıköy, İstanbul 34710",
    phone: "+90 (216) 555 42 42",
    email: "merhaba@brewandco.com.tr",
    hours: "Hafta içi: 08:00 – 23:00\nHafta sonu: 09:00 – 00:00",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48173.22520736698!2d29.00000!3d41.00000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zS2FkxLFrw7Z5LCDEsHN0YW5idWw!5e0!3m2!1str!2str!4v1"
  },

  // ===== SOSYAL MEDYA =====
  social: {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
    twitter: "#"
  }
};

// ===== HAZIR TEMALAR (25 ADET) =====
const THEMES = [
  {
    id: "classic-coffee", name: "Klasik Kahve", tag: "Varsayılan",
    colors: { primary: "#6F4E37", primaryDark: "#5A3D2B", accent: "#D4853A", accentLight: "#E8A65D", cream: "#FDF6EC", background: "#FAFAF7", text: "#2C2C2C", textLight: "#6B6B6B" }
  },
  {
    id: "espresso-dark", name: "Espresso", tag: "Koyu",
    colors: { primary: "#3E2723", primaryDark: "#1B0F0B", accent: "#FF8F00", accentLight: "#FFB74D", cream: "#FFF3E0", background: "#FAF6F1", text: "#212121", textLight: "#616161" }
  },
  {
    id: "matcha-zen", name: "Matcha Zen", tag: "Doğal",
    colors: { primary: "#4A6741", primaryDark: "#33472D", accent: "#8BC34A", accentLight: "#AED581", cream: "#F1F8E9", background: "#FAFDF7", text: "#1B2E1B", textLight: "#5D7A5D" }
  },
  {
    id: "ocean-breeze", name: "Okyanus Esintisi", tag: "Modern",
    colors: { primary: "#1A5276", primaryDark: "#0E3A55", accent: "#2196F3", accentLight: "#64B5F6", cream: "#E3F2FD", background: "#F7FBFF", text: "#1A2332", textLight: "#5A6E82" }
  },
  {
    id: "rose-gold", name: "Rose Gold", tag: "Zarif",
    colors: { primary: "#8E4A65", primaryDark: "#6B3049", accent: "#E8788A", accentLight: "#F1A3B0", cream: "#FFF0F3", background: "#FFFAFB", text: "#3D1F2E", textLight: "#8A6475" }
  },
  {
    id: "midnight-luxe", name: "Gece Lüksü", tag: "Premium",
    colors: { primary: "#1A1A2E", primaryDark: "#0F0F1A", accent: "#E94560", accentLight: "#FF6B81", cream: "#FFF0F2", background: "#F8F8FC", text: "#16213E", textLight: "#5C6380" }
  },
  {
    id: "autumn-harvest", name: "Sonbahar", tag: "Sıcak",
    colors: { primary: "#7B4B2A", primaryDark: "#5C3620", accent: "#E67E22", accentLight: "#F5A623", cream: "#FEF5E7", background: "#FFFBF5", text: "#2D1810", textLight: "#7A6355" }
  },
  {
    id: "lavender-dream", name: "Lavanta Rüyası", tag: "Yumuşak",
    colors: { primary: "#5E4B8B", primaryDark: "#3E2D6B", accent: "#9B59B6", accentLight: "#BB8FCE", cream: "#F5EEF8", background: "#FDFAFF", text: "#2C1F42", textLight: "#7A6B8F" }
  },
  {
    id: "nordic-frost", name: "Nordic Frost", tag: "Minimal",
    colors: { primary: "#455A64", primaryDark: "#2E3E46", accent: "#26C6DA", accentLight: "#80DEEA", cream: "#E0F7FA", background: "#F5FAFB", text: "#1C2B33", textLight: "#607D8B" }
  },
  {
    id: "cherry-blossom", name: "Kiraz Çiçeği", tag: "Romantik",
    colors: { primary: "#AD5C6E", primaryDark: "#8B3A4E", accent: "#F48FB1", accentLight: "#F8BBD0", cream: "#FFF0F5", background: "#FFFAFC", text: "#3D1C2A", textLight: "#8E6877" }
  },
  {
    id: "forest-cabin", name: "Orman Evi", tag: "Rustik",
    colors: { primary: "#4E6B45", primaryDark: "#354D30", accent: "#8D6E43", accentLight: "#B8956A", cream: "#F5F0E1", background: "#FAFAF5", text: "#2A3225", textLight: "#6B7A63" }
  },
  {
    id: "desert-sand", name: "Çöl Kumu", tag: "Sıcak",
    colors: { primary: "#A0845A", primaryDark: "#7D6643", accent: "#D4A553", accentLight: "#E8C97A", cream: "#FDF8ED", background: "#FDFCF8", text: "#3B3020", textLight: "#8A7D6B" }
  },
  {
    id: "coral-reef", name: "Mercan Resifi", tag: "Canlı",
    colors: { primary: "#C0513E", primaryDark: "#993D2F", accent: "#FF6F61", accentLight: "#FF9A8D", cream: "#FFF3F0", background: "#FFFAF9", text: "#2E1A16", textLight: "#7A5A52" }
  },
  {
    id: "emerald-city", name: "Zümrüt Şehir", tag: "Şık",
    colors: { primary: "#1B6B4D", primaryDark: "#0F4A35", accent: "#2ECC71", accentLight: "#58D68D", cream: "#EAFAF1", background: "#F5FFF9", text: "#0E2D20", textLight: "#4A7A62" }
  },
  {
    id: "butter-cream", name: "Tereyağı Krem", tag: "Klasik",
    colors: { primary: "#8B7355", primaryDark: "#6D5840", accent: "#D4A96A", accentLight: "#E8C98E", cream: "#FFF8EE", background: "#FEFCF7", text: "#332B1F", textLight: "#7E7265" }
  },
  {
    id: "blueberry", name: "Yaban Mersini", tag: "Canlı",
    colors: { primary: "#3D4F8F", primaryDark: "#2A3770", accent: "#5C6BC0", accentLight: "#9FA8DA", cream: "#EEF0FA", background: "#F8F9FF", text: "#1A2040", textLight: "#5F6891" }
  },
  {
    id: "peach-sunset", name: "Şeftali Günbatımı", tag: "Yumuşak",
    colors: { primary: "#B5654A", primaryDark: "#8F4E38", accent: "#FF9472", accentLight: "#FFB49A", cream: "#FFF5EF", background: "#FFFCFA", text: "#3A2018", textLight: "#8A6E62" }
  },
  {
    id: "slate-modern", name: "Modern Kurşuni", tag: "Minimal",
    colors: { primary: "#4A4A5A", primaryDark: "#33333F", accent: "#7C8CF8", accentLight: "#A5B0FF", cream: "#F0F1FA", background: "#F7F7FB", text: "#1E1E28", textLight: "#6B6B7B" }
  },
  {
    id: "turkish-delight", name: "Lokum Pembe", tag: "Zarif",
    colors: { primary: "#9E5A6A", primaryDark: "#7A3E4F", accent: "#E27D8D", accentLight: "#F0A5B2", cream: "#FFF2F5", background: "#FFFAFB", text: "#3A1E28", textLight: "#876470" }
  },
  {
    id: "olive-garden", name: "Zeytin Bahçesi", tag: "Doğal",
    colors: { primary: "#6B6B3C", primaryDark: "#4F4F2A", accent: "#A0A030", accentLight: "#C4C45A", cream: "#F8F8EC", background: "#FCFCF5", text: "#2E2E18", textLight: "#7A7A5C" }
  },
  {
    id: "royal-burgundy", name: "Bordo Krallık", tag: "Premium",
    colors: { primary: "#6B2037", primaryDark: "#4D1528", accent: "#C0394F", accentLight: "#E06070", cream: "#FFF0F2", background: "#FDF8F9", text: "#2E1018", textLight: "#8A5565" }
  },
  {
    id: "teal-fresh", name: "Taze Turkuaz", tag: "Modern",
    colors: { primary: "#1A7A7A", primaryDark: "#0F5555", accent: "#00BFA5", accentLight: "#64FFDA", cream: "#E0FAF5", background: "#F5FFFD", text: "#0E2E2E", textLight: "#4A7A72" }
  },
  {
    id: "charcoal-ember", name: "Kömür & Kor", tag: "Koyu",
    colors: { primary: "#37373F", primaryDark: "#222228", accent: "#FF5722", accentLight: "#FF8A65", cream: "#FFF3E0", background: "#F9F9FA", text: "#1A1A1F", textLight: "#6E6E78" }
  },
  {
    id: "vanilla-latte", name: "Vanilyalı Latte", tag: "Sıcak",
    colors: { primary: "#7A6855", primaryDark: "#5C4E3E", accent: "#C8A97E", accentLight: "#E0C9A6", cream: "#FFF9F0", background: "#FEFDFB", text: "#30281E", textLight: "#847A6E" }
  },
  {
    id: "arctic-blue", name: "Kutup Mavisi", tag: "Temiz",
    colors: { primary: "#2C5F7C", primaryDark: "#1B4258", accent: "#0097A7", accentLight: "#4DD0E1", cream: "#E0F4F7", background: "#F5FCFD", text: "#142830", textLight: "#5A7A88" }
  }
];

// ===== API TABANLI VERİ FONKSİYONLARI =====
const API_URL = "/api";

// Hafızada tutulan veri (sayfa boyunca)
let _cachedData = null;

// Senkron getData — sayfa yüklenirken cache'den okur
function getData() {
  if (_cachedData) return _cachedData;
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

// Server'dan veri çek (async) — sayfa başında çağrılır
async function fetchData() {
  try {
    const res = await fetch(API_URL + "/data");
    const json = await res.json();
    if (json.success && json.data) {
      _cachedData = json.data;
      return json.data;
    }
  } catch (e) {
    console.warn("API bağlantısı yok, default veri kullanılıyor:", e.message);
  }
  _cachedData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  return _cachedData;
}

// Server'a veri kaydet (async)
function saveData(data) {
  _cachedData = data;
  // Arka planda server'a kaydet
  fetch(API_URL + "/data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json()).then(json => {
    if (!json.success) console.error("Kaydetme hatası:", json.error);
  }).catch(e => {
    console.error("Server bağlantı hatası:", e.message);
  });
}

// Veriyi sıfırla
async function resetData() {
  try {
    await fetch(API_URL + "/reset", { method: "POST" });
  } catch (e) { /* ignore */ }
  _cachedData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  return _cachedData;
}

// Görsel yükle (File → server'a upload → URL döner)
async function uploadImage(file) {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const res = await fetch(API_URL + "/upload", { method: "POST", body: formData });
    const json = await res.json();
    if (json.success) return json.url;
  } catch (e) {
    console.error("Upload hatası:", e.message);
  }
  return null;
}

function getNextId(arr) {
  if (!arr.length) return 1;
  return Math.max(...arr.map(item => item.id)) + 1;
}

// Ürünleri sıraya göre sırala
function sortByOrder(arr) {
  return [...arr].sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
}

// Ürünlere order alanı yoksa ekle
function ensureProductOrder(data) {
  let changed = false;
  data.categories.forEach(cat => {
    const catProds = data.products.filter(p => p.categoryId === cat.id);
    catProds.forEach((p, i) => {
      if (p.order === undefined) { p.order = i; changed = true; }
    });
  });
  const featured = data.products.filter(p => p.featured);
  featured.forEach((p, i) => {
    if (p.featuredOrder === undefined) { p.featuredOrder = i; changed = true; }
  });
  if (changed) saveData(data);
}

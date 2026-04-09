/* ========================================
   SEKTÖR ŞABLONLARI — GENİŞLETİLMİŞ
   Her sektör 50+ ürün içerir
   ======================================== */

// Yardımcı: Unsplash kısa link
const U = (id, w=500) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

const SECTORS = [
  // ==========================================
  // 1. KAFE / KAHVE DÜKANI  (55 ürün)
  // ==========================================
  {
    id: "cafe",
    name: "Kafe / Kahve Dükkanı",
    icon: "☕",
    desc: "Kahve dükkanı, cafe, üçüncü dalga kahveci",
    theme: "classic-coffee",
    site: { name: "Brew &", nameAccent: "Co.", slogan: "Her Yudumda Özel Bir Hikâye", logoIcon: "☕" },
    hero: {
      badge: "✦ Premium Kafe Deneyimi", title: "Her Yudumda", titleAccent: "Özel", titleEnd: "Bir Hikâye",
      subtitle: "Özenle seçilmiş kahve çekirdekleri, ev yapımı tatlılar ve sıcak bir atmosferle sizi bekliyoruz.",
      bgImage: U("1501339847302-ac426a4a7cbb", 1920)
    },
    about: {
      title: "Hikâyemiz",
      paragraph1: "Küçük bir tutkuyla başlayan yolculuğumuz, bugün şehrin en sevilen buluşma noktalarından biri haline geldi.",
      paragraph2: "Amacımız sadece kahve sunmak değil; bir deneyim yaratmak. Sıcak bir üçüncü mekan olmayı hedefliyoruz.",
      image: U("1554118811-1e0d58224f24", 800),
      features: [{ icon: "🌱", text: "Organik Çekirdek" }, { icon: "🏆", text: "Ödüllü Barista" }, { icon: "🍰", text: "Ev Yapımı Tatlılar" }, { icon: "🌍", text: "Sürdürülebilir Kaynak" }]
    },
    gallery: [U("1501339847302-ac426a4a7cbb",400), U("1511920170033-f8396924c348",400), U("1600093463592-8e36ae95ef56",400), U("1445116572660-236099ec97a0",400), U("1498804103079-a6351b050096",400), U("1558618666-fcd25c85f82e",400), U("1521017432531-fbd92d768814",400), U("1504630083234-14187a9df0f5",400)],
    categories: [
      { name: "Sıcak Kahveler", desc: "Espresso bazlı sıcak kahve çeşitleri", image: U("1509042239860-f550ce710b93",200), anchor: "sicak-kahveler" },
      { name: "Soğuk Kahveler", desc: "Buzlu ve cold brew kahve çeşitleri", image: U("1517701550927-30cf4ba1dba5",200), anchor: "soguk-kahveler" },
      { name: "Çaylar", desc: "Bitki çayları, matcha, chai", image: U("1556679343-c7306c1976bc",200), anchor: "caylar" },
      { name: "Smoothie & Frappe", desc: "Meyveli smoothie ve frappe çeşitleri", image: U("1546173159-315724a31696",200), anchor: "smoothie" },
      { name: "Tatlılar & Pasta", desc: "Ev yapımı kek, cheesecake, brownie", image: U("1565958011703-44f9829ba187",200), anchor: "tatlilar" },
      { name: "Kahvaltı & Tost", desc: "Sandviç, tost, kruvasan, bowl", image: U("1525351484163-7529414344d8",200), anchor: "kahvalti" }
    ],
    products: [
      // Sıcak Kahveler (12)
      { catIdx: 0, name: "Espresso", desc: "Yoğun aromalı tek shot klasik İtalyan espresso.", price: 55, image: U("1510707577719-ae7c14805e3a"), badge: "recommended", featured: true },
      { catIdx: 0, name: "Double Espresso", desc: "Çift shot yoğun espresso.", price: 70, image: U("1510707577719-ae7c14805e3a"), badge: "" },
      { catIdx: 0, name: "Caramel Macchiato", desc: "Espresso, buharlanmış süt ve karamel sos.", price: 95, image: U("1572442388796-11668a67e53d"), badge: "recommended", featured: true },
      { catIdx: 0, name: "Cappuccino", desc: "Espresso, buharlanmış süt ve süt köpüğü.", price: 80, image: U("1534778101976-62847782c213"), badge: "" },
      { catIdx: 0, name: "Latte", desc: "Yumuşak espresso ve bol buharlanmış süt.", price: 78, image: U("1461023058943-07fcbe16d735"), badge: "" },
      { catIdx: 0, name: "Flat White", desc: "Yoğun espresso ve kadifemsi mikro süt köpüğü.", price: 85, image: U("1577968897966-3d4325b36b61"), badge: "new" },
      { catIdx: 0, name: "Mocha", desc: "Espresso, çikolata sosu ve buharlanmış süt.", price: 90, image: U("1578314675249-a6910f80cc4e"), badge: "" },
      { catIdx: 0, name: "White Mocha", desc: "Beyaz çikolata soslu mocha.", price: 95, image: U("1578314675249-a6910f80cc4e"), badge: "new" },
      { catIdx: 0, name: "Americano", desc: "Espresso ve sıcak su ile uzatılmış kahve.", price: 60, image: U("1510707577719-ae7c14805e3a"), badge: "" },
      { catIdx: 0, name: "Türk Kahvesi", desc: "Geleneksel yöntemle pişirilen Türk kahvesi.", price: 50, image: U("1514432324607-a09d9b4aefda"), badge: "" },
      { catIdx: 0, name: "Pumpkin Spice Latte", desc: "Balkabağı, tarçın, karanfil, zencefil.", price: 100, image: U("1574914629385-46448b767aec"), badge: "seasonal" },
      { catIdx: 0, name: "Affogato", desc: "Vanilyalı dondurma üzerine sıcak espresso.", price: 90, image: U("1572442388796-11668a67e53d"), badge: "new", featured: true },
      // Soğuk Kahveler (10)
      { catIdx: 1, name: "Iced Americano", desc: "Espresso ve soğuk su, buzlu.", price: 70, image: U("1517701550927-30cf4ba1dba5"), badge: "recommended", featured: true },
      { catIdx: 1, name: "Iced Latte", desc: "Espresso ve soğuk süt, buzlu.", price: 80, image: U("1461023058943-07fcbe16d735"), badge: "" },
      { catIdx: 1, name: "Cold Brew", desc: "24 saat soğuk demleme kahve.", price: 75, image: U("1517701550927-30cf4ba1dba5"), badge: "new" },
      { catIdx: 1, name: "Iced Caramel Latte", desc: "Buzlu karamel soslu latte.", price: 90, image: U("1572442388796-11668a67e53d"), badge: "" },
      { catIdx: 1, name: "Iced Mocha", desc: "Buzlu çikolatalı mocha.", price: 90, image: U("1578314675249-a6910f80cc4e"), badge: "" },
      { catIdx: 1, name: "Frappuccino", desc: "Buzlu karışık kahveli içecek.", price: 95, image: U("1572490122747-3968b75cc699"), badge: "recommended" },
      { catIdx: 1, name: "Iced Matcha Latte", desc: "Buzlu matcha tozu ve soğuk süt.", price: 85, image: U("1536256263959-770b48d82b0a"), badge: "new", featured: true },
      { catIdx: 1, name: "Vietnamese Coffee", desc: "Yoğunlaştırılmış sütlü buzlu Vietnam kahvesi.", price: 85, image: U("1517701550927-30cf4ba1dba5"), badge: "" },
      { catIdx: 1, name: "Nitro Cold Brew", desc: "Azot gazlı soğuk demleme kahve.", price: 90, image: U("1517701550927-30cf4ba1dba5"), badge: "new" },
      { catIdx: 1, name: "Iced White Mocha", desc: "Buzlu beyaz çikolata mocha.", price: 95, image: U("1572442388796-11668a67e53d"), badge: "" },
      // Çaylar (8)
      { catIdx: 2, name: "Earl Grey", desc: "Bergamot aromalı klasik İngiliz çayı.", price: 45, image: U("1571934811356-5cc061b6821f"), badge: "recommended" },
      { catIdx: 2, name: "Matcha Latte", desc: "Japonya'dan özel ithal matcha tozu ile latte.", price: 85, image: U("1536256263959-770b48d82b0a"), badge: "new" },
      { catIdx: 2, name: "Chai Latte", desc: "Baharatlı Hint çayı, buharlanmış süt.", price: 70, image: U("1571934811356-5cc061b6821f"), badge: "" },
      { catIdx: 2, name: "Yeşil Çay", desc: "Antioksidan bakımından zengin yeşil çay.", price: 40, image: U("1556881286-fc6915169721"), badge: "" },
      { catIdx: 2, name: "Papatya Çayı", desc: "Rahatlatıcı doğal papatya çayı.", price: 40, image: U("1544787219-7f47ccb76574"), badge: "" },
      { catIdx: 2, name: "Ihlamur", desc: "Geleneksel şifalı ıhlamur çayı.", price: 35, image: U("1563911892437-1feda0179e1b"), badge: "" },
      { catIdx: 2, name: "Kış Çayı", desc: "Tarçın, karanfil, elma, portakal.", price: 50, image: U("1597318181409-cf64d0b5d8a2"), badge: "seasonal" },
      { catIdx: 2, name: "Rooibos Latte", desc: "Güney Afrika çayı ile sütlü latte.", price: 65, image: U("1571934811356-5cc061b6821f"), badge: "new" },
      // Smoothie & Frappe (7)
      { catIdx: 3, name: "Tropical Smoothie", desc: "Mango, ananas, hindistan cevizi sütü.", price: 78, image: U("1546173159-315724a31696"), badge: "recommended", featured: true },
      { catIdx: 3, name: "Berry Smoothie", desc: "Çilek, ahududu, yaban mersini, yoğurt.", price: 68, oldPrice: 80, image: U("1553530666-ba11a7da3888"), badge: "discount" },
      { catIdx: 3, name: "Green Detox", desc: "Ispanak, elma, zencefil, limon.", price: 72, image: U("1546173159-315724a31696"), badge: "new" },
      { catIdx: 3, name: "Açaí Bowl", desc: "Açaí püresi, granola, taze meyveler.", price: 95, image: U("1590301157890-4810ed352733"), badge: "new" },
      { catIdx: 3, name: "Limonata", desc: "Taze sıkılmış ev yapımı limonata.", price: 55, image: U("1621263764928-df1444c5e859"), badge: "" },
      { catIdx: 3, name: "Oreo Frappe", desc: "Oreo parçalı, kremalı buzlu frappe.", price: 85, image: U("1572490122747-3968b75cc699"), badge: "" },
      { catIdx: 3, name: "Mango Lassi", desc: "Hint usulü mangolu yoğurtlu içecek.", price: 70, image: U("1546173159-315724a31696"), badge: "" },
      // Tatlılar & Pasta (10)
      { catIdx: 4, name: "San Sebastian Cheesecake", desc: "Karamelize yüzeyli efsanevi cheesecake.", price: 130, image: U("1508737027454-e6454ef45afd"), badge: "recommended", featured: true },
      { catIdx: 4, name: "Brownie", desc: "Yoğun çikolatalı, ıslak kıvamlı.", price: 95, image: U("1564355808539-22fda35bed7e"), badge: "" },
      { catIdx: 4, name: "Tiramisu", desc: "Mascarpone, espresso ve kakao.", price: 110, image: U("1571877227200-a0d98ea607e9"), badge: "" },
      { catIdx: 4, name: "Red Velvet Cupcake", desc: "Cream cheese frosting ile.", price: 72, oldPrice: 90, image: U("1614707267537-b85aaf00c4b7"), badge: "discount", featured: true },
      { catIdx: 4, name: "Cookie (3'lü)", desc: "Çikolata parçalı yumuşak kurabiye.", price: 65, image: U("1499636136210-6f4ee915583e"), badge: "" },
      { catIdx: 4, name: "Elmalı Turta", desc: "Tarçınlı ev yapımı turta.", price: 85, image: U("1568571780765-9276ac8b75a2"), badge: "seasonal" },
      { catIdx: 4, name: "Magnolia Puding", desc: "Hafif, kremsi magnolia tatlısı.", price: 75, image: U("1488477181946-6428a0291777"), badge: "" },
      { catIdx: 4, name: "Lotus Cheesecake", desc: "Lotus bisküvili kremalı cheesecake.", price: 120, image: U("1508737027454-e6454ef45afd"), badge: "new" },
      { catIdx: 4, name: "Profiterol", desc: "Çikolata soslu kremalı profiterol.", price: 100, image: U("1612203985729-70726954388c"), badge: "" },
      { catIdx: 4, name: "Waffle", desc: "Çikolata sos, meyve ve dondurma ile.", price: 110, image: U("1562376552-0d160a2f238d"), badge: "new" },
      // Kahvaltı & Tost (8)
      { catIdx: 5, name: "Avokadolu Tost", desc: "Ekşi maya, avokado, poşe yumurta.", price: 120, image: U("1525351484163-7529414344d8"), badge: "recommended", featured: true },
      { catIdx: 5, name: "Kruvasan", desc: "Fransız usulü tereyağlı kruvasan.", price: 65, image: U("1555507036-ab1f4038024a"), badge: "" },
      { catIdx: 5, name: "Granola Bowl", desc: "Yoğurt, granola, taze meyve, bal.", price: 90, image: U("1590301157890-4810ed352733"), badge: "new" },
      { catIdx: 5, name: "Kulüp Sandviç", desc: "Tavuk, marul, domates, peynir.", price: 110, image: U("1528735602780-2552fd46c7af"), badge: "" },
      { catIdx: 5, name: "Peynir Tabağı", desc: "Seçilmiş peynirler, ceviz, bal.", price: 135, oldPrice: 150, image: U("1452195100486-9cc805987862"), badge: "discount" },
      { catIdx: 5, name: "Tost (Kaşarlı)", desc: "Kaşar peynirli klasik tost.", price: 65, image: U("1528735602780-2552fd46c7af"), badge: "" },
      { catIdx: 5, name: "Sezar Salata", desc: "Marul, parmesan, kruton, tavuk.", price: 105, image: U("1512621776951-a57141f2eefd"), badge: "" },
      { catIdx: 5, name: "Wrap", desc: "Izgara tavuk, roka, avokado.", price: 100, image: U("1626700051175-6818013e1d4f"), badge: "" }
    ]
  },

  // ==========================================
  // 2. RESTORAN / LOKANTA  (60 ürün)
  // ==========================================
  {
    id: "restaurant",
    name: "Restoran / Lokanta",
    icon: "🍽️",
    desc: "Restoran, lokanta, ev yemekleri, kebapçı",
    theme: "autumn-harvest",
    site: { name: "Lezzet", nameAccent: "Sofrası", slogan: "Geleneksel Tatlar, Modern Sunum", logoIcon: "🍽️" },
    hero: {
      badge: "✦ Geleneksel Lezzetler", title: "Sofranıza", titleAccent: "Lezzet", titleEnd: "Katıyoruz",
      subtitle: "Taze malzemeler, ustaca hazırlanan yemekler ve sıcak bir ortamda unutulmaz yemek deneyimi.",
      bgImage: U("1517248135467-4c7edcad34c4", 1920)
    },
    about: {
      title: "Biz Kimiz?",
      paragraph1: "Türk mutfağının en seçkin lezzetlerini taze ve doğal malzemelerle sofralarınıza taşıyoruz.",
      paragraph2: "Ailecek gelebileceğiniz sıcak bir mekan olarak hizmet veriyoruz.",
      image: U("1414235077428-338989a2e8c0", 800),
      features: [{ icon: "👨‍🍳", text: "Usta Şefler" }, { icon: "🥬", text: "Taze Malzeme" }, { icon: "🏠", text: "Sıcak Ortam" }, { icon: "⭐", text: "Özel Lezzetler" }]
    },
    gallery: [U("1517248135467-4c7edcad34c4",400), U("1414235077428-338989a2e8c0",400), U("1555939594-58d7cb561ad1",400), U("1544025162-d76694265947",400), U("1559339352-11d035aa65de",400), U("1547592166-23ac45744acd",400), U("1574484284002-952d92456975",400), U("1565299624946-b28f40a0ae38",400)],
    categories: [
      { name: "Çorbalar", desc: "Günlük taze çorba çeşitleri", image: U("1547592166-23ac45744acd",200), anchor: "corbalar" },
      { name: "Kebaplar & Izgara", desc: "Adana, Urfa, pirzola, tavuk şiş", image: U("1599487488170-d11ec9c172f0",200), anchor: "kebaplar" },
      { name: "Ana Yemekler", desc: "Güveç, sote, fırın yemekleri", image: U("1574484284002-952d92456975",200), anchor: "ana-yemekler" },
      { name: "Pideler & Lahmacun", desc: "Fırından taze pide ve lahmacun", image: U("1627308595229-7830a5c91f9f",200), anchor: "pideler" },
      { name: "Salatalar & Mezeler", desc: "Taze salatalar ve mevsim mezeleri", image: U("1512621776951-a57141f2eefd",200), anchor: "salatalar" },
      { name: "İçecekler", desc: "Ayran, şalgam, meyve suyu, çay", image: U("1544145945-f90425340c7e",200), anchor: "icecekler" },
      { name: "Tatlılar", desc: "Künefe, sütlaç, baklava ve daha fazlası", image: U("1576618148400-f54bed99fcfd",200), anchor: "tatlilar" }
    ],
    products: [
      // Çorbalar (7)
      { catIdx: 0, name: "Mercimek Çorbası", desc: "Kırmızı mercimek, limonlu servis.", price: 65, image: U("1547592166-23ac45744acd"), badge: "recommended", featured: true },
      { catIdx: 0, name: "Ezogelin Çorbası", desc: "Bulgurlu, naneli geleneksel tarif.", price: 65, image: U("1603105037880-880cd4edfb0d"), badge: "" },
      { catIdx: 0, name: "İşkembe Çorbası", desc: "Sarımsaklı, sirkeli klasik işkembe.", price: 85, image: U("1594756202469-9ff9799b2e4e"), badge: "" },
      { catIdx: 0, name: "Tarhana Çorbası", desc: "Ev yapımı tarhana ile hazırlanan.", price: 60, image: U("1547592166-23ac45744acd"), badge: "" },
      { catIdx: 0, name: "Yayla Çorbası", desc: "Yoğurtlu, naneli yayla çorbası.", price: 60, image: U("1603105037880-880cd4edfb0d"), badge: "seasonal" },
      { catIdx: 0, name: "Tavuk Suyu", desc: "Şehriyeli tavuk suyu çorbası.", price: 65, image: U("1547592166-23ac45744acd"), badge: "" },
      { catIdx: 0, name: "Domates Çorbası", desc: "Kremalı domates çorbası.", price: 60, image: U("1603105037880-880cd4edfb0d"), badge: "" },
      // Kebaplar & Izgara (12)
      { catIdx: 1, name: "Adana Kebap", desc: "Acılı el yapımı Adana kebabı.", price: 220, image: U("1599487488170-d11ec9c172f0"), badge: "recommended", featured: true },
      { catIdx: 1, name: "Urfa Kebap", desc: "Acısız Urfa kebabı, lavaş ile.", price: 220, image: U("1599487488170-d11ec9c172f0"), badge: "" },
      { catIdx: 1, name: "Karışık Izgara", desc: "Pirzola, köfte, tavuk ve kuzu şiş.", price: 320, image: U("1555939594-58d7cb561ad1"), badge: "recommended", featured: true },
      { catIdx: 1, name: "İskender Kebap", desc: "Döner, tereyağlı sos, yoğurt.", price: 200, image: U("1599487488170-d11ec9c172f0"), badge: "recommended" },
      { catIdx: 1, name: "Tavuk Şiş", desc: "Marine edilmiş tavuk şiş, pilav ile.", price: 160, image: U("1555939594-58d7cb561ad1"), badge: "" },
      { catIdx: 1, name: "Kuzu Şiş", desc: "Kuzu but parçalarından şiş.", price: 240, image: U("1544025162-d76694265947"), badge: "" },
      { catIdx: 1, name: "Pirzola (4 adet)", desc: "Izgarada kuzu pirzola.", price: 300, image: U("1555939594-58d7cb561ad1"), badge: "" },
      { catIdx: 1, name: "Köfte Porsiyon", desc: "Izgara köfte, közlenmiş biber, pilav.", price: 150, image: U("1529694157872-4e0c0f3b238b"), badge: "" },
      { catIdx: 1, name: "Beyti Kebap", desc: "Lavaşa sarılı kebap, yoğurt, sos.", price: 230, image: U("1599487488170-d11ec9c172f0"), badge: "new" },
      { catIdx: 1, name: "Tavuk Kanat", desc: "Baharatlı ızgara tavuk kanat.", price: 130, image: U("1555939594-58d7cb561ad1"), badge: "" },
      { catIdx: 1, name: "Ciğer Şiş", desc: "Kuzu ciğer şiş, soğan ile.", price: 140, image: U("1599487488170-d11ec9c172f0"), badge: "" },
      { catIdx: 1, name: "Patlıcan Kebap", desc: "Közlenmiş patlıcanlı kebap.", price: 210, image: U("1544025162-d76694265947"), badge: "" },
      // Ana Yemekler (10)
      { catIdx: 2, name: "Kuzu Tandır", desc: "Uzun süre pişirilen yumuşacık kuzu.", price: 280, image: U("1544025162-d76694265947"), badge: "seasonal", featured: true },
      { catIdx: 2, name: "Hünkar Beğendi", desc: "Kuzu etli, patlıcanlı geleneksel.", price: 190, image: U("1574484284002-952d92456975"), badge: "new" },
      { catIdx: 2, name: "Güveç", desc: "Sebzeli karışık et güveç, fırında.", price: 175, image: U("1534939561126-855b8675edd7"), badge: "" },
      { catIdx: 2, name: "Mantı", desc: "El açması mantı, yoğurt ve sos.", price: 150, image: U("1625938144755-652e08e359b7"), badge: "" },
      { catIdx: 2, name: "Karnıyarık", desc: "Kıymalı patlıcan dolma, fırında.", price: 130, image: U("1574484284002-952d92456975"), badge: "" },
      { catIdx: 2, name: "Ali Nazik", desc: "Patlıcan ezmesi üzerine kuzu kavurma.", price: 200, image: U("1544025162-d76694265947"), badge: "new" },
      { catIdx: 2, name: "Etli Ekmek", desc: "Konya usulü uzun etli ekmek.", price: 140, image: U("1565299624946-b28f40a0ae38"), badge: "" },
      { catIdx: 2, name: "Tas Kebabı", desc: "Kuzu kuşbaşı, sebzeli tas kebabı.", price: 180, image: U("1534939561126-855b8675edd7"), badge: "" },
      { catIdx: 2, name: "İmam Bayıldı", desc: "Zeytinyağlı dolma patlıcan.", price: 110, image: U("1574484284002-952d92456975"), badge: "" },
      { catIdx: 2, name: "Yaprak Sarma", desc: "Zeytinyağlı yaprak sarma.", price: 90, image: U("1574484284002-952d92456975"), badge: "" },
      // Pideler (7)
      { catIdx: 3, name: "Kuşbaşılı Pide", desc: "Dana kuşbaşı etli kapalı pide.", price: 160, image: U("1627308595229-7830a5c91f9f"), badge: "recommended", featured: true },
      { catIdx: 3, name: "Lahmacun (2 adet)", desc: "İnce hamurlu, kıymalı lahmacun.", price: 100, image: U("1622192307028-26f015218ab3"), badge: "" },
      { catIdx: 3, name: "Karışık Pide", desc: "Sucuk, kaşar, kuşbaşı.", price: 170, image: U("1565299624946-b28f40a0ae38"), badge: "new" },
      { catIdx: 3, name: "Kaşarlı Pide", desc: "Bol kaşar peynirli açık pide.", price: 120, image: U("1627308595229-7830a5c91f9f"), badge: "" },
      { catIdx: 3, name: "Sucuklu Pide", desc: "Sucuklu, yumurtalı pide.", price: 140, image: U("1565299624946-b28f40a0ae38"), badge: "" },
      { catIdx: 3, name: "Kıymalı Pide", desc: "Kıymalı açık pide.", price: 130, image: U("1627308595229-7830a5c91f9f"), badge: "" },
      { catIdx: 3, name: "Ispanaklı Pide", desc: "Ispanaklı, peynirli pide.", price: 120, image: U("1627308595229-7830a5c91f9f"), badge: "" },
      // Salatalar (7)
      { catIdx: 4, name: "Çoban Salata", desc: "Domates, salatalık, biber, soğan.", price: 60, image: U("1540420773420-3366772f4999"), badge: "" },
      { catIdx: 4, name: "Sezar Salata", desc: "Tavuk, marul, kruton, parmesan.", price: 110, image: U("1512621776951-a57141f2eefd"), badge: "recommended" },
      { catIdx: 4, name: "Mevsim Salata", desc: "Taze mevsim yeşillikleri.", price: 70, image: U("1540420773420-3366772f4999"), badge: "" },
      { catIdx: 4, name: "Roka Salata", desc: "Roka, parmesan, ceviz, nar.", price: 80, image: U("1512621776951-a57141f2eefd"), badge: "" },
      { catIdx: 4, name: "Acılı Ezme", desc: "Geleneksel acılı ince ezme.", price: 50, image: U("1540189549336-e6e99c3679fe"), badge: "" },
      { catIdx: 4, name: "Humus", desc: "Tahinli nohut ezmesi.", price: 60, image: U("1577805947697-89e18249d767"), badge: "" },
      { catIdx: 4, name: "Babagannuş", desc: "Közlenmiş patlıcan ezmesi.", price: 60, image: U("1540189549336-e6e99c3679fe"), badge: "" },
      // İçecekler (7)
      { catIdx: 5, name: "Ayran", desc: "Ev yapımı taze ayran.", price: 30, image: U("1544145945-f90425340c7e"), badge: "" },
      { catIdx: 5, name: "Portakal Suyu", desc: "Taze sıkma portakal suyu.", price: 55, image: U("1621506289937-a8e4df240d0b"), badge: "recommended" },
      { catIdx: 5, name: "Şalgam", desc: "Acılı veya acısız şalgam.", price: 30, image: U("1544145945-f90425340c7e"), badge: "" },
      { catIdx: 5, name: "Türk Çayı", desc: "Demlik çay.", price: 20, image: U("1571934811356-5cc061b6821f"), badge: "" },
      { catIdx: 5, name: "Limonata", desc: "Ev yapımı taze limonata.", price: 45, image: U("1621263764928-df1444c5e859"), badge: "" },
      { catIdx: 5, name: "Soda", desc: "Meyveli veya sade soda.", price: 25, image: U("1544145945-f90425340c7e"), badge: "" },
      { catIdx: 5, name: "Türk Kahvesi", desc: "Geleneksel Türk kahvesi.", price: 45, image: U("1514432324607-a09d9b4aefda"), badge: "" },
      // Tatlılar (8)
      { catIdx: 6, name: "Künefe", desc: "Hatay usulü tel kadayıf künefe.", price: 120, image: U("1576618148400-f54bed99fcfd"), badge: "recommended", featured: true },
      { catIdx: 6, name: "Sütlaç", desc: "Fırında kızarmış geleneksel sütlaç.", price: 75, image: U("1488477181946-6428a0291777"), badge: "" },
      { catIdx: 6, name: "Baklava (4 dilim)", desc: "Antep fıstıklı ev yapımı baklava.", price: 140, image: U("1598110750624-207050c4f28c"), badge: "seasonal" },
      { catIdx: 6, name: "Kazandibi", desc: "Karamelize geleneksel sütlü tatlı.", price: 70, image: U("1571877227200-a0d98ea607e9"), badge: "" },
      { catIdx: 6, name: "Tavuk Göğsü", desc: "Sütlü geleneksel Osmanlı tatlısı.", price: 75, image: U("1488477181946-6428a0291777"), badge: "" },
      { catIdx: 6, name: "Revani", desc: "Şerbetli irmik tatlısı, kaymak ile.", price: 80, image: U("1576618148400-f54bed99fcfd"), badge: "new" },
      { catIdx: 6, name: "İrmik Helvası", desc: "Tereyağlı irmik helvası.", price: 65, image: U("1576618148400-f54bed99fcfd"), badge: "" },
      { catIdx: 6, name: "Trileçe", desc: "Üç sütlü ıslak kek.", price: 80, image: U("1488477181946-6428a0291777"), badge: "" }
    ]
  },

  // ==========================================
  // 3. TATLICI / PASTANE  (55 ürün)
  // ==========================================
  {
    id: "patisserie", name: "Tatlıcı / Pastane", icon: "🍰",
    desc: "Pastane, tatlıcı, börekçi, fırın", theme: "rose-gold",
    site: { name: "Şeker", nameAccent: "Atölye", slogan: "Tatlı Anlar, Tatlı Lezzetler", logoIcon: "🍰" },
    hero: { badge: "✦ El Yapımı Tatlılar", title: "Hayatın En", titleAccent: "Tatlı", titleEnd: "Anları Burada", subtitle: "Her gün taze hazırlanan pastalar, börekler ve geleneksel tatlılarla özel anlarınıza lezzet katıyoruz.", bgImage: U("1517433670267-08bbd4be890f",1920) },
    about: { title: "Tatlı Hikâyemiz", paragraph1: "Nesilden nesile aktarılan tariflerimiz ve pastacılık tutkumuzla eşsiz lezzetler üretiyoruz.", paragraph2: "Özel günler için kişiye özel pasta siparişi alıyoruz. Her lokma sevgiyle hazırlanır.", image: U("1486427944544-d2c246c4df4e",800), features: [{ icon: "🎂", text: "Özel Gün Pastaları" }, { icon: "🧈", text: "Doğal Malzeme" }, { icon: "👩‍🍳", text: "Usta Pastacılar" }, { icon: "🎁", text: "Hediye Paketleme" }] },
    gallery: [U("1517433670267-08bbd4be890f",400), U("1578985545062-69928b1d9587",400), U("1486427944544-d2c246c4df4e",400), U("1565958011703-44f9829ba187",400), U("1499636136210-6f4ee915583e",400), U("1569864358642-9d1684040f43",400), U("1614707267537-b85aaf00c4b7",400), U("1598110750624-207050c4f28c",400)],
    categories: [
      { name: "Pastalar", desc: "Doğum günü, kutlama ve günlük pastalar", image: U("1578985545062-69928b1d9587",200), anchor: "pastalar" },
      { name: "Şerbetli Tatlılar", desc: "Baklava, künefe, tulumba, şöbiyet", image: U("1598110750624-207050c4f28c",200), anchor: "serbetli" },
      { name: "Sütlü Tatlılar", desc: "Sütlaç, kazandibi, profiterol", image: U("1488477181946-6428a0291777",200), anchor: "sutlu" },
      { name: "Kurabiye & Kek", desc: "Brownie, cookie, makaron, muffin", image: U("1499636136210-6f4ee915583e",200), anchor: "kurabiyeler" },
      { name: "Börekler & Poğaça", desc: "Su böreği, sigara böreği, poğaça", image: U("1604068549290-dea0e4a305ca",200), anchor: "borekler" },
      { name: "İçecekler", desc: "Çay, kahve, salep, limonata", image: U("1556679343-c7306c1976bc",200), anchor: "icecekler" }
    ],
    products: [
      // Pastalar (10)
      { catIdx: 0, name: "Çilekli Pasta", desc: "Taze çilekli kremalı pasta.", price: 450, image: U("1578985545062-69928b1d9587"), badge: "recommended", featured: true },
      { catIdx: 0, name: "Çikolatalı Pasta", desc: "Yoğun çikolata ganajlı.", price: 420, image: U("1578775887804-699de7086ff9"), badge: "recommended", featured: true },
      { catIdx: 0, name: "Red Velvet", desc: "Cream cheese kremalı.", price: 480, image: U("1614707267537-b85aaf00c4b7"), badge: "new", featured: true },
      { catIdx: 0, name: "Havuçlu Kek", desc: "Cevizli, kremalı kaplama.", price: 380, image: U("1621303837174-89787a7d4729"), badge: "" },
      { catIdx: 0, name: "Meyveli Pasta", desc: "Mevsim meyveli taze pasta.", price: 460, image: U("1578985545062-69928b1d9587"), badge: "seasonal" },
      { catIdx: 0, name: "Muzlu Pasta", desc: "Muz, krema ve pandispanya.", price: 400, image: U("1578775887804-699de7086ff9"), badge: "" },
      { catIdx: 0, name: "Cheesecake", desc: "New York usulü kremsi.", price: 100, image: U("1508737027454-e6454ef45afd"), badge: "recommended" },
      { catIdx: 0, name: "Lotus Pasta", desc: "Lotus bisküvili özel pasta.", price: 500, image: U("1578985545062-69928b1d9587"), badge: "new" },
      { catIdx: 0, name: "Pasta Dilimi (Günün)", desc: "Günlük değişen dilim.", price: 90, image: U("1578985545062-69928b1d9587"), badge: "" },
      { catIdx: 0, name: "Mini Pasta (2 kişilik)", desc: "2 kişilik mini pasta.", price: 250, image: U("1578775887804-699de7086ff9"), badge: "" },
      // Şerbetli (8)
      { catIdx: 1, name: "Baklava", desc: "Antep fıstıklı ince yufka.", price: 180, image: U("1598110750624-207050c4f28c"), badge: "recommended", featured: true },
      { catIdx: 1, name: "Künefe", desc: "Tel kadayıf, peynir, şerbet.", price: 130, image: U("1576618148400-f54bed99fcfd"), badge: "" },
      { catIdx: 1, name: "Şöbiyet", desc: "Kaymak dolgulu ince yufka.", price: 160, image: U("1598110750624-207050c4f28c"), badge: "new" },
      { catIdx: 1, name: "Tulumba", desc: "Çıtır kızartma, şerbetli.", price: 90, image: U("1576618148400-f54bed99fcfd"), badge: "" },
      { catIdx: 1, name: "Burma Kadayıf", desc: "Fıstıklı burma kadayıf.", price: 150, image: U("1598110750624-207050c4f28c"), badge: "" },
      { catIdx: 1, name: "Lokma", desc: "Geleneksel lokma tatlısı.", price: 70, image: U("1576618148400-f54bed99fcfd"), badge: "" },
      { catIdx: 1, name: "Cevizli Baklava", desc: "Ceviz dolgulu baklava.", price: 160, image: U("1598110750624-207050c4f28c"), badge: "" },
      { catIdx: 1, name: "Dürüm Baklava", desc: "Rulo şeklinde baklava.", price: 170, image: U("1598110750624-207050c4f28c"), badge: "new" },
      // Sütlü (7)
      { catIdx: 2, name: "Sütlaç", desc: "Fırında kızarmış.", price: 80, image: U("1488477181946-6428a0291777"), badge: "recommended" },
      { catIdx: 2, name: "Kazandibi", desc: "Karamelize sütlü tatlı.", price: 80, image: U("1571877227200-a0d98ea607e9"), badge: "" },
      { catIdx: 2, name: "Profiterol", desc: "Çikolata soslu kremalı.", price: 100, image: U("1612203985729-70726954388c"), badge: "new", featured: true },
      { catIdx: 2, name: "Trileçe", desc: "Üç sütlü ıslak kek.", price: 85, image: U("1488477181946-6428a0291777"), badge: "" },
      { catIdx: 2, name: "Supangle", desc: "Çikolatalı sütlü puding.", price: 70, image: U("1571877227200-a0d98ea607e9"), badge: "" },
      { catIdx: 2, name: "Magnolia", desc: "Hafif kremsi magnolia.", price: 75, image: U("1488477181946-6428a0291777"), badge: "" },
      { catIdx: 2, name: "Panna Cotta", desc: "Vanilyalı İtalyan tatlısı.", price: 85, image: U("1488477181946-6428a0291777"), badge: "new" },
      // Kurabiye & Kek (10)
      { catIdx: 3, name: "Kurabiye Kutusu (500g)", desc: "Karışık el yapımı.", price: 220, image: U("1499636136210-6f4ee915583e"), badge: "recommended" },
      { catIdx: 3, name: "Brownie (4'lü)", desc: "Yoğun çikolatalı.", price: 160, image: U("1564355808539-22fda35bed7e"), badge: "" },
      { catIdx: 3, name: "Makaron (6'lı)", desc: "Renkli Fransız makaronları.", price: 200, image: U("1569864358642-9d1684040f43"), badge: "new", featured: true },
      { catIdx: 3, name: "Kuru Pasta (kg)", desc: "Karışık kuru pasta.", price: 300, image: U("1499636136210-6f4ee915583e"), badge: "" },
      { catIdx: 3, name: "Muffin (4'lü)", desc: "Çikolata veya meyveli.", price: 120, image: U("1614707267537-b85aaf00c4b7"), badge: "" },
      { catIdx: 3, name: "Tiramisu", desc: "Porsiyonluk İtalyan tiramisu.", price: 95, image: U("1571877227200-a0d98ea607e9"), badge: "" },
      { catIdx: 3, name: "Cookie (3'lü)", desc: "Çikolata parçalı yumuşak.", price: 65, image: U("1499636136210-6f4ee915583e"), badge: "" },
      { catIdx: 3, name: "Kek Dilimi", desc: "Günün taze kek dilimi.", price: 55, image: U("1621303837174-89787a7d4729"), badge: "" },
      { catIdx: 3, name: "Energy Ball (5'li)", desc: "Hurma, fındık, kakao.", price: 90, image: U("1499636136210-6f4ee915583e"), badge: "new" },
      { catIdx: 3, name: "Waffle", desc: "Çikolata ve meyve ile.", price: 110, image: U("1562376552-0d160a2f238d"), badge: "" },
      // Börekler (8)
      { catIdx: 4, name: "Su Böreği", desc: "El açması, peynirli.", price: 120, image: U("1604068549290-dea0e4a305ca"), badge: "recommended" },
      { catIdx: 4, name: "Sigara Böreği (5)", desc: "Çıtır peynirli.", price: 90, image: U("1519864600265-abb23847ef2c"), badge: "" },
      { catIdx: 4, name: "Ispanaklı Börek", desc: "Ispanaklı el açması.", price: 110, image: U("1604068549290-dea0e4a305ca"), badge: "" },
      { catIdx: 4, name: "Patatesli Börek", desc: "Patatesli kaşarlı puf.", price: 100, image: U("1519864600265-abb23847ef2c"), badge: "new" },
      { catIdx: 4, name: "Peynirli Poğaça (3)", desc: "Kaşarlı poğaça.", price: 60, image: U("1604068549290-dea0e4a305ca"), badge: "" },
      { catIdx: 4, name: "Zeytinli Poğaça (3)", desc: "Zeytinli poğaça.", price: 60, image: U("1604068549290-dea0e4a305ca"), badge: "" },
      { catIdx: 4, name: "Açma (3 adet)", desc: "Yumuşak açma.", price: 45, image: U("1555507036-ab1f4038024a"), badge: "" },
      { catIdx: 4, name: "Simit", desc: "Taze fırın simit.", price: 20, image: U("1555507036-ab1f4038024a"), badge: "" },
      // İçecekler (5)
      { catIdx: 5, name: "Türk Çayı", desc: "Demlik çay.", price: 25, image: U("1571934811356-5cc061b6821f"), badge: "" },
      { catIdx: 5, name: "Sahlep", desc: "Tarçınlı sıcak salep.", price: 55, image: U("1597318181409-cf64d0b5d8a2"), badge: "seasonal" },
      { catIdx: 5, name: "Filtre Kahve", desc: "Taze demlenmiş.", price: 50, image: U("1509042239860-f550ce710b93"), badge: "" },
      { catIdx: 5, name: "Türk Kahvesi", desc: "Geleneksel Türk kahvesi.", price: 45, image: U("1514432324607-a09d9b4aefda"), badge: "" },
      { catIdx: 5, name: "Limonata", desc: "Ev yapımı limonata.", price: 40, image: U("1621263764928-df1444c5e859"), badge: "" }
    ]
  },

  // ==========================================
  // 4. FAST FOOD / BURGER  (50 ürün)
  // ==========================================
  {
    id: "fastfood", name: "Fast Food / Burger", icon: "🍔",
    desc: "Hamburgerci, fast food, sokak lezzetleri", theme: "charcoal-ember",
    site: { name: "Burger", nameAccent: "Lab", slogan: "Gerçek Et, Gerçek Lezzet", logoIcon: "🍔" },
    hero: { badge: "🔥 Ateşten Lezzetler", title: "Lezzetin", titleAccent: "Formülü", titleEnd: "Burada", subtitle: "El yapımı köfteler, özel soslar ve taze malzemelerle hazırlanan burgerler.", bgImage: U("1561758033-d89a9ad46330",1920) },
    about: { title: "Farkımız Ne?", paragraph1: "Günlük çekilmiş dana etinden hazırlanan köftelerimiz, özel soslarımız ve taze ekmeklerimizle fark yaratıyoruz.", paragraph2: "Patateslerimizi taze keser, soslarımızı mutfağımızda üretiriz.", image: U("1550547660-d9450f859349",800), features: [{ icon: "🥩", text: "%100 Dana Et" }, { icon: "🍞", text: "Günlük Ekmek" }, { icon: "🧪", text: "Özel Soslar" }, { icon: "🚀", text: "Hızlı Servis" }] },
    gallery: [U("1561758033-d89a9ad46330",400), U("1550547660-d9450f859349",400), U("1568901346375-23c9450c58cd",400), U("1553979459-d2229ba7433b",400), U("1594212699903-ec8a3eca50f5",400), U("1630384060421-cb20aff8093b",400), U("1572490122747-3968b75cc699",400), U("1562967914-608f82629710",400)],
    categories: [
      { name: "Burgerler", desc: "Klasik, özel ve gurme çeşitler", image: U("1568901346375-23c9450c58cd",200), anchor: "burgerler" },
      { name: "Wrap & Dürüm", desc: "Tavuk wrap, döner dürüm", image: U("1626700051175-6818013e1d4f",200), anchor: "wrap" },
      { name: "Yan Ürünler", desc: "Patates, nugget, soğan halkası", image: U("1630384060421-cb20aff8093b",200), anchor: "yan-urunler" },
      { name: "Menüler", desc: "Burger + patates + içecek", image: U("1568901346375-23c9450c58cd",200), anchor: "menuler" },
      { name: "İçecekler", desc: "Milkshake, kola, limonata", image: U("1572490122747-3968b75cc699",200), anchor: "icecekler" },
      { name: "Tatlılar", desc: "Brownie, cookie, waffle", image: U("1564355808539-22fda35bed7e",200), anchor: "tatlilar" }
    ],
    products: [
      // Burgerler (12)
      { catIdx: 0, name: "Klasik Burger", desc: "Dana köfte, marul, domates, turşu.", price: 150, image: U("1568901346375-23c9450c58cd"), badge: "recommended", featured: true },
      { catIdx: 0, name: "Double Smash", desc: "Çift smash köfte, cheddar.", price: 200, image: U("1553979459-d2229ba7433b"), badge: "recommended", featured: true },
      { catIdx: 0, name: "BBQ Burger", desc: "Bacon, BBQ sos, karamelize soğan.", price: 190, image: U("1594212699903-ec8a3eca50f5"), badge: "new", featured: true },
      { catIdx: 0, name: "Chicken Burger", desc: "Çıtır tavuk, ranch sos.", price: 160, image: U("1606755962773-d324e0a13086"), badge: "" },
      { catIdx: 0, name: "Mushroom Swiss", desc: "Mantar sote, İsviçre peyniri.", price: 185, image: U("1572802419224-296b0aeee0d9"), badge: "" },
      { catIdx: 0, name: "Veggie Burger", desc: "Nohut köftesi, avokado.", price: 140, image: U("1520072959219-c595e6cdc722"), badge: "new" },
      { catIdx: 0, name: "Bacon Lover", desc: "Çift bacon, cheddar, füme sos.", price: 210, image: U("1553979459-d2229ba7433b"), badge: "" },
      { catIdx: 0, name: "Spicy Burger", desc: "Jalapeno, pepper jack, acı sos.", price: 180, image: U("1568901346375-23c9450c58cd"), badge: "" },
      { catIdx: 0, name: "Triple Stack", desc: "Üçlü köfte, üçlü peynir.", price: 260, image: U("1553979459-d2229ba7433b"), badge: "" },
      { catIdx: 0, name: "Fish Burger", desc: "Çıtır balık, tartar sos.", price: 170, image: U("1606755962773-d324e0a13086"), badge: "" },
      { catIdx: 0, name: "Truffle Burger", desc: "Trüf mantarlı, parmesan.", price: 230, image: U("1572802419224-296b0aeee0d9"), badge: "new" },
      { catIdx: 0, name: "Kids Burger", desc: "Küçük boy, çocuklara özel.", price: 100, image: U("1568901346375-23c9450c58cd"), badge: "" },
      // Wrap & Dürüm (6)
      { catIdx: 1, name: "Tavuk Wrap", desc: "Izgara tavuk, marul, sos.", price: 120, image: U("1626700051175-6818013e1d4f"), badge: "recommended" },
      { catIdx: 1, name: "Döner Dürüm", desc: "Dana döner, lavaş.", price: 130, image: U("1626700051175-6818013e1d4f"), badge: "" },
      { catIdx: 1, name: "Falafel Wrap", desc: "Falafel, humus, sebze.", price: 110, image: U("1626700051175-6818013e1d4f"), badge: "new" },
      { catIdx: 1, name: "Crispy Chicken Wrap", desc: "Çıtır tavuk, ranch.", price: 130, image: U("1626700051175-6818013e1d4f"), badge: "" },
      { catIdx: 1, name: "Steak Wrap", desc: "Biftek şerit, karamelize soğan.", price: 160, image: U("1626700051175-6818013e1d4f"), badge: "" },
      { catIdx: 1, name: "Veggie Wrap", desc: "Avokado, sebze, humus.", price: 100, image: U("1626700051175-6818013e1d4f"), badge: "" },
      // Yan Ürünler (8)
      { catIdx: 2, name: "Patates Kızartması", desc: "Taze kesilmiş, çıtır.", price: 55, image: U("1630384060421-cb20aff8093b"), badge: "" },
      { catIdx: 2, name: "Soğan Halkası", desc: "Çıtır kaplamalı.", price: 65, image: U("1639024471283-03518883512d"), badge: "" },
      { catIdx: 2, name: "Nugget (8'li)", desc: "Çıtır tavuk nugget.", price: 80, image: U("1562967914-608f82629710"), badge: "recommended", featured: true },
      { catIdx: 2, name: "Mozzarella Sticks", desc: "Kızartılmış mozzarella.", price: 75, oldPrice: 90, image: U("1531749668029-2db88e4276c7"), badge: "discount" },
      { catIdx: 2, name: "Chili Cheese Fries", desc: "Chili sos, cheddar.", price: 90, image: U("1630384060421-cb20aff8093b"), badge: "new" },
      { catIdx: 2, name: "Coleslaw", desc: "Ev yapımı lahana salatası.", price: 35, image: U("1540420773420-3366772f4999"), badge: "" },
      { catIdx: 2, name: "Tatlı Patates", desc: "Çıtır tatlı patates.", price: 65, image: U("1630384060421-cb20aff8093b"), badge: "" },
      { catIdx: 2, name: "Corn Dog (2'li)", desc: "Sosisli mısır çubuk.", price: 70, image: U("1562967914-608f82629710"), badge: "" },
      // Menüler (6)
      { catIdx: 3, name: "Klasik Menü", desc: "Klasik Burger + Patates + İçecek.", price: 200, image: U("1568901346375-23c9450c58cd"), badge: "recommended", featured: true },
      { catIdx: 3, name: "Double Menü", desc: "Double Smash + Patates + İçecek.", price: 260, image: U("1553979459-d2229ba7433b"), badge: "" },
      { catIdx: 3, name: "Chicken Menü", desc: "Chicken Burger + Patates + İçecek.", price: 210, image: U("1606755962773-d324e0a13086"), badge: "" },
      { catIdx: 3, name: "BBQ Menü", desc: "BBQ Burger + Soğan Halkası + İçecek.", price: 250, image: U("1594212699903-ec8a3eca50f5"), badge: "new" },
      { catIdx: 3, name: "Kids Menü", desc: "Kids Burger + Nugget + Meyve Suyu.", price: 150, image: U("1568901346375-23c9450c58cd"), badge: "" },
      { catIdx: 3, name: "Mega Menü", desc: "Triple Stack + Patates + Milkshake.", price: 340, image: U("1553979459-d2229ba7433b"), badge: "" },
      // İçecekler (7)
      { catIdx: 4, name: "Milkshake", desc: "Çikolata, çilek veya vanilya.", price: 70, image: U("1572490122747-3968b75cc699"), badge: "recommended", featured: true },
      { catIdx: 4, name: "Oreo Milkshake", desc: "Oreo parçalı özel.", price: 80, image: U("1572490122747-3968b75cc699"), badge: "new" },
      { catIdx: 4, name: "Ice Tea", desc: "Şeftali veya limon.", price: 40, image: U("1556679343-c7306c1976bc"), badge: "" },
      { catIdx: 4, name: "Limonata", desc: "Ev yapımı taze.", price: 45, image: U("1621263764928-df1444c5e859"), badge: "" },
      { catIdx: 4, name: "Coca Cola", desc: "330ml kutu.", price: 30, image: U("1554866585-cd94860890b7"), badge: "" },
      { catIdx: 4, name: "Fanta / Sprite", desc: "330ml kutu.", price: 30, image: U("1554866585-cd94860890b7"), badge: "" },
      { catIdx: 4, name: "Su (500ml)", desc: "Doğal kaynak suyu.", price: 10, image: U("1554866585-cd94860890b7"), badge: "" },
      // Tatlılar (5)
      { catIdx: 5, name: "Brownie Sundae", desc: "Sıcak brownie, dondurma.", price: 95, image: U("1564355808539-22fda35bed7e"), badge: "new" },
      { catIdx: 5, name: "Cookie", desc: "Dev boy çikolata parçalı.", price: 50, image: U("1499636136210-6f4ee915583e"), badge: "" },
      { catIdx: 5, name: "Cheesecake", desc: "New York usulü dilim.", price: 85, image: U("1508737027454-e6454ef45afd"), badge: "recommended" },
      { catIdx: 5, name: "Waffle", desc: "Çikolata sos, meyve, dondurma.", price: 90, image: U("1562376552-0d160a2f238d"), badge: "" },
      { catIdx: 5, name: "Churros (5'li)", desc: "Çikolata dip sos ile.", price: 75, image: U("1564355808539-22fda35bed7e"), badge: "new" }
    ]
  },

  // ==========================================
  // 5. PİZZACI  (50 ürün)
  // ==========================================
  {
    id: "pizzeria", name: "Pizzacı", icon: "🍕",
    desc: "Pizza, İtalyan mutfağı, pizzeria", theme: "coral-reef",
    site: { name: "Pizza", nameAccent: "Forno", slogan: "Taş Fırından Sofranıza", logoIcon: "🍕" },
    hero: { badge: "🇮🇹 Otantik İtalyan Lezzeti", title: "Taş Fırından", titleAccent: "Taze", titleEnd: "Pizza", subtitle: "İtalya'dan ithal malzemeler ve odun ateşinde pişirme ile gerçek Napoli pizzası.", bgImage: U("1513104890138-7c749659a591",1920) },
    about: { title: "La Nostra Storia", paragraph1: "Geleneksel Napoli tarifiyle her pizzamızı taş fırında özenle pişiriyoruz.", paragraph2: "Hamurumuz 48 saat dinlendirilir, malzemeler her gün taze gelir.", image: U("1579751626657-72bc17010498",800), features: [{ icon: "🔥", text: "Taş Fırın" }, { icon: "🧀", text: "İthal Malzeme" }, { icon: "⏰", text: "48 Saat Hamur" }, { icon: "🇮🇹", text: "Napoli Tarifi" }] },
    gallery: [U("1513104890138-7c749659a591",400), U("1574071318508-1cdbab80d002",400), U("1565299624946-b28f40a0ae38",400), U("1579751626657-72bc17010498",400), U("1563379926898-05f4575a45d8",400), U("1541014741259-de529411b96a",400), U("1628840042765-356cda07504e",400), U("1594007654729-407eedc4be65",400)],
    categories: [
      { name: "Klasik Pizzalar", desc: "Margherita, pepperoni, klasik çeşitler", image: U("1574071318508-1cdbab80d002",200), anchor: "klasik" },
      { name: "Özel Pizzalar", desc: "Gurme ve şef özel tarifleri", image: U("1565299624946-b28f40a0ae38",200), anchor: "ozel" },
      { name: "Makarnalar", desc: "Spagetti, penne, lazanya", image: U("1563379926898-05f4575a45d8",200), anchor: "makarnalar" },
      { name: "Başlangıçlar & Salata", desc: "Bruschetta, caprese, salata", image: U("1541014741259-de529411b96a",200), anchor: "baslangiclar" },
      { name: "İçecekler & Tatlı", desc: "Limonata, tiramisu, panna cotta", image: U("1571877227200-a0d98ea607e9",200), anchor: "icecek-tatli" }
    ],
    products: [
      // Klasik (10)
      { catIdx: 0, name: "Margherita", desc: "Domates sos, mozzarella, fesleğen.", price: 140, image: U("1574071318508-1cdbab80d002"), badge: "recommended", featured: true },
      { catIdx: 0, name: "Pepperoni", desc: "Domates sos, mozzarella, pepperoni.", price: 160, image: U("1628840042765-356cda07504e"), badge: "recommended", featured: true },
      { catIdx: 0, name: "Quattro Formaggi", desc: "4 peynir: mozzarella, gorgonzola, parmesan, ricotta.", price: 175, image: U("1513104890138-7c749659a591"), badge: "" },
      { catIdx: 0, name: "Funghi", desc: "Mantar, mozzarella, sarımsak yağı.", price: 155, image: U("1565299624946-b28f40a0ae38"), badge: "" },
      { catIdx: 0, name: "Prosciutto", desc: "Parma jambonu, roka, parmesan.", price: 190, image: U("1574071318508-1cdbab80d002"), badge: "" },
      { catIdx: 0, name: "Napolitana", desc: "Domates, ançüez, kapari, zeytin.", price: 160, image: U("1565299624946-b28f40a0ae38"), badge: "" },
      { catIdx: 0, name: "Vegetariana", desc: "Mevsim sebzeleri, zeytin.", price: 150, image: U("1574071318508-1cdbab80d002"), badge: "" },
      { catIdx: 0, name: "Hawaii", desc: "Jambon, ananas, mozzarella.", price: 155, image: U("1565299624946-b28f40a0ae38"), badge: "" },
      { catIdx: 0, name: "Diavola", desc: "Acı salam, biber, mozzarella.", price: 165, image: U("1628840042765-356cda07504e"), badge: "" },
      { catIdx: 0, name: "Tonno", desc: "Ton balığı, soğan, mısır.", price: 160, image: U("1574071318508-1cdbab80d002"), badge: "" },
      // Özel (8)
      { catIdx: 1, name: "BBQ Tavuk", desc: "BBQ sos, tavuk, karamelize soğan.", price: 180, image: U("1594007654729-407eedc4be65"), badge: "new", featured: true },
      { catIdx: 1, name: "Truffle Pizza", desc: "Trüf mantarlı, parmesan, roka.", price: 220, image: U("1571407970349-bc81e7e96d47"), badge: "seasonal", featured: true },
      { catIdx: 1, name: "Döner Pizza", desc: "Döner et, soğan, domates.", price: 175, image: U("1565299624946-b28f40a0ae38"), badge: "new" },
      { catIdx: 1, name: "Sucuklu Pizza", desc: "Sucuk, kaşar, biber.", price: 165, image: U("1628840042765-356cda07504e"), badge: "" },
      { catIdx: 1, name: "Calzone", desc: "Kapalı pizza, jambon, mantar.", price: 170, image: U("1513104890138-7c749659a591"), badge: "" },
      { catIdx: 1, name: "Burrata Pizza", desc: "Taze burrata, cherry domates.", price: 200, image: U("1574071318508-1cdbab80d002"), badge: "new" },
      { catIdx: 1, name: "Pesto Chicken", desc: "Pesto sos, tavuk, mozzarella.", price: 185, image: U("1594007654729-407eedc4be65"), badge: "" },
      { catIdx: 1, name: "Four Seasons", desc: "4 bölüm: mantar, zeytin, jambon, enginar.", price: 180, image: U("1565299624946-b28f40a0ae38"), badge: "" },
      // Makarnalar (8)
      { catIdx: 2, name: "Spaghetti Bolognese", desc: "Kıymalı domates soslu.", price: 130, image: U("1563379926898-05f4575a45d8"), badge: "recommended" },
      { catIdx: 2, name: "Penne Arrabiata", desc: "Acılı domates soslu.", price: 120, image: U("1608219992759-8d74ed8d76eb"), badge: "" },
      { catIdx: 2, name: "Fettuccine Alfredo", desc: "Kremalı parmesan soslu.", price: 140, image: U("1563379926898-05f4575a45d8"), badge: "" },
      { catIdx: 2, name: "Lazanya", desc: "Fırında kıymalı, beşamelli.", price: 145, image: U("1574484284002-952d92456975"), badge: "recommended" },
      { catIdx: 2, name: "Penne al Pesto", desc: "Fesleğen pesto soslu.", price: 125, image: U("1608219992759-8d74ed8d76eb"), badge: "new" },
      { catIdx: 2, name: "Ravioli", desc: "Peynirli ravioli, krem sos.", price: 140, image: U("1563379926898-05f4575a45d8"), badge: "" },
      { catIdx: 2, name: "Carbonara", desc: "Yumurta, guanciale, parmesan.", price: 135, image: U("1563379926898-05f4575a45d8"), badge: "" },
      { catIdx: 2, name: "Spaghetti Vongole", desc: "Midyeli beyaz şarap soslu.", price: 155, image: U("1563379926898-05f4575a45d8"), badge: "" },
      // Başlangıçlar (8)
      { catIdx: 3, name: "Bruschetta", desc: "Kızarmış ekmek, domates, fesleğen.", price: 75, image: U("1541014741259-de529411b96a"), badge: "" },
      { catIdx: 3, name: "Caprese", desc: "Taze mozzarella, domates.", price: 95, image: U("1592417817098-8fd3d9eb14a5"), badge: "recommended", featured: true },
      { catIdx: 3, name: "Sarımsaklı Ekmek", desc: "Tereyağlı sarımsak ekmek.", price: 55, image: U("1541014741259-de529411b96a"), badge: "" },
      { catIdx: 3, name: "Çıtır Kalamar", desc: "Limon ve aioli sos ile.", price: 110, image: U("1565680018434-b513d5e5fd47"), badge: "" },
      { catIdx: 3, name: "Sezar Salata", desc: "Tavuk, marul, parmesan.", price: 100, image: U("1512621776951-a57141f2eefd"), badge: "" },
      { catIdx: 3, name: "Akdeniz Salata", desc: "Yeşillik, zeytin, feta.", price: 80, image: U("1540420773420-3366772f4999"), badge: "" },
      { catIdx: 3, name: "Minestrone", desc: "İtalyan sebze çorbası.", price: 70, image: U("1547592166-23ac45744acd"), badge: "" },
      { catIdx: 3, name: "Carpaccio", desc: "İnce dilimlenmiş dana, roka.", price: 130, image: U("1541014741259-de529411b96a"), badge: "new" },
      // İçecek & Tatlı (8)
      { catIdx: 4, name: "Limonata", desc: "Ev yapımı taze limonata.", price: 45, image: U("1621263764928-df1444c5e859"), badge: "" },
      { catIdx: 4, name: "Tiramisu", desc: "Klasik İtalyan tiramisu.", price: 95, image: U("1571877227200-a0d98ea607e9"), badge: "recommended" },
      { catIdx: 4, name: "Panna Cotta", desc: "Vanilyalı panna cotta.", price: 85, image: U("1488477181946-6428a0291777"), badge: "new" },
      { catIdx: 4, name: "Espresso", desc: "Tek shot İtalyan espresso.", price: 45, image: U("1510707577719-ae7c14805e3a"), badge: "" },
      { catIdx: 4, name: "Cappuccino", desc: "Klasik İtalyan cappuccino.", price: 65, image: U("1534778101976-62847782c213"), badge: "" },
      { catIdx: 4, name: "San Pellegrino", desc: "İtalyan gazlı mineral su.", price: 55, image: U("1558642452-9d2a7deb7f62"), badge: "" },
      { catIdx: 4, name: "Affogato", desc: "Dondurma üzerine espresso.", price: 80, image: U("1572442388796-11668a67e53d"), badge: "" },
      { catIdx: 4, name: "Gelato (2 top)", desc: "İtalyan el yapımı dondurma.", price: 70, image: U("1488477181946-6428a0291777"), badge: "new" }
    ]
  },

  // ==========================================
  // 6. BALIK RESTORAN  (50 ürün)
  // ==========================================
  {
    id: "seafood", name: "Balık Restoran", icon: "🐟",
    desc: "Balık restoran, deniz ürünleri, meyhane", theme: "ocean-breeze",
    site: { name: "Mavi", nameAccent: "Balık", slogan: "Denizden Sofraya Tazelik", logoIcon: "🐟" },
    hero: { badge: "🌊 Günlük Taze Balık", title: "Denizin", titleAccent: "Lezzeti", titleEnd: "Sofranızda", subtitle: "Her gün balıkçılardan taze gelen balıklar ve eşsiz meze çeşitleri.", bgImage: U("1534604973900-c43ab4c2e0ab",1920) },
    about: { title: "Deniz Hikâyemiz", paragraph1: "Her sabah balık halinden seçtiğimiz taze balıkları ustalarımızın elinden sofranıza sunuyoruz.", paragraph2: "Ege ve Akdeniz meze kültürünü yaşatan mekanımızda denizin tadını çıkarın.", image: U("1559339352-11d035aa65de",800), features: [{ icon: "🐟", text: "Günlük Taze" }, { icon: "🌊", text: "Deniz Manzarası" }, { icon: "🍷", text: "Seçkin Şaraplar" }, { icon: "👨‍🍳", text: "Usta Şefler" }] },
    gallery: [U("1534604973900-c43ab4c2e0ab",400), U("1559339352-11d035aa65de",400), U("1519708227418-c8fd9a32b7a2",400), U("1565680018434-b513d5e5fd47",400), U("1580476262798-bddd9f4b7369",400), U("1625944525533-473f1a3d54e7",400), U("1544145945-f90425340c7e",400), U("1606850246029-56e652e44428",400)],
    categories: [
      { name: "Soğuk Mezeler", desc: "Zeytinyağlılar, ot çeşitleri", image: U("1625944525533-473f1a3d54e7",200), anchor: "soguk-meze" },
      { name: "Sıcak Mezeler", desc: "Karides güveç, kalamar, midye", image: U("1565680018434-b513d5e5fd47",200), anchor: "sicak-meze" },
      { name: "Balıklar", desc: "Izgarada veya tavada taze balık", image: U("1534604973900-c43ab4c2e0ab",200), anchor: "baliklar" },
      { name: "Deniz Ürünleri", desc: "Karides, kalamar, ahtapot", image: U("1565680018434-b513d5e5fd47",200), anchor: "deniz-urunleri" },
      { name: "Salatalar", desc: "Deniz ürünlü ve mevsim salataları", image: U("1512621776951-a57141f2eefd",200), anchor: "salatalar" },
      { name: "İçecekler", desc: "Rakı, şarap, meşrubat", image: U("1544145945-f90425340c7e",200), anchor: "icecekler" }
    ],
    products: [
      // Soğuk Mezeler (10)
      { catIdx: 0, name: "Deniz Börülcesi", desc: "Zeytinyağlı taze deniz börülcesi.", price: 75, image: U("1625944525533-473f1a3d54e7"), badge: "recommended", featured: true },
      { catIdx: 0, name: "Humus", desc: "Tahinli nohut ezmesi.", price: 70, image: U("1577805947697-89e18249d767"), badge: "" },
      { catIdx: 0, name: "Atom", desc: "Acılı domates ezmesi.", price: 65, image: U("1540189549336-e6e99c3679fe"), badge: "" },
      { catIdx: 0, name: "Fava", desc: "Ezilmiş bakla, dereotu.", price: 65, image: U("1540189549336-e6e99c3679fe"), badge: "" },
      { catIdx: 0, name: "Tarama", desc: "Balık yumurtası ezmesi.", price: 85, image: U("1577805947697-89e18249d767"), badge: "" },
      { catIdx: 0, name: "Haydari", desc: "Süzme yoğurt, sarımsak, dereotu.", price: 60, image: U("1577805947697-89e18249d767"), badge: "" },
      { catIdx: 0, name: "Ahtapot Salata", desc: "Haşlanmış ahtapot, zeytinyağı.", price: 130, image: U("1625944525533-473f1a3d54e7"), badge: "new" },
      { catIdx: 0, name: "Babagannuş", desc: "Közlenmiş patlıcan ezmesi.", price: 60, image: U("1540189549336-e6e99c3679fe"), badge: "" },
      { catIdx: 0, name: "Yoğurtlu Semizotu", desc: "Semizotu, yoğurt, sarımsak.", price: 55, image: U("1540189549336-e6e99c3679fe"), badge: "" },
      { catIdx: 0, name: "Çiroz", desc: "Kurutulmuş uskumru, soğan.", price: 90, image: U("1625944525533-473f1a3d54e7"), badge: "" },
      // Sıcak Mezeler (7)
      { catIdx: 1, name: "Karidesli Güveç", desc: "Tereyağlı karides güveç.", price: 140, image: U("1565680018434-b513d5e5fd47"), badge: "recommended", featured: true },
      { catIdx: 1, name: "Midye Tava", desc: "Çıtır kaplamalı midye.", price: 110, image: U("1606850246029-56e652e44428"), badge: "" },
      { catIdx: 1, name: "Kalamar Tava", desc: "Çıtır kalamar halkası.", price: 120, image: U("1565680018434-b513d5e5fd47"), badge: "" },
      { catIdx: 1, name: "Karides Sote", desc: "Tereyağlı sarımsaklı karides.", price: 150, image: U("1565680018434-b513d5e5fd47"), badge: "" },
      { catIdx: 1, name: "Böcek (Deniz Tarağı)", desc: "Tereyağlı fırında böcek.", price: 160, image: U("1565680018434-b513d5e5fd47"), badge: "new" },
      { catIdx: 1, name: "Levrek Ceviche", desc: "Limon marine levrek.", price: 120, image: U("1534604973900-c43ab4c2e0ab"), badge: "new" },
      { catIdx: 1, name: "Balık Köfte", desc: "El yapımı balık köftesi.", price: 100, image: U("1559339352-11d035aa65de"), badge: "" },
      // Balıklar (10)
      { catIdx: 2, name: "Levrek Izgara", desc: "Günlük taze levrek.", price: 280, image: U("1534604973900-c43ab4c2e0ab"), badge: "recommended", featured: true },
      { catIdx: 2, name: "Çipura Izgara", desc: "Taze çipura, limon, roka.", price: 260, image: U("1580476262798-bddd9f4b7369"), badge: "" },
      { catIdx: 2, name: "Hamsi Tava", desc: "Mevsim hamsi, mısır unlu.", price: 150, image: U("1559339352-11d035aa65de"), badge: "seasonal", featured: true },
      { catIdx: 2, name: "Somon Izgara", desc: "Teriyaki soslu somon.", price: 300, image: U("1519708227418-c8fd9a32b7a2"), badge: "new" },
      { catIdx: 2, name: "Lüfer Izgara", desc: "Mevsim lüferi.", price: 320, image: U("1534604973900-c43ab4c2e0ab"), badge: "seasonal" },
      { catIdx: 2, name: "Palamut Izgara", desc: "Taze palamut.", price: 200, image: U("1580476262798-bddd9f4b7369"), badge: "" },
      { catIdx: 2, name: "Balık Buğulama", desc: "Sebzeli hafif pişmiş balık.", price: 250, image: U("1559339352-11d035aa65de"), badge: "" },
      { catIdx: 2, name: "Dil Balığı", desc: "Tavada tereyağlı dil balığı.", price: 280, image: U("1534604973900-c43ab4c2e0ab"), badge: "" },
      { catIdx: 2, name: "Sardalya Tava", desc: "Çıtır sardalya tava.", price: 130, image: U("1559339352-11d035aa65de"), badge: "" },
      { catIdx: 2, name: "Balık Şiş", desc: "Marine balık şiş.", price: 200, image: U("1534604973900-c43ab4c2e0ab"), badge: "" },
      // Deniz Ürünleri (7)
      { catIdx: 3, name: "Kalamar Izgara", desc: "Izgarada bütün kalamar.", price: 180, image: U("1565680018434-b513d5e5fd47"), badge: "recommended", featured: true },
      { catIdx: 3, name: "Midye Dolma (10)", desc: "Pirinçli İstanbul midyesi.", price: 100, image: U("1606850246029-56e652e44428"), badge: "" },
      { catIdx: 3, name: "Jumbo Karides", desc: "Tereyağlı sarımsaklı jumbo.", price: 240, image: U("1565680018434-b513d5e5fd47"), badge: "new" },
      { catIdx: 3, name: "Deniz Mahsulleri Tabağı", desc: "Karışık deniz ürünleri.", price: 350, image: U("1534604973900-c43ab4c2e0ab"), badge: "recommended" },
      { catIdx: 3, name: "Karides Güveç", desc: "Domates soslu karides.", price: 180, image: U("1565680018434-b513d5e5fd47"), badge: "" },
      { catIdx: 3, name: "Ahtapot Izgara", desc: "Marineli ahtapot ızgara.", price: 200, image: U("1565680018434-b513d5e5fd47"), badge: "" },
      { catIdx: 3, name: "Istakoz (kg fiyat)", desc: "Izgarada taze istakoz.", price: 800, image: U("1534604973900-c43ab4c2e0ab"), badge: "seasonal" },
      // Salatalar (5)
      { catIdx: 4, name: "Akdeniz Salata", desc: "Yeşillik, zeytin, peynir.", price: 80, image: U("1512621776951-a57141f2eefd"), badge: "" },
      { catIdx: 4, name: "Karidesli Salata", desc: "Izgara karides, roka.", price: 140, image: U("1512621776951-a57141f2eefd"), badge: "recommended" },
      { catIdx: 4, name: "Mevsim Salata", desc: "Taze mevsim yeşillikleri.", price: 65, image: U("1540420773420-3366772f4999"), badge: "" },
      { catIdx: 4, name: "Roka Salata", desc: "Roka, parmesan, ceviz, nar.", price: 80, image: U("1512621776951-a57141f2eefd"), badge: "" },
      { catIdx: 4, name: "Çoban Salata", desc: "Domates, salatalık, biber.", price: 60, image: U("1540420773420-3366772f4999"), badge: "" },
      // İçecekler (7)
      { catIdx: 5, name: "Rakı (35cl)", desc: "Yeni Rakı veya Efe.", price: 200, image: U("1544145945-f90425340c7e"), badge: "" },
      { catIdx: 5, name: "Beyaz Şarap", desc: "Soğutulmuş Türk şarabı.", price: 180, image: U("1544145945-f90425340c7e"), badge: "recommended" },
      { catIdx: 5, name: "Ev Limonatası", desc: "Naneli taze limonata.", price: 50, image: U("1621263764928-df1444c5e859"), badge: "" },
      { catIdx: 5, name: "Şalgam", desc: "Acılı veya acısız.", price: 30, image: U("1544145945-f90425340c7e"), badge: "" },
      { catIdx: 5, name: "Türk Çayı", desc: "Demlik çay.", price: 20, image: U("1571934811356-5cc061b6821f"), badge: "" },
      { catIdx: 5, name: "Kırmızı Şarap", desc: "Seçilmiş Türk kırmızı.", price: 180, image: U("1544145945-f90425340c7e"), badge: "" },
      { catIdx: 5, name: "Soda", desc: "Meyveli veya sade.", price: 25, image: U("1544145945-f90425340c7e"), badge: "" }
    ]
  }
];

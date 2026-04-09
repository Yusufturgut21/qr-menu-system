/* ========================================
   CAFE PROJESİ — BACKEND SERVER
   Express + JSON DB + Dosya Upload
   ======================================== */

const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const DB_FILE = path.join(__dirname, "db.json");
const UPLOADS_DIR = path.join(__dirname, "uploads");

// Uploads klasörü yoksa oluştur
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR);

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Statik dosyalar (HTML, CSS, JS, uploads)
app.use(express.static(__dirname));
app.use("/uploads", express.static(UPLOADS_DIR));

// Multer — dosya yükleme ayarları
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = Date.now() + "-" + Math.random().toString(36).substring(2, 8) + ext;
    cb(null, name);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp|svg/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    cb(null, ext && mime);
  }
});

// ===== VERİTABANI FONKSİYONLARI =====
function readDB() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("DB okuma hatası:", e.message);
  }
  return null;
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
}

// ===== API ENDPOINT'LERİ =====

// Tüm veriyi getir
app.get("/api/data", (req, res) => {
  const data = readDB();
  if (data) {
    res.json({ success: true, data });
  } else {
    res.json({ success: false, data: null });
  }
});

// Tüm veriyi kaydet
app.post("/api/data", (req, res) => {
  try {
    const data = req.body;
    if (!data || typeof data !== "object") {
      return res.status(400).json({ success: false, error: "Geçersiz veri" });
    }
    writeDB(data);
    console.log("✅ Veriler kaydedildi:", new Date().toLocaleTimeString());
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// Veriyi sıfırla (db.json sil)
app.post("/api/reset", (req, res) => {
  try {
    if (fs.existsSync(DB_FILE)) fs.unlinkSync(DB_FILE);
    console.log("🔄 Veriler sıfırlandı");
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// Görsel yükle
app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, error: "Dosya yüklenemedi" });
  }
  const url = "/uploads/" + req.file.filename;
  console.log("📷 Görsel yüklendi:", req.file.filename);
  res.json({ success: true, url });
});

// ===== SERVER BAŞLAT =====
app.listen(PORT, () => {
  console.log(`
  ☕ Cafe Projesi Server Çalışıyor!
  ─────────────────────────────────
  🌐 Ana Sayfa:    http://localhost:${PORT}/index.html
  📋 Dijital Menü: http://localhost:${PORT}/menu.html
  ⚙️  Admin Panel:  http://localhost:${PORT}/admin.html
  📡 API:          http://localhost:${PORT}/api/data
  ─────────────────────────────────
  `);
});

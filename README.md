# 🧠 Google Search Console Automation 🚀

## 🌍 Proje Hakkında
Bu proje, **Google Search Console** üzerinde site haritası (sitemap) gönderim sürecini **tamamen otomatikleştiren** bir **Chrome uzantısıdır.**  
Tarayıcı üzerinde **tek tıklamayla** sitemap’inizi ekler, butonlara otomatik tıklar ve işlemi sizin yerinize tamamlar.  

✅ Manuel işlem yok.  
✅ Kodlama bilgisi gerekmez.  
✅ Saniyeler içinde “sitemap.xml” dosyanız gönderilir.  

---

## ⚙️ Nasıl Çalışır?

1. 🧩 Uzantı simgesine tıklarsınız.  
2. 🔍 Uzantı, **Google Search Console** sayfasını otomatik olarak açar.  
3. 💡 “Site haritası URL’sini girin” alanını bulur ve **`sitemap.xml`** değerini yazar.  
4. 🖱️ “Gönder” butonuna otomatik olarak tıklar.  
5. ✅ 5 saniye sonra onay kutusunu kapatır ve işlem tamamlanır.  

---

## 🏗️ Proje Yapısı

| Dosya | Açıklama |
|-------|-----------|
| `manifest.json` | Chrome uzantısı yapılandırma dosyası (izinler, sürüm, simge bilgileri). |
| `background.js` | Uzantı simgesine tıklanınca `content.js` dosyasını aktif sekmede çalıştırır. |
| `content.js` | Sayfa üzerinde XPath ile ilgili input ve butonları bulup otomatik işlem yapar. |

---

## 💡 Neden Kullanmalısın?

- 🕒 **Zamandan tasarruf:** Her sitemap ekleme işleminde manuel uğraşmazsın.  
- 🧠 **Akıllı otomasyon:** Doğru input ve butonu XPath ile kendisi bulur.  
- 💻 **Geliştirici dostu:** Kod sade, yorumlu ve genişletilebilir.  
- 🔒 **Güvenli:** Sadece senin tarayıcında çalışır, harici veri göndermez.  

---

## 🧭 Kurulum Adımları

1. Bu dosyaları bir klasöre çıkar:
   ```
   /GoogleSearchConsoleAutomation/
   ├── manifest.json
   ├── background.js
   ├── content.js
   └── images/
       ├── icon16.png
       ├── icon48.png
       └── icon128.png
   ```

2. Google Chrome’da şu adımları izle:  
   - `chrome://extensions/` adresine git  
   - Sağ üstten **Geliştirici modunu** aktif et ⚙️  
   - **“Paketlenmemiş uzantı yükle”** butonuna tıkla  
   - Proje klasörünü seç  

3. ✅ Uzantı artık araç çubuğunda görünür.  
4. **Tıklayıp çalıştır!** Google Search Console otomatik olarak sitemap’i gönderir.  

---

## 🧩 Gereksinimler

- Google Chrome (v90 veya üstü)
- Aktif Google Search Console hesabı
- Sitenin doğrulanmış olması gerekir

---

## 🧱 Teknik Detaylar

- Manifest Version: **3**
- Kullanılan Teknolojiler:
  - `chrome.scripting` API (arka plandan içerik betiği çalıştırma)
  - `XPath` (input alanlarını ve butonları tespit etmek için)
  - `async/await` (bekleme süreleriyle doğal işlem akışı)
- Kod tamamen **client-side (tarayıcı tarafında)** çalışır, **hiçbir sunucuya veri göndermez.**

---

## 🧰 Geliştirici Notları

- `content.js` dosyasında `sitemap.xml` varsayılan olarak tanımlıdır.  
  Eğer farklı bir sitemap eklemek istersen:
  ```js
  const sitemap = "custom-sitemap.xml";
  ```
- Google Search Console URL’si proje içinde:
  ```js
  "https://search.google.com/search-console/sitemaps?resource_id=https://ebubekirbastama.com.tr/"
  ```
  Bu Adresi kendi domaininle değiştirebilirsin.

---

## ⚠️ Uyarılar

- Uzantı sadece **Search Console Sitemap sayfasında** çalışır.  
- Google arayüzü değişirse XPath seçicileri güncellemen gerekebilir.  
- Tarayıcıda çoklu Google hesabı açıkken doğru hesaba giriş yaptığından emin ol.  

---

## 🧡 Katkıda Bulunmak

Pull Request gönderebilir, yeni özellikler önerebilirsin.  
Örneğin:
- Çoklu sitemap gönderimi 🧾  
- Otomatik durum kontrolü 🔄  
- Zamanlama / cron desteği 🕒  

---

## 👨‍💻 Geliştirici
**Ebubekir Bastama**  
🛰️ Otomasyon, medya ve SEO teknolojilerinde uzman  
📬 [ebubekirbastama.com.tr](https://ebubekirbastama.com.tr)

---

## 🏁 Lisans
Bu proje **MIT Lisansı** altında paylaşılmıştır.  
Kullanmak, geliştirmek ve dağıtmak serbesttir.  

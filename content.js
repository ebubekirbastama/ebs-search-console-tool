/**
 * 🧩 Google Search Console Automation - content.js
 * ------------------------------------------------
 * 📌 Geliştirici: Ebubekir Bastama
 * 📅 Sürüm: 1.0.0
 *
 * 🔍 Amaç:
 * Google Search Console'da sitemap URL alanını bulur,
 * otomatik olarak "sitemap.xml" değerini yazar,
 * ardından gönderme butonuna tıklar.
 *
 * 🚀 Özellikler:
 * - XPath ile dinamik input alanı bulma
 * - Event tetikleme (bubbles:true)
 * - Otomatik buton tıklama
 * - 5 saniyelik bekleme ve onay kapatma
 *
 * 🧠 Not:
 * Eğer kullanıcı doğru sayfada değilse, otomatik olarak
 * Search Console’un “Sitemaps” sayfasına yönlendirilir.
 */

// 🌐 Ana işlem fonksiyonu
async function startProcess() {
    console.log("🔄 İşlem başlatılıyor...");

    // Gönderilecek sitemap dosyası
    const sitemap = "sitemap.xml";

    // 🧩 XPath ile tüm input elemanlarını bul
    const inputNodes = document.evaluate(
        "//*[@class='whsOnd zHQkBf']",
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );

    let foundInput = null;

    // 🔍 Tüm inputları gez ve aria-label'ı kontrol et
    for (let i = 0; i < inputNodes.snapshotLength; i++) {
        const input = inputNodes.snapshotItem(i);
        const ariaLabel = input.getAttribute("aria-label");

        if (ariaLabel === "Site haritası URL'sini girin") {
            foundInput = input;
            break;
        }
    }

    // ✅ Input bulunduysa işlem yap
    if (foundInput) {
        foundInput.click();
        foundInput.value = sitemap;

        // 🧠 Değer değişikliğini Google arayüzüne yansıtmak için event tetikle
        const event = new Event("input", { bubbles: true });
        foundInput.dispatchEvent(event);

        console.log(`✅ ${sitemap} başarıyla input alanına yazıldı.`);
    } else {
        console.error("❌ Uygun input elementi bulunamadı!");
        return;
    }

    // 🖱️ Butonu bul ve tıkla
    const buttonElement = document.querySelector(
        'div[role="button"].U26fgb.O0WRkf.zZhnYe.e3Duub.C0oVfc.zaJEjb.M9Bg4d'
    );

    if (buttonElement) {
        buttonElement.click();
        console.log(`📤 ${sitemap} gönderildi.`);
    } else {
        console.error("❌ Gönder butonu bulunamadı!");
        return;
    }

    // ⏱️ 5 saniye bekle (Google yanıt süresi için)
    await new Promise(resolve => setTimeout(resolve, 5000));

    // 🧾 Onay veya kapatma butonuna tıkla (varsa)
    const closeButton = document.querySelector(
        "#yDmH0d > div.uW2Fw-Sx9Kwc.uW2Fw-Sx9Kwc-OWXEXe-n2to0e.y4Y5Tb.b9cT7b.uW2Fw-Sx9Kwc-OWXEXe-FNFY6c > div.uW2Fw-wzTsW > div > div.uW2Fw-T0kwCb > div > button"
    );

    if (closeButton) {
        closeButton.click();
        console.log("✅ Onay penceresi kapatıldı.");
    }

    // 🔄 İşlem tamamlandıktan sonra bayrağı temizle
    localStorage.removeItem("redirected");
    console.log("🏁 İşlem başarıyla tamamlandı.");
}

// 🌐 URL kontrolü: doğru sayfada mı?
if (window.location.href.includes("https://search.google.com/search-console/sitemaps?resource_id=")) {
    startProcess();
} else {
    // 🚀 Otomatik yönlendirme
    console.warn("⚠️ Kullanıcı doğru sayfada değil, otomatik yönlendiriliyor...");
    window.location.href = "https://search.google.com/search-console/sitemaps?resource_id=https://beykozunsesi.com.tr/";
}

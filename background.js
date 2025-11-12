/**
 * 🧩 Google Search Console Automation - background.js
 * -----------------------------------------------
 * Ebubekir Bastama tarafından geliştirilmiştir.
 * Bu dosya, uzantı simgesine tıklanıldığında content.js dosyasını
 * aktif sekmede çalıştırmak için kullanılır.
 *
 * 📦 Manifest V3 standardına uygundur.
 * 🔒 Güvenli: chrome.scripting API ile yalnızca kullanıcı isteğiyle çalışır.
 */

chrome.action.onClicked.addListener((tab) => {
  // 🔍 Geçerli sekmenin bir kimliği (tab.id) varsa kontrol et
  if (tab.id) {
    // ⚙️ content.js dosyasını aktif sekmede çalıştır
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
    console.log("📤 Ebubekir Bastama - content.js çalıştırıldı:", tab.url);
  } else {
    console.warn("⚠️ Aktif sekme bulunamadı. content.js yüklenemedi.");
  }
});

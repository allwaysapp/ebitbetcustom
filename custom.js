// ==========================================
// FEATURE: Header Deposit Button (Desktop)
// Header'da wallet-menu'den sonra yatırım butonu ekler
// Hedef: .header-buttons içinde .wallet-menu sonrası
// Login state'e göre dinamik (login değilse login modal açar)
// Kapsam: Tüm sayfalar, sadece desktop (mobile'da CSS ile gizlenir)
// ==========================================
(function() {
  const FEATURE_ID = 'ebitbet-deposit-btn';

  function getCurrentLanguagePrefix() {
    const path = window.location.pathname;
    const match = path.match(/^\/([a-z]{2})(\/|$)/);
    return match ? '/' + match[1] : '/tr';
  }

  function navigateTo(url) {
    if (window.next && window.next.router && typeof window.next.router.push === 'function') {
      window.next.router.push(url);
    } else {
      window.history.pushState({}, '', url);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }

  function isUserLoggedIn() {
    return document.querySelector('.login-buttons') === null;
  }

  function openLoginModal() {
    const langPrefix = getCurrentLanguagePrefix();
    navigateTo(langPrefix + '?modal=auth&tab=login');
  }

  function getDepositText() {
    const lang = document.documentElement.lang ? document.documentElement.lang.substring(0, 2) : 'tr';
    const texts = {
      tr: 'Para Yatır',
      en: 'Deposit',
      fr: 'Déposer',
      de: 'Einzahlen',
      es: 'Depositar',
      ru: 'Депозит',
      jp: '入金',
      it: 'Deposito',
      pt: 'Depositar',
      nl: 'Storten'
    };
    return texts[lang] || texts['tr'];
  }

  function isAlreadyInserted() {
    return document.getElementById(FEATURE_ID) !== null;
  }

  function createElement() {
    const a = document.createElement('a');
    a.className = 'ebitbet-deposit-btn';
    a.id = FEATURE_ID;
    a.setAttribute('aria-label', getDepositText());
    a.href = '#';

    a.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="deposit-icon" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 10.9 13 11.5 13 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
      <span class="ebitbet-deposit-text">${getDepositText()}</span>
    `;

    a.onclick = function(e) {
      e.preventDefault();
      const langPrefix = getCurrentLanguagePrefix();
      if (isUserLoggedIn()) {
        navigateTo(langPrefix + '/wallet/fiat/deposit');
      } else {
        openLoginModal();
      }
    };

    return a;
  }

  function insertElement() {
    if (isAlreadyInserted()) return;

    const headerButtons = document.querySelector('.header-buttons');
    if (!headerButtons) return;

    const walletMenu = headerButtons.querySelector('.wallet-menu');
    const minifiedButtons = headerButtons.querySelector('.header-minified-buttons');

    const el = createElement();

    if (walletMenu) {
      walletMenu.parentNode.insertBefore(el, walletMenu.nextSibling);
    } else if (minifiedButtons) {
      minifiedButtons.parentNode.insertBefore(el, minifiedButtons);
    } else {
      headerButtons.appendChild(el);
    }

    console.log('✅ Ebitbet header deposit button eklendi');
  }

  function init() {
    setTimeout(insertElement, 300);

    const observer = new MutationObserver(() => {
      if (!isAlreadyInserted() && document.querySelector('.header-buttons')) {
        insertElement();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    let lastUrl = location.href;
    new MutationObserver(() => {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        setTimeout(insertElement, 300);
      }
    }).observe(document, { subtree: true, childList: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


// ==========================================
// FEATURE: Sidebar Deposit Button
// Sidebar tepesinde full-width animasyonlu yatırım butonu
// Hedef: .sb-top-btn içeren container'ın en üstüne (ilk .sb-top-btn'den önce)
// Collapsed modda icon-only (44x44 kare)
// Kapsam: Tüm sayfalar
// ==========================================
(function() {
  const FEATURE_ID = 'ebitbet-sidebar-deposit-btn';

  function getCurrentLanguagePrefix() {
    const path = window.location.pathname;
    const match = path.match(/^\/([a-z]{2})(\/|$)/);
    return match ? '/' + match[1] : '/tr';
  }

  function navigateTo(url) {
    if (window.next && window.next.router && typeof window.next.router.push === 'function') {
      window.next.router.push(url);
    } else {
      window.history.pushState({}, '', url);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }

  function isUserLoggedIn() {
    return document.querySelector('.login-buttons') === null;
  }

  function openLoginModal() {
    const langPrefix = getCurrentLanguagePrefix();
    navigateTo(langPrefix + '?modal=auth&tab=login');
  }

  function getDepositText() {
    const lang = document.documentElement.lang ? document.documentElement.lang.substring(0, 2) : 'tr';
    const texts = {
      tr: 'Para Yatır',
      en: 'Deposit',
      fr: 'Déposer',
      de: 'Einzahlen',
      es: 'Depositar',
      ru: 'Депозит',
      jp: '入金',
      it: 'Deposito',
      pt: 'Depositar',
      nl: 'Storten'
    };
    return texts[lang] || texts['tr'];
  }

  function isAlreadyInserted() {
    return document.getElementById(FEATURE_ID) !== null;
  }

  function createElement() {
    const a = document.createElement('a');
    a.className = 'ebitbet-sidebar-deposit-btn';
    a.id = FEATURE_ID;
    a.setAttribute('aria-label', getDepositText());
    a.href = '#';

    a.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" class="deposit-icon" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M12.5 7h-1v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        <path d="M12 6l-4 4h2.5v4h3v-4H16z"/>
      </svg>
      <span class="ebitbet-sidebar-deposit-text">${getDepositText()}</span>
    `;

    a.onclick = function(e) {
      e.preventDefault();
      const langPrefix = getCurrentLanguagePrefix();
      if (isUserLoggedIn()) {
        navigateTo(langPrefix + '/wallet/fiat/deposit');
      } else {
        openLoginModal();
      }
    };

    return a;
  }

  function insertElement() {
    if (isAlreadyInserted()) return;

    // Anchor: .p2tabs.p2tabs--sidebar (Casino/Spor sekmeleri)
    // Butonu bu container'ın hemen kardeşi olarak ekle → Casino/Spor altında, Hesap menüsünün üstünde
    const p2tabs = document.querySelector('.p2tabs.p2tabs--sidebar');
    if (!p2tabs) return;

    const el = createElement();
    p2tabs.parentNode.insertBefore(el, p2tabs.nextSibling);

    console.log('✅ Ebitbet sidebar deposit button eklendi (p2tabs altı)');
  }

  function init() {
    setTimeout(insertElement, 400);

    const observer = new MutationObserver(() => {
      if (!isAlreadyInserted() && document.querySelector('.p2tabs.p2tabs--sidebar')) {
        insertElement();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    let lastUrl = location.href;
    new MutationObserver(() => {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        setTimeout(insertElement, 400);
      }
    }).observe(document, { subtree: true, childList: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


// ==========================================
// FEATURE: Sidebar Promotions Button
// Deposit butonunun altına full-width animasyonlu promosyonlar butonu
// Hedef: #ebitbet-sidebar-deposit-btn altı
// Kapsam: Tüm sayfalar
// ==========================================
(function() {
  const FEATURE_ID = 'ebitbet-sidebar-promotions-btn';

  function getCurrentLanguagePrefix() {
    const path = window.location.pathname;
    const match = path.match(/^\/([a-z]{2})(\/|$)/);
    return match ? '/' + match[1] : '/tr';
  }

  function navigateTo(url) {
    if (window.next && window.next.router && typeof window.next.router.push === 'function') {
      window.next.router.push(url);
    } else {
      window.history.pushState({}, '', url);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }

  function getPromotionsText() {
    const lang = document.documentElement.lang ? document.documentElement.lang.substring(0, 2) : 'tr';
    const texts = {
      tr: 'Promosyonlar',
      en: 'Promotions',
      fr: 'Promotions',
      de: 'Aktionen',
      es: 'Promociones',
      ru: 'Акции',
      jp: 'プロモーション',
      it: 'Promozioni',
      pt: 'Promoções',
      nl: 'Promoties'
    };
    return texts[lang] || texts['tr'];
  }

  function isAlreadyInserted() {
    return document.getElementById(FEATURE_ID) !== null;
  }

  function createElement() {
    const a = document.createElement('a');
    a.className = 'ebitbet-sidebar-promotions-btn';
    a.id = FEATURE_ID;
    a.setAttribute('aria-label', getPromotionsText());

    const langPrefix = getCurrentLanguagePrefix();
    const targetUrl = langPrefix + '/promotions/active';
    a.href = targetUrl;

    a.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" class="promotions-icon" aria-hidden="true">
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM15 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
      </svg>
      <span class="ebitbet-sidebar-promotions-text">${getPromotionsText()}</span>
    `;

    a.onclick = function(e) {
      e.preventDefault();
      navigateTo(targetUrl);
    };

    return a;
  }

  function insertElement() {
    if (isAlreadyInserted()) return;

    const depositBtn = document.getElementById('ebitbet-sidebar-deposit-btn');
    if (!depositBtn) return;

    const el = createElement();
    depositBtn.parentNode.insertBefore(el, depositBtn.nextSibling);

    console.log('✅ Ebitbet sidebar promotions button eklendi');
  }

  function init() {
    setTimeout(insertElement, 500);

    const observer = new MutationObserver(() => {
      if (!isAlreadyInserted() && document.getElementById('ebitbet-sidebar-deposit-btn')) {
        insertElement();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    let lastUrl = location.href;
    new MutationObserver(() => {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        setTimeout(insertElement, 500);
      }
    }).observe(document, { subtree: true, childList: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


// ==========================================
// FEATURE: Sidebar Bonus Request Button
// Promosyonlar butonunun altına amber renkli bonus talep butonu
// Hedef: #ebitbet-sidebar-promotions-btn altı
// Tıklayınca ?modal=bonus-request query parametresi ile modal açılır
// Kapsam: Tüm sayfalar
// ==========================================
(function() {
  const FEATURE_ID = 'ebitbet-sidebar-bonus-btn';

  function getCurrentLanguagePrefix() {
    const path = window.location.pathname;
    const match = path.match(/^\/([a-z]{2})(\/|$)/);
    return match ? '/' + match[1] : '/tr';
  }

  function navigateTo(url) {
    if (window.next && window.next.router && typeof window.next.router.push === 'function') {
      window.next.router.push(url);
    } else {
      window.history.pushState({}, '', url);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }

  function getBonusText() {
    const lang = document.documentElement.lang ? document.documentElement.lang.substring(0, 2) : 'tr';
    const texts = {
      tr: 'Bonus Talep',
      en: 'Request Bonus',
      fr: 'Demande Bonus',
      de: 'Bonus Anfordern',
      es: 'Solicitar Bono',
      ru: 'Запрос Бонуса',
      jp: 'ボーナス申請',
      it: 'Richiedi Bonus',
      pt: 'Pedir Bônus',
      nl: 'Bonus Aanvragen'
    };
    return texts[lang] || texts['tr'];
  }

  function isAlreadyInserted() {
    return document.getElementById(FEATURE_ID) !== null;
  }

  function createElement() {
    const a = document.createElement('a');
    a.className = 'ebitbet-sidebar-bonus-btn';
    a.id = FEATURE_ID;
    a.setAttribute('aria-label', getBonusText());

    const langPrefix = getCurrentLanguagePrefix();
    const targetUrl = langPrefix + '?modal=bonus-request';
    a.href = targetUrl;

    a.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" class="bonus-icon" aria-hidden="true">
        <path d="M19 7h-3.18A3 3 0 0 0 13 3a3 3 0 0 0-3 3 3 3 0 0 0-3-3 3 3 0 0 0-3 3H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3zm-6 0V6a1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1h-1zM7 5a1 1 0 0 1 1 1 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 0zM2 9h7v2H2V9zm3 4h6v7H5v-7zm8 7v-7h6v7h-6zm9-9h-7V9h7v2z"/>
      </svg>
      <span class="ebitbet-sidebar-bonus-text">${getBonusText()}</span>
    `;

    a.onclick = function(e) {
      e.preventDefault();
      navigateTo(targetUrl);
    };

    return a;
  }

  function insertElement() {
    if (isAlreadyInserted()) return;

    const promotionsBtn = document.getElementById('ebitbet-sidebar-promotions-btn');
    if (!promotionsBtn) return;

    const el = createElement();
    promotionsBtn.parentNode.insertBefore(el, promotionsBtn.nextSibling);

    console.log('✅ Ebitbet sidebar bonus button eklendi');
  }

  function init() {
    setTimeout(insertElement, 600);

    const observer = new MutationObserver(() => {
      if (!isAlreadyInserted() && document.getElementById('ebitbet-sidebar-promotions-btn')) {
        insertElement();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    let lastUrl = location.href;
    new MutationObserver(() => {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        setTimeout(insertElement, 600);
      }
    }).observe(document, { subtree: true, childList: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

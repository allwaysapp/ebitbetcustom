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
// Hedef: .p2tabs.p2tabs--sidebar (Casino/Spor sekmeleri) altı
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


// ==========================================
// FEATURE: Sidebar Social Links
// Canlı Destek butonunun altına sosyal medya linkleri ekler
// Hedef: .sb-top-btn.supportbtn (Canlı Destek) altı
// Kapsam: Tüm sayfalar
// ==========================================
(function() {
  const FEATURE_ID = 'ebitbet-sidebar-social-links';

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ebiturkiye',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/socialebit',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/ebitbetresmi',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>'
    }
  ];

  function isAlreadyInserted() {
    return document.getElementById(FEATURE_ID) !== null;
  }

  function createSocialLinkButton(link) {
    const a = document.createElement('a');
    a.className = 'sb-top-btn ebitbet-social-link-item';
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('data-sb-tooltip', link.name);
    a.setAttribute('aria-label', link.name);
    a.innerHTML = `
      <span class="icon" aria-hidden="true">
        <span style="display: inline-flex; width: 20px; height: 20px; line-height: 0;">
          ${link.icon}
        </span>
      </span>
      <span class="sb-top-title">${link.name}</span>
      <span class="sb-top-arrow" aria-hidden="true">›</span>
    `;
    return a;
  }

  function createElement() {
    const wrapper = document.createElement('div');
    wrapper.id = FEATURE_ID;
    wrapper.className = 'ebitbet-sidebar-social-section';

    const dividerTop = document.createElement('div');
    dividerTop.className = 'sidebar-section-title';
    dividerTop.innerHTML = '<span class="sidebar-section-title__line"></span>';
    wrapper.appendChild(dividerTop);

    socialLinks.forEach(link => {
      wrapper.appendChild(createSocialLinkButton(link));
    });

    const dividerBottom = document.createElement('div');
    dividerBottom.className = 'sidebar-section-title';
    dividerBottom.innerHTML = '<span class="sidebar-section-title__line"></span>';
    wrapper.appendChild(dividerBottom);

    return wrapper;
  }

  function insertElement() {
    if (isAlreadyInserted()) return;

    const supportBtn = document.querySelector('.sb-top-btn.supportbtn');
    if (!supportBtn) return;

    const el = createElement();
    supportBtn.parentNode.insertBefore(el, supportBtn.nextSibling);

    console.log('✅ Ebitbet sidebar social links eklendi');
  }

  function init() {
    setTimeout(insertElement, 700);

    const observer = new MutationObserver(() => {
      if (!isAlreadyInserted() && document.querySelector('.sb-top-btn.supportbtn')) {
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
        setTimeout(insertElement, 700);
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
// FEATURE: Product Banner (Anasayfa - TR)
// 4 ürün kartı (Casino, Spor, Yatırım, Bonuslar) + Haftanın Oyunu
// Desktop: .welcome-content altı
// Mobile: .hp-mobile-slider.d-lg-none altı (Betifa pattern — mobile slider DOM'da farklı yerde)
// Kapsam: Sadece TR anasayfa (/, /tr)
// Responsive: Mobile (<=1024px) farklı düzen, resize'da yeniden çiz + reposition
// ==========================================
(function() {
  const FEATURE_ID = 'ebitbet-product-banner';
  const MOBILE_BREAKPOINT = 1024;

  function isTRHomePage() {
    const path = window.location.pathname;
    return path === '/' || path === '/tr' || path === '/tr/';
  }

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

  function isAlreadyInserted() {
    return document.getElementById(FEATURE_ID) !== null;
  }

  function removeElement() {
    const el = document.getElementById(FEATURE_ID);
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }

  function getTarget() {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    if (isMobile) {
      const mobileSlider = document.querySelector('.hp-mobile-slider.d-lg-none');
      if (mobileSlider) return mobileSlider;
    }
    return document.querySelector('.welcome-content');
  }

  function createElement() {
    const langPrefix = getCurrentLanguagePrefix();
    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

    const weekGameSlug = 'pragmaticplay-treasures-of-osiris';
    const weekGameUrl = `${langPrefix}/games/${weekGameSlug}`;
    const weekGameImg = 'https://i.ibb.co/SX9nyGCm/Treasures-of-Osiris-400x600-EN-1.png';

    const secondContentHTML = isMobile ? `
      <div class="second-content">
        <div class="second-content-item">
          <h1>HAFTANIN OYUNU</h1>
          <a class="product-btn1" data-internal-link="${weekGameUrl}" href="${weekGameUrl}">HEMEN OYNA</a>
        </div>
        <div class="second-content-item">
          <a class="week-game" data-internal-link="${weekGameUrl}" href="${weekGameUrl}">
            <img src="${weekGameImg}" alt="Haftanın Oyunu">
          </a>
        </div>
      </div>
    ` : `
      <div class="second-content">
        <div class="second-content-item">
          <h1>HAFTANIN OYUNU</h1>
          <a class="week-game" data-internal-link="${weekGameUrl}" href="${weekGameUrl}">
            <img src="${weekGameImg}" alt="Haftanın Oyunu">
          </a>
          <a class="product-btn1" data-internal-link="${weekGameUrl}" href="${weekGameUrl}">HEMEN OYNA</a>
        </div>
      </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.id = FEATURE_ID;
    wrapper.className = 'container ebitbet-product-banner-wrapper';
    wrapper.innerHTML = `
      <div class="row">
        <div class="col-12">
          <div class="product-banner">
            <div class="first-content">
              <div class="first-content-item">
                <a class="product-btn" data-internal-link="${langPrefix}/casino/lobby" href="${langPrefix}/casino/lobby">GİRİŞ YAP</a>
                <a data-internal-link="${langPrefix}/casino/lobby" href="${langPrefix}/casino/lobby">
                  <img src="https://github.com/allwaysapp/ebitbetcustom/blob/main/img/pcasino.jpg?raw=true" alt="Casino">
                </a>
              </div>
              <div class="first-content-item">
                <a class="product-btn" data-internal-link="${langPrefix}/sportsbook" href="${langPrefix}/sportsbook">GİRİŞ YAP</a>
                <a data-internal-link="${langPrefix}/sportsbook" href="${langPrefix}/sportsbook">
                  <img src="https://github.com/allwaysapp/ebitbetcustom/blob/main/img/pspor.jpg?raw=true" alt="Spor">
                </a>
              </div>
              <div class="first-content-item">
                <a class="product-btn" data-banner-action="deposit" href="#">YATIRIM YAP</a>
                <a data-banner-action="deposit" href="#">
                  <img src="https://github.com/allwaysapp/ebitbetcustom/blob/main/img/pdeposit.jpg?raw=true" alt="Yatırım">
                </a>
              </div>
              <div class="first-content-item">
                <a class="product-btn" data-internal-link="${langPrefix}/promotions/active" href="${langPrefix}/promotions/active">HEMEN KAP</a>
                <a data-internal-link="${langPrefix}/promotions/active" href="${langPrefix}/promotions/active">
                  <img src="https://github.com/allwaysapp/ebitbetcustom/blob/main/img/pbonuslar.jpg?raw=true" alt="Bonuslar">
                </a>
              </div>
            </div>
            ${secondContentHTML}
          </div>
        </div>
      </div>
    `;
    return wrapper;
  }

  function attachEventHandlers(root) {
    // Internal SPA navigation links
    root.querySelectorAll('[data-internal-link]').forEach(el => {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        const url = this.getAttribute('data-internal-link');
        navigateTo(url);
      });
    });

    // Deposit links (login-aware)
    root.querySelectorAll('[data-banner-action="deposit"]').forEach(el => {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        const langPrefix = getCurrentLanguagePrefix();
        if (isUserLoggedIn()) {
          navigateTo(langPrefix + '/wallet/fiat/deposit');
        } else {
          openLoginModal();
        }
      });
    });
  }

  function insertElement() {
    if (!isTRHomePage()) {
      removeElement();
      return;
    }

    if (isAlreadyInserted()) return;

    const target = getTarget();
    if (!target) return;

    const el = createElement();
    target.parentNode.insertBefore(el, target.nextSibling);
    attachEventHandlers(el);

    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    console.log('✅ Ebitbet product banner eklendi (' + (isMobile ? 'mobile - hp-mobile-slider altı' : 'desktop - welcome-content altı') + ')');
  }

  function repositionIfNeeded() {
    if (!isTRHomePage()) return;

    const el = document.getElementById(FEATURE_ID);
    if (!el) return;

    const expectedTarget = getTarget();
    if (!expectedTarget) return;

    if (el.previousElementSibling !== expectedTarget) {
      el.parentNode.removeChild(el);
      expectedTarget.parentNode.insertBefore(el, expectedTarget.nextSibling);
      console.log('✅ Ebitbet product banner repositioned');
    }
  }

  function init() {
    setTimeout(insertElement, 400);

    const observer = new MutationObserver(() => {
      if (isTRHomePage()) {
        if (!isAlreadyInserted() && getTarget()) {
          insertElement();
        }
      } else {
        if (isAlreadyInserted()) {
          removeElement();
        }
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
        setTimeout(() => {
          if (isTRHomePage()) {
            insertElement();
          } else {
            removeElement();
          }
        }, 400);
      }
    }).observe(document, { subtree: true, childList: true });

    // Resize handler — mobile/desktop arası geçişte yeniden çiz
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (isTRHomePage()) {
          removeElement();
          insertElement();
        }
      }, 250);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


// ==========================================
// FEATURE: Hero Banner (Rakeback — Multi-language)
// Sol: Başlık + açıklama + CTA + sosyal medya ikonları
// Sağ: Banner görseli (dil bazlı)
// Hedef öncelik sırası:
//   1. #ebitbet-product-banner (TR'de her zaman var) — altına
//   2. Mobile'da: .hp-mobile-slider.d-lg-none altına (TR dışı dillerde)
//   3. Desktop'ta: .welcome-content altına (TR dışı dillerde)
// Login-aware: Login varsa "Hemen Oyna" → /casino/lobby, yoksa "Kayıt Ol" → ?modal=auth&tab=register
// Kapsam: Tüm dillerde anasayfa
// ==========================================
(function() {
  const FEATURE_ID = 'ebitbet-hero-banner';
  const MOBILE_BREAKPOINT = 1024;

  function isHomePage() {
    const path = window.location.pathname;
    return path === '/' ||
           path === '/tr' || path === '/tr/' ||
           path === '/en' || path === '/en/';
  }

  function getCurrentLanguage() {
    const path = window.location.pathname;
    const match = path.match(/^\/([a-z]{2})(\/|$)/);
    return match ? match[1] : 'tr';
  }

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

  function isAlreadyInserted() {
    return document.getElementById(FEATURE_ID) !== null;
  }

  function removeElement() {
    const el = document.getElementById(FEATURE_ID);
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }

  const imageByLang = {
    tr: 'https://raw.githubusercontent.com/allwaysapp/ebitbetcustom/refs/heads/main/img/rake.png',
    en: 'https://ebitbert.b-cdn.net/Casino-sport/banner-en.png',
    fr: 'https://ebitbert.b-cdn.net/Casino-sport/banner-fr.png',
    de: 'https://ebitbert.b-cdn.net/Casino-sport/banner-de.png',
    es: 'https://ebitbert.b-cdn.net/Casino-sport/banner-es.png',
    ru: 'https://ebitbert.b-cdn.net/Casino-sport/banner-ru.png',
    jp: 'https://ebitbert.b-cdn.net/Casino-sport/banner-jp.png'
  };

  const contentByLang = {
    tr: {
      bigTitle: 'Rakeback ile Tanışın',
      smallTitle: 'Oynarken oluşan kayıplarınızı takip eden ve size özel bakiye olarak geri döndüren yeni nesil sistem.',
      buttonLoggedOut: 'Kayıt Ol ve Oyna',
      buttonLoggedIn: 'Hemen Oyna'
    },
    en: {
      bigTitle: 'Discover Rakeback',
      smallTitle: 'A next-generation system that tracks your losses while playing and returns them as a personal balance.',
      buttonLoggedOut: 'Sign Up and Play',
      buttonLoggedIn: 'Play Now'
    },
    fr: {
      bigTitle: 'Découvrez le Rakeback',
      smallTitle: 'Un système nouvelle génération qui suit vos pertes pendant le jeu et les restitue sous forme de solde personnel.',
      buttonLoggedOut: 'Inscrivez-vous et jouez',
      buttonLoggedIn: 'Jouer maintenant'
    },
    de: {
      bigTitle: 'Entdecken Sie Rakeback',
      smallTitle: 'Ein System der neuen Generation, das Ihre Verluste beim Spielen verfolgt und sie als persönliches Guthaben zurückgibt.',
      buttonLoggedOut: 'Jetzt registrieren und spielen',
      buttonLoggedIn: 'Jetzt spielen'
    },
    es: {
      bigTitle: 'Descubre el Rakeback',
      smallTitle: 'Un sistema de nueva generación que rastrea tus pérdidas mientras juegas y las devuelve como saldo personal.',
      buttonLoggedOut: 'Regístrate y juega',
      buttonLoggedIn: 'Jugar ahora'
    },
    ru: {
      bigTitle: 'Откройте для себя Rakeback',
      smallTitle: 'Система нового поколения, которая отслеживает ваши потери во время игры и возвращает их в виде личного баланса.',
      buttonLoggedOut: 'Зарегистрируйтесь и играйте',
      buttonLoggedIn: 'Играть сейчас'
    },
    jp: {
      bigTitle: 'レイクバックを体験しよう',
      smallTitle: 'プレイ中の損失を追跡し、個人残高として還元する次世代システムです。',
      buttonLoggedOut: '今すぐ登録してプレイ',
      buttonLoggedIn: '今すぐプレイ'
    }
  };

  function createElement() {
    const lang = getCurrentLanguage();
    const langPrefix = getCurrentLanguagePrefix();
    const t = contentByLang[lang] || contentByLang.en;
    const bannerImage = imageByLang[lang] || imageByLang.en;

    const loggedIn = isUserLoggedIn();
    const buttonText = loggedIn ? t.buttonLoggedIn : t.buttonLoggedOut;
    const buttonAction = loggedIn ? 'play' : 'register';

    const wrapper = document.createElement('div');
    wrapper.id = FEATURE_ID;
    wrapper.className = 'container ebitbet-hero-banner-wrapper';
    wrapper.innerHTML = `
      <div class="row">
        <div class="col-12">
          <div class="ebitbet-hero-banner">
            <div class="hero-left">
              <h1>${t.bigTitle}</h1>
              <p>${t.smallTitle}</p>
              <div class="cta-row">
                <a href="#" class="cta-btn" data-cta-action="${buttonAction}">${buttonText}</a>
                <div class="social-icons">
                  <a href="https://www.instagram.com/ebiturkiye" target="_blank" rel="noopener noreferrer">
                    <img src="https://raw.githubusercontent.com/allwaysapp/ebitbetcustom/refs/heads/main/img/instagram.png" alt="Instagram">
                  </a>
                  <a href="https://t.me/ebitbetresmi" target="_blank" rel="noopener noreferrer">
                    <img src="https://raw.githubusercontent.com/allwaysapp/ebitbetcustom/refs/heads/main/img/telegram.png" alt="Telegram">
                  </a>
                  <a href="https://x.com/socialebit" target="_blank" rel="noopener noreferrer">
                    <img src="https://raw.githubusercontent.com/allwaysapp/ebitbetcustom/refs/heads/main/img/twitter2.png" alt="X">
                  </a>
                  <a href="https://wa.me/447858629425" target="_blank" rel="noopener noreferrer">
                    <img src="https://raw.githubusercontent.com/allwaysapp/ebitbetcustom/refs/heads/main/img/whatsapp.png" alt="WhatsApp">
                  </a>
                </div>
              </div>
            </div>
            <div class="hero-right">
              <img src="${bannerImage}" alt="Ebitbet Rakeback">
            </div>
          </div>
        </div>
      </div>
    `;
    return wrapper;
  }

  function updateCtaButton(root) {
    const ctaBtn = root.querySelector('.cta-btn');
    if (!ctaBtn) return;

    const lang = getCurrentLanguage();
    const t = contentByLang[lang] || contentByLang.en;
    const loggedIn = isUserLoggedIn();

    ctaBtn.textContent = loggedIn ? t.buttonLoggedIn : t.buttonLoggedOut;
    ctaBtn.setAttribute('data-cta-action', loggedIn ? 'play' : 'register');
  }

  function attachEventHandlers(root) {
    const ctaBtn = root.querySelector('.cta-btn');
    if (ctaBtn) {
      ctaBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const langPrefix = getCurrentLanguagePrefix();
        const action = this.getAttribute('data-cta-action');
        if (action === 'play') {
          navigateTo(langPrefix + '/casino/lobby');
        } else {
          navigateTo(langPrefix + '?modal=auth&tab=register');
        }
      });
    }

    // Header observer — login state değişimini yakala, buton metnini güncelle (debounce'lu)
    let lastLoginState = isUserLoggedIn();
    let observerTimeout = null;
    const header = document.querySelector('header') || document.querySelector('#header');
    if (header) {
      const headerObserver = new MutationObserver(() => {
        if (observerTimeout) clearTimeout(observerTimeout);
        observerTimeout = setTimeout(() => {
          const currentLoginState = isUserLoggedIn();
          if (currentLoginState !== lastLoginState) {
            lastLoginState = currentLoginState;
            updateCtaButton(root);
            console.log('✅ Ebitbet hero banner CTA güncellendi:', currentLoginState ? 'login' : 'logout');
          }
        }, 300);
      });
      headerObserver.observe(header, { childList: true, subtree: true });
    }
  }

  function getTarget() {
    // 1. Önce product banner var mı bak (TR anasayfada her zaman olmalı)
    const productBanner = document.getElementById('ebitbet-product-banner');
    if (productBanner) return productBanner;

    // 2. Yoksa (TR dışı dillerde) mobile/desktop'a göre slider'ı seç
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    if (isMobile) {
      const mobileSlider = document.querySelector('.hp-mobile-slider.d-lg-none');
      if (mobileSlider) return mobileSlider;
    }
    return document.querySelector('.welcome-content');
  }

  function insertElement() {
    if (!isHomePage()) {
      removeElement();
      return;
    }

    if (isAlreadyInserted()) return;

    const target = getTarget();
    if (!target) return;

    const el = createElement();
    target.parentNode.insertBefore(el, target.nextSibling);
    attachEventHandlers(el);

    console.log('✅ Ebitbet hero banner eklendi');
  }

  function repositionIfNeeded() {
    if (!isHomePage()) return;

    const el = document.getElementById(FEATURE_ID);
    if (!el) return;

    const expectedTarget = getTarget();
    if (!expectedTarget) return;

    if (el.previousElementSibling !== expectedTarget) {
      el.parentNode.removeChild(el);
      expectedTarget.parentNode.insertBefore(el, expectedTarget.nextSibling);
      console.log('✅ Ebitbet hero banner repositioned');
    }
  }

  function init() {
    setTimeout(insertElement, 500);

    const observer = new MutationObserver(() => {
      if (isHomePage()) {
        if (!isAlreadyInserted() && getTarget()) {
          insertElement();
        }
      } else {
        if (isAlreadyInserted()) {
          removeElement();
        }
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
        setTimeout(() => {
          if (isHomePage()) {
            insertElement();
          } else {
            removeElement();
          }
        }, 500);
      }
    }).observe(document, { subtree: true, childList: true });

    // Resize handler — mobile/desktop arası geçişte reposition
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(repositionIfNeeded, 250);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// ==========================================
// FEATURE: Header Chat Button
// Header'a notification butonundan sonra navy/champagne-gold renkli chat butonu ekler
// Tıklayınca sayfadaki asıl chat butonunu tetikler (drawer açar)
// Hedef: .header-minified-buttons > .notifications-box sonrası
// Kapsam: Tüm sayfalar
// ==========================================
(function() {
  const FEATURE_ID = 'ebitbet-header-chat-btn';

  function isAlreadyInserted() {
    return document.getElementById(FEATURE_ID) !== null;
  }

  function findRealChatButton() {
    return document.querySelector('button.chat-button[aria-label="Open chat"]')
        || document.querySelector('button.chat-button');
  }

  function createElement() {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = FEATURE_ID;
    btn.className = 'ebitbet-header-chat-btn';
    btn.setAttribute('aria-label', 'Canlı Destek');
    btn.setAttribute('data-sb-tooltip', 'Canlı Destek');

    btn.innerHTML = `
      <span class="icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none" width="20" height="20">
          <path d="M12.9791 0.835327H4.25184C2.24675 0.835327 0.615479 2.4666 0.615479 4.47169V10.2899C0.615479 12.0455 1.86711 13.5146 3.52457 13.8528V16.1081C3.52457 16.3764 3.67221 16.623 3.90857 16.7495C4.01621 16.807 4.13402 16.8353 4.25184 16.8353C4.39293 16.8353 4.5333 16.7939 4.65548 16.7131L8.83584 13.9262H12.9791C14.9842 13.9262 16.6155 12.295 16.6155 10.2899V4.47169C16.6155 2.4666 14.9842 0.835327 12.9791 0.835327ZM8.21184 12.5939L4.97912 14.7488V13.199C4.97912 12.7975 4.6533 12.4717 4.25184 12.4717C3.04893 12.4717 2.07002 11.4928 2.07002 10.2899V4.47169C2.07002 3.26878 3.04893 2.28987 4.25184 2.28987H12.9791C14.182 2.28987 15.1609 3.26878 15.1609 4.47169V10.2899C15.1609 11.4928 14.182 12.4717 12.9791 12.4717H8.61548C8.56457 12.471 8.49184 12.4761 8.40893 12.5008C8.32166 12.5262 8.25548 12.5641 8.21184 12.5939Z" fill="currentColor"/>
          <path d="M12.9792 5.19885H4.25193C3.85048 5.19885 3.52466 5.52467 3.52466 5.92613C3.52466 6.32758 3.85048 6.6534 4.25193 6.6534H12.9792C13.3807 6.6534 13.7065 6.32758 13.7065 5.92613C13.7065 5.52467 13.3807 5.19885 12.9792 5.19885Z" fill="currentColor"/>
          <path d="M11.5247 8.10791H5.70652C5.30507 8.10791 4.97925 8.43373 4.97925 8.83518C4.97925 9.23664 5.30507 9.56246 5.70652 9.56246H11.5247C11.9262 9.56246 12.252 9.23664 12.252 8.83518C12.252 8.43373 11.9262 8.10791 11.5247 8.10791Z" fill="currentColor"/>
        </svg>
      </span>
    `;

    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const realChatBtn = findRealChatButton();
      if (realChatBtn) {
        realChatBtn.click();
      } else {
        console.warn('Chat button bulunamadı');
      }
    });

    return btn;
  }

  function insertElement() {
    if (isAlreadyInserted()) return;

    const minifiedButtons = document.querySelector('.header-minified-buttons');
    if (!minifiedButtons) return;

    const notificationsBox = minifiedButtons.querySelector('.notifications-box');
    const el = createElement();

    if (notificationsBox) {
      notificationsBox.parentNode.insertBefore(el, notificationsBox.nextSibling);
    } else {
      minifiedButtons.appendChild(el);
    }

    console.log('✅ Ebitbet header chat button eklendi');
  }

  function init() {
    setTimeout(insertElement, 400);

    const observer = new MutationObserver(() => {
      if (!isAlreadyInserted() && document.querySelector('.header-minified-buttons')) {
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

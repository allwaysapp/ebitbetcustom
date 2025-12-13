(function () {
    
    let isNavigating = false;

    // Helper Functions
    function isHomePage() {
        const url = window.location.pathname;
        return url === '/' || 
               url === '/tr/' || 
               url === '/tr' || 
               url === '/en/' || 
               url === '/en';
    }

    function isTRHomePage() {
        const url = window.location.pathname;
        return url === '/tr/' || url === '/tr';
    }

    function getCurrentLanguage() {
        const path = window.location.pathname;
        if (path.startsWith('/tr')) return 'tr';
        if (path.startsWith('/en')) return 'en';
        if (path.startsWith('/fr')) return 'fr';
        if (path.startsWith('/de')) return 'de';
        if (path.startsWith('/es')) return 'es';
        if (path.startsWith('/ru')) return 'ru';
        if (path.startsWith('/jp')) return 'jp';
        return 'en';
    }

    function getCurrentLanguagePrefix() {
        const path = window.location.pathname;
        if (path.startsWith('/tr')) return '/tr';
        if (path.startsWith('/en')) return '/en';
        if (path.startsWith('/fr')) return '/fr';
        if (path.startsWith('/de')) return '/de';
        if (path.startsWith('/es')) return '/es';
        if (path.startsWith('/ru')) return '/ru';
        if (path.startsWith('/jp')) return '/jp';
        return '';
    }

    // Product Banner Functions
    function createProductBanner() {
        if (isNavigating || !isTRHomePage()) return;
        
        const mainSlider = document.getElementById('main-slider');
        if (!mainSlider || document.querySelector('.ebitbet-product-banner')) return;

        const langPrefix = getCurrentLanguagePrefix();
        
        // Mobil kontrolü
        const isMobile = window.innerWidth <= 1024;
        
        // Mobil için farklı second-content yapısı
        const secondContentHTML = isMobile ? `
            <div class="second-content">
                <div class="second-content-item">
                    <h1>HAFTANIN OYUNU</h1>
                    <a class="product-btn1" href="${langPrefix}/casino/games/pragmaticplay-sweet-bonanza">HEMEN OYNA</a>
                </div>
                <div class="second-content-item">
                    <a class="week-game" href="${langPrefix}/casino/games/pragmaticplay-sweet-bonanza"><img
                        src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/yHSTi79Pv5V9CNAgBA11WTRRLqJJ1eFD/games/N3SEP42ynASo6aMWHB54qEWtYsGdPydCTmdRRDBl.png"
                        alt=""></a>
                </div>
            </div>
        ` : `
            <div class="second-content">
                <div class="second-content-item">
                    <h1>HAFTANIN OYUNU</h1>
                    <a class="week-game" href="${langPrefix}/casino/games/pragmaticplay-sweet-bonanza"><img
                        src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/yHSTi79Pv5V9CNAgBA11WTRRLqJJ1eFD/games/N3SEP42ynASo6aMWHB54qEWtYsGdPydCTmdRRDBl.png"
                        alt=""></a>
                    <a class="product-btn1" href="${langPrefix}/casino/games/pragmaticplay-sweet-bonanza">HEMEN OYNA</a>
                </div>
            </div>
        `;
        
        const productBannerSection = document.createElement('div');
        productBannerSection.className = 'container ebitbet-product-banner';
        productBannerSection.innerHTML = `
            <div class="product-banner">
                <div class="first-content">
                    <div class="first-content-item">
                        <a class="product-btn" href="${langPrefix}/casino">GİRİŞ YAP</a>
                        <a href="${langPrefix}/casino"><img
                                src="https://github.com/allwaysapp/ebitbetcustom/blob/main/img/pcasino.jpg?raw=true"
                                alt=""></a>
                    </div>
                    <div class="first-content-item">
                        <a class="product-btn" href="${langPrefix}/sportsbook">GİRİŞ YAP</a>
                        <a href="${langPrefix}/sportsbook"><img src="https://github.com/allwaysapp/ebitbetcustom/blob/main/img/pspor.jpg?raw=true"
                                alt=""></a>
                    </div>
                    <div class="first-content-item">
                        <a class="product-btn" href="${langPrefix}/payments/deposit">YATIRIM YAP</a>
                        <a href="${langPrefix}/payments/deposit"><img
                                src="https://github.com/allwaysapp/ebitbetcustom/blob/main/img/pdeposit.jpg?raw=true"
                                alt=""></a>
                    </div>
                    <div class="first-content-item">
                        <a class="product-btn" href="${langPrefix}/promotions">HEMEN KAP</a>
                        <a href="${langPrefix}/promotions"><img
                                src="https://github.com/allwaysapp/ebitbetcustom/blob/main/img/pbonuslar.jpg?raw=true"
                                alt=""></a>
                    </div>
                </div>
                ${secondContentHTML}
            </div>
        `;
        
        if (mainSlider.nextSibling) {
            mainSlider.parentNode.insertBefore(productBannerSection, mainSlider.nextSibling);
        } else {
            mainSlider.parentNode.appendChild(productBannerSection);
        }

        console.log('Ebitbet product banner eklendi');
    }

    function removeProductBanner() {
        const element = document.querySelector('.ebitbet-product-banner');
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
            console.log('Ebitbet product banner kaldırıldı');
        }
    }

    // Hero Banner Functions
    function createHeroBanner() {
        if (isNavigating || !isHomePage()) return;
        if (document.querySelector('.ebitbet-hero-banner')) return;

        const lang = getCurrentLanguage();
        const langPrefix = getCurrentLanguagePrefix();

        // Dil bazlı görseller
        const imageByLang = {
            tr: "https://ebitbert.b-cdn.net/Casino-sport/banner1.png",
            en: "https://ebitbert.b-cdn.net/Casino-sport/banner-en.png",
            fr: "https://ebitbert.b-cdn.net/Casino-sport/banner-fr.png",
            de: "https://ebitbert.b-cdn.net/Casino-sport/banner-de.png",
            es: "https://ebitbert.b-cdn.net/Casino-sport/banner-es.png",
            ru: "https://ebitbert.b-cdn.net/Casino-sport/banner-ru.png",
            jp: "https://ebitbert.b-cdn.net/Casino-sport/banner-jp.png"
        };

        // Dil bazlı içerikler
        const contentByLang = {
            tr: {
                bigTitle: "Rakeback ile Tanışın",
                smallTitle: "Oynarken oluşan kayıplarınızı takip eden ve size özel bakiye olarak geri döndüren yeni nesil sistem.",
                button: "Kayıt Ol ve Oyna",
                xLink: "https://x.com/ebitturkiye",
                registerUrl: `${langPrefix}/?modal=register`
            },
            en: {
                bigTitle: "Discover Rakeback",
                smallTitle: "A next-generation system that tracks your losses while playing and returns them as a personal balance.",
                button: "Sign Up and Play",
                xLink: "https://x.com/ebitbet",
                registerUrl: `${langPrefix}/?modal=register`
            },
            fr: {
                bigTitle: "Découvrez le Rakeback",
                smallTitle: "Un système nouvelle génération qui suit vos pertes pendant le jeu et les restitue sous forme de solde personnel.",
                button: "Inscrivez-vous et jouez",
                xLink: "https://x.com/ebitbetfr",
                registerUrl: `${langPrefix}/?modal=register`
            },
            de: {
                bigTitle: "Entdecken Sie Rakeback",
                smallTitle: "Ein System der neuen Generation, das Ihre Verluste beim Spielen verfolgt und sie als persönliches Guthaben zurückgibt.",
                button: "Jetzt registrieren und spielen",
                xLink: "https://x.com/ebitbetde",
                registerUrl: `${langPrefix}/?modal=register`
            },
            es: {
                bigTitle: "Descubre el Rakeback",
                smallTitle: "Un sistema de nueva generación que rastrea tus pérdidas mientras juegas y las devuelve como saldo personal.",
                button: "Regístrate y juega",
                xLink: "https://x.com/ebitbetes",
                registerUrl: `${langPrefix}/?modal=register`
            },
            ru: {
                bigTitle: "Откройте для себя Rakeback",
                smallTitle: "Система нового поколения, которая отслеживает ваши потери во время игры и возвращает их в виде личного баланса.",
                button: "Зарегистрируйтесь и играйте",
                xLink: "https://x.com/ebitbetru",
                registerUrl: `${langPrefix}/?modal=register`
            },
            jp: {
                bigTitle: "レイクバックを体験しよう",
                smallTitle: "プレイ中の損失を追跡し、個人残高として還元する次世代システムです。",
                button: "今すぐ登録してプレイ",
                xLink: "https://x.com/ebitbetjp",
                registerUrl: `${langPrefix}/?modal=register`
            }
        };

        const t = contentByLang[lang] || contentByLang.en;
        const bannerImage = imageByLang[lang] || imageByLang.en;

        // HTML oluştur
        const heroBanner = document.createElement('div');
        heroBanner.className = 'ebitbet-hero-banner';
        heroBanner.innerHTML = `
            <div class="hero-left">
                <h1>${t.bigTitle}</h1>
                <p>${t.smallTitle}</p>
                <div class="cta-row">
                    <a href="${t.registerUrl}" class="cta-btn">${t.button}</a>
                    <div class="social-icons">
                        <a href="https://www.instagram.com/ebitbet/" target="_blank"><img src="https://ebitbert.b-cdn.net/iconlar/insta.png" alt="Instagram"></a>
                        <a href="https://t.me/ebitturkiye" target="_blank"><img src="https://ebitbert.b-cdn.net/iconlar/telegram.png" alt="Telegram"></a>
                        <a href="${t.xLink}" target="_blank"><img src="https://ebitbert.b-cdn.net/iconlar/x%20(11).png" alt="X"></a>
                        <a href="https://wa.me/355688840383" target="_blank"><img src="https://ebitbert.b-cdn.net/iconlar/whatsapp%20(1).png" alt="WhatsApp"></a>
                    </div>
                </div>
            </div>
            <div class="hero-right">
                <img src="${bannerImage}" alt="Ebitbet Hero">
            </div>
        `;

        // Product banner varsa onun altına, yoksa slider'ın altına ekle
        const productBanner = document.querySelector('.ebitbet-product-banner');
        if (productBanner) {
            if (productBanner.nextSibling) {
                productBanner.parentNode.insertBefore(heroBanner, productBanner.nextSibling);
            } else {
                productBanner.parentNode.appendChild(heroBanner);
            }
        } else {
            const mainSlider = document.getElementById('main-slider');
            if (mainSlider) {
                if (mainSlider.nextSibling) {
                    mainSlider.parentNode.insertBefore(heroBanner, mainSlider.nextSibling);
                } else {
                    mainSlider.parentNode.appendChild(heroBanner);
                }
            }
        }

        console.log('Ebitbet hero banner eklendi');
    }

    function removeHeroBanner() {
        const element = document.querySelector('.ebitbet-hero-banner');
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
            console.log('Ebitbet hero banner kaldırıldı');
        }
    }

    // Component Management
    function initializeComponents() {
        // Product Banner kontrolü (sadece TR anasayfa)
        if (isTRHomePage() && !isNavigating) {
            if (!document.querySelector('.ebitbet-product-banner')) {
                createProductBanner();
            }
        } else {
            removeProductBanner();
        }

        // Hero Banner kontrolü (tüm diller anasayfa)
        if (isHomePage() && !isNavigating) {
            if (!document.querySelector('.ebitbet-hero-banner')) {
                createHeroBanner();
            }
        } else {
            removeHeroBanner();
        }
    }

    // Link Interceptor - SPA Navigation için
    function setupLinkInterceptors() {
        document.body.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            // Dış linkler için normal davranış
            if (link.href && (link.href.startsWith('http') && !link.href.includes(window.location.hostname))) {
                return;
            }

            // İç linkler için SPA navigation
            if (!link.target || link.target === '_self') {
                const href = link.getAttribute('href');
                if (href && href.startsWith('/')) {
                    // Custom section içindeki linkler için
                    const isCustomSectionLink = link.closest('.ebitbet-product-banner') || 
                                               link.closest('.ebitbet-hero-banner') ||
                                               link.closest('.sidebar__link--promotions');
                    if (isCustomSectionLink) {
                        e.preventDefault();
                        
                        isNavigating = true;
                        
                        window.history.pushState({}, '', href);
                        window.dispatchEvent(new PopStateEvent('popstate'));
                        
                        isNavigating = false;
                        initializeComponents();
                        return;
                    }
                }
            }
        });
    }

    function handleUrlChange() {
        isNavigating = true;
        isNavigating = false;
        initializeComponents();
    }

    // Initialize
    function initialize() {
        initializeComponents();
        setupLinkInterceptors();
    }

    // Event Listeners
    window.addEventListener('popstate', handleUrlChange);
    
    const originalPushState = history.pushState;
    history.pushState = function() {
        originalPushState.apply(this, arguments);
        handleUrlChange();
    };
    
    const originalReplaceState = history.replaceState;
    history.replaceState = function() {
        originalReplaceState.apply(this, arguments);
        handleUrlChange();
    };

    // Content Observer
    const contentObserver = new MutationObserver((mutations) => {
        if (isNavigating) return;
        
        const hasMainSlider = mutations.some(mutation => {
            return Array.from(mutation.addedNodes).some(node => 
                node.nodeType === 1 && 
                (node.id === 'main-slider' || 
                 (node.querySelector && node.querySelector('#main-slider')))
            );
        });

        if (hasMainSlider) {
            initializeComponents();
        }
    });

    contentObserver.observe(document.body, { childList: true, subtree: true });

    // Başlangıç
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

    window.addEventListener('load', function() {
        initializeComponents();
    });

    // Ekran boyutu değiştiğinde banner'ı yeniden oluştur
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (isTRHomePage()) {
                removeProductBanner();
                createProductBanner();
            }
        }, 250);
    });

    // Footer Awards Functions
    function createFooterAwards() {
        if (document.querySelector('.ebitbet-footer-awards')) return;

        const targetRow = document.querySelector('.footer__description')?.closest('.row');
        if (!targetRow) return;

        const awardsSection = document.createElement('div');
        awardsSection.className = 'row ebitbet-footer-awards';
        awardsSection.innerHTML = `
            <div class="col-12">
                <div class="footer-awards-container" style="display: flex; justify-content: center; align-items: center; gap: 20px; padding: 20px 0;">
                    <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/kojqlwkejjoizdGJKQWf/statics/qADFxttxrDUm1nvMsr1JTkBiWw4pXptrkfwjkjOy.png" alt="Award 1" style="height: 60px; width: auto;">
                    <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/kojqlwkejjoizdGJKQWf/statics/ax9rmrivANIojaeX3J44vR2MZUgT2WvjnvE5LElQ.webp" alt="Award 3" style="height: 60px; width: auto;">
                    <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/kojqlwkejjoizdGJKQWf/statics/H8a5CU9ITIFcnfnQjsIRcLSECSkNJQMW5GYHGTxT.png" alt="Award 4" style="height: 60px; width: auto;">
                    <img src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/kojqlwkejjoizdGJKQWf/statics/ocRpG5ik0qXBWh4UGXz3hlBswLgsxr9JfTbUSlYc.png" alt="Award 5" style="height: 60px; width: auto;">
                </div>
            </div>
        `;

        targetRow.insertAdjacentElement('afterend', awardsSection);
        console.log('Ebitbet footer awards eklendi');
    }

    // Footer Awards'ı sayfa yüklendiğinde çalıştır
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createFooterAwards);
    } else {
        createFooterAwards();
    }

    window.addEventListener('load', createFooterAwards);

    // Sidebar Promosyonlar Butonu
    function addPromotionsButton() {
        if (document.querySelector('.sidebar__link--promotions')) return;

        const sidebarLinks = document.querySelectorAll('.sidebar__links');
        if (sidebarLinks.length < 2) return;

        const langPrefix = getCurrentLanguagePrefix();
        
        const promotionsBtn = document.createElement('div');
        promotionsBtn.className = 'sidebar__links';
        promotionsBtn.innerHTML = `
            <a class="sidebar__link sidebar__link--promotions w-100" 
               href="${langPrefix}/promotions" 
               style="background: url('https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/yHSTi79Pv5V9CNAgBA11WTRRLqJJ1eFD/statics/42LzVC0k6FtzRApELMuZht9qHocA44l0C9mcv2vF.jpg') left center / cover no-repeat !important;">
                <span>PROMOSYONLAR</span>
            </a>
        `;

        sidebarLinks[0].insertAdjacentElement('afterend', promotionsBtn);
    }

    // Sidebar yüklendiğinde ekle
    const sidebarObserver = new MutationObserver(() => {
        addPromotionsButton();
    });

    sidebarObserver.observe(document.body, { childList: true, subtree: true });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addPromotionsButton);
    } else {
        addPromotionsButton();
    }

    window.addEventListener('load', addPromotionsButton);

    // Call Me Link - Sidebar'a "Beni Ara" Linki Ekle
    function addCallMeLink() {
        if (document.querySelector('.sidebar__link--call-me')) return;

        // Blog linkini bul
        const blogLink = Array.from(document.querySelectorAll('.sidebar__nav li a'))
            .find(link => link.href && link.href.includes('/blog'));
        
        if (!blogLink) return;

        const blogLi = blogLink.closest('li');
        if (!blogLi) return;

        const langPrefix = getCurrentLanguagePrefix();
        
        // Yeni li elementi oluştur
        const callMeLi = document.createElement('li');
        callMeLi.className = '';
        callMeLi.innerHTML = `
            <a href="${langPrefix}?modal=call-me" 
               class="sidebar__link--call-me" 
               style="transition: color 0.4s, background, background-color, border-color, box-shadow, opacity; margin-bottom: 10px; background-color: rgb(9, 27, 44); border-radius: 4px;">
                <svg class="svg-icon">
                    <use href="/static/media/sprite.416275c004a2977bb04b6579ccb104a4.svg#head-set" 
                         xlink:href="/static/media/sprite.416275c004a2977bb04b6579ccb104a4.svg#head-set"></use>
                </svg>
                Beni Ara
            </a>
        `;

        // Blog linkinin hemen altına ekle
        blogLi.insertAdjacentElement('afterend', callMeLi);
        console.log('Ebitbet "Beni Ara" linki eklendi');
    }

    // Sidebar yüklendiğinde Call Me linkini ekle
    const callMeObserver = new MutationObserver(() => {
        addCallMeLink();
    });

    callMeObserver.observe(document.body, { childList: true, subtree: true });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addCallMeLink);
    } else {
        addCallMeLink();
    }

    window.addEventListener('load', addCallMeLink);

})();

// Snow Effect Function - Yılbaşı Kar Yağışı Efekti
(function() {
    function createSnowEffect() {
        // Zaten varsa tekrar ekleme
        if (document.querySelector('.ebitbet-snow-container')) return;

        // Ana container oluştur
        const snowContainer = document.createElement('div');
        snowContainer.className = 'ebitbet-snow-container';
        snowContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
            overflow: hidden;
        `;

        // Kar tanesi sayısı (performans için optimize)
        const snowflakeCount = window.innerWidth < 768 ? 30 : 50;

        // Kar taneleri oluştur
        for (let i = 0; i < snowflakeCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'ebitbet-snowflake';
            snowflake.innerHTML = '❄';
            
            // Her kar tanesine rastgele özellikler
            const size = Math.random() * 10 + 10; // 10-20px arası
            const startPositionX = Math.random() * 100; // 0-100% arası
            const animationDuration = Math.random() * 5 + 10; // 10-15 saniye arası
            const animationDelay = Math.random() * 5; // 0-5 saniye arası başlama gecikmesi
            const opacity = Math.random() * 0.4 + 0.3; // 0.3-0.7 arası opaklık
            const drift = Math.random() * 50 - 25; // -25px ile +25px arası yatay hareket

            snowflake.style.cssText = `
                position: absolute;
                top: -20px;
                left: ${startPositionX}%;
                font-size: ${size}px;
                color: #fff;
                opacity: ${opacity};
                pointer-events: none;
                user-select: none;
                animation: ebitbet-snowfall ${animationDuration}s linear ${animationDelay}s infinite;
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
                --drift: ${drift}px;
            `;

            snowContainer.appendChild(snowflake);
        }

        // CSS animasyonunu ekle
        if (!document.querySelector('#ebitbet-snow-styles')) {
            const style = document.createElement('style');
            style.id = 'ebitbet-snow-styles';
            style.textContent = `
                @keyframes ebitbet-snowfall {
                    0% {
                        transform: translateY(0) translateX(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(50vh) translateX(var(--drift)) rotate(180deg);
                    }
                    100% {
                        transform: translateY(100vh) translateX(0) rotate(360deg);
                    }
                }

                .ebitbet-snowflake {
                    will-change: transform;
                }
            `;
            document.head.appendChild(style);
        }

        // Container'ı body'ye ekle
        document.body.appendChild(snowContainer);
        console.log('Ebitbet kar yağışı efekti eklendi');
    }

    // Kar efektini kaldırma fonksiyonu (ihtiyaç durumunda)
    function removeSnowEffect() {
        const snowContainer = document.querySelector('.ebitbet-snow-container');
        if (snowContainer) {
            snowContainer.remove();
            console.log('Ebitbet kar yağışı efekti kaldırıldı');
        }
    }

    // Sayfa yüklendiğinde çalıştır
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createSnowEffect);
    } else {
        createSnowEffect();
    }

    // Tam yüklendiğinde de kontrol et
    window.addEventListener('load', createSnowEffect);

    // Global fonksiyonlar (ihtiyaç durumunda console'dan kullanabilirsin)
    window.ebitbetSnow = {
        start: createSnowEffect,
        stop: removeSnowEffect
    };

})();

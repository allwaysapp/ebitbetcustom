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

    function getCurrentLanguagePrefix() {
        const path = window.location.pathname;
        if (path.startsWith('/tr')) return '/tr';
        if (path.startsWith('/en')) return '/en';
        return '';
    }

    // Product Banner Functions
    function createProductBanner() {
        if (isNavigating || !isTRHomePage()) return;
        
        const mainSlider = document.getElementById('main-slider');
        if (!mainSlider || document.querySelector('.ebitbet-product-banner')) return;

        const langPrefix = getCurrentLanguagePrefix();
        
        const productBannerSection = document.createElement('div');
        productBannerSection.className = 'container ebitbet-product-banner';
        productBannerSection.innerHTML = `
            <div class="product-banner">
                <div class="first-content">
                    <div class="first-content-item">
                        <a class="product-btn" href="${langPrefix}/slots">GİRİŞ YAP</a>
                        <a href="${langPrefix}/slots"><img
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
                <div class="second-content">
                    <div class="second-content-item">
                        <h1>HAFTANIN OYUNU</h1>
                        <a class="week-game" href="${langPrefix}/casino/games/pragmaticplay-sweet-bonanza"><img
                                src="https://vendor-provider.fra1.cdn.digitaloceanspaces.com/ebetlab/yHSTi79Pv5V9CNAgBA11WTRRLqJJ1eFD/games/N3SEP42ynASo6aMWHB54qEWtYsGdPydCTmdRRDBl.png"
                                alt=""></a>
                        <a class="product-btn1" href="${langPrefix}/casino/games/pragmaticplay-sweet-bonanza">HEMEN OYNA</a>
                    </div>
                </div>
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

    // Component Management
    function initializeComponents() {
        // Product Banner kontrolü
        if (isTRHomePage() && !isNavigating) {
            if (!document.querySelector('.ebitbet-product-banner')) {
                createProductBanner();
            }
        } else {
            removeProductBanner();
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
                    const isCustomSectionLink = link.closest('.ebitbet-product-banner');
                    if (isCustomSectionLink) {
                        e.preventDefault();
                        
                        isNavigating = true;
                        removeProductBanner();
                        
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

    // URL değişikliği yönetimi
    function handleUrlChange() {
        isNavigating = true;
        removeProductBanner();
        isNavigating = false;
        
        setTimeout(() => {
            initializeComponents();
        }, 100);
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

})();

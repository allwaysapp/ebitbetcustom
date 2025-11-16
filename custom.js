function createProductBanner() {
    // Sadece TR anasayfada göster
    const url = window.location.pathname;
    const isTRHomePage = url === '/tr/' || url === '/tr';
    
    if (!isTRHomePage) return;
    
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

// Helper function - ilk siteden aldık
function getCurrentLanguagePrefix() {
    const path = window.location.pathname;
    if (path.startsWith('/tr')) return '/tr';
    if (path.startsWith('/en')) return '/en';
    return '';
}

// Sayfa yüklendiğinde çalıştır
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createProductBanner);
} else {
    createProductBanner();
}

window.addEventListener('load', createProductBanner);

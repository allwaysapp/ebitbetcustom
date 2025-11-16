(function () {
  const supportedLangs = ['en', 'tr', 'fr', 'de', 'es', 'ru', 'jp'];
  const lang = document.documentElement.lang || 'en';
  const bannerId = 'ebitbet-hero-banner';
  const styleId = 'ebitbet-hero-style';

  // ✅ Sadece ana sayfa veya dil kök sayfalarında göster
  const isHomepage = () => {
    const path = location.pathname;
    return path === '/' || supportedLangs.some(l => path === `/${l}` || path === `/${l}/`);
  };

  if (!supportedLangs.includes(lang) || !isHomepage()) return;

  // 🌐 Her dil için farklı görseller
  const imageByLang = {
    tr: "https://ebitbert.b-cdn.net/Casino-sport/banner1.png",
    en: "https://ebitbert.b-cdn.net/Casino-sport/banner-en.png",
    fr: "https://ebitbert.b-cdn.net/Casino-sport/banner-fr.png",
    de: "https://ebitbert.b-cdn.net/Casino-sport/banner-de.png",
    es: "https://ebitbert.b-cdn.net/Casino-sport/banner-es.png",
    ru: "https://ebitbert.b-cdn.net/Casino-sport/banner-ru.png",
    jp: "https://ebitbert.b-cdn.net/Casino-sport/banner-jp.png"
  };

  const contentByLang = {
    tr: {
      bigTitle: "Rakeback ile Tanışın",
      smallTitle: "Oynarken oluşan kayıplarınızı takip eden ve size özel bakiye olarak geri döndüren yeni nesil sistem.",
      button: "Kayıt Ol ve Oyna",
      xLink: "https://x.com/ebitturkiye",
      registerUrl: "/tr/?modal=register"
    },
    en: {
      bigTitle: "Discover Rakeback",
      smallTitle: "A next-generation system that tracks your losses while playing and returns them as a personal balance.",
      button: "Sign Up and Play",
      xLink: "https://x.com/ebitbet",
      registerUrl: "/en/?modal=register"
    },
    fr: {
      bigTitle: "Découvrez le Rakeback",
      smallTitle: "Un système nouvelle génération qui suit vos pertes pendant le jeu et les restitue sous forme de solde personnel.",
      button: "Inscrivez-vous et jouez",
      xLink: "https://x.com/ebitbetfr",
      registerUrl: "/fr/?modal=register"
    },
    de: {
      bigTitle: "Entdecken Sie Rakeback",
      smallTitle: "Ein System der neuen Generation, das Ihre Verluste beim Spielen verfolgt und sie als persönliches Guthaben zurückgibt.",
      button: "Jetzt registrieren und spielen",
      xLink: "https://x.com/ebitbetde",
      registerUrl: "/de/?modal=register"
    },
    es: {
      bigTitle: "Descubre el Rakeback",
      smallTitle: "Un sistema de nueva generación que rastrea tus pérdidas mientras juegas y las devuelve como saldo personal.",
      button: "Regístrate y juega",
      xLink: "https://x.com/ebitbetes",
      registerUrl: "/es/?modal=register"
    },
    ru: {
      bigTitle: "Откройте для себя Rakeback",
      smallTitle: "Система нового поколения, которая отслеживает ваши потери во время игры и возвращает их в виде личного баланса.",
      button: "Зарегистрируйтесь и играйте",
      xLink: "https://x.com/ebitbetru",
      registerUrl: "/ru/?modal=register"
    },
    jp: {
      bigTitle: "レイクバックを体験しよう",
      smallTitle: "プレイ中の損失を追跡し、個人残高として還元する次世代システムです。",
      button: "今すぐ登録してプレイ",
      xLink: "https://x.com/ebitbetjp",
      registerUrl: "/jp/?modal=register"
    }
  };

  const t = contentByLang[lang] || contentByLang.en;
  const bannerImage = imageByLang[lang] || imageByLang.en;

  const html = `
    <style id="${styleId}">
      #${bannerId} {
        width: 100%;
        background: linear-gradient(to right, #081726 0%, #FFD986 40%, #d5934c 60%, #081726 100%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 40px 60px 20px;
        font-family: Arial, sans-serif;
        color: #fff;
        box-sizing: border-box;
        position: relative;
      }

      #${bannerId} .hero-left {
        flex: 1 1 50%;
        min-width: 280px;
        padding-right: 20px;
      }

      #${bannerId} .hero-left h1 {
        font-size: 38px;
        font-weight: bold;
        margin-bottom: 16px;
      }

      #${bannerId} .hero-left p {
        font-size: 18px;
        margin-bottom: 20px;
      }

      #${bannerId} .cta-row {
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
      }

      #${bannerId} .cta-btn {
        background: linear-gradient(180deg, #fadb93 0%, #d28e47 100%);
        padding: 14px 28px;
        border-radius: 12px;
        color: #000;
        font-weight: bold;
        font-size: 16px;
        text-decoration: none;
        display: inline-block;
        white-space: nowrap;
      }

      #${bannerId} .social-icons {
        display: flex;
        gap: 10px;
      }

      #${bannerId} .social-icons a {
        width: 44px;
        height: 44px;
        background: #2c2f38;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #${bannerId} .social-icons img {
        width: 22px;
        height: 22px;
      }

      #${bannerId} .hero-right {
        flex: 1 1 45%;
        min-width: 280px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
      }

      #${bannerId} .hero-right img {
        width: 100%;
        max-width: 560px;
        height: auto;
        display: block;
        margin-bottom: -20px;
      }

      @media (max-width: 768px) {
        #${bannerId} {
          flex-direction: column;
          padding: 30px 20px 0;
          text-align: center;
        }

        #${bannerId} .hero-left,
        #${bannerId} .hero-right {
          flex: 1 1 100%;
          max-width: 100%;
          padding: 0;
        }

        #${bannerId} .hero-left h1 {
          font-size: 24px;
        }

        #${bannerId} .hero-left p {
          font-size: 14px;
        }

        #${bannerId} .cta-row {
          flex-direction: column;
        }

        #${bannerId} .cta-btn {
          width: 100%;
          max-width: 300px;
        }

        #${bannerId} .social-icons {
          justify-content: center;
        }

        #${bannerId} .hero-right img {
          width: 100%;
          margin: 0;
        }
      }
    </style>

    <div id="${bannerId}">
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
    </div>
  `;

  function insertBanner() {
    if (!isHomepage()) return;
    const main = document.querySelector('.main__content#main__content');
    if (!main || document.getElementById(bannerId)) return;
    main.insertAdjacentHTML('afterbegin', html);
  }

  const check = setInterval(() => {
    const main = document.querySelector('.main__content#main__content');
    if (main) {
      insertBanner();
      clearInterval(check);
    }
  }, 100);

  let lastPath = location.pathname;
  setInterval(() => {
    const currentPath = location.pathname;
    const banner = document.getElementById(bannerId);

    if (currentPath !== lastPath) {
      lastPath = currentPath;
      if (banner) banner.remove();
      if (isHomepage()) insertBanner();
    }
  }, 500);
})();

import { ContactMe } from "./contactMe.js";
import { HomePage } from "./homepage.js";

export const DisplayController = (() => {
    const init = () => {
        HomePage.init();
    }

    return { init }
})();

export const EventHandler = (() => {
    const bindEvents = () => {
        const buyNowButtons = document.querySelectorAll('#buyNow');
        const banner = document.querySelector('.banner-text');

        buyNowButtons.forEach((button) => {
            button.addEventListener('click', handleBuyNow);
        })

        if (banner) {
            banner.addEventListener('click', handleBanner);
        }
    };

    const handleBuyNow = (event) => {
        const link = event.currentTarget.dataset.url;

        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    const handleBanner = () => {
        const content = document.getElementById('content');
        content.innerHTML = "";

        HomePage.init();
        bindEvents();
    };

    return { bindEvents }
})();

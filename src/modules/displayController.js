import { HomePage } from "./homepage.js";

export const DisplayController = (() => {
    const init = () => {
        HomePage.init();
        EventHandler.init();
    }

    return { init }
})();

const EventHandler = (() => {
    const el = {
        buyNowButton: () => document.getElementById('buyNow'),
    }

    const init = () => {
        bindEvents();
    }

    const bindEvents = () => {
        el.buyNowButton().addEventListener('click', () => {
            window.open("https://www.authorhouse.com/en/bookstore/bookdetails/860746-daisys-delightful-day");
        });
    }


    return { init }
})();

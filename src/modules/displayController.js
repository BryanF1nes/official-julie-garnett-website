import { HomePage } from "./homepage.js";

export const DisplayController = (() => {
    const init = () => {
        HomePage.init();
    }

    return { init }
})();

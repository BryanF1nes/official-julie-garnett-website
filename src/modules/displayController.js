import { Header } from "./header.js";

export const DisplayController = (() => {
    const init = () => {
        Header.init();
    }

    return { init }
})();

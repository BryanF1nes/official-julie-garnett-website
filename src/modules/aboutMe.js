import { Footer } from "./footer";
import { Header } from "./header"

export const AboutMe = (() => {
    const el = {
        content: () => document.getElementById('content'),
    }

    const init = () => {
        el.content().innerHTML = ``;
        Header.init();
        el.content().appendChild(createStuff());
        Footer.init();
    }

    const createStuff = () => {
        const p = document.createElement('p');
        p.style.paddingTop = "400px";
        p.textContent = "Hello World From About Me";
        return p;
    }

    return { init }
})()

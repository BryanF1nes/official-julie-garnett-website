import illustratedJulie from '../assets/illustrated-julie.png';
import aboutMe from '../assets/about-me.png';
import books from '../assets/books.png';
import contactMe from '../assets/contact-me.png';
import events from '../assets/events.png';
import parents from '../assets/parents.png';
import { AboutMe } from './aboutMe';

export const Navigation = (() => {
    const modules = { aboutMe: AboutMe }
    const pages = ['aboutMe', 'parents', 'books', 'contactMe', 'events'];
    const images = { aboutMe, books, contactMe, events, parents }
    const el = {
        content: () => document.getElementById('content'),
        linkContainer: () => document.querySelector('.link-container'),
    }

    const init = () => {
        el.content().appendChild(createNavigation());
        createLinks(pages);
    }

    const createNavigation = () => {
        const SVG_NS = "http://www.w3.org/2000/svg";

        const nav = document.createElement('nav');
        const navContainer = document.createElement('div');
        const linkContainer = document.createElement('div');
        const image = document.createElement('img');

        const svg = document.createElementNS(SVG_NS, 'svg');
        const path = document.createElementNS(SVG_NS, 'path');

        nav.className = "navigation";
        navContainer.className = "navigation-container";
        linkContainer.className = "link-container";

        image.src = illustratedJulie;

        svg.setAttribute('viewBox', '0 0 1440 200');
        svg.setAttribute('preserveAspectRatio', 'none');

        path.setAttribute('fill', '#B495F5');
        path.setAttribute('d', 'M0,96 C240,160 480,160 720,130 C960,100 1200,50 1440,90 L1440,320 L0,320 Z');

        svg.appendChild(path);

        linkContainer.appendChild(image);
        navContainer.appendChild(linkContainer);
        nav.append(navContainer, svg);

        return nav;
    }

    const createLinks = (links) => {
        links.forEach((link) => {
            const button = document.createElement('button');
            const img = document.createElement('img');
            button.className = 'link';
            button.id = link;

            img.src = images[link]
            button.appendChild(img);
            button.addEventListener('click', () => {
                modules[link].init();
            })
            el.linkContainer().appendChild(button);
        });
    }

    return { init }
})()

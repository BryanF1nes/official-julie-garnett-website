export const Header = (() => {
    const el = {
        content: () => document.getElementById('content'),
    }
    const init = () => {
        render();
    }

    const render = () => {
        createHeader();
    }

    const createHeader = () => {
        const bannerHeader = document.createElement('header');
        const bannerText = document.createElement('div');
        const heading = document.createElement('h1');
        const bio = document.createElement('p');
        const emptyDiv = document.createElement('div');

        bannerHeader.className = "banner-header";
        bannerText.className = "banner-text";
        heading.textContent = "Julie Ann Garnett";
        bio.textContent = "Award Winning Christian Author";

        bannerText.append(heading, bio);
        bannerHeader.append(bannerText, emptyDiv);

        el.content().appendChild(bannerHeader);
    }

    return { init }

})();

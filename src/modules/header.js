let animationId = null;

export const Header = (() => {
    const el = {
        content: () => document.getElementById('content'),
    }
    const init = () => {
        render();
    }

    const render = () => {
        snowCanvas();
        snowEffect();
        banner("Merry Christmas! John 3:16 - For God so loved the world, that he gave his only Son");
        createHeader();
    }

    const banner = (message) => {
        const banner = document.createElement("div");
        const bannerMessage = document.createElement("h1");

        banner.id = "banner";
        bannerMessage.textContent = message;
        banner.appendChild(bannerMessage);
        document.body.appendChild(banner);
        return banner;
    }

    const snowCanvas = () => {
        let existing = document.getElementById("snow-canvas");
        if (existing) return existing;

        const snow = document.createElement("canvas");
        snow.id = "snow-canvas";
        document.body.appendChild(snow);
        return snow;
    }

    const snowEffect = () => {
        const canvas = document.getElementById("snow-canvas");
        const ctx = canvas.getContext("2d");

        if (animationId) cancelAnimationFrame(animationId)

        const maxFlakes = 100;
        let flakes = [];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function initFlakes() {
            flakes = [];
            for (let i = 0; i < maxFlakes; i++) {
                flakes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 3 + 1,
                    d: Math.random() + 1
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "white";
            ctx.beginPath();
            flakes.forEach(flake => {
                ctx.moveTo(flake.x, flake.y);
                ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
            });
            ctx.fill();

            update();
            animationId = requestAnimationFrame(draw);
        }

        function update() {
            flakes.forEach(flake => {
                flake.y += flake.d;
                flake.x += Math.sin(flake.y * 0.01);

                if (flake.y > canvas.height) {
                    flake.y = -5;
                    flake.x = Math.random() * canvas.width;
                }
            });
        }

        window.onresize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initFlakes();
        };

        initFlakes();
        draw();
    };

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

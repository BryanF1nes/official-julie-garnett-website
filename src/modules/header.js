export const Header = (() => {
    const el = {
        content: () => document.getElementById('content'),
    }
    const init = () => {
        render();
    }

    const render = () => {
        el.content().appendChild(snowCanvas());
        snowEffect();
        createHeader();
    }

    const snowCanvas = () => {
        const snow = document.createElement("canvas");
        snow.id = "snow-canvas";
        return snow;
    }

    const snowEffect = () => {
        const canvas = document.getElementById("snow-canvas");
        const ctx = canvas.getContext("2d");

        let flakes = [];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function createFlakes() {
            flakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 3 + 1,
                d: Math.random() + 1
            });
        }

        function drawFlakes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "white";
            ctx.beginPath();
            flakes.forEach(flake => {
                ctx.moveTo(flake.x, flake.y);
                ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
            });
            ctx.fill();

            updateFlakes();
        }

        function updateFlakes() {
            flakes.forEach(flake => {
                flake.y += flake.d;
                flake.x += Math.sin(flake.y * 0.01);

                if (flake.y > canvas.height) {
                    flake.y = -5;
                    flake.x = Math.random() * canvas.width;
                }
            });
        }

        setInterval(() => {
            if (flakes.length < 100) createFlakes();
            drawFlakes();
        }, 30);

        window.onresize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

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

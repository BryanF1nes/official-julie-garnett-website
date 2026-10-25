import { Header } from "./header";
import { Footer } from "./footer";
import { EventHandler } from "./displayController";

// Event Data
// date:
// description:
// map:

export const Events = (() => {
    const events = [];

    const el = {
        content: () => document.getElementById('content'),
    }

    const init = () => {
        el.content().innerHTML = "";
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);

        Header.init();
        el.content().appendChild(page());
        Footer.init();
        EventHandler.bindEvents();
    }

    const page = () => {
        const eventsSection = document.createElement("section");
        const eventsContainer = document.createElement("div");
        const eventHeader = document.createElement("h1");
        const list = document.createElement("ul");

        eventsSection.className = "event-section";
        eventsContainer.className = "event-container";
        eventHeader.textContent = "Events!";

        if (events.length === 0) {
            const eventContainer = document.createElement('div');
            const eventText = document.createElement('h3');

            eventText.textContent = 'Stay tuned for upcoming events!';

            eventContainer.append(eventText);
            eventsContainer.append(eventHeader, eventContainer);
            eventsSection.appendChild(eventsContainer);
        } else {
            events.map((event, index) => {
                const eventContainer = document.createElement('div');
                const eventEl = document.createElement('div');
                const eventText = document.createElement('p');
                const locationPin = document.createElement('i');

                eventContainer.className = "ev-container";
                eventContainer.id = index;
                eventEl.className = "event";

                locationPin.className = "fa-solid fa-location-dot";

                let description = event.description;
                if (description.length > 30) {
                    description = description.slice(0, 30) + "...";
                }

                eventText.textContent = `${event.date} - ${description}`;

                eventContainer.addEventListener("click", () => {
                    window.open(event.map);
                })

                eventEl.append(eventText, locationPin);
                eventContainer.appendChild(eventEl);

                list.appendChild(eventContainer);
            });

            eventsContainer.append(eventHeader, list);
            eventsSection.appendChild(eventsContainer);
        }

        return eventsSection;
    }

    return { init }
})()

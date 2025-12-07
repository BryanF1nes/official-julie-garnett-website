import { Header } from "./header";
import { Footer } from "./footer";
import { EventHandler } from "./displayController";

export const Events = (() => {
    const events = [
        {
            date: "November 1st",
            description: "Brook Point High School Fall Craft Fair",
            map: "https://www.google.com/maps/place/Brooke+Point+High+School/@38.4064364,-77.3987603,17z/data=!3m1!4b1!4m6!3m5!1s0x89b6ef41148c2603:0x5e553d8ee0acfe6c!8m2!3d38.4064364!4d-77.3961854!16s%2Fm%2F026f92g?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            date: "December 13th",
            description: "Brook Point High School Holiday Craft Fair",
            map: "https://www.google.com/maps/place/Brooke+Point+High+School/@38.4064364,-77.3987603,17z/data=!3m1!4b1!4m6!3m5!1s0x89b6ef41148c2603:0x5e553d8ee0acfe6c!8m2!3d38.4064364!4d-77.3961854!16s%2Fm%2F026f92g?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
        }
    ];

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

        return eventsSection;
    }

    return { init }
})()

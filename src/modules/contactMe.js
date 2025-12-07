import { Header } from "./header";
import { Footer } from "./footer";
import { EventHandler } from "./displayController";
import { EmailJS } from "./email";

export const ContactMe = (() => {
    const MAXLENGTH = 300;
    const formElements = [
        {
            label: "Name",
            inputType: "text",
            placeHolder: "Enter your name",
        },
        {
            label: "Email",
            inputType: "email",
            placeHolder: "Enter your email",
        },
        {
            label: "Subject",
            inputType: "text",
            placeHolder: "Subject",
        },
        {
            label: "Message",
            inputType: null,
            placeHolder: "Don't be shy, send me a message!",
        }
    ]

    const el = {
        content: () => document.getElementById('content'),
    }

    const init = () => {
        el.content().innerHTML = "";
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);

        Header.init();
        el.content().appendChild(form());
        Footer.init();
        EventHandler.bindEvents();

        EmailJS.init()
    }

    const form = () => {
        const contactSection = document.createElement("section");
        const contactContainer = document.createElement("div");
        const contactHeader = document.createElement("h1");
        const emailForm = document.createElement("form");
        const submitButton = document.createElement("input");

        emailForm.id = "contact-form";

        contactSection.className = "contact-section";
        contactContainer.className = "contact-container";

        contactHeader.textContent = "Don't be shy! Send me a message!";

        formElements.map((el) => {
            const elementContainer = document.createElement("div");
            const label = document.createElement("label");

            elementContainer.className = "element-container";

            label.textContent = el.label;

            let input;
            if (el.label === "Message") {
                input = document.createElement("textarea");
                input.setAttribute("placeholder", el.placeHolder);
                input.setAttribute("maxlength", MAXLENGTH);
                input.name = "message"
                console.log(input.value.length);

                const counter = document.createElement("span");
                counter.className = "char-counter";
                counter.textContent = `Remaining: ${input.value.length} of ${MAXLENGTH}`;

                input.addEventListener("input", () => {
                    counter.textContent = `Remaining: ${input.value.length} of ${MAXLENGTH}`;
                })

                elementContainer.append(label, input, counter);

            } else {
                input = document.createElement("input");
                input.type = el.inputType
                input.name = el.label.toLowerCase();
                input.setAttribute("placeholder", el.placeHolder);
                elementContainer.append(label, input);
            }

            input.required = true;

            emailForm.appendChild(elementContainer);
        });

        submitButton.type = "submit";
        submitButton.value = "Send"

        emailForm.appendChild(submitButton);

        contactContainer.appendChild(emailForm);
        contactSection.append(contactHeader, contactContainer);
        return contactSection;
    }

    return { init }
})()

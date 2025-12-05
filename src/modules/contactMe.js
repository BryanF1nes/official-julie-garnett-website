import { Header } from "./header";
import { Footer } from "./footer";
import { EventHandler } from "./displayController";

export const ContactMe = (() => {
   const formElements = [
      {
         label: "Name",
         inputType: "text",
         placeHolder: "Enter your name...",
      },
      {
         label: "Email",
         inputType: "email",
         placeHolder: "Enter your email...",
      },
      {
         label: "Subject",
         inputType: "text",
         placeHolder: "Subject",
      },
      {
         label: "Message",
         inputType: null,
         placeHolder: "Send me a message!",
      }
   ]

   const el = {
      content: () => document.getElementById('content'),
   }

   const init = () => {
      el.content().innerHTML = "";

      Header.init();
      el.content().appendChild(form());
      Footer.init();
      EventHandler.bindEvents();
   }

   const form = () => {
      const contactSection = document.createElement("section");
      const contactContainer = document.createElement("div");
      const contactHeader = document.createElement("h1");
      const emailForm = document.createElement("form");
      const submitButton = document.createElement("input");

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
            input.name = "message"
         } else {
            input = document.createElement("input");
            input.type = el.inputType
            input.name = el.label.toLowerCase();
         }

         input.required = true;

         elementContainer.append(label, input);
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

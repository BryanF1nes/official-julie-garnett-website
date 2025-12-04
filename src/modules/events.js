import { Header } from "./header";
import { Footer } from "./footer";
import { EventHandler } from "./displayController";

export const Events = (() => {

   const el = {
      content: () => document.getElementById('content'),
   }

   const init = () => {
      el.content().innerHTML = "";

      Header.init();
      Footer.init();
      EventHandler.bindEvents();
   }

   return { init }
})()

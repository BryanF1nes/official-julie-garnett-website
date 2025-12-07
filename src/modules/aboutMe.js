import { Footer } from "./footer";
import { Header } from "./header";
import { EventHandler } from "./displayController.js";
import schoolJulie from "../assets/school-julie.jpg";

export const AboutMe = (() => {

    const aboutItems = [
        { question: "What is your favorite color?", answer: "My favorite color is green." },
        { question: "Do you like math?", answer: "I hate math, like a lot." },
        { question: "When is your birthday?", answer: "My birthday is on Valentine's Day." },
        { question: "What is your favorite animal?", answer: "I have around 20 chickens (for now, I have a problem buying more)." },
        { question: "Do you have any brothers or sisters?", answer: "I have no siblings (but when I got married, I inherited 2), and I have trouble sharing with others." },
        { question: "Where are you from?", answer: "I'm from Erie PA." },
        { question: "How many kids do you have?", answer: "I have 4 grown up kids and 1 baby granddaughter." },
        { question: "What is something you thought you would never do?", answer: "I jumped out of a perfectly good airplane while attached to a parachute." },
        { question: "Who do you love the most?", answer: "I love Jesus, like a lot." }
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
        const aboutSection = document.createElement('section');
        const aboutContainer = document.createElement('div');
        const aboutBlurb = document.createElement('div');
        const image = document.createElement('img');
        const header = document.createElement('h1');
        const about = document.createElement('p');
        const list = document.createElement('ul');

        aboutSection.className = "about-section";
        aboutContainer.className = "about-container";
        image.src = schoolJulie;
        aboutBlurb.className = "about-blurb";

        header.textContent = "About Julie Ann Garnett";
        about.textContent = `Hi! I’m Julie Ann Garnett, and I write children’s books that tell about Jesus,
                    His love for them, and how they can have a relationship with Him. My goal,
                    as an author, is to help families talk about God.`;

        aboutItems.map((item, index) => {
            const questionContainer = document.createElement('div');
            const question = document.createElement('div');
            const answer = document.createElement('div');
            const questionText = document.createElement('p');
            const answerText = document.createElement('p');
            const arrow = document.createElement('i');

            questionContainer.className = "question-container";
            questionContainer.id = index;
            question.className = "question";
            arrow.className = "fa-solid fa-angle-down";
            answer.className = "answer hidden";

            questionText.textContent = item.question;
            answerText.textContent = item.answer;

            questionContainer.addEventListener("click", () => {
                document.querySelectorAll(".answer").forEach((ans) => {
                    if (ans !== answer) {
                        ans.classList.add("hidden");
                        ans.parentElement.querySelector("i").className = "fa-solid fa-angle-down";
                    }
                });

                if (answer.classList.contains("hidden")) {
                    arrow.className = "fa-solid fa-angle-up";
                    answer.classList.remove("hidden");
                } else {
                    arrow.className = "fa-solid fa-angle-down";
                    answer.classList.add("hidden");
                }
            });

            question.append(questionText, arrow);
            answer.append(answerText);

            questionContainer.append(question, answer);
            list.appendChild(questionContainer);
        });

        aboutBlurb.append(header, about, list);
        aboutContainer.append(image, aboutBlurb);
        aboutSection.appendChild(aboutContainer);
        return aboutSection;
    }

    return { init }
})()

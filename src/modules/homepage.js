import julieProf from '../assets/professional-julie.png';
import daisyBook from '../assets/daisys-delightful-day.png';
import award from '../assets/bookfest-award.png';
import { Header } from './header';
import { Navigation } from './navigation';
import { Footer } from './footer';

export const HomePage = (() => {
    const el = {
        content: () => document.getElementById("content"),
    }

    const init = () => {
        Header.init();
        Navigation.init();
        mainContent();
        Footer.init();
    };

    const mainContent = () => {
        return el.content().append(authorSection(), bookContent());
    }

    const authorSection = () => {
        const authorSec = document.createElement('section');
        const authorImg = document.createElement('img');
        const contentDiv = document.createElement('div');
        const contentBlurb = document.createElement('div');
        const contentHeading = document.createElement('h1');
        const contentText = document.createElement('p');
        const button = document.createElement('button');

        authorSec.className = "author-section";
        contentDiv.className = "content";
        contentBlurb.className = "content-blurb";

        authorImg.src = julieProf;

        contentHeading.textContent = "Christian Book Author Julie Ann Garnett";
        contentText.textContent = `Hi! I’m Julie Ann Garnett, and I write children’s books that tell about Jesus, His love for them, and how they can have a relationship with Him.My goal, as an author, is to help families talk about God.Check out all the different links to see my current book, upcoming books, events I’ll be at, or email me whatever you like(only kindness, please).I’d love to hear from you!`;

        button.id = "contactMe";
        button.textContent = "Contact Me";

        contentBlurb.append(contentHeading, contentText, button);
        contentDiv.append(authorImg, contentBlurb);
        authorSec.appendChild(contentDiv);

        return authorSec;
    }

    const bookContent = () => {
        const bookSection = document.createElement('div');

        bookSection.innerHTML = `
        <svg class="flipped" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path fill="#B495F5" d="M0,96 C240,160 480,160 720,130 C960,100 1200,50 1440,90 L1440,320 L0,320 Z"></path>
        </svg>
        <div class="book-content">
            <div class="book-img">
                <img src=${daisyBook} alt="">
                <img id="award" src="${award}" alt="">
            </div>
            <div class="book-blurb">
                <h1>Daisy's Delightful Day</h1>
                <p>Daisy's Delightful Day is the story of Palm Sunday told through the eyes of the donkey. Meet
                    Daisy, a sweet, young donkey who lives on a farm but has big dreams of living in the city. It is
                    another beautiful day on the farm when suddenly, her normal routine gets disrupted. Daisy finds
                    herself in the city! Here, she has a unique encounter with someone who will change her life
                    forever.
                    <span>Third Place Winner of the BookFest Awards Fall 2025</span>
                </p>
                <button id="buyNow">Buy Now</button>
            </div>
        </div>
        `;

        return bookSection;
    }

    return { init }
})()

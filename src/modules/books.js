import { Header } from "./header";
import { Footer } from "./footer";
import { EventHandler } from "./displayController";
import daisyBook from "../assets/daisys-delightful-day.png";
import daisyAward from "../assets/bookfest-award.png";
import comingSoon from "../assets/coming-soon.jpg";

export const Books = (() => {
    const bookArray = [
        {
            image: daisyBook,
            award: daisyAward,
            bookTitle: "Daisy's Delightful Day",
            content: `Daisy's Delightful Day is the story of Palm Sunday told through the eyes of the donkey. Meet Daisy, a sweet, young donkey who lives on a farm but has big dreams of living in the city. It is another beautiful day on the farm when suddenly, her normal routine gets disrupted. Daisy finds herself in the city! Here, she has a unique encounter with someone who will change her life forever.`,
            awardSpan: "Third Place Winner of the BookFest Awards Fall 2025",
            buyNow: true,
            buyNowLink: "https://www.authorhouse.com/en/bookstore/bookdetails/860746-daisys-delightful-day",
            buyNowText: "Buy Now",
            hasAward: true,
        },
        {
            image: comingSoon,
            award: null,
            bookTitle: "Seeds",
            content: `Coming Soon - 2026!`,
            awardSpan: null,
            buyNow: false,
            buyNowLink: "https://www.authorhouse.com/en/bookstore/bookdetails/860746-daisys-delightful-day",
            buyNowText: "Coming Soon",
            hasAward: false,
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
        el.content().appendChild(page());
        Footer.init();
        EventHandler.bindEvents();
    }

    const page = () => {
        const bookSection = document.createElement("section");
        bookSection.className = "book-section";

        bookArray.map((book) => {
            const bookContent = document.createElement("div");
            const bookImageContainer = document.createElement("div");
            const bookBlurb = document.createElement("div");

            const bookImage = document.createElement("img");
            bookImage.src = book.image;
            bookImageContainer.appendChild(bookImage);

            if (book.hasAward) {
                const awardImage = document.createElement("img");
                awardImage.id = "award";
                awardImage.src = book.award;
                awardImage.alt = "Award";
                bookImageContainer.appendChild(awardImage);
            }

            bookContent.className = "book-content";
            bookImageContainer.className = "book-img";
            bookBlurb.className = "book-blurb";

            const bookTitle = document.createElement("h1");
            const bookDescription = document.createElement("p");

            bookTitle.textContent = book.bookTitle;
            bookDescription.textContent = book.content;

            if (book.awardSpan) {
                const awardSpan = document.createElement("span");
                awardSpan.textContent = book.awardSpan;
                bookDescription.appendChild(awardSpan);
            }

            const buyNow = document.createElement("button");

            if (book.buyNow) {
                buyNow.id = "buyNow"
            }
            buyNow.textContent = book.buyNowText;

            bookBlurb.append(bookTitle, bookDescription, buyNow);
            bookContent.append(bookImageContainer, bookBlurb);
            bookSection.appendChild(bookContent);
        });

        return bookSection;
    }

    return { init }
})()

import { Header } from "./header";
import { Footer } from "./footer";
import { EventHandler } from "./displayController";
import { prayers } from "./prayers";

export const Parents = (() => {

    const el = {
        content: () => document.getElementById('content'),
    }

    const init = () => {
        el.content().innerHTML = "";

        Header.init();
        el.content().appendChild(createPage());
        Footer.init();
        EventHandler.bindEvents();
    }

    const createPage = () => {
        const section = document.createElement("section");
        const parentContainer = document.createElement("div");

        section.className = "parent-section";
        parentContainer.className = "parent-container";

        parentContainer.append(parentsBlurb(), tinyDisciples(), biblicalVirtues());
        section.appendChild(parentContainer);
        return section;
    }

    const parentsBlurb = () => {
        const div = document.createElement("div");
        const parentHeading = document.createElement("h1");
        const parentInformation = document.createElement("p");

        parentHeading.textContent = "Parents!";
        parentInformation.textContent = `Hi! My name is Julie and I have a love for God and families. A little bit about me - I’m
                    married to an amazing guy who puts up with my craziness. We have 4 grown kids, and
                    each of them have made the decision to follow Christ. There is nothing that makes me
                    happier than knowing they each have their own relationship with Jesus. That’s what it’s
                    all about, isn’t it? For us as parents to raise our kids in the faith and knowledge of Jesus
                    Christ.
                    I graduated from Valley Forge Christian College with a B.S. in Biblical Studies. I have
                    worked in kid’s ministry for many years. I was the fun, creative story teller on Sunday
                    mornings. Now, I work at an elementary school as a paraprofessional. My goal as an
                    author is to write books with a Christian theme enabling families to have conversations
                    about Jesus. It’s not always easy to start a conversation with your kids, believe me I
                    know. One thing that I like to do is include the Scripture from which that story is drawn.
                    Read the book. Read the Bible. Ask questions to your kids. Let them ask you questions.
                    Thanks for taking the time to read up about me and inviting me into your family! The
                    battle for our kids starts at home, so suit up, grab those Swords, and be alert because
                    the enemy is on the prowl looking for someone to devour(1 Peter 5:8).`;

        div.append(parentHeading, parentInformation);
        return div;
    }

    const tinyDisciples = () => {
        const div = document.createElement("div");
        const discipleHeader = document.createElement("h1");
        const list = document.createElement("ul");

        discipleHeader.textContent = "Raising Tiny Disciples";
        list.innerHTML = `<li>Put them in the kid’s service at your church. Start them young! It’s never
                        too soon
                        to experience God’s love. Even babies can hear songs about Jesus and His
                        love.</li>
                    <li>Get together with other families who have kids and share the same values you
                        have. Our kids were blessed to be surrounded by friends who were a
                        little older
                        than them. They had great examples of what it looked like for someone
                        close to
                        their age to follow Jesus, and our friends were an example of what Godly
                        parenting looked like.</li>
                    <li>Read parenting books written by Christian authors or authors who seem to
                        have
                        the same values as you. Some of my favorites are:
                        <ul id="last-ul">
                            <li>Kevin Leman, Making Children Mind Without Losing Yours</li>
                            <li>Elisa Morgan, Real Moms</li>
                            <li>Lisa Bevere, Girls With Swords</li>
                            <li>Patricia H. Rushford, What Kids Need Most in a Mom</li>
                            <li>Gary Chapman, The 5 Love Languages</li>
                        </ul>
                    </li>
                    <li>Pray. Pray. Then, pray some more. I have included an article I have had
                        since
                        before I even had my own children. 31 Biblical Virtues to Pray for Your
                        Kids was
                        my guide to praying Scripture over my kids. Now, I use this to pray over
                        my
                        granddaughter and future grandchildren.</li>`;

        div.append(discipleHeader, list);
        return div;
    }

    const biblicalVirtues = () => {
        const container = document.createElement("div");
        const header = document.createElement("h1");
        const ul = document.createElement("ul");

        header.textContent = "31 Biblical Virtues to Pray for Your Kids";
        container.className = "prayer-list";
        container.appendChild(header);

        prayers.forEach(prayerObj => {
            const li = document.createElement("li");

            const title = document.createElement("b");
            title.textContent = prayerObj.title;

            const p = document.createElement("p");
            p.textContent = prayerObj.prayer;

            const span = document.createElement("span");
            prayerObj.references.forEach((ref, i) => {
                const a = document.createElement("a");
                a.href = ref.url;
                a.target = "_blank";
                a.textContent = ref.text;
                span.appendChild(a);

                if (i < prayerObj.references.length - 1) {
                    span.appendChild(document.createTextNode("; "));
                }
            });

            li.appendChild(title);
            li.appendChild(document.createTextNode(" - "));
            li.appendChild(p);
            li.appendChild(span);

            ul.appendChild(li);
        });
        container.appendChild(ul);
        return container;
    }


    return { init }
})()

const { listeners } = require("node:cluster");
const { it } = require("node:test");

const root = document.querySelector("#root");

function createList(itemsArray, parentElement) {
  const ul = document.createElement("ul");

  itemsArray.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });

  parentElement.appendChild(ul);
}

// --- HEADER  ---
const header = document.createElement("header");
const h1 = document.createElement("h1");
h1.textContent = "Did You Know?";
header.appendChild(h1);

// --- NAVIGATION  ---
const nav = document.createElement("nav");
nav.classList.add("nav-bar");

const navLinks = ["Home", "About", "Contact"];
createList(navLinks, nav);

// --- MAIN  ---
const main = document.createElement("main");
main.id = "main-content";

const h2 = document.createElement("h2");
h2.textContent = "You Are The Ocean In A Drop, Not A Drop In The Ocean";

const p = document.createElement("p");
p.textContent =
  "This site was built entirely with DOM methods. No HTML was harmed, Buttercup!";

const img = document.createElement("img");
img.src = "https://picsum.photos/400/200";
img.alt = "Placeholder image";

main.append(h2, p, img);

const dykFacts = [
  "You can't become what you already are",
  "When the money talks, do you think it gets the point across?",
  "CSS makes things pretty to look at"
];
createList(dykFacts, main);

const resources = [
  "MDN Web Docs",
  "Umhlathuze Hindu Development Committee",
  "International Sidereal Astrology Association"
];
createList(resources, main);

// --- FOOTER  ---
const footer = document.createElement("footer");

const link1 = document.createElement("a");
link1.href = "https://github.com";
link1.textContent = "My GitHub";

const link2 = document.createElement("a");
link2.href = "https://google.com";
link2.textContent = "Search for More Facts";

footer.append(link1, " | ", link2);

root.append(header, nav, main, footer);

console.log("JavaScript is connected! What's up, Buttercup?");

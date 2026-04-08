const root = document.querySelector("#root");

// id
const header = document.createElement("header");
header.id = "main-header";

const h1 = document.createElement("h1");
h1.textContent = "Did You Know?";
header.appendChild(h1);

// nav and list 1/2
const nav = document.createElement("nav");
const navList = document.createElement("ul");

// link 1/2
const navItem1 = document.createElement("li");
const navLink1 = document.createElement("a");
navLink1.href = "https://www.google.com";
navLink1.textContent = "Come over yonder to Search on The Googles";
navLink1.target = "_blank";
navItem1.appendChild(navLink1);

// link 2/2
const navItem2 = document.createElement("li");
const navLink2 = document.createElement("a");
navLink2.href = "https://github.com";
navLink2.textContent = "How Interest Thing";
navLink2.target = "_blank";
navItem2.appendChild(navLink2);

navList.appendChild(navItem1);
navList.appendChild(navItem2);
nav.appendChild(navList);

// Class selector
const main = document.createElement("main");
main.className = "content-box";

// heading 2/2
const h2 = document.createElement("h2");
h2.textContent = "In Credible In Formation";

// Paragraph
const p = document.createElement("p");
p.textContent = "You are the ocean in a drop, not a drop in the ocean.";

// image
const img = document.createElement("img");
img.src = "https://picsum.photos/400/200";
img.alt =
  "I am sorry you can't see the image. I would be lying if I described it to you, as it changes every time the page loads";

// list 2/2
const didyouknowList = document.createElement("ol");

const didyouknow1 = document.createElement("li");
didyouknow1.textContent =
  "Venus creates a 5 point pendulum or flower shape around Earth as it orbits over an 8 year cycle.";
const didyouknow2 = document.createElement("li");
didyouknow2.textContent =
  "If you were next to the dude who discovered Pluto's moon when he discovered it, you would have observed him as he referred to the moon in his notes as Char. Char as in charbroiled chocolate chips. A couple of weeks later you would have heard him tell someone he decided to name the moon Sharen and assumed that he realized the original name sounded ludicrous. The next day you would have become confusion when you observed the name he wrote on the official Moon Names R Us documentation to have been Charon. You would have been certain only that it was pronounced like Karen. So you asked him to tell you if was Sharen or Karen. You hear him say it is named after his wife Sharleen. It makes sense until you hear him say he refers to her Shar. You would have recalled how you saw him write the word Char. Now your mind is torn to chreds. Maybe che got jealous so he shanged the ending and now it has to be sharted as Charon even though it was pronounced like Sharen but only by James Shristy because the other NASA guys didn't chare his opinion. In fact, they thought it was very shildish.";

const didyouknow3 = document.createElement("li");
didyouknow3.textContent = "A group of flamingos is called a 'flamboyance'.";

didyouknowList.appendChild(didyouknow1);
didyouknowList.appendChild(didyouknow2);
didyouknowList.appendChild(didyouknow3);

main.appendChild(h2);
main.appendChild(p);
main.appendChild(img);
main.appendChild(didyouknowList);

// footer
const footer = document.createElement("footer");
const footerText = document.createElement("p");
footerText.textContent = "© 2026 Did You Know?";
footer.appendChild(footerText);

root.appendChild(header);
root.appendChild(nav);
root.appendChild(main);
root.appendChild(footer);

// create a new unordered list (ul) element
let list = document.createElement("ul");
// remove the paragraph element in the nav-bar
document.querySelector("nav p").remove;

// add your new ul element to the nav-bar
let navbar = document.querySelector("nav");
navbar.appendChild(list);
// create two new list item (li) elements, and add some text to them
let item = document.createElement("li");
item.textContent = "Home";
list.appendChild(item);

let aboutMe = document.createElement("li");
aboutMe.textContent = "About Me";
list.appendChild(aboutMe);

let contact = document.createElement("li");
contact.textContent = "Contact";
list.appendChild(contact);

// add the li element
list.removeChild(contact);
contact.remove; //list.removeChild(contact); and contact.remove; are the same thing

import { loadHome } from "./home"
import { loadContact } from "./contact"
import { loadMenu } from "./menu"

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const cafeName = document.createElement("h1");
    cafeName.classList.add("cafe-name");
    cafeName.textContent = "Carla's Cafe"

    header.appendChild(cafeName);
    header.appendChild(createNav());

    return header; 
}

function createNav() {
    const nav = document.createElement("nav");

    let pages = [
        ["home", clickHome],
        ["menu", clickMenu],
        ["contact", clickContact]
    ];
    pages.forEach((page, index) => {
        const button = attachButtonListener(page)
        nav.appendChild(button);
    });

    return nav;
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    return main;
}

function attachButtonListener(page) {
    let pageName = page[0];
    let callPage = page[1];

    const button = document.createElement("button"); 
    button.classList.add("nav-button");
    button.textContent = pageName;

    button.addEventListener("click", e => {
        callPage();
        setActiveButton(button);
    });
    return button; 
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach(btn => {
        if (button !== btn) {
            btn.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "Created by Ben Smith as part of the Odin Project: ";
    const link = document.createElement("a");
    link.href = "https://github.com/Tzar2nd/restaurant-npm";
    link.textContent = "Github project";
    footer.appendChild(link);

    return footer;
}

function clickHome() {
    loadHome(); 
}

function clickMenu() {
    loadMenu();
}

function clickContact() {
    loadContact();
}

function initWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    loadHome();
    console.log("Load home");
}

export { initWebsite };
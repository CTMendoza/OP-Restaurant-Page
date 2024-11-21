import "./styles.css";
import { loadHomePage } from "./homepage";

loadHomePage();

const content = document.getElementById('content');
const homeButton  = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

homeButton.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    loadHomePage();
});

menuButton.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
});

contactButton.addEventListener('click', () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
});
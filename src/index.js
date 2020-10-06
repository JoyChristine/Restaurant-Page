import './headerjs';
import { home } from './HomeModule.js';
import { menu } from './MenuModule.js';
import { contact } from './ContactModule.js';
const content = document.getElementById('content');
const container = document.createElement('div');
container.setAttribute('id', 'container');

const start = () => {
    content.appendChild(sections - list());
    content.appendChild(container);
    container.appendChild(home());
};
start();

const homePage = document.getElementById('home');
const menuPage = document.getElementById('menu');
const contactPage = document.getElementById('contact');


const clickHome = () => {
    container.innerHTML = '';
    container.appendChild(home());
    homePage.classList.add('active');
    menuPage.classList.remove('active');
    contactPage.classList.remove('active');
};
clickHome();

const clickMenu = () => {
    container.innerHTML = '';
    container.appendChild(menu());
    menuPage.classList.add('active');
    homePage.classList.remove('active');
    contactPage.classList.remove('active');
};

const clickContact = () => {
    container.innerHTML = '';
    container.appendChild(contact());
    homePage.classList.remove('active');
    menuPage.classList.remove('active');
    contactPage.classList.add('active');
};

homePage.addEventListener('click', () => {
    clickHome();
});



menuPage.addEventListener('click', () => {
    clickMenu();
});

contactPage.addEventListener('click', () => {
    clickContact();
});
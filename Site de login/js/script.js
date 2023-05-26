const wrapeer = document.querySelector('.wrapeer');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapeer.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapeer.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapeer.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapeer.classList.remove('active-popup');
});
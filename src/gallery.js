const openBtn = document.querySelector('#openMenu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('#mobile-menu');
const overlay = document.querySelector('#overlay');
const nav = document.querySelector('nav');
const WaIcon = document.querySelector('#WA-animation');
const bookBtn = document.querySelector('#book-btn');
const galleryPage = document.querySelector('#gallery-page');

openBtn.addEventListener('click', function(){
    menu.classList.add('mobile-menu-active');
    menu.classList.remove('mobile-menu');
    overlay.classList.remove('overlay');
    overlay.classList.add('overlay-active');
});

closeBtn.addEventListener('click', function(){
    menu.classList.remove('mobile-menu-active');
    menu.classList.add('mobile-menu');
    overlay.classList.add('overlay');
    overlay.classList.remove('overlay-active');
});

overlay.addEventListener('click', function(){
    menu.classList.remove('mobile-menu-active');
    menu.classList.add('mobile-menu');
    overlay.classList.add('overlay');
    overlay.classList.remove('overlay-active');
});

document.addEventListener('DOMContentLoaded', function(){
    WaIcon.classList.add('wa-animation');
    WaIcon.classList.remove('-bottom-20');
    galleryPage.classList.add('lg:underline');
    galleryPage.classList.add('lg:underline-offset-3')
});

document.addEventListener('scroll', function(){
    if(window.scrollY > 80){
        nav.classList.remove('lg:translate-y-[27px]');
        menu.classList.remove('lg:translate-y-[27px]');
    }else{
        nav.classList.add('lg:translate-y-[27px]');
        menu.classList.add('lg:translate-y-[27px]');
    }

    if(bookBtn.getBoundingClientRect().top < window.innerHeight * 0.85){
        bookBtn.classList.remove('opacity-0');
        bookBtn.classList.remove('translate-y-10');
        bookBtn.classList.add('animation-active');
    }
});

const openBtn = document.querySelector('#openMenu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('#mobile-menu');
const overlay = document.querySelector('#overlay');
const gunungWayangKiri = document.querySelector('#gunungWayang-kiri');
const gunungWayangKanan = document.querySelector('#gunungWayang-kanan');
const portofolio = document.querySelector('#portofolio');
const WaIcon = document.querySelector('#WA-animation');
const testi1 = document.querySelector('#testi1');
const testi2 = document.querySelector('#testi2');
const nav = document.querySelector('nav');
const homePage = document.querySelector('#home-page');


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
    gunungWayangKiri.classList.add('gunungWayang-kiri-active');
    gunungWayangKanan.classList.add('gunungWayang-kanan-active');
    WaIcon.classList.add('wa-animation');
    WaIcon.classList.remove('-bottom-20');
    homePage.classList.add('lg:underline');
    homePage.classList.add('lg:underline-offset-3');
});

document.addEventListener('scroll', function(){
    if(window.scrollY > 80){
        nav.classList.remove('lg:translate-y-[27px]');
        menu.classList.remove('lg:translate-y-[27px]');
    }else{
        nav.classList.add('lg:translate-y-[27px]');
        menu.classList.add('lg:translate-y-[27px]');
    }
    
    if(portofolio.getBoundingClientRect().top < window.innerHeight * 0.75){
        portofolio.classList.remove('opacity-0');
        portofolio.classList.remove('translate-y-10');
        portofolio.classList.add('animation-active');
    }

    if(testi1.getBoundingClientRect().top < window.innerHeight * 0.75){
        testi1.classList.remove('opacity-0');
        testi1.classList.remove('translate-y-10');
        testi1.classList.add('animation-active');
    }

    if(testi2.getBoundingClientRect().top < window.innerHeight * 0.75){
        testi2.classList.remove('opacity-0');
        testi2.classList.remove('translate-y-10');
        testi2.classList.add('animation-active');
    }
});
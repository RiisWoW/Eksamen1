const burger = document.querySelector('.burger');
const navmobile = document.querySelector('#nav-mobile');

burger.addEventListener('click', function () {
    burger.classList.toggle('aktiv');
    navmobile.classList.toggle('aktiv');
});
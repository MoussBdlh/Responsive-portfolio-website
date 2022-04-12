const menu = document.querySelector('.bx-menu');
const navList = document.querySelector('.nav-list');

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    navList.classList.toggle('active');
});
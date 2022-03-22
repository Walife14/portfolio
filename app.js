
// Navbar toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('#toggle-nav');

const handleNav = () => {
    burger.classList.toggle('toggled')
    nav.classList.toggle('show')
}

burger.addEventListener('click', handleNav)
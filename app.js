
// Navbar toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('#toggle-nav');

const handleNav = () => {
    burger.classList.toggle('toggled')
    nav.classList.toggle('show')
}

burger.addEventListener('click', handleNav)

// separator effect

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('separator-animation')
            return;
        }
        entry.target.classList.remove('separator-animation')
    })
})

observer.observe(document.querySelector('.separator'))
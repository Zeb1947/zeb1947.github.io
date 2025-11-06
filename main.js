const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
const links = document.querySelectorAll('.nav-link');

// Toggle mobile nav
navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// Active link on scroll
function onScroll() {
    const fromTop = window.scrollY + 90;
    links.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if(!section) return;
        if(section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', onScroll);
onScroll();

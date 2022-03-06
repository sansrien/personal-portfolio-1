console.log('here');

const navbar = document.getElementById('Header');
const navLogo = document. querySelector('#header-img')
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
        navLogo.classList.add('img-active');
    } else {
        console.log(navbar)
        navbar.classList.remove('nav-active');
        navLogo.classList.remove('img-active');
    }
};


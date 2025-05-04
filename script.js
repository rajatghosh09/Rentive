function toggleMenu() {
    const navLinks = document.querySelector('.navlinks');
    const hamburger = document.getElementById('hamburger');

    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}
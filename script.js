const mobileMenuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');

mobileMenuBtn.addEventListener('click', navToggle);

function navToggle() {
    mobileMenuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
}

document.addEventListener('scroll', function(event) {
    if (!mobileMenu.contains(event.target) && event.target !== mobileMenuBtn) {
        closeMenu();
    }
});

function closeMenu() {
    mobileMenuBtn.classList.remove('opne');
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
}
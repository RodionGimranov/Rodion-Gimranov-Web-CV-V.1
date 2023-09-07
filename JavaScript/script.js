// Scroll to section
document.addEventListener('DOMContentLoaded', function () {
    const projectBtn = document.querySelector('.project_btn');
    const contactBtn = document.querySelector('.contact_btn');
    const aboutMeBtn = document.querySelector('.contact_me_btn');

    projectBtn.addEventListener('click', (e) => scrollToSection(e, 'my_project_page'));
    contactBtn.addEventListener('click', (e) => scrollToSection(e, 'contact_me_page'));
    aboutMeBtn.addEventListener('click', (e) => scrollToSection(e, 'contact_me_page'));
});

function scrollToSection(e, sectionId) {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const sectionPosition = section.getBoundingClientRect().top;
    const offset = window.innerHeight / 2 - section.clientHeight / 2;

    window.scrollTo({
        top: sectionPosition + window.scrollY - offset,
        behavior: 'smooth'
    });
}

// Theme Switcher
document.addEventListener('DOMContentLoaded', (event) => {
    const themeSwitcher = document.querySelector('.switch input[type="checkbox"]');
    const blackStyle = document.querySelector('link[href="CSS/black_style.css"]');

    if (localStorage.getItem('theme') === 'dark') {
        themeSwitcher.checked = true;
        blackStyle.disabled = false;
    } else {
        themeSwitcher.checked = false;
        blackStyle.disabled = true;
    }

    themeSwitcher.addEventListener('change', (e) => {
        if (e.target.checked) {
            blackStyle.disabled = false;
            localStorage.setItem('theme', 'dark');
        } else {
            blackStyle.disabled = true;
            localStorage.removeItem('theme');
        }
    });
});

// Burger Menu
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var burgerButton = document.getElementById("burger");

    header.classList.remove("open");

    burgerButton.addEventListener("click", function(event) {
        header.classList.toggle("open");
        event.stopPropagation();
    });

    document.addEventListener("click", function(event) {
        if (!header.contains(event.target)) {
            header.classList.remove("open");
        }
    });
});

// Animation of element
function handleScroll() {
    var elements = document.querySelectorAll('.fade-in');

    elements.forEach(function(element) {
        var rect = element.getBoundingClientRect();
        var isVisible = (rect.top >= 0) && (rect.bottom <= window.innerHeight);

        if (isVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');

// Dark or Light images
const imageMode = (color) => {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

const toggleDarkLightMode = (isDark) => {
    nav.style.backgroundColor = isDark === DARK_THEME ?  'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark === DARK_THEME ? 'rgb(255 255 255 / 50% )' : 'rgb(0 0 0 / 50% )' ;
    toggleIcon.children[0].textContent = isDark === DARK_THEME ? 'Dark Mode' : 'Light Mode' ;
    isDark === DARK_THEME ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark === DARK_THEME ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
} 

// Scrolling Animation
ScrollReveal().reveal('#home', {delay:800});
ScrollReveal().reveal('#about', {delay:800});
ScrollReveal().reveal('#projects', {delay:800});
ScrollReveal().reveal('#contact', {delay:800});

// Switch Theme Dynamically
const switchTheme = (event) => { 
    const {checked} = event.target;
    if(checked) {  
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
        toggleDarkLightMode('dark');
    } else {
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        localStorage.setItem('theme', LIGHT_THEME);
        toggleDarkLightMode('light');
    }

}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)

    if(currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleDarkLightMode('dark');
    }
}
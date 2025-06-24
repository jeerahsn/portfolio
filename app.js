// Add interactivity to the portfolio website

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dynamic greeting based on time of day
const greetingElement = document.querySelector('#home p');
const hours = new Date().getHours();
let greeting;
if (hours < 12) {
    greeting = 'Good morning!';
} else if (hours < 18) {
    greeting = 'Good afternoon!';
} else {
    greeting = 'Good evening!';
}
greetingElement.textContent = `${greeting} Crafting intuitive and engaging user experiences.`;

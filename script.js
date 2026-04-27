const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference; default to light
if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
    themeToggle.textContent = 'light_mode';
} else {
    htmlElement.classList.remove('dark');
    themeToggle.textContent = 'dark_mode';
}

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'light_mode';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'dark_mode';
    }
});

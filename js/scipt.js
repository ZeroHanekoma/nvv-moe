// script.js

function toggleDarkMode() {
    const body = document.body;
    const linkElement = document.getElementById('theme-link');
  
    body.classList.toggle('dark-mode');
  
    if (body.classList.contains('dark-mode')) {
      linkElement.href = '/css/style-dark.css';
      localStorage.setItem('darkMode', 'enabled');
    } else {
      linkElement.href = '/css/style.css';
      localStorage.setItem('darkMode', 'disabled');
    }
  }
  
  document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
  
  // Check if dark mode preference is saved
  const savedPreference = localStorage.getItem('darkMode');
  
  if (savedPreference === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-link').href = '/css/style-dark.css';
  }
  
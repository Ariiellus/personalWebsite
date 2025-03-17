document.addEventListener("DOMContentLoaded", function () {
  // Load Navbar
  fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar-container').innerHTML = html;

      // Ensure Theme Toggle Works After Navbar Loads
      const themeToggle = document.getElementById('theme-toggle');
      const body = document.body;

      if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) themeToggle.classList.add('active');
      }

      if (themeToggle) {
        themeToggle.addEventListener('click', function () {
          const isDarkMode = body.classList.toggle('dark-mode');
          themeToggle.classList.toggle('active', isDarkMode);
          localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
      }
    })
    .catch(error => console.error('Error loading navbar:', error));
});

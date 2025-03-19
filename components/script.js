document.addEventListener("DOMContentLoaded", function () {
  // Load Navbar
  fetch('../components/navbar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar-container').innerHTML = html;

      // Ensure Theme Toggle Works After Navbar Loads
      const themeToggle = document.getElementById('theme-toggle');
      const body = document.body;

      // Function to update all icons
      function updateIcons() {
        document.querySelectorAll(".github-icon, .telegram-icon, .twitter-icon, .calendar-icon").forEach(icon => {
          if (!icon) return;

          if (body.classList.contains("dark-mode")) {
            if (icon.classList.contains("github-icon")) icon.src = "../assets/github-dark.png";
            if (icon.classList.contains("telegram-icon")) icon.src = "../assets/telegram-dark.png";
            if (icon.classList.contains("twitter-icon")) icon.src = "../assets/twitter-dark.png";
            if (icon.classList.contains("calendar-icon")) icon.src = "../assets/calendar-dark.png";
          } else {
            if (icon.classList.contains("github-icon")) icon.src = "../assets/github-light.png";
            if (icon.classList.contains("telegram-icon")) icon.src = "../assets/telegram-light.png";
            if (icon.classList.contains("twitter-icon")) icon.src = "../assets/twitter-light.png";
            if (icon.classList.contains("calendar-icon")) icon.src = "../assets/calendar-light.png";
          }
        });
      }

      // Apply theme from Local Storage
      if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) themeToggle.classList.add('active');
      }

      // Ensure icons update after DOM fully loads
      setTimeout(updateIcons, 200);

      // Dark Mode Toggle
      if (themeToggle) {
        themeToggle.addEventListener('click', function () {
          const isDarkMode = body.classList.toggle('dark-mode');
          themeToggle.classList.toggle('active', isDarkMode);
          localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
          setTimeout(updateIcons, 50);
        });
      }
    })
    .catch(error => console.error('Error loading navbar:', error));
});

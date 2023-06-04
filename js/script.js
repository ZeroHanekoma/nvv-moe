// JavaScript

// Function to toggle dark mode
function toggleDarkMode() {
  // Toggle the "dark-mode" class on the body element
  document.body.classList.toggle("dark-mode");

  // Toggle the "dark-mode" class on the theme link element
  document.getElementById("theme-link").classList.toggle("dark-mode");

  // Update the theme link href based on the dark mode state
  var themeLink = document.getElementById("theme-link");
  if (document.body.classList.contains("dark-mode")) {
    themeLink.href = "css/style-dark.css";
    localStorage.setItem("darkMode", "true"); // Update user preference in local storage
  } else {
    themeLink.href = "css/style.css";
    localStorage.setItem("darkMode", "false"); // Update user preference in local storage
  }
}

// Check if the user preference is stored
if (localStorage.getItem("darkMode") === "true") {
  // Enable dark mode
  document.body.classList.add("dark-mode");
  document.getElementById("theme-link").href = "css/style-dark.css";
} else {
  document.getElementById("theme-link").href = "css/style.css";
}

// Add event listener to the toggle button
document.getElementById("toggle-btn").addEventListener("click", function () {
  // Toggle dark mode on button click
  toggleDarkMode();
});

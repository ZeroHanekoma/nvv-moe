// JavaScript

// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle the "dark-mode" class on the body element
    document.body.classList.toggle("dark-mode");
  }
  
  // Check if the user preference is stored
  if (localStorage.getItem("darkMode") === "true") {
    // Enable dark mode
    document.body.classList.add("dark-mode");
  }
  
  // Add event listener to the toggle button
  document.getElementById("toggle-btn").addEventListener("click", function () {
    // Toggle dark mode on button click
    toggleDarkMode();
    
    // Update user preference in local storage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "true");
    } else {
      localStorage.setItem("darkMode", "false");
    }
  });
  
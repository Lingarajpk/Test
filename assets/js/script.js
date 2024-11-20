// Select elements
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const menu = document.querySelector(".menu");

// Toggle the menu and icons
function toggleMenu() {
  const isMenuOpen = menu.style.display === "block";

  if (isMenuOpen) {
    // Hide the menu and show the menu icon
    menu.style.display = "none";
    menuIcon.style.display = "inline-block";
    closeIcon.style.display = "none";
  } else {
    // Show the menu and display the close icon
    menu.style.display = "block";
    menuIcon.style.display = "none";
    closeIcon.style.display = "inline-block";
  }
}

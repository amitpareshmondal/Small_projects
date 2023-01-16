// This is where you could add any JavaScript functionality for your portfolio website
// For example, you could create a smooth scrolling effect when a user clicks on a nav link

// Select all the nav links
var navLinks = document.querySelectorAll("header nav ul li a");

// Add an event listener to each nav link
navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", function(event) {
    event.preventDefault();
    // Get the target element's id (the part of the href after the "#")
    var targetId = navLink.getAttribute("href").substring(1);
    // Get the target element
    var targetElement = document.getElementById(targetId);
    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

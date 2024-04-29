/*
Name: Sherley Rodriguez
File Name: script.js
Date: 4/20/2024
*/

// Hamburger menu function
function menu() {
  var navlinks = document.getElementById("nav-links");
  var menuicon = document.getElementById("icon");
  if (navlinks.style.display === "block") {
    navlinks.style.display = "none";
    menuicon.style.color = "#2a1f14";
  } else {
    navlinks.style.display = "block";
    menuicon.style.color = "#f6eee4";
  }
}
// Get the social icons container
const socialIcons = document.querySelector(".social-icons");

// Calculate the offset position of the next section
const nextSection = document.querySelector("#next-section");
const nextSectionOffset = nextSection.offsetTop;

// Add an event listener to the window object for scrolling
window.addEventListener("scroll", function () {
  // Get the current vertical position of the scroll bar
  const scrollPosition = window.scrollY;

  // If the current position is below the offset of the next section,
  // hide the social icons using a CSS class
  if (scrollPosition >= nextSectionOffset) {
    socialIcons.classList.add("hidden");
  } else {
    socialIcons.classList.remove("hidden");
  }
});

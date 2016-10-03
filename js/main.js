document.addEventListener("DOMContentLoaded", function () {

  "use strict";

  var toggleResponsiveMenu = document.getElementById("toggle-responsive-nav");
  var topNavSections = document.getElementById("top-nav-sections");
  var topNavSocialMedia = document.getElementById("top-nav-social-media");
  var topNavAnchors = document.getElementsByClassName("top-nav-a");

  var i;

  toggleResponsiveMenu.addEventListener("click", function () {
    if (!this.classList.contains("dropdown-on")) {
      topNavSections.classList.remove("responsive-hidden");
      topNavSocialMedia.classList.remove("responsive-hidden");
      this.classList.add("dropdown-on");
    }
    else {
      topNavSections.classList.add("responsive-hidden");
      topNavSocialMedia.classList.add("responsive-hidden");
      this.classList.remove("dropdown-on");
    }
  });

  for (i = 0; i < topNavAnchors.length; i++) {
    topNavAnchors[i].addEventListener("click", function () {
      toggleResponsiveMenu.classList.remove("dropdown-on");
      topNavSections.classList.add("responsive-hidden");
      topNavSocialMedia.classList.add("responsive-hidden");
    });
  }

});

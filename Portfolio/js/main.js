document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");

  // Toggle menu
  hamburger.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = hamburger.querySelector("i");

    if (navbar.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close menu after clicking link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {

      navbar.classList.remove("active");

      const icon = hamburger.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });

});


const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {

  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
      link.classList.add("active");
  }
});


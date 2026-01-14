// Load Navbar
fetch("navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar").innerHTML = html;

    // ✅ Now elements exist
    const hamburger = document.getElementById("hamburger");
    const links = document.querySelector(".nav-links");

    if (hamburger && links) {
      hamburger.addEventListener("click", () => {
        links.classList.toggle("active");
      });
    }
  });

// Load Footer
fetch("footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("footer").innerHTML = html;
  });

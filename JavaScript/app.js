document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navbarButtons = document.querySelector(".navbar-buttons");
  
    hamburger.addEventListener("click", () => {
      navbarButtons.classList.toggle("open"); // Lägg till/ta bort klassen "open"
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const filterDropdown = document.getElementById("filter");
    const projects = document.querySelectorAll(".project");
  
    filterDropdown.addEventListener("change", () => {
      const selectedKeyword = filterDropdown.value;
  
      projects.forEach((project) => {
        const keywords = project.dataset.keywords;
  
        if (selectedKeyword === "all" || keywords.includes(selectedKeyword)) {
          project.classList.remove("hidden");
        } else {
          project.classList.add("hidden");
        }
      });
    });
  });
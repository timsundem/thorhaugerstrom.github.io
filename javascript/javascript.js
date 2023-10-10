const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#f5f5f5';
    });

    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '#fff';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight;
    let currentSlide = 0;
    let isScrolling = false; // Flag to prevent rapid scrolling
  
    // Function to scroll to the selected section
    function scrollToSection(sectionIndex) {
      const targetSection = sections[sectionIndex];
      if (targetSection) {
        const targetOffset = targetSection.offsetTop - headerHeight;
        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
      }
    }
  
    // Handle scrolling with the mouse wheel
    window.addEventListener("wheel", (e) => {
      if (!isScrolling) {
        isScrolling = true;
        if (e.deltaY > 0 && currentSlide < sections.length - 1) {
          currentSlide++;
        } else if (e.deltaY < 0 && currentSlide > 0) {
          currentSlide--;
        }
        scrollToSection(currentSlide);
        // Set a timeout to reset the scrolling flag to allow further scrolling
        setTimeout(() => {
          isScrolling = false;
        }, 1000); // Adjust the timeout value as needed
      }
    });
  
    // Handle scrolling with the navigation links
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        currentSlide = index;
        scrollToSection(currentSlide);
      });
    });
  });
  
  

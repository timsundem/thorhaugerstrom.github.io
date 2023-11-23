const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#f5f5f5';
    });

    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '#fff';
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > window.innerHeight - navbar.offsetHeight) { 
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let isTransitioning = false;

    document.querySelector(".btn-1").addEventListener("click", function(e) {
        e.preventDefault();

        if (!isTransitioning) {
            isTransitioning = true;

            // Begin the transition sequence
            transitionToAbout();
        }
    });

    function transitionToAbout() {
        const transitionDuration = 1000; // 1 second, adjust as needed

        // First, do something like fading out the particles or other elements
        const particles = document.getElementById('particles-js');
        particles.style.transition = `opacity ${transitionDuration}ms`;
        particles.style.opacity = 0;

        // Then, after a delay, smoothly scroll to the about section
        setTimeout(function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });

            setTimeout(function() {
                isTransitioning = false;
                particles.style.opacity = 1;
            }, transitionDuration);
        }, transitionDuration / 2); // Starting the scroll halfway through the fade out
    }
});



  
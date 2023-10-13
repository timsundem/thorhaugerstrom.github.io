const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#f5f5f5';
    });

    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '#fff';
    });
});

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });  
 document.addEventListener('DOMContentLoaded', function () {
    });

// IntersectionObserver to animate elements when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('[data-aos]');

    const observerOptions = {
        threshold: 0.2, // Trigger animation when 20% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// Smooth Scroll functionality for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

 // JavaScript to smooth toggle accordion collapse/expand with animation
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', function() {
            let allButtons = document.querySelectorAll('.accordion-button');
            allButtons.forEach(b => {
                if (b !== this) {
                    b.classList.remove('collapsed');
                    b.setAttribute('aria-expanded', 'false');
                }
            });
            this.classList.toggle('collapsed');
            const expanded = this.classList.contains('collapsed') ? 'false' : 'true';
            this.setAttribute('aria-expanded', expanded);
        });
    });
  // Initialize AOS
  AOS.init({
    duration: 1000,  // Animation duration
    easing: 'ease',  // Easing function
    once: true,      // Animation happens once
  });
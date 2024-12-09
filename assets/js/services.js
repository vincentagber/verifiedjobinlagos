const slider = document.getElementById("testimonial-slider");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentIndex = 0;

    const scrollTestimonials = (direction) => {
      const cardWidth = slider.firstElementChild.offsetWidth + 16; // Includes gap
      const totalCards = slider.children.length;
      const maxIndex = totalCards - Math.floor(slider.parentElement.offsetWidth / cardWidth);

      if (direction === "next" && currentIndex < maxIndex) {
        currentIndex++;
      } else if (direction === "prev" && currentIndex > 0) {
        currentIndex--;
      } else if (direction === "next" && currentIndex >= maxIndex) {
        currentIndex = 0; // Reset to first card
      } else if (direction === "prev" && currentIndex <= 0) {
        currentIndex = maxIndex; // Jump to last card
      }


      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    prevBtn.addEventListener("click", () => scrollTestimonials("prev"));
    nextBtn.addEventListener("click", () => scrollTestimonials("next"));

    // Auto-Scroll
    // const autoScroll = setInterval(() => scrollTestimonials("next"), 3000);

    // // Pause auto-scroll on hover
    // slider.parentElement.addEventListener("mouseenter", () => clearInterval(autoScroll));
    // slider.parentElement.addEventListener("mouseleave", () => setInterval(() => scrollTestimonials("next"), 3000));
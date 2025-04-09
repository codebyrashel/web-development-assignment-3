// Testimony Carousel Control - Java Start //

document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carousel = document.querySelector('#testimonial-carousel');
  const indicators = document.querySelectorAll('.indicator');
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;

    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonialItems.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === testimonialItems.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  updateCarousel();
});

// Testimony Carousel Control - Java End //


// Mobile Nav Toggle Control - Java Start //

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  const closeNav = document.getElementById("closeNav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.add("open");
  });

  closeNav.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });
});

// Mobile Nav Toggle Control - Java End //


// Handle dropdown toggle visibility
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
      const menu = e.target.closest('.dropdown-toggle').querySelector('.dropdown-menu');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
});

// Unified DOMContentLoaded Event
document.addEventListener('DOMContentLoaded', () => {
  // Carousel Controls
  const carousel = document.querySelector('#testimonial-carousel');
  const indicators = document.querySelectorAll('.indicator');
  const items = document.querySelectorAll('.testimonial-item');
  let currentIndex = 0;

  const updateCarousel = () => {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((el, i) => el.classList.toggle('active', i === currentIndex));
  };

  document.querySelector('.prev')?.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  document.querySelector('.next')?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  indicators.forEach((el, i) =>
    el.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel();
    })
  );

  updateCarousel();

  // Mobile Navigation Toggle
  document.getElementById("hamburger")?.addEventListener("click", () =>
    document.getElementById("mobileNav")?.classList.add("open")
  );
  document.getElementById("closeNav")?.addEventListener("click", () =>
    document.getElementById("mobileNav")?.classList.remove("open")
  );

  // Dropdown Toggle
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const menu = e.currentTarget.querySelector('.dropdown-menu');
      if (menu) menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Animation Observer Setup
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      const el = entry.target;
      const inView = entry.isIntersecting;

      const toggleClass = (condition, className) => {
        if (condition) el.classList.toggle(className, inView);
      };

      const isEven = index % 2 === 0;
      toggleClass(el.classList.contains('services-card-wrapper'), isEven ? 'animate-left' : 'animate-right');
      toggleClass(el.classList.contains('promo-card-v2'), 'animate-left');
      toggleClass(el === document.querySelector('.honeymoon-image'), 'animate-left');
      toggleClass(el === document.querySelector('.booking-cards-wrapper'), 'animate-right');
      toggleClass(el === document.querySelector('.promo-image-v2'), 'animate-right');
    });
  }, { threshold: 0.3 });

  // Observe All Relevant Elements
  [
    ...document.querySelectorAll('.services-card-wrapper'),
    document.querySelector('.honeymoon-image'),
    document.querySelector('.booking-cards-wrapper'),
    ...document.querySelectorAll('.promo-card-v2'),
    document.querySelector('.promo-image-v2')
  ].forEach(el => el && observer.observe(el));
});

/**
 * scroll-animations.js
 *
 * Two things:
 * 1. IntersectionObserver — adds .is-visible to reveal elements as they enter viewport
 * 2. Subtle parallax on the hero image (translateY on scroll)
 *
 * Respects prefers-reduced-motion throughout.
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // -----------------------------------------------
  // 1. SCROLL REVEAL (IntersectionObserver)
  // -----------------------------------------------

  const revealElements = document.querySelectorAll(
    '.reveal-up, .reveal-from-left, .reveal-from-right'
  );

  if (revealElements.length > 0 && !prefersReducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve after triggering — no re-animation on scroll back
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,       // Trigger when 12% of element is visible
        rootMargin: '0px 0px -40px 0px', // Trigger slightly before bottom edge
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Reduced motion: just make everything visible immediately
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }


  // -----------------------------------------------
  // 2. HERO IMAGE PARALLAX
  // Subtle — moves at 25% of scroll speed
  // Only active on desktop (> 768px) where the
  // hero is two-column and image is tall enough
  // -----------------------------------------------

  const heroImg = document.querySelector('.hero__image img');

  if (heroImg && !prefersReducedMotion) {
    let ticking = false;

    const updateParallax = () => {
      if (window.innerWidth <= 768) return; // Skip on mobile

      const scrollY = window.scrollY;
      const heroSection = document.querySelector('.hero');
      if (!heroSection) return;

      const heroBottom = heroSection.getBoundingClientRect().bottom + scrollY;

      // Only apply while hero is in view
      if (scrollY < heroBottom) {
        const offset = scrollY * 0.2; // 20% parallax — subtle
        heroImg.style.transform = `translateY(${offset}px)`;
      }

      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }


  // -----------------------------------------------
  // 3. FRAMEWORK SECTION — mark as visible for
  //    the equation colour transition in CSS
  // -----------------------------------------------

  const frameworkSection = document.querySelector('.framework');
  if (frameworkSection && !prefersReducedMotion) {
    const frameworkObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            frameworkSection.classList.add('is-visible');
            frameworkObserver.unobserve(frameworkSection);
          }
        });
      },
      { threshold: 0.3 }
    );
    frameworkObserver.observe(frameworkSection);
  }

})();

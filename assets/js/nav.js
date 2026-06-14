/**
 * nav.js
 * - Smart hide-on-scroll header (hides scrolling down, reveals scrolling up)
 * - Scroll shadow when not at top
 * - Mobile pop-out panel with backdrop
 */

(function () {
  'use strict';

  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const panel = document.getElementById('nav-mobile-menu');
  const backdrop = document.getElementById('nav-backdrop');

  // ---------------------------------------------
  // SMART HIDE-ON-SCROLL + SHADOW
  // ---------------------------------------------
  if (nav) {
    let lastScroll = 0;
    let ticking = false;
    const HIDE_THRESHOLD = 80; // Don't hide until scrolled past this

    const onScroll = () => {
      const current = window.scrollY;

      // Shadow when scrolled away from top
      if (current > 20) {
        nav.classList.add('is-scrolled');
      } else {
        nav.classList.remove('is-scrolled');
      }

      // Don't hide if mobile panel is open
      const panelOpen = panel && panel.classList.contains('is-open');

      if (!panelOpen && current > HIDE_THRESHOLD) {
        if (current > lastScroll) {
          // Scrolling down — hide
          nav.classList.add('is-hidden');
        } else {
          // Scrolling up — reveal
          nav.classList.remove('is-hidden');
        }
      } else {
        nav.classList.remove('is-hidden');
      }

      lastScroll = current;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    onScroll();
  }

  // ---------------------------------------------
  // MOBILE POP-OUT PANEL
  // ---------------------------------------------
  if (toggle && panel && backdrop) {
    const openPanel = () => {
      toggle.classList.add('is-open');
      panel.classList.add('is-open');
      backdrop.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      panel.setAttribute('aria-hidden', 'false');
      backdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Lock scroll
    };

    const closePanel = () => {
      toggle.classList.remove('is-open');
      panel.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      panel.setAttribute('aria-hidden', 'true');
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    toggle.addEventListener('click', () => {
      if (panel.classList.contains('is-open')) {
        closePanel();
      } else {
        openPanel();
      }
    });

    // Click backdrop to close
    backdrop.addEventListener('click', closePanel);

    // Click a link inside panel closes it
    panel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closePanel);
    });

    // Escape key closes
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel.classList.contains('is-open')) {
        closePanel();
        toggle.focus();
      }
    });
  }

})();

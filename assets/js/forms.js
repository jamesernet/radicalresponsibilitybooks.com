/**
 * forms.js
 * Submits Netlify forms via fetch so the user stays on the page
 * and sees an inline success message instead of a redirect.
 *
 * Works with the notify form (#notify-form) and contact form (#contact-form).
 * Falls back to normal submission if fetch fails.
 */

(function () {
  'use strict';

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleForm = (formId, successId) => {
    const form = document.getElementById(formId);
    const success = document.getElementById(successId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      })
        .then(() => {
          form.reset();
          if (success) {
            success.hidden = false;
            // Hide the input row after success on the notify form
            const row = form.querySelector('.notify__row');
            if (row) row.style.display = 'none';
            const btn = form.querySelector('.btn');
            if (btn && form.id === 'contact-form') btn.style.display = 'none';
          }
        })
        .catch((error) => {
          // Fall back to native submit if AJAX fails
          console.error('Form submission error:', error);
          form.submit();
        });
    });
  };

  handleForm('notify-form', 'notify-success');
  handleForm('contact-form', 'contact-success');

})();

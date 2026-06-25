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

      const data = {};
      new FormData(form).forEach((value, key) => { data[key] = value; });

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      })
        .then((response) => {
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          form.reset();
          if (success) {
            success.hidden = false;
            const row = form.querySelector('.notify__row');
            if (row) row.style.display = 'none';
            const btn = form.querySelector('.btn');
            if (btn && form.id === 'contact-form') btn.style.display = 'none';
          }
        })
        .catch((error) => {
          console.error('Form submission error:', error);
        });
    });
  };

  handleForm('notify-form', 'notify-success');
  handleForm('contact-form', 'contact-success');

})();

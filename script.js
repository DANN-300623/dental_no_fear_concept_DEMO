// DENTAL — NO FEAR CONCEPT V2
// Mobile nav, scroll-reveal, demo contact form

document.addEventListener('DOMContentLoaded', function () {

  /* Mobile navigation */
  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.getElementById('mobile-nav');
  var body = document.body;

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      body.classList.toggle('nav-open', isOpen);
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        body.classList.remove('nav-open');
      });
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Demo contact form */
  var form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      var name = form.querySelector('#name');

      if (!form.checkValidity()) {
        if (status) status.textContent = 'Proverite da li su sva polja popunjena.';
        return;
      }

      var firstName = (name && name.value.trim()) ? name.value.trim().split(' ')[0] : '';
      if (status) {
        status.textContent = firstName
          ? 'Hvala, ' + firstName + '. Ovo je demo forma — poruka nije zaista poslata.'
          : 'Hvala. Ovo je demo forma — poruka nije zaista poslata.';
      }
      form.reset();
    });
  }

});

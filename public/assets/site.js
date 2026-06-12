/* gusit.de — site.js
   Vanilla JS, CSP-safe (no inline handlers). Language-agnostic:
   all user-facing strings come from data-attributes / markup. */
(function () {
  'use strict';

  /* ---------- Mobile navigation toggle ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Language switcher (dropdown) ---------- */
  var switcher = document.querySelector('[data-lang-switcher]');
  if (switcher) {
    var langBtn = switcher.querySelector('.lang-toggle');
    var langMenu = switcher.querySelector('.lang-menu');

    var closeLangMenu = function () {
      if (!langMenu.hidden) {
        langMenu.hidden = true;
        langBtn.setAttribute('aria-expanded', 'false');
      }
    };

    if (langBtn && langMenu) {
      langBtn.addEventListener('click', function () {
        var willOpen = langMenu.hidden;
        langMenu.hidden = !willOpen;
        langBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });

      /* Outside click closes the menu (button clicks land inside `switcher`). */
      document.addEventListener('click', function (e) {
        if (!switcher.contains(e.target)) closeLangMenu();
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !langMenu.hidden) {
          closeLangMenu();
          langBtn.focus();
        }
      });
    }
  }

  /* ---------- Contact form ---------- */
  var form = document.querySelector('[data-contact-form]');
  if (!form) return;

  /* JS is active: take over validation (no-JS users keep native browser checks). */
  form.setAttribute('novalidate', '');

  var submitBtn = form.querySelector('button[type="submit"]');
  var btnDefaultLabel = submitBtn ? submitBtn.textContent : '';
  var formMsg = form.querySelector('[data-role="form-msg"]');

  function field(id) { return form.querySelector('#' + id); }

  function setFieldError(input, show) {
    var err = document.getElementById(input.id + '-error');
    if (err) err.hidden = !show;
    input.setAttribute('aria-invalid', show ? 'true' : 'false');
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  }

  function validate() {
    var name = field('contact-name');
    var email = field('contact-email');
    var message = field('contact-message');
    var firstInvalid = null;

    var checks = [
      [name, name.value.trim().length > 0],
      [email, isValidEmail(email.value.trim())],
      [message, message.value.trim().length > 0]
    ];

    checks.forEach(function (check) {
      var ok = check[1];
      setFieldError(check[0], !ok);
      if (!ok && !firstInvalid) firstInvalid = check[0];
    });

    if (firstInvalid) firstInvalid.focus();
    return !firstInvalid;
  }

  function showFormMsg(ok) {
    if (!formMsg) return;
    formMsg.textContent = form.getAttribute(ok ? 'data-msg-success' : 'data-msg-error') || '';
    formMsg.classList.remove('is-ok', 'is-err');
    formMsg.classList.add(ok ? 'is-ok' : 'is-err');
    formMsg.hidden = false;
  }

  function showValidationMsg() {
    var msg = form.getAttribute('data-msg-validation');
    if (!msg || !formMsg) return;
    formMsg.textContent = msg;
    formMsg.classList.remove('is-ok', 'is-err');
    formMsg.classList.add('is-err');
    formMsg.hidden = false;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formMsg) formMsg.hidden = true;
    if (!validate()) { showValidationMsg(); return; }

    var tokenInput = form.querySelector('[name="cf-turnstile-response"]');
    var companyInput = field('contact-company');
    var honeypot = form.querySelector('#website');

    var payload = {
      name: field('contact-name').value.trim(),
      email: field('contact-email').value.trim(),
      company: companyInput ? companyInput.value.trim() : '',
      message: field('contact-message').value.trim(),
      turnstileToken: tokenInput ? tokenInput.value : '',
      website: honeypot ? honeypot.value : ''
    };

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = form.getAttribute('data-msg-sending') || btnDefaultLabel;
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        return res.json().catch(function () { return { ok: false }; });
      })
      .then(function (data) {
        var ok = !!(data && data.ok);
        showFormMsg(ok);
        if (ok) form.reset();
      })
      .catch(function () {
        showFormMsg(false);
      })
      .then(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = btnDefaultLabel;
        }
        if (window.turnstile && typeof window.turnstile.reset === 'function') {
          try { window.turnstile.reset(); } catch (err) { /* widget not rendered */ }
        }
      });
  });
})();

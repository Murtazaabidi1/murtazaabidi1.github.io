// Site behaviour: theme toggle and mobile navigation. No dependencies.
// The initial theme is applied by the inline script in <head> (before paint);
// this file only keeps the toggle in sync and handles user changes.
(function () {
  var root = document.documentElement;

  /* ---------- Theme ---------- */
  var themeBtn = document.querySelector('.theme-toggle');
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function savedTheme() {
    try {
      var t = localStorage.getItem('theme');
      return t === 'light' || t === 'dark' ? t : null;
    } catch (e) { return null; }
  }

  function applyTheme(theme) {
    var dark = theme === 'dark';
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (themeMeta) themeMeta.setAttribute('content', dark ? '#15171a' : '#ffffff');
    if (themeBtn) {
      // Toggle button pattern: label stays "Dark mode", pressed state = dark on.
      themeBtn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      themeBtn.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  applyTheme(root.getAttribute('data-theme'));

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Follow the device setting live, but only while the visitor hasn't chosen.
  if (mq) {
    var onSystemChange = function (e) { if (!savedTheme()) applyTheme(e.matches ? 'dark' : 'light'); };
    if (mq.addEventListener) mq.addEventListener('change', onSystemChange);
    else if (mq.addListener) mq.addListener(onSystemChange);
  }

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  function isOpen() { return toggle.getAttribute('aria-expanded') === 'true'; }

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    var open = !isOpen();
    setOpen(open);
    if (open) {
      var first = menu.querySelector('a');
      if (first) first.focus();
    }
  });

  // Close after choosing a link (important for same-page anchors) or pressing Escape.
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });
  // Close when tapping outside the open menu.
  document.addEventListener('click', function (e) {
    if (isOpen() && !menu.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });
  // Close when keyboard focus leaves the menu (e.g. tabbing past the last link).
  menu.addEventListener('focusout', function (e) {
    if (isOpen() && e.relatedTarget && !menu.contains(e.relatedTarget) && !toggle.contains(e.relatedTarget)) setOpen(false);
  });
})();

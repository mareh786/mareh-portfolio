(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Mobile nav toggle ----
  var nav = document.querySelector('.nav');
  var toggle = document.getElementById('navToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal content as it enters the viewport.
  var revealElements = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach(function (element) {
      element.classList.add('is-visible');
    });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  }

  // ---- Footer year ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Illustrative "live" status panel ----
  // Purely cosmetic simulated data — replace with a real metrics feed if desired.
  var uptimeEl = document.getElementById('metricUptime');
  var latencyEl = document.getElementById('metricLatency');
  var errorEl = document.getElementById('metricError');
  var nodesEl = document.getElementById('metricNodes');
  var sparklinePath = document.getElementById('sparklinePath');

  var points = [];
  var POINT_COUNT = 24;
  var baseLatency = 118;

  function seedPoints() {
    points = [];
    var v = baseLatency;
    for (var i = 0; i < POINT_COUNT; i++) {
      v += (Math.random() - 0.5) * 14;
      v = Math.max(60, Math.min(180, v));
      points.push(v);
    }
  }

  function renderSparkline() {
    if (!sparklinePath) return;
    var w = 240, h = 56, pad = 4;
    var min = Math.min.apply(null, points);
    var max = Math.max.apply(null, points);
    var range = Math.max(1, max - min);
    var step = (w - pad * 2) / (points.length - 1);

    var coords = points.map(function (v, i) {
      var x = pad + i * step;
      var y = h - pad - ((v - min) / range) * (h - pad * 2);
      return x.toFixed(1) + ',' + y.toFixed(1);
    });
    sparklinePath.setAttribute('points', coords.join(' '));
  }

  function tick() {
    points.shift();
    var last = points[points.length - 1];
    var next = last + (Math.random() - 0.5) * 14;
    next = Math.max(60, Math.min(180, next));
    points.push(next);
    renderSparkline();

    if (latencyEl) latencyEl.textContent = Math.round(next) + ' ms';
    if (uptimeEl) uptimeEl.textContent = (99.9 + Math.random() * 0.09).toFixed(2) + '%';
    if (errorEl) errorEl.textContent = (Math.random() * 0.05).toFixed(2) + '%';
    if (nodesEl) nodesEl.textContent = 40 + Math.round(Math.random() * 4);
  }

  seedPoints();
  renderSparkline();

  if (!reduceMotion && sparklinePath) {
    setInterval(tick, 2200);
  }
})();
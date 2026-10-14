// Fades and lifts .reveal elements into place as they enter the viewport.
// Progressive enhancement only: without JS (or with reduced motion), the
// elements are already visible via the plain .reveal CSS rule.
(function () {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = (index % 6) * 60;
          setTimeout(function () { el.classList.add("is-visible"); }, delay);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  els.forEach(function (el) { observer.observe(el); });
})();

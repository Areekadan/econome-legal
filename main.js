// dynamic year
document.getElementById("year").textContent = new Date()
  .getFullYear()
  .toString();

// simple scroll-reveal for .reveal elements with stagger
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
    }
  );

  revealEls.forEach((el, index) => {
    el.style.transitionDelay = `${index * 60}ms`;
    observer.observe(el);
  });
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// Scroll-to-top visibility & behavior
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  const y = window.scrollY || window.pageYOffset;
  if (y > 260) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ----- Show header only while scrolling -----
(function () {
  const headerWrap = document.querySelector(".shell-header-wrap");
  if (!headerWrap) return;

  let hideTimeout = null;

  function showHeaderWhileScrolling() {
    // only show once user has actually scrolled a bit
    if (window.scrollY < 20) return;

    headerWrap.classList.add("is-active");

    if (hideTimeout) clearTimeout(hideTimeout);

    // hide shortly after scrolling stops
    hideTimeout = setTimeout(() => {
      headerWrap.classList.remove("is-active");
    }, 1000); // tweak duration if you want
  }

  window.addEventListener("scroll", showHeaderWhileScrolling, {
    passive: true,
  });
})();

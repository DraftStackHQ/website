document.querySelectorAll(".cards").forEach((group) => {
  group.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.animationDelay = `${i * 80}ms`;
  });
});

const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add("in-view");
        el.addEventListener(
          "animationend",
          () => el.classList.remove("reveal", "in-view"),
          { once: true }
        );
        observer.unobserve(el);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
);

revealEls.forEach((el) => observer.observe(el));

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 8);
});

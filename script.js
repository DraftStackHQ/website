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

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");

function closeNav() {
  siteNav.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) closeNav();
});

const navLinks = [...siteNav.querySelectorAll("a[href^='#']")];
const spySections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const link = navLinks.find((a) => a.getAttribute("href") === `#${entry.target.id}`);
      if (!link) return;
      navLinks.forEach((a) => a.classList.remove("active"));
      link.classList.add("active");
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

spySections.forEach((section) => spyObserver.observe(section));

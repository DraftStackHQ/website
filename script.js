/**
 * DraftStack — Softly Interactive Scripts
 * Lightweight, production-grade vanilla JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  /* --------------------------------------------------------------------------
     1. Scroll Reveal Animations
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll(".reveal");
  
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((el, index) => {
      // Stagger animations slightly for adjacent sibling elements
      el.style.transitionDelay = `${(index % 3) * 60}ms`;
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach((el) => el.classList.add("in-view"));
  }

  /* --------------------------------------------------------------------------
     2. Interactive FAQ Accordion
     -------------------------------------------------------------------------- */
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    const content = item.querySelector(".accordion-content");

    if (!trigger || !content) return;

    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";

      // Close all other items in the accordion group for clean behavior
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherTrigger = otherItem.querySelector(".accordion-trigger");
          const otherContent = otherItem.querySelector(".accordion-content");
          if (otherTrigger && otherContent) {
            otherTrigger.setAttribute("aria-expanded", "false");
            otherContent.style.maxHeight = null;
          }
        }
      });

      // Toggle current item
      if (isExpanded) {
        trigger.setAttribute("aria-expanded", "false");
        content.style.maxHeight = null;
      } else {
        trigger.setAttribute("aria-expanded", "true");
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });

    // Keyboard accessibility: Enter & Space
    trigger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trigger.click();
      }
    });
  });

  /* --------------------------------------------------------------------------
     3. Horizontal Scenario Carousel (Animated Moving Glide & Controls)
     -------------------------------------------------------------------------- */
  const track = document.getElementById("scenarioTrack");
  const wrap = document.getElementById("marqueeWrap");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");

  if (track && wrap) {
    // Pause animation when hovering over the container
    wrap.addEventListener("mouseenter", () => {
      track.classList.add("is-paused");
    });

    wrap.addEventListener("mouseleave", () => {
      if (!wrap.classList.contains("is-dragging")) {
        track.classList.remove("is-paused");
      }
    });

    // Manual navigation buttons: smoothly shift by one card width
    const cardStep = 334; // Card width (310px) + gap (24px)

    const nudgeTrack = (direction) => {
      track.classList.add("is-paused");
      const computedStyle = window.getComputedStyle(track);
      const matrix = new WebKitCSSMatrix(computedStyle.transform);
      const currentX = matrix.m41;
      const halfWidth = track.scrollWidth / 2;
      
      let newX = currentX + (direction * cardStep);
      
      // Wrap around seamlessly
      if (newX > 0) {
        newX = -halfWidth + cardStep;
      } else if (Math.abs(newX) >= halfWidth) {
        newX = 0;
      }

      track.style.transition = "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
      track.style.transform = `translate3d(${newX}px, 0, 0)`;

      setTimeout(() => {
        track.style.transition = "";
        // Resume auto-glide after user interaction if not hovered
        if (!wrap.matches(":hover")) {
          track.classList.remove("is-paused");
        }
      }, 600);
    };

    if (prevBtn) {
      prevBtn.addEventListener("click", () => nudgeTrack(1));
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => nudgeTrack(-1));
    }

    // Touch swipe support on mobile devices
    let touchStartX = 0;
    let touchEndX = 0;

    wrap.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
      track.classList.add("is-paused");
    }, { passive: true });

    wrap.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const deltaX = touchEndX - touchStartX;
      if (Math.abs(deltaX) > 40) {
        nudgeTrack(deltaX > 0 ? 1 : -1);
      } else {
        setTimeout(() => track.classList.remove("is-paused"), 1200);
      }
    }, { passive: true });
  }
  /* --------------------------------------------------------------------------
     4. Interactive Product Screenshot Showcase & Switcher
     -------------------------------------------------------------------------- */
  const projectButtons = document.querySelectorAll(".project-pill-btn[data-project]");
  const tabsLegal = document.getElementById("tabs-legal");
  const tabsGymflow = document.getElementById("tabs-gymflow");
  const proofLegal = document.getElementById("proof-legal");
  const proofGymflow = document.getElementById("proof-gymflow");
  const shotTabs = document.querySelectorAll(".screenshot-tab-btn[data-shot]");
  const shotPanels = document.querySelectorAll(".screenshot-panel");
  const browserUrl = document.getElementById("browserUrl");

  const activateScreenshot = (shotKey, urlText) => {
    shotPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === `shot-${shotKey}`);
    });
    if (browserUrl && urlText) {
      browserUrl.textContent = urlText;
    }
  };

  projectButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const projectKey = btn.getAttribute("data-project");
      projectButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      if (projectKey === "legal") {
        if (tabsLegal) tabsLegal.style.display = "flex";
        if (tabsGymflow) tabsGymflow.style.display = "none";
        if (proofLegal) proofLegal.style.display = "grid";
        if (proofGymflow) proofGymflow.style.display = "none";

        const firstTab = tabsLegal ? tabsLegal.querySelector(".screenshot-tab-btn") : null;
        if (firstTab) {
          tabsLegal.querySelectorAll(".screenshot-tab-btn").forEach((t) => t.classList.remove("active"));
          firstTab.classList.add("active");
          activateScreenshot(firstTab.getAttribute("data-shot"), firstTab.getAttribute("data-url"));
        }
      } else if (projectKey === "gymflow") {
        if (tabsLegal) tabsLegal.style.display = "none";
        if (tabsGymflow) tabsGymflow.style.display = "flex";
        if (proofLegal) proofLegal.style.display = "none";
        if (proofGymflow) proofGymflow.style.display = "grid";

        const firstTab = tabsGymflow ? tabsGymflow.querySelector(".screenshot-tab-btn") : null;
        if (firstTab) {
          tabsGymflow.querySelectorAll(".screenshot-tab-btn").forEach((t) => t.classList.remove("active"));
          firstTab.classList.add("active");
          activateScreenshot(firstTab.getAttribute("data-shot"), firstTab.getAttribute("data-url"));
        }
      }
    });
  });

  shotTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const parentBar = tab.closest(".screenshot-tab-bar");
      if (parentBar) {
        parentBar.querySelectorAll(".screenshot-tab-btn").forEach((t) => t.classList.remove("active"));
      }
      tab.classList.add("active");

      const shotKey = tab.getAttribute("data-shot");
      const urlText = tab.getAttribute("data-url");
      activateScreenshot(shotKey, urlText);
    });
  });
  /* --------------------------------------------------------------------------
     5. Mobile Navigation Drawer
     -------------------------------------------------------------------------- */
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.getElementById("site-nav");

  if (navToggle && siteNav) {
    const closeMobileNav = () => {
      siteNav.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = siteNav.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close when clicking nav links
    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileNav);
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!siteNav.contains(e.target) && !navToggle.contains(e.target)) {
        closeMobileNav();
      }
    });
  }

  /* --------------------------------------------------------------------------
     6. Navigation Scrollspy
     -------------------------------------------------------------------------- */
  const navLinks = document.querySelectorAll(".nav-menu a[href^='#']");
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length > 0) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px"
      }
    );

    sections.forEach((section) => spyObserver.observe(section));
  }

  /* --------------------------------------------------------------------------
     7. Inquiry Form Submission & Validation
     -------------------------------------------------------------------------- */
  const inquiryForm = document.getElementById("inquiryForm");
  const formSuccess = document.getElementById("formSuccess");
  const submitBtn = document.getElementById("submitInquiry");

  if (inquiryForm && formSuccess && submitBtn) {
    inquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("clientName");
      const emailInput = document.getElementById("clientEmail");
      const scopeSelect = document.getElementById("projectScope");

      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";

      if (!name || !email || !email.includes("@")) {
        alert("Please provide a valid name and email address.");
        return;
      }

      // Visual feedback on submit button
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = "<span>Sending note...</span>";

      setTimeout(() => {
        // Reset button and form
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        inquiryForm.reset();

        // Show smooth success card
        formSuccess.style.display = "flex";
        formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });

        setTimeout(() => {
          formSuccess.style.display = "none";
        }, 10000);
      }, 700);
    });
  }

  /* --------------------------------------------------------------------------
     8. Dark / Light Mode Theme Toggle
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById("themeToggleBtn");

  const getPreferredTheme = () => {
    const stored = localStorage.getItem("draftstack_theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeToggleBtn) {
      const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
      themeToggleBtn.setAttribute("aria-label", label);
      themeToggleBtn.setAttribute("title", label);
    }
  };

  // Initialize theme
  applyTheme(getPreferredTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("draftstack_theme", nextTheme);
      applyTheme(nextTheme);
    });
  }

  // Listen to system preference changes if user hasn't set an explicit preference
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("draftstack_theme")) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
  }
});

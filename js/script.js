// Find the page controls once so each feature can use the same elements.
const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const themeButton = document.querySelector(".theme-toggle");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const revealElements = document.querySelectorAll(".reveal");
const backToTopButton = document.querySelector(".back-to-top-button");
const navigationLinks = document.querySelectorAll(".nav-link");
const pageSections = document.querySelectorAll("main section[id]");

// Open or close the small-screen menu and keep its accessible state updated.
menuButton.addEventListener("click", function () {
  siteNav.classList.toggle("is-open");
  const menuIsOpen = siteNav.classList.contains("is-open");

  if (menuIsOpen) {
    menuButton.setAttribute("aria-label", "Close navigation menu");
    menuButton.setAttribute("aria-expanded", "true");
  } else {
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

// Close the mobile menu after a visitor chooses a section link.
navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    siteNav.classList.remove("is-open");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Read the saved theme; if storage is unavailable or empty, use light theme.
let savedTheme = "light";

try {
  const storedTheme = localStorage.getItem("portfolio-theme");

  if (storedTheme === "dark") {
    savedTheme = "dark";
  }
} catch (error) {
  console.warn("The saved theme could not be read from local storage.", error);
}

document.documentElement.setAttribute("data-theme", savedTheme);

if (savedTheme === "dark") {
  themeButton.setAttribute("aria-label", "Switch to light theme");
  themeButton.setAttribute("aria-pressed", "true");
}

// Switch between light and dark colours and remember the visitor's choice.
themeButton.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = "light";

  if (currentTheme === "light") {
    newTheme = "dark";
  }

  document.documentElement.setAttribute("data-theme", newTheme);

  if (newTheme === "dark") {
    themeButton.setAttribute("aria-label", "Switch to light theme");
    themeButton.setAttribute("aria-pressed", "true");
  } else {
    themeButton.setAttribute("aria-label", "Switch to dark theme");
    themeButton.setAttribute("aria-pressed", "false");
  }

  try {
    localStorage.setItem("portfolio-theme", newTheme);
  } catch (error) {
    console.warn("The theme could not be saved to local storage.", error);
  }
});

// Show only the project cards that match the selected category.
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedCategory = button.getAttribute("data-filter");

    filterButtons.forEach(function (filterButton) {
      filterButton.classList.remove("is-selected");
      filterButton.setAttribute("aria-pressed", "false");
    });

    button.classList.add("is-selected");
    button.setAttribute("aria-pressed", "true");

    projectCards.forEach(function (card) {
      const cardCategory = card.getAttribute("data-category");

      if (selectedCategory === "all" || selectedCategory === cardCategory) {
        card.hidden = false;
      } else {
        card.hidden = true;
      }
    });
  });
});

// Reveal content as it enters the screen; show it immediately if observers are not supported.
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach(function (element) {
    element.classList.add("visible");
  });
}

// Return the visitor to the top when the floating button is pressed.
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Update the floating button and the highlighted navigation link while scrolling.
window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    backToTopButton.classList.add("is-visible");
  } else {
    backToTopButton.classList.remove("is-visible");
  }

  let currentSectionId = "home";

  pageSections.forEach(function (section) {
    const sectionTop = section.offsetTop - 140;

    if (window.scrollY >= sectionTop) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navigationLinks.forEach(function (link) {
    link.classList.remove("is-active");

    if (link.getAttribute("href") === "#" + currentSectionId) {
      link.classList.add("is-active");
    }
  });
});

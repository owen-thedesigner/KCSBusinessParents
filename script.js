// =========================
// MOBILE MENU
// =========================

const mobileMenuButton = document.getElementById("mobileMenu");
const mobileNav = document.getElementById("mobileNav");

mobileMenuButton.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});


// Close mobile menu when a link is clicked

const mobileLinks = mobileNav.querySelectorAll("a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });
});


// =========================
// BUSINESS SEARCH
// =========================

const searchInput = document.getElementById("searchInput");
const clearSearchButton = document.getElementById("clearSearch");

const businessCards =
  document.querySelectorAll(".business-card");

const noResults =
  document.getElementById("noResults");

const businessCount =
  document.getElementById("businessCount");


// Search businesses

function filterBusinesses() {

  const searchTerm =
    searchInput.value.toLowerCase().trim();

  let visibleBusinesses = 0;


  businessCards.forEach((card) => {

    const businessName =
      card.dataset.name.toLowerCase();

    const cardText =
      card.textContent.toLowerCase();


    const matchesSearch =
      businessName.includes(searchTerm) ||
      cardText.includes(searchTerm);


    if (matchesSearch) {

      card.classList.remove("hidden");

      visibleBusinesses++;

    } else {

      card.classList.add("hidden");

    }

  });


  // Update business count

  businessCount.textContent = visibleBusinesses;


  // Show / hide no-results message

  if (visibleBusinesses === 0) {

    noResults.classList.add("show");

  } else {

    noResults.classList.remove("show");

  }

}


// Search while typing

searchInput.addEventListener("input", () => {

  filterBusinesses();

});


// =========================
// CLEAR SEARCH
// =========================

clearSearchButton.addEventListener("click", () => {

  searchInput.value = "";

  filterBusinesses();

  searchInput.focus();

});


// =========================
// PLACEHOLDER LINKS
// =========================

const placeholderLinks =
  document.querySelectorAll(".placeholder-link");


placeholderLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    alert(
      "This is a placeholder! Once a business is added, this button can link directly to their website."
    );

  });

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar =
  document.querySelector(".navbar");


window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {

    navbar.style.boxShadow =
      "0 5px 25px rgba(0,0,0,0.08)";

  } else {

    navbar.style.boxShadow =
      "none";

  }

});


// =========================
// FADE-IN ANIMATION
// =========================

const observerOptions = {
  threshold: 0.1
};


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

        }

      });

    },
    observerOptions
  );


const animatedElements =
  document.querySelectorAll(
    ".business-card"
  );


animatedElements.forEach((element) => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(25px)";

  element.style.transition =
    "opacity 0.5s ease, transform 0.5s ease";


  observer.observe(element);

});
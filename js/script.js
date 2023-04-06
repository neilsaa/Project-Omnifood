<<<<<<< HEAD
// Set current year
const yearEl = document.querySelector(".year");
console.log(yearEl);
const currentYear = new Date().getFullYear();
// console.log(currentYear);
yearEl.textContent = currentYear;
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function (e) {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////// Smooth scrooling animation

const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");
    // Scrool back to the top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close mobile navigation

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.remove("nav-open");
    }
  });
});

////////////////////////////////////////// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
// ////////////////////////////////////////////////////////////////////// Screenshot animation

const stepImgBox = document.querySelectorAll(".step-img-box");
// console.log(stepImgBox);

// const observer2 = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);
//     if (ent.isIntersecting) {
//       stepImgBox[0].classList.add("animate-img");
//     } else {
//       stepImgBox[0].classList.remove("animate-img");
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//   }
// );
// observer2.observe(stepImgBox[0]);
stepImgBox.forEach(function (el) {
  const observer = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      // console.log(ent);
      if (ent.isIntersecting) {
        el.classList.add("animate-img");
      } else {
        el.classList.remove("animate-img");
      }
    },
    {
      root: null,
      threshold: 0,
    }
  );
  observer.observe(el);
});
///////////////////////////////////////////////////////////////////////////// PRICING OPTION CHANGE

const pricingOptions = document.querySelector(".pricing-options");
const pricingOption = document.querySelectorAll(".pricing-option");
const planPrice = document.querySelectorAll(".plan-price");
// const planText = document.querySelectorAll(".plan-text");/
let currentActivePricing = 0;
const priceArr = [
  [345, 345 * 11],
  [649, 649 * 11],
];
// console.log(pricingOption);
pricingOptions.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.getAttribute("class") === "pricing-options") {
    pricingOption.forEach(function (el) {
      el.classList.toggle("pricing-option-active");
      currentActivePricing = !currentActivePricing;
    });
  } else if (e.target.getAttribute("name") === "pricing-year") {
    pricingOption[0].classList.remove("pricing-option-active");
    pricingOption[1].classList.add("pricing-option-active");
    currentActivePricing = 1;
  } else {
    pricingOption[1].classList.remove("pricing-option-active");
    pricingOption[0].classList.add("pricing-option-active");
    currentActivePricing = 0;
  }

  for (let index = 0; index < planPrice.length; index++) {
    const element = planPrice[index];
    element.innerHTML = `<span>$</span>${priceArr[index][currentActivePricing]}`;
  }
});

//////////////////////////////////////////////////////////////////// Pagination
///////////////////////////////////////////////////////////

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-meal {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
=======
// Set current year
const yearEl = document.querySelector(".year");
console.log(yearEl);
const currentYear = new Date().getFullYear();
// console.log(currentYear);
yearEl.textContent = currentYear;
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function (e) {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////// Smooth scrooling animation

const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");
    // Scrool back to the top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close mobile navigation

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.remove("nav-open");
    }
  });
});

////////////////////////////////////////// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
// ////////////////////////////////////////////////////////////////////// Screenshot animation

const stepImgBox = document.querySelectorAll(".step-img-box");
// console.log(stepImgBox);

// const observer2 = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);
//     if (ent.isIntersecting) {
//       stepImgBox[0].classList.add("animate-img");
//     } else {
//       stepImgBox[0].classList.remove("animate-img");
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//   }
// );
// observer2.observe(stepImgBox[0]);
stepImgBox.forEach(function (el) {
  const observer = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      // console.log(ent);
      if (ent.isIntersecting) {
        el.classList.add("animate-img");
      } else {
        el.classList.remove("animate-img");
      }
    },
    {
      root: null,
      threshold: 0,
    }
  );
  observer.observe(el);
});
///////////////////////////////////////////////////////////////////////////// PRICING OPTION CHANGE

const pricingOptions = document.querySelector(".pricing-options");
const pricingOption = document.querySelectorAll(".pricing-option");
const planPrice = document.querySelectorAll(".plan-price");
// const planText = document.querySelectorAll(".plan-text");/
let currentActivePricing = 0;
const priceArr = [
  [345, 345 * 11],
  [649, 649 * 11],
];
console.log(pricingOption);
pricingOptions.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.getAttribute("class") === "pricing-options") {
    pricingOption.forEach(function (el) {
      el.classList.toggle("pricing-option-active");
      currentActivePricing = !currentActivePricing;
    });
  } else if (e.target.getAttribute("name") === "pricing-year") {
    pricingOption[0].classList.remove("pricing-option-active");
    pricingOption[1].classList.add("pricing-option-active");
    currentActivePricing = 1;
  } else {
    pricingOption[1].classList.remove("pricing-option-active");
    pricingOption[0].classList.add("pricing-option-active");
    currentActivePricing = 0;
  }

  for (let index = 0; index < planPrice.length; index++) {
    const element = planPrice[index];
    element.innerHTML = `<span>$</span>${priceArr[index][currentActivePricing]}`;
  }
});

//////////////////////////////////////////////////////////////////// Pagination
///////////////////////////////////////////////////////////

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-meal {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
>>>>>>> 7f32f27c4b21586e5e287679a9b2ff53d9016693

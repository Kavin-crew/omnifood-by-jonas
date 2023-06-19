// console.log("Hello world!");
// let time = new Date().toDateString();
// console.log("Today is: " + time);

///////////////////////////////////////////////////////////
// For navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// for activating nav mobile upon click
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");

  //to make it unscrollable in Y-axis if navigation is open
  htmlEl.classList.toggle("overflowY");
  bodyEl.classList.toggle("overflowY");
});

//my own version of navigation
// for overflow upon active of navigation mobile
const htmlEl = document.querySelector("html");
const bodyEl = document.querySelector("body");

//for scrolling a:link for every section and works with safari
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");
    // smooth scrolling to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // scroll to other link
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    //  && headerEl.classList.contains("nav-open")
    if (
      link.classList.contains("main-nav-link") &&
      headerEl.classList.contains("nav-open")
    ) {
      headerEl.classList.toggle("nav-open");
      htmlEl.classList.toggle("overflowY");
      bodyEl.classList.toggle("overflowY");
    }
  });
});

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

.no-flexbox-gap .delivered-faces {
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

///////////////////////////////////////////////////////////
//my own version of navigation
// // for overflow upon active of navigation mobile
// const htmlEl = document.querySelector("html");
// const bodyEl = document.querySelector("body");

// btnNavEl.addEventListener("click", function () {
//   // for overflow upon active of navigation mobile
//   headerEl.classList.toggle("nav-open");
//   htmlEl.classList.toggle("overflowY");
//   bodyEl.classList.toggle("overflowY");

//   const howitworksEl = document.querySelector(".nav-how-it-work");
//   const mealsEl = document.querySelector(".nav-meals");
//   const testimonialsEl = document.querySelector(".nav-testimonials");
//   const pricingEl = document.querySelector(".nav-pricing");
//   const ctaEl = document.querySelector(".nav-cta");

//   howitworksEl.addEventListener("click", function () {
//     headerEl.classList.remove("nav-open");
//     htmlEl.classList.remove("overflowY");
//     bodyEl.classList.remove("overflowY");
//   });

//   mealsEl.addEventListener("click", function () {
//     headerEl.classList.remove("nav-open");
//     htmlEl.classList.remove("overflowY");
//     bodyEl.classList.remove("overflowY");
//   });

//   testimonialsEl.addEventListener("click", function () {
//     headerEl.classList.remove("nav-open");
//     htmlEl.classList.remove("overflowY");
//     bodyEl.classList.remove("overflowY");
//   });

//   pricingEl.addEventListener("click", function () {
//     headerEl.classList.remove("nav-open");
//     htmlEl.classList.remove("overflowY");
//     bodyEl.classList.remove("overflowY");
//   });

//   ctaEl.addEventListener("click", function () {
//     headerEl.classList.remove("nav-open");
//     htmlEl.classList.remove("overflowY");
//     bodyEl.classList.remove("overflowY");
//   });
// });

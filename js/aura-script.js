/* =========================================================
   AURA RHYMES — MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   BACK TO TOP BUTTON
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("backToTopBtn");

  if (!btn) {
    console.log("Back-to-top button not found!");
    return;
  }

  /* Click event */
  btn.addEventListener("click", function () {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });


  /* Show / hide on scroll */
  window.addEventListener("scroll", function () {

    if (window.scrollY > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }

  });

});


/* =========================================================
   VIDEO SLIDER
   ========================================================= */

function scrollVideos(direction) {

  const container = document.getElementById("videoSlider");

  if (!container) {
    return;
  }

  const scrollAmount = 250;

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });

}


/* =========================================================
   VIDEO AUTO SCROLL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const slider = document.getElementById("videoSlider");

  /*
   * If the video slider does not exist on this page,
   * simply stop here.
   */
  if (!slider) {
    return;
  }


  let autoScroll = null;

  const speed = 1; // lower = slower


  /* ---------------------------------------------------------
     START AUTO SCROLL
     --------------------------------------------------------- */

  function startAutoScroll() {

    /*
     * Prevent multiple intervals from being created.
     */
    if (autoScroll !== null) {
      return;
    }

    autoScroll = setInterval(function () {

      slider.scrollLeft += speed;


      /*
       * Seamless loop
       */
      if (
        slider.scrollWidth > slider.clientWidth &&
        slider.scrollLeft >= slider.scrollWidth / 2
      ) {

        slider.scrollLeft = 0;

      }

    }, 20);

  }


  /* ---------------------------------------------------------
     STOP AUTO SCROLL
     --------------------------------------------------------- */

  function stopAutoScroll() {

    if (autoScroll !== null) {

      clearInterval(autoScroll);

      autoScroll = null;

    }

  }


  /* Start automatically */
  startAutoScroll();


  /* ---------------------------------------------------------
     PAUSE ON MOUSE HOVER
     --------------------------------------------------------- */

  slider.addEventListener("mouseenter", function () {

    stopAutoScroll();

  });


  /* Resume after mouse leaves */

  slider.addEventListener("mouseleave", function () {

    startAutoScroll();

  });


  /* ---------------------------------------------------------
     PAUSE ON MOBILE TOUCH
     --------------------------------------------------------- */

  slider.addEventListener(
    "touchstart",
    function () {

      stopAutoScroll();

    },
    { passive: true }
  );


  /* Resume after touch */

  slider.addEventListener(
    "touchend",
    function () {

      startAutoScroll();

    },
    { passive: true }
  );


  /*
   * Also resume if the touch is cancelled.
   */

  slider.addEventListener(
    "touchcancel",
    function () {

      startAutoScroll();

    },
    { passive: true }
  );

});


/* =========================================================
   MANUAL VIDEO SCROLL
   ========================================================= */

function manualScroll(direction) {

  const slider = document.getElementById("videoSlider");

  if (!slider) {
    return;
  }

  slider.scrollBy({
    left: direction * 250,
    behavior: "smooth"
  });

}


/* =========================================================
   HEADER / BANNER BACKGROUND
   ========================================================= */

window.addEventListener("scroll", function () {

  const header = document.querySelector(".main-header");

  if (!header) {
    return;
  }

  if (window.scrollY > 50) {

    header.style.background = "#ffffff";

  } else {

    header.style.background = "rgba(255,255,255,0.9)";

  }

});


/* =========================================================
   AURA RHYMES — NAVIGATION DROPDOWN CONTROL
   =========================================================

   TOP-LEVEL NAVIGATION

   Videos
   Songs

   Lab
      └── Space
           ├── Solar System
           ├── Earth
           ├── Space Missions
           ├── Planets
           └── Asteroids
      └── ABC Explorer

   Apps
      ├── Games
      └── Mobile Apps

   We
   Store


   BEHAVIOR

   • Only one top-level dropdown can be open
   • Lab and Apps cannot overlap
   • Clicking Apps closes Lab
   • Clicking Lab closes Apps
   • Clicking another navigation link closes dropdowns
   • Clicking outside navigation closes dropdowns
   • Clicking/tapping works on desktop and mobile
   • Space remains inside Lab
   • Escape closes all dropdowns

   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const nav = document.querySelector(".nav-links");

  if (!nav) {
    return;
  }


  /* =======================================================
     CLOSE ALL DROPDOWNS
     ======================================================= */

  function closeAllDropdowns() {

    nav.querySelectorAll("details").forEach(function (menu) {

      menu.removeAttribute("open");

    });

  }


  /* =======================================================
     CLOSE OTHER TOP-LEVEL DROPDOWNS
     ======================================================= */

  function closeOtherTopLevelMenus(currentMenu) {

    nav.querySelectorAll(
      ":scope > .lab-menu, :scope > .apps-menu"
    ).forEach(function (menu) {

      if (menu !== currentMenu) {

        menu.removeAttribute("open");

        /*
         * Close any nested submenu inside the
         * other top-level menu.
         */

        menu.querySelectorAll("details").forEach(
          function (submenu) {

            submenu.removeAttribute("open");

          }
        );

      }

    });

  }


  /* =======================================================
     TOP-LEVEL DETAILS TOGGLE
     =======================================================

     The native <details> element controls whether
     the menu is actually open.

     The "toggle" event is therefore used to coordinate
     Lab and Apps reliably on desktop and mobile.
     ======================================================= */

  nav.querySelectorAll(
    ":scope > .lab-menu, :scope > .apps-menu"
  ).forEach(function (menu) {

    menu.addEventListener("toggle", function () {

      if (menu.open) {

        closeOtherTopLevelMenus(menu);

      }

    });

  });


  /* =======================================================
     NAVIGATION LINK CLICK
     ======================================================= */

  nav.addEventListener("click", function (event) {

    const link = event.target.closest("a");

    if (!link) {
      return;
    }


    /*
     * Any actual navigation link closes all
     * open dropdowns.
     *
     * Examples:
     *
     * Videos
     * Songs
     * We
     * Store
     * Games
     * Mobile Apps
     * ABC Explorer
     * Solar System
     * Earth
     * etc.
     */

    closeAllDropdowns();

  });


  /* =======================================================
     CLICK / TOUCH OUTSIDE NAVIGATION
     =======================================================

     pointerdown supports:

     • Mouse
     • Touch
     • Stylus

     Capture mode makes the outside-click behavior
     reliable even when another element has its
     own event handlers.
     ======================================================= */

  document.addEventListener(
    "pointerdown",
    function (event) {

      if (!nav.contains(event.target)) {

        closeAllDropdowns();

      }

    },
    true
  );


  /* =======================================================
     ESCAPE KEY
     ======================================================= */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      closeAllDropdowns();

    }

  });

});


/* =========================================================
   AURA RHYMES — BASIC CONTENT PROTECTION
   =========================================================

   NOTE:
   These are only deterrents.
   They are NOT real security mechanisms.

   Website source, HTML, CSS and JavaScript can never
   be completely hidden from a determined visitor.
   ========================================================= */


/* ---------------------------------------------------------
   DISABLE RIGHT-CLICK CONTEXT MENU
   --------------------------------------------------------- */

document.addEventListener("contextmenu", function (event) {

  event.preventDefault();

});


/* ---------------------------------------------------------
   DISABLE COMMON DEVELOPER / SOURCE SHORTCUTS
   --------------------------------------------------------- */

document.addEventListener("keydown", function (event) {


  /* -------------------------------------------------------
     F12 — Developer Tools
     ------------------------------------------------------- */

  if (event.key === "F12") {

    event.preventDefault();

    return;

  }


  /* -------------------------------------------------------
     Ctrl + U — View Source
     ------------------------------------------------------- */

  if (
    event.ctrlKey &&
    event.key.toLowerCase() === "u"
  ) {

    event.preventDefault();

    return;

  }


  /* -------------------------------------------------------
     Ctrl + Shift + I — Developer Tools
     ------------------------------------------------------- */

  if (
    event.ctrlKey &&
    event.shiftKey &&
    event.key.toLowerCase() === "i"
  ) {

    event.preventDefault();

    return;

  }


  /* -------------------------------------------------------
     Ctrl + Shift + J — Developer Console
     ------------------------------------------------------- */

  if (
    event.ctrlKey &&
    event.shiftKey &&
    event.key.toLowerCase() === "j"
  ) {

    event.preventDefault();

    return;

  }


  /* -------------------------------------------------------
     Ctrl + Shift + C — Inspect Element
     ------------------------------------------------------- */

  if (
    event.ctrlKey &&
    event.shiftKey &&
    event.key.toLowerCase() === "c"
  ) {

    event.preventDefault();

    return;

  }

});
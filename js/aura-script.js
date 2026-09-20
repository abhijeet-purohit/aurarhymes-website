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


  let autoScroll;

  const speed = 1; // lower = slower


  /* Start auto scroll */
  function startAutoScroll() {

    /*
     * Prevent multiple intervals from being created.
     */
    if (autoScroll) {
      return;
    }

    autoScroll = setInterval(function () {

      slider.scrollLeft += speed;


      /*
       * Seamless loop
       */
      if (slider.scrollLeft >= slider.scrollWidth / 2) {

        slider.scrollLeft = 0;

      }

    }, 20);

  }


  /* Stop auto scroll */
  function stopAutoScroll() {

    clearInterval(autoScroll);

    autoScroll = null;

  }


  /* Start automatically */
  startAutoScroll();


  /* Pause when mouse enters */
  slider.addEventListener("mouseenter", function () {

    stopAutoScroll();

  });


  /* Resume when mouse leaves */
  slider.addEventListener("mouseleave", function () {

    startAutoScroll();

  });


  /*
   * Pause while touching / dragging on mobile
   */
  slider.addEventListener("touchstart", function () {

    stopAutoScroll();

  }, { passive: true });


  /*
   * Resume after touch
   */
  slider.addEventListener("touchend", function () {

    startAutoScroll();

  }, { passive: true });


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
   AURA RHYMES
   NAVIGATION DROPDOWN CONTROL
   =========================================================
   
   Controls:
   
   LAB
      └── Space
           ├── Solar System
           ├── Earth
           ├── Space Missions
           ├── Planets
           └── Asteroids

   APPS
      ├── Games
      └── Mobile Apps

   Rules:
   • Only one top-level dropdown open at a time
   • Lab and Apps cannot overlap
   • Clicking another navigation item closes dropdowns
   • Clicking outside navigation closes dropdowns
   • Space can remain open inside Lab
   • Mobile and desktop use the same behavior
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const nav = document.querySelector(".nav-links");

  if (!nav) {
    return;
  }


  /*
   * -------------------------------------------------------
   * CLOSE ALL DROPDOWNS
   * -------------------------------------------------------
   */

  function closeAllDropdowns() {

    nav.querySelectorAll("details").forEach(function (menu) {

      menu.removeAttribute("open");

    });

  }


  /*
   * -------------------------------------------------------
   * CLOSE OTHER TOP-LEVEL DROPDOWNS
   * -------------------------------------------------------
   */

  function closeOtherTopLevelMenus(currentMenu) {

    nav.querySelectorAll(":scope > details").forEach(function (menu) {

      if (menu !== currentMenu) {

        menu.removeAttribute("open");

        /*
         * Also close any nested submenu.
         */
        menu.querySelectorAll("details").forEach(function (submenu) {

          submenu.removeAttribute("open");

        });

      }

    });

  }


  /*
   * -------------------------------------------------------
   * CLICK HANDLER
   * -------------------------------------------------------
   */

  nav.addEventListener("click", function (event) {

    const clickedSummary = event.target.closest("summary");

    const clickedLink = event.target.closest("a");


    /* =====================================================
       DROPDOWN SUMMARY CLICK
       ===================================================== */

    if (clickedSummary && nav.contains(clickedSummary)) {

      const clickedMenu = clickedSummary.closest("details");

      if (!clickedMenu) {
        return;
      }


      /*
       * Determine whether this is a TOP-LEVEL dropdown.
       *
       * Example:
       *
       * Lab summary  → top level
       * Apps summary → top level
       *
       * Space summary → nested submenu
       */

      const topLevelMenu = clickedMenu.closest(
        ".lab-menu, .apps-menu"
      );


      const isTopLevelSummary =
        clickedSummary.parentElement === topLevelMenu;


      /*
       * ---------------------------------------------------
       * TOP-LEVEL MENU
       * ---------------------------------------------------
       */

      if (isTopLevelSummary) {

        /*
         * Close the other top-level dropdown.
         *
         * Therefore:
         *
         * Lab OPEN
         *     ↓ click Apps
         * Apps OPEN
         * Lab CLOSED
         */

        closeOtherTopLevelMenus(topLevelMenu);


        /*
         * If Lab is being opened again, reset its
         * Space submenu so the user always starts
         * at the first level.
         */

        if (
          topLevelMenu.classList.contains("lab-menu")
        ) {

          topLevelMenu
            .querySelectorAll(".lab-submenu")
            .forEach(function (submenu) {

              submenu.removeAttribute("open");

            });

        }

      }


      /*
       * ---------------------------------------------------
       * NESTED SUBMENU
       * ---------------------------------------------------
       *
       * Space stays inside Lab.
       */

      else {

        /*
         * Make sure the parent Lab menu remains open.
         */

        const parentLab = clickedMenu.closest(".lab-menu");

        if (parentLab) {

          parentLab.setAttribute("open", "");

        }

      }

      return;

    }


    /* =====================================================
       NORMAL NAVIGATION LINK
       ===================================================== */

    if (clickedLink && nav.contains(clickedLink)) {

      /*
       * Clicking:
       *
       * Videos
       * Songs
       * We
       * Store
       * Games
       * Mobile Apps
       * ABC Explorer
       * Solar System
       * etc.
       *
       * closes all open dropdowns.
       */

      closeAllDropdowns();

      return;

    }

  });


  /*
   * -------------------------------------------------------
   * CLICK OUTSIDE NAVIGATION
   * -------------------------------------------------------
   *
   * Clicking anywhere outside the navigation closes:
   *
   * Lab
   * Space
   * Apps
   */

  document.addEventListener("click", function (event) {

    if (!nav.contains(event.target)) {

      closeAllDropdowns();

    }

  });


  /*
   * -------------------------------------------------------
   * ESCAPE KEY
   * -------------------------------------------------------
   *
   * Very useful on desktop and accessibility-friendly.
   */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      closeAllDropdowns();

    }

  });

});


/* =========================================================
   AURA RHYMES — BASIC CONTENT PROTECTION
   ========================================================= */

/*
 * Disable right-click context menu.
 *
 * NOTE:
 * This is only a deterrent.
 * It is NOT a security mechanism.
 */

document.addEventListener("contextmenu", function (event) {

  event.preventDefault();

});


/*
 * ---------------------------------------------------------
 * Disable common developer/source shortcuts.
 * ---------------------------------------------------------
 *
 * This is only a deterrent and is not real security.
 */

document.addEventListener("keydown", function (event) {


  /* F12 — Developer Tools */

  if (event.key === "F12") {

    event.preventDefault();

    return;

  }


  /* Ctrl + U — View Source */

  if (
    event.ctrlKey &&
    event.key.toLowerCase() === "u"
  ) {

    event.preventDefault();

    return;

  }


  /* Ctrl + Shift + I — Developer Tools */

  if (
    event.ctrlKey &&
    event.shiftKey &&
    event.key.toLowerCase() === "i"
  ) {

    event.preventDefault();

    return;

  }


  /* Ctrl + Shift + J — Developer Console */

  if (
    event.ctrlKey &&
    event.shiftKey &&
    event.key.toLowerCase() === "j"
  ) {

    event.preventDefault();

    return;

  }


  /* Ctrl + Shift + C — Inspect Element */

  if (
    event.ctrlKey &&
    event.shiftKey &&
    event.key.toLowerCase() === "c"
  ) {

    event.preventDefault();

    return;

  }

});
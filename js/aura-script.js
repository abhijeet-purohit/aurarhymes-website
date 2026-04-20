
  document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("backToTopBtn");

    if (!btn) {
      console.log("Button not found!");
      return;
    }

    // Click event
    btn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    // Show/hide on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });

  });

  function scrollVideos(direction) {
  const container = document.getElementById("videoSlider");
  const scrollAmount = 250;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}



const slider = document.getElementById("videoSlider");

let autoScroll;
const speed = 1; // lower = slower

function startAutoScroll() {
  autoScroll = setInterval(() => {
    slider.scrollLeft += speed;

    // seamless loop
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }
  }, 20);
}

function stopAutoScroll() {
  clearInterval(autoScroll);
}

/* START AUTO */
startAutoScroll();

/* PAUSE ON HOVER */
slider.addEventListener("mouseenter", stopAutoScroll);
slider.addEventListener("mouseleave", startAutoScroll);

/* BUTTON CONTROL */
function manualScroll(direction) {
  slider.scrollBy({
    left: direction * 250,
    behavior: "smooth"
  });
}

/* BANNER */
window.addEventListener("scroll", () => {
  const header = document.querySelector(".main-header");

  if (window.scrollY > 50) {
    header.style.background = "#ffffff";
  } else {
    header.style.background = "rgba(255,255,255,0.9)";
  }
});
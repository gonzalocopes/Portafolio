let menuVisible = false;

//esto oculta y muestra el menu del portafolio

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

//y esta funcion cuando seleccionas algo del menu se cierra

function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// LOADER 
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 2000);
});

// Typed.js Effect
const typed = new Typed('.typed-text', {
  strings: ['Desarrollador Web', 'Full Stack Developer', 'Freelancer', 'Soporte Técnico'],
  typeSpeed: 75,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
});


// SKILLS CAROUSEL INTERACTION
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.skills-slide-track');
  if (!track) return;

  let scrollPos = 0;
  let isDragging = false;
  let startX = 0;
  let prevTranslate = 0;
  let animationID;

  // Auto scroll speed (adjust as needed)
  const speed = 0.5;

  function animate() {
    if (!isDragging) {
      scrollPos -= speed;

      // Infinite loop logic:
      // Since we simply duplicated the content, the total width is 2x the content width.
      // When we scroll past half the width, we reset to 0 to simulate the loop.
      const maxScroll = track.scrollWidth / 2;

      // If we've scrolled past the first set, reset (seamless jump)
      if (Math.abs(scrollPos) >= maxScroll) {
        scrollPos = 0;
      }
      // Handle scrolling backwards (if dragged right)
      if (scrollPos > 0) {
        scrollPos = -maxScroll;
      }
    }

    track.style.transform = `translateX(${scrollPos}px)`;
    animationID = requestAnimationFrame(animate);
  }

  // Touch / Mouse Events
  track.addEventListener('mousedown', startDrag);
  track.addEventListener('touchstart', startDrag);

  track.addEventListener('mouseup', endDrag);
  track.addEventListener('mouseleave', endDrag);
  track.addEventListener('touchend', endDrag);

  track.addEventListener('mousemove', moveDrag);
  track.addEventListener('touchmove', moveDrag);

  function startDrag(event) {
    isDragging = true;
    startX = getPositionX(event);
    prevTranslate = scrollPos;
    track.style.transition = 'none'; // Disable transition for direct control
    track.style.cursor = 'grabbing';
  }

  function moveDrag(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      const diff = currentPosition - startX;
      scrollPos = prevTranslate + diff;
    }
  }

  function endDrag() {
    isDragging = false;
    track.style.cursor = 'grab';
  }

  function getPositionX(event) {
    return event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
  }

  // Start animation
  animate();
});

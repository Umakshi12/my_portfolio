// Toggle sidebar open/close
const toggleBtn = document.getElementById('toggle-sidebar-btn');
const closeBtn = document.getElementById('close-sidebar-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const backToTop = document.getElementById('back-to-top');

toggleBtn.addEventListener('click', () => {
  // Toggle the 'active' class on the sidebar
  sidebar.classList.toggle('active');
  
  // Optionally shift the main content to the right
  // when the sidebar is open
  // mainContent.classList.toggle('shifted');
});

// Close sidebar on link click (mobile convenience)
document.querySelectorAll('.sidebar nav a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
    mainContent.classList.remove('shifted');
  });
});


// Close sidebar (close button click)
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  mainContent.classList.remove('shifted');
});

// Back-to-top button: show when scrolling down, hide when near top
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Smooth scroll to top when back-to-top button is clicked
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Swipe detection to open sidebar (only when sidebar is closed)
let touchstartX = 0;
let touchendX = 0;
const swipeThreshold = 50; // Minimum distance in pixels

document.addEventListener('touchstart', (e) => {
  // Only consider touches that start near the left edge (e.g., within 50px)
  if (e.changedTouches[0].clientX < 50) {
    touchstartX = e.changedTouches[0].clientX;
  }
});

document.addEventListener('touchend', (e) => {
  touchendX = e.changedTouches[0].clientX;
  handleSwipeGesture();
});

function handleSwipeGesture() {
  if (touchstartX && (touchendX - touchstartX) > swipeThreshold) {
    // Swipe right detected (from left edge to right) -> open sidebar
    if (!sidebar.classList.contains('active')) {
      sidebar.classList.add('active');
      // mainContent.classList.add('shifted');
    }
  }
  // Reset values
  touchstartX = 0;
  touchendX = 0;
}
// Toggle sidebar open/close
const toggleBtn = document.getElementById('toggle-sidebar-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

toggleBtn.addEventListener('click', () => {
  // Toggle the 'active' class on the sidebar
  sidebar.classList.toggle('active');
  
  // Optionally shift the main content to the right
  // when the sidebar is open
  mainContent.classList.toggle('shifted');
});

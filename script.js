// // Select elements
const toggleButton = document.querySelector('.nav-toggle');
const navBar = document.getElementById('nav-bar');

// Toggle menu on button click
toggleButton.addEventListener('click', () => {
  if (navBar.style.display === 'flex') {
    navBar.style.display = 'none'; // Hide menu
    toggleButton.classList.remove('close');
    toggleButton.innerHTML = '☰'; // Set menu icon
  } else {
    navBar.style.display = 'flex'; // Show menu
    toggleButton.classList.add('close');
    toggleButton.innerHTML = '✖'; // Set close icon
  }
});

// Monitor window resize to reset visibility for larger screens
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navBar.style.display = 'flex'; // Ensure navbar is visible
    toggleButton.style.display = 'none'; // Hide toggle button
  } else {
    toggleButton.style.display = 'block'; // Show toggle button
    if (!navBar.classList.contains('close')) {
      navBar.style.display = 'none'; // Ensure menu is hidden by default
    }
  }
});

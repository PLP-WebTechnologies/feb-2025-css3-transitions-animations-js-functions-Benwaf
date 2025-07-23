// Function: Toggle Theme and store in localStorage
function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
  
  localStorage.setItem('preferredTheme', newTheme);
}

// Function: Animate image on click
function animateImage() {
  const img = document.getElementById('myImage');
  img.classList.add('animate');

  // Remove the class after animation completes to allow repeat
  img.addEventListener('animationend', () => {
    img.classList.remove('animate');
  }, { once: true });
}

// Function: Load saved theme on page load
function loadThemeFromStorage() {
  const savedTheme = localStorage.getItem('preferredTheme') || 'light';
  document.body.classList.add(savedTheme + '-theme');
}

// Attach event listeners
document.getElementById('themeBtn').addEventListener('click', toggleTheme);
document.getElementById('animateBtn').addEventListener('click', animateImage);

// On load
loadThemeFromStorage();

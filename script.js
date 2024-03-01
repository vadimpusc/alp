function toggleMenu() {
    var menu = document.querySelector('.mobilex');
    if (window.innerWidth < 800) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }
  
  // Call the function on page load and resize
  window.addEventListener('load', toggleMenu);
  window.addEventListener('resize', toggleMenu);
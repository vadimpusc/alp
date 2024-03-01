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

//   back to top 

function toggleMenu() {
    var menu = document.querySelector('.mobilex');
    if (window.innerWidth < 800) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }
  
  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Call the function on page load and resize
  window.addEventListener('load', toggleMenu);
  window.addEventListener('resize', toggleMenu);
  
  // Show back-to-top button when scrolling
  window.addEventListener('scroll', function() {
    var backToTopBtn = document.getElementById('backToTopBtn');
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.remove('opaque');
    } else {
      header.classList.add('opaque');
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const animatedImages = document.querySelectorAll('.animated-img');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
  
    animatedImages.forEach(image => {
      observer.observe(image);
    });
  });
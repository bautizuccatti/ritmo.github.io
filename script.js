window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.backgroundColor = "#292929"; 
  } else {
    document.getElementById("header").style.backgroundColor = "white"; 
  }
}
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
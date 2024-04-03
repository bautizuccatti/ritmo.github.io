document.addEventListener("DOMContentLoaded", function(event) {
    var contentDiv = document.getElementById("index-title");
    if (contentDiv) {
      contentDiv.classList.add("show"); 
    } else {
      console.error("El elemento con id 'content' no se encontró en el documento.");
    }
  });


document.addEventListener("DOMContentLoaded", function(event) {
  var contentDiv = document.getElementById("index-title");
  if (contentDiv) {
      contentDiv.classList.add("show"); 
  } else {
      console.error("No se encontró el elemento con el id 'index-title' en el documento.");
  }
});
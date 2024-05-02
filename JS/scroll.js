$(document).ready(function() {
    // Selecciona el enlace del navbar con el texto "charters"
    $('a[href="index.html#charter-scroll"]').on('click', function(event) {
        // Evita el comportamiento predeterminado del enlace
        event.preventDefault();

        // Obtiene el ID del elemento al que quieres desplazarte
        var target = "#charter-scroll";

        // Desplazamiento suave al elemento objetivo
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); // Duración de la animación en milisegundos
    });
});f
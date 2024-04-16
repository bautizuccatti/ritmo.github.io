$(document).ready(function() {
    // Selecciona todos los enlaces del navbar que apunten a secciones internas de la misma página
    $('a[href^="#"]').on('click', function(event) {
        // Evita el comportamiento predeterminado del enlace
        event.preventDefault();

        // Obtiene el atributo href del enlace clicado
        var target = $(this).attr('href');

        // Desplazamiento suave a la sección objetivo
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); // Duración de la animación en milisegundos
    });
});
function mostrarSeccion(seccion) {
    var secciones = document.querySelectorAll('main > section');
    secciones.forEach(function(s) {
        s.style.display = 'none';
    });

    document.getElementById(seccion).style.display = 'block';
}

function toggleInfo(carrera) {
    var infoDiv = document.getElementById(carrera + '-info');
    if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
        infoDiv.style.display = 'block';
    } else {
        infoDiv.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarSeccion('inicio');
});

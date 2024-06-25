function mostrarSeccion(idSeccion) {
    document.querySelectorAll('main > section').forEach(seccion => {
        seccion.style.display = 'none';
    });
    document.getElementById(idSeccion).style.display = 'block';
}

function toggleInfo(idCarrera) {
    let carreraInfo = document.getElementById(idCarrera + '-info');
    carreraInfo.style.display = (carreraInfo.style.display === 'block') ? 'none' : 'block';
}

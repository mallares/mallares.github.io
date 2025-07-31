 // scripts.js
 const menuCheckbox = document.getElementById('menu');
 const navbar = document.querySelector('.navbar');
 
 menuCheckbox.addEventListener('change', () => {
     if (menuCheckbox.checked) {
         navbar.classList.add('show');
     } else {
         navbar.classList.remove('show');
     }
 });
 
 
 // scripts.js
 document.addEventListener('click', (event) => {
     const isClickInsideMenu = navbar.contains(event.target);
     const isClickOnMenuIcon = menuCheckbox.contains(event.target) || document.querySelector('label[for="menu"]').contains(event.target);
 
     if (!isClickInsideMenu && !isClickOnMenuIcon) {
         menuCheckbox.checked = false;
         navbar.classList.remove('show');
     }
 });
 
 
 document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".tabla-row"); // Selecciona todas las filas de la tabla

    rows.forEach(row => {
        const resultados = row.querySelectorAll(".resultado > div"); // Selecciona los marcadores
        const equipos = row.querySelectorAll(".equipo > div"); // Selecciona los nombres de los equipos

        if (resultados.length === 2 && equipos.length === 2) {
            const marcador1 = parseInt(resultados[0].textContent.trim());
            const marcador2 = parseInt(resultados[1].textContent.trim());

            if (marcador1 > marcador2) {
                // Resalta al equipo ganador
                equipos[0].style.fontWeight = "bold";
                equipos[0].style.color = "#222222"; // Color negro más resaltado para el ganador

                // Resalta el marcador del equipo ganador
                resultados[0].style.fontWeight = "bold";
                resultados[0].style.color = "#222222"; // Color negro más resaltado para el marcador ganador
            } else if (marcador2 > marcador1) {
                // Resalta al equipo ganador
                equipos[1].style.fontWeight = "bold";
                equipos[1].style.color = "#222222"; // Color negro más resaltado para el ganador

                // Resalta el marcador del equipo ganador
                resultados[1].style.fontWeight = "bold";
                resultados[1].style.color = "#222222"; // Color negro más resaltado para el marcador ganador
            } else {
                // Empate: no se realizan cambios
                equipos[0].style.fontWeight = "normal";
                equipos[1].style.fontWeight = "normal";
                resultados[0].style.fontWeight = "normal";
                resultados[1].style.fontWeight = "normal";
            }
        }
    });
});

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





 document.addEventListener('DOMContentLoaded', () => {
    function sortTableByCriteria() {
        const table = document.querySelector('.table-container table');
        const tbody = table.querySelector('tbody');
        const rowsArray = Array.from(tbody.querySelectorAll('tr'));

        rowsArray.sort((rowA, rowB) => {
            const ptsA = parseInt(rowA.cells[7].textContent) || 0;
            const ptsB = parseInt(rowB.cells[7].textContent) || 0;
            const pjA = parseInt(rowA.cells[2].textContent) || 0;
            const pjB = parseInt(rowB.cells[2].textContent) || 0;
            const pgA = parseInt(rowA.cells[3].textContent) || 0;
            const pgB = parseInt(rowB.cells[3].textContent) || 0;
            const peA = parseInt(rowA.cells[4].textContent) || 0;
            const peB = parseInt(rowB.cells[4].textContent) || 0;
            const ppA = parseInt(rowA.cells[5].textContent) || 0;
            const ppB = parseInt(rowB.cells[5].textContent) || 0;
            const golesA = parseInt(rowA.cells[6].textContent) || 0;
            const golesB = parseInt(rowB.cells[6].textContent) || 0;

            // Ordenar por PTS primero (descendente)
            if (ptsA !== ptsB) return ptsB - ptsA;

            // Si los puntos son iguales, ordenar por PJ (ascendente)
            if (pjA !== pjB) return pjA - pjB;

            // Si los partidos jugados son iguales, ordenar por PG (descendente)
            if (pgA !== pgB) return pgB - pgA;

            // Si los partidos ganados son iguales, ordenar por PE (ascendente)
            if (peA !== peB) return peA - peB;

            // Si los partidos empatados son iguales, ordenar por PP (ascendente)
            if (ppA !== ppB) return ppA - ppB;

            // Si los partidos perdidos son iguales, ordenar por Goles (descendente)
            return golesB - golesA;
        });

        // Vuelve a agregar las filas ordenadas al tbody
        rowsArray.forEach(row => tbody.appendChild(row));

        // Actualiza los números de la columna #
        rowsArray.forEach((row, index) => {
            row.cells[0].textContent = index + 1; // Índice 0 es la columna #
        });

    
    }

    // Llamada para ordenar por los criterios de una tabla de fútbol profesional
    sortTableByCriteria();
});

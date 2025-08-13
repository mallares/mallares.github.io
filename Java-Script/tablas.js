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
    fetch("../Java-Script/equipos.json") // Carga el archivo JSON
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("tbody");
            tableBody.innerHTML = ""; // Limpia la tabla antes de llenarla

            // Ordenar por Puntos (pts), Goles (goles), Partidos Ganados (pg)
            data.sort((a, b) => {
            // Parsear goles
            const [gfA, gcA] = a.goles.split('-').map(Number);
            const [gfB, gcB] = b.goles.split('-').map(Number);
        
            const dgA = gfA - gcA;
            const dgB = gfB - gcB;
        
            // Ordenar por puntos
            if (b.pts !== a.pts) return b.pts - a.pts;
        
            // Luego por diferencia de goles
            if (dgB !== dgA) return dgB - dgA;
        
            // Luego por goles a favor
            if (gfB !== gfA) return gfB - gfA;
        
            // Finalmente por partidos ganados
            return b.pg - a.pg;
        });


            data.forEach((equipo, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td class="fixed-col">${index + 1}</td>
        <td class="equipo">
            <div class="equipo-wrapper">
                <img src="${equipo.logo}" alt="${equipo.equipo}">
                <span>${equipo.equipo}</span>
            </div>
        </td>
        <td>${equipo.pj}</td>
        <td>${equipo.pg}</td>
        <td>${equipo.pe}</td>
        <td>${equipo.pp}</td>
        <td>${equipo.goles}</td>
        <td>${equipo.pts}</td>
    `;
    tableBody.appendChild(row);
});

        })
        .catch(error => console.error("Error al cargar la tabla:", error));
});


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





function autoScroll() {
    // Desplazamos el contenedor horizontalmente
    collectionGrid.scrollLeft += scrollSpeed;
    scrollAmount += scrollSpeed;
        
    // Si hemos llegado al final, reiniciamos el desplazamiento
    if (scrollAmount >= collectionGrid.scrollWidth) {
        scrollAmount = 0;
        collectionGrid.scrollLeft = 0;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".collection-grid");
    const items = document.querySelectorAll(".collection-item");

    // Función para detectar el cuadro más cercano al centro
    const setActiveItem = () => {
        let closestItem = null;
        let minDistance = Infinity;

        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const distanceToCenter = Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2);

            if (distanceToCenter < minDistance) {
                minDistance = distanceToCenter;
                closestItem = item;
            }
        });

        // Remueve la clase active de todos y la añade al más cercano
        items.forEach(i => i.classList.remove("active"));
        if (closestItem) closestItem.classList.add("active");
    };

    // Evento de desplazamiento para actualizar el cuadro activo
    slider.addEventListener("scroll", () => {
        setActiveItem();
    });

    // Evento de clic para desplazar un cuadro al centro y actualizar el activo
    items.forEach(item => {
        item.addEventListener("click", () => {
            item.scrollIntoView({
                behavior: "smooth",
                inline: "center"
            });
        });
    });

    // Inicializa el primer cuadro activo
    setActiveItem();
});

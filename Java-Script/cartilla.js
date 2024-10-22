document.addEventListener('DOMContentLoaded', () => {
    function filtrarNegocios() {
        const select = document.getElementById('categoryFilter');
        const selectedCategory = select.value;
        const menuCategories = document.querySelectorAll('.menu-category');

        menuCategories.forEach(category => {
            // Obtiene la clase de la categoría
            const categoryClass = category.classList[1]; // Asumiendo que la clase de la categoría es la segunda clase

            if (selectedCategory === 'all' || categoryClass === selectedCategory) {
                category.style.display = 'block'; // Muestra la categoría si coincide
            } else {
                category.style.display = 'none'; // Oculta la categoría si no coincide
            }
        });
    }

    // Inicializa el filtro para mostrar la categoría seleccionada por defecto
    filtrarNegocios();
    
    // Agrega el evento onchange al filtro
    document.getElementById('categoryFilter').addEventListener('change', filtrarNegocios);
});


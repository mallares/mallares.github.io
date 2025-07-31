function buscarNegocios() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const tiendas = document.querySelectorAll('.tienda');
    
    tiendas.forEach(tienda => {
        const tiendaText = tienda.textContent.toLowerCase();
        if (tiendaText.includes(searchInput)) {
            tienda.style.display = '';
        } else {
            tienda.style.display = 'none';
        }
    });
}

function filtrarNegocios() {
    const category = document.getElementById('categoryFilter').value;
    const tiendas = document.querySelectorAll('.tienda');
    
    tiendas.forEach(tienda => {
        if (category === 'all' || tienda.classList.contains(category)) {
            tienda.style.display = '';
        } else {
            tienda.style.display = 'none';
        }
    });
}





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



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
 
 
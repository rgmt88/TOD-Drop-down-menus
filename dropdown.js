function productsMenuDD() {
    document.addEventListener('DOMContentLoaded', function() {
        const productsMenu = document.getElementById('productsMenu');
        const dropdown = productsMenu.querySelector('.dropdown-content');

        productsMenu.addEventListener('mouseover', function() {
            dropdown.classList.add('visible');
        });

        productsMenu.addEventListener('mouseout', function() {
            dropdown.classList.remove('visible');
        });
    });
}

productsMenuDD();
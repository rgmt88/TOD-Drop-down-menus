function dropdownMenu(dropdownMenuID, dropdownClass) {
    document.addEventListener('DOMContentLoaded', function() {
        const menuElement = document.getElementById(dropdownMenuID);
        if (!menuElement) {
            console.error('Dropdown menu ID not found: ', dropdownMenuID);
            return;
        }

        const dropdown = productsMenu.querySelector(dropdownClass);
        if (!dropdown) {
            console.error('Dropdown class not found: ', dropdown);
            return;
        }

        menuElement.addEventListener('mouseover', function() {
            dropdown.classList.add('visible');
        });

        menuElement.addEventListener('mouseout', function() {
            dropdown.classList.remove('visible');
        });
    });
}

dropdownMenu('productsMenu', '.dropdown-content');
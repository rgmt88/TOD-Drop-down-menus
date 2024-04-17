function dropdownMenu(dropdownMenuID, dropdownClass) {
    const initDropdown = function() {
        const menuElement = document.getElementById(dropdownMenuID);
        if (!menuElement) {
            console.error('Dropdown menu ID not found: ', dropdownMenuID);
            return;
        }

        const dropdown = menuElement.querySelector(dropdownClass);
        if (!dropdown) {
            console.error('Dropdown class not found: ', dropdownClass);
            return;
        }

        menuElement.addEventListener('mouseover', function() {
            dropdown.classList.add('visible');
        });

        menuElement.addEventListener('mouseout', function() {
            dropdown.classList.remove('visible');
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDropdown);
    } else {
        initDropdown();
    }
}

dropdownMenu('productsMenu', '.dropdown-content');
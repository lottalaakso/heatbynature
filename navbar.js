// Function to toggle the navigation menu on small screens
function toggleMenu() {
    const menu = document.querySelector('.nav_menu ul');
    menu.classList.toggle('show'); // Toggle the 'show' class
}

// Wait for the DOM to fully load before attaching the event listener
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to hamburger button
    const hamburgerButton = document.querySelector('.nav_hamburger');
    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', toggleMenu);
    }
});

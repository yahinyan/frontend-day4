document.addEventListener('DOMContentLoaded', function() {
    var toggle_button = document.getElementById('navbarToggle');
    var menu = document.getElementById('navbarMenu');
    toggle_button.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
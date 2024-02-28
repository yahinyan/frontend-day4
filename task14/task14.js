document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const inputs = form.querySelectorAll('input, textarea');
    window.addEventListener('load', () => {
        inputs.forEach(input => {
            const value = localStorage.getItem(input.name);
            if (value) {
                input.value = value;
            }
        });
    });
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            localStorage.setItem(input.name, input.value);
        });
    });
});

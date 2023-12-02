// Efecto de cambio de color al pasar el ratón sobre el logo
const logoContainer = document.getElementById('logo-container');

logoContainer.addEventListener('mouseover', function() {
    logoContainer.style.filter = 'hue-rotate(90deg)';
});

logoContainer.addEventListener('mouseout', function() {
    logoContainer.style.filter = 'none';
});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Funcionalidad para el menú hamburguesa en móviles
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú móvil al hacer clic en una opción
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 2. Manejo del envío del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const responseDiv = document.getElementById('formResponse');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Obtener valores de los campos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        // Simular el proceso de envío
        responseDiv.style.color = 'green';
        responseDiv.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente. Te responderemos a ${email}.`;

        // Limpiar el formulario
        contactForm.reset();

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            responseDiv.textContent = '';
        }, 5000);
    });

});
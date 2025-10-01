const form = document.getElementById('registroForm');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validaciones
    if (!nombre || !email || !password || !confirmPassword) {
        mensaje.textContent = 'Todos los campos son obligatorios.';
        mensaje.style.color = 'red';
        return;
    }

    if (password !== confirmPassword) {
        mensaje.textContent = 'Las contraseñas no coinciden.';
        mensaje.style.color = 'red';
        return;
    }

    // Registro exitoso
    mensaje.textContent = `Usuario ${nombre} registrado exitosamente!`;
    mensaje.style.color = 'green';

    form.reset();
});
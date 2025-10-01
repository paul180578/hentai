const form = document.getElementById('registroForm');
const mensajeGeneral = document.getElementById('mensaje');

function validarEmail(email) {
    // Regex simple de email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validarPassword(password) {
    // Mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un símbolo
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return re.test(password);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let valid = true;

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Limpiar mensajes
    const errores = form.querySelectorAll('small.mensaje-error');
    errores.forEach(e => e.style.display = 'none');

    // Validación nombre
    if (!nombre) {
        const error = document.querySelector('#nombre + small');
        error.textContent = "El nombre es obligatorio";
        error.style.display = 'block';
        valid = false;
    }

    // Validación email
    if (!email) {
        const error = document.querySelector('#email + small');
        error.textContent = "El correo es obligatorio";
        error.style.display = 'block';
        valid = false;
    } else if (!validarEmail(email)) {
        const error = document.querySelector('#email + small');
        error.textContent = "Formato de correo inválido";
        error.style.display = 'block';
        valid = false;
    }

    // Validación password
    if (!password) {
        const error = document.querySelector('#password + small');
        error.textContent = "La contraseña es obligatoria";
        error.style.display = 'block';
        valid = false;
    } else if (!validarPassword(password)) {
        const error = document.querySelector('#password + small');
        error.textContent = "Contraseña débil";
        error.style.display = 'block';
        valid = false;
    }

    // Confirmar password
    if (password !== confirmPassword) {
        const error = document.querySelector('#confirmPassword + small');
        error.textContent = "Las contraseñas no coinciden";
        error.style.display = 'block';
        valid = false;
    }

    if (valid) {
        mensajeGeneral.textContent = `Usuario ${nombre} registrado exitosamente!`;
        mensajeGeneral.style.color = 'green';
        form.reset();
    } else {
        mensajeGeneral.textContent = "";
    }
});
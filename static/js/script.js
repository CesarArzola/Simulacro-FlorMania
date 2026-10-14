// Función 1: Al pasar el cursor sobre "Envía Flores", el texto cambia a "Envía Bouquets"
const enlaceEnviaFlores = document.getElementById('envia-flores');

enlaceEnviaFlores.addEventListener('mouseover', () => {
    enlaceEnviaFlores.textContent = 'Envía Bouquets';
});

// Función 2: Al hacer click en los botones "Comprar", desaparece ese botón
const botonesComprar = document.querySelectorAll('.btn-comprar');

botonesComprar.forEach(boton => {
    boton.addEventListener('click', function () {
        this.style.display = 'none';
    });
});

// Función 3: Al hacer click en el botón de "Iniciar Sesión", muestra alerta con bienvenida
const botonIniciarSesion = document.getElementById('iniciar-sesion');

botonIniciarSesion.addEventListener('click', () => {
    alert('Bienvenido a la tienda de flores');
});
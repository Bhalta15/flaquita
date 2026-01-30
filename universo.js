const elementos = document.querySelectorAll('.estrella, .planeta');
const mensaje = document.getElementById('mensaje');
let timeoutMensaje;

// Función para mostrar mensaje central
function mostrarMensaje(texto, tiempo = 3000) {
    clearTimeout(timeoutMensaje);

    mensaje.innerHTML = texto;
    mensaje.classList.remove('oculto');

    timeoutMensaje = setTimeout(() => {
        mensaje.classList.add('oculto');
    }, tiempo);
}

// Estrellas y planetas principales
elementos.forEach(el => {
    el.addEventListener('click', () => {
        mostrarMensaje(el.dataset.texto, 3500);
    });
});

// Mensajes aleatorios
const mensajes = [
    "Gracias por existir🥹",
    "Eres mi paz🤍",
    "Te amo bastante🌷",
    "Mi bonita, te quiero💞",
    "Tu sonrisa me alegra🐛",
    "Aquí estoy para ti😘",
    "Otro añito mas!!🎁",
    "Mi universo eres tú✨"
];

const contenedor = document.getElementById("estrellas-random");

for (let i = 0; i < 25; i++) {
    const estrella = document.createElement("div");
    estrella.classList.add("estrella-random");

    const size = ["pequena", "mediana", "grande"];
    estrella.classList.add(size[Math.floor(Math.random() * size.length)]);

    estrella.style.top = Math.random() * 100 + "%";
    estrella.style.left = Math.random() * 100 + "%";
    estrella.style.animationDuration = (2 + Math.random() * 3) + "s";

    const texto = mensajes[Math.floor(Math.random() * mensajes.length)];

    estrella.addEventListener("click", () => {
        mostrarMensaje(texto, 2500);
    });

    contenedor.appendChild(estrella);
}
document.querySelector('.continuar').addEventListener('click', () => {
    window.location.href = 'acertijo.html';
});





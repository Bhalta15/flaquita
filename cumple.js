let sacudidas = 0;
let ultimaSacudida = 0;
let velasApagadas = false;

const velas = document.getElementById("velas");
const instruccion = document.getElementById("instruccion");
const btnContinuar = document.getElementById("continuar");
const btnSoplar = document.getElementById("btnSoplar");

// ==========================
// FUNCIÓN APAGAR VELAS
// ==========================
function apagarVelas() {
    if (velasApagadas) return;
    velasApagadas = true;

    velas.classList.add("apagadas");
    instruccion.innerText = "Deseo guardado 💖";

    setTimeout(() => {
        btnContinuar.classList.remove("oculto");
    }, 1500);
}

// ==========================
// DETECTAR SI ES MÓVIL
// ==========================
const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// ==========================
// FALLBACK PARA PC
// ==========================
if (!esMovil) {
    btnSoplar.classList.remove("oculto");
    btnSoplar.addEventListener("click", apagarVelas);
}

// ==========================
// SACUDIDAS ANDROID
// ==========================
if (esMovil && window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", (event) => {
        if (velasApagadas) return;

        const acc = event.accelerationIncludingGravity;
        if (!acc) return;

        const ahora = Date.now();

        const fuerza = Math.sqrt(
            (acc.x || 0) ** 2 +
            (acc.y || 0) ** 2 +
            (acc.z || 0) ** 2
        );

        const UMBRAL = 14;       // Sensibilidad
        const INTERVALO = 800;  // Tiempo entre sacudidas

        if (fuerza > UMBRAL) {
            if (ahora - ultimaSacudida > INTERVALO) {
                sacudidas++;
                ultimaSacudida = ahora;
            }

            if (sacudidas >= 3) {
                apagarVelas();
            }
        }
    });
}

// ==========================
// IR AL UNIVERSO
// ==========================
function irAlUniverso() {
    window.location.href = "universo.html";
}

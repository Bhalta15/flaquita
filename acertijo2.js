const input = document.getElementById("respuesta");
const validarBtn = document.getElementById("btnValidar");
const feedback = document.getElementById("feedback");
const continueBtn = document.getElementById("continueBtn");

const palabraCorrecta = "En el bacho"; // tu palabra clave

validarBtn.onclick = () => {
    const valor = input.value.trim();

    if (valor.toLowerCase() === palabraCorrecta.toLowerCase()) {
        input.classList.remove("incorrecto");
        input.classList.add("correcto");
         feedback.textContent = "✅ ¡Eres buenísima Chincita! El rompecabezas 2 se desbloquea";
        continueBtn.style.display = "inline-block";
    } else {
        input.classList.remove("correcto");
        input.classList.add("incorrecto");
        feedback.textContent = "❌ Palabra incorrecta";
        continueBtn.style.display = "none";
    }
};




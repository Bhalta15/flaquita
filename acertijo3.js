const input = document.getElementById("respuesta");
const validarBtn = document.getElementById("btnValidar");
const feedback = document.getElementById("feedback");
const continueBtn = document.getElementById("continueBtn");

const palabraCorrecta = "El inmenso amor que siempre he tenido por ti, eso nadie en la vida lo va a sentir como yo lo siento por ti. Todos los demás, pero más tú, lo vas a ver día con día, porque no pienso irme de tu lado nunca.🥰 Espero poder compartir más aventuras, mas risas, mas recuerdos contigo. No olvides nunca que yo Te amo mucho flaquita, y que pase lo que pase, y este dónde este...Serás mi 1ra y única elección.<br><br> Muchas felicidades vida!!💕🥹Disfruta mucho tu día."; 
let intentos = 0; // contador de intentos

validarBtn.onclick = () => {
    const valor = input.value.trim();
    intentos++;

    if (valor.toLowerCase() === palabraCorrecta.toLowerCase()) {
        input.classList.remove("incorrecto");
        input.classList.add("correcto");
        feedback.textContent = "✅ ¡Eres buenísima Chincita! El rompecabezas 2 se desbloquea";
        continueBtn.style.display = "inline-block";
    } else {
        input.classList.remove("correcto");
        input.classList.add("incorrecto");

        if (intentos >= 3) {
            // ocultar el input y el botón de validar
            input.style.display = "none";
            validarBtn.style.display = "none";

            // crear un nuevo párrafo para mostrar la respuesta correcta arriba del feedback
            const respuestaCorrectaMsg = document.createElement("p");
            respuestaCorrectaMsg.className = "respuesta-correcta"; // para estilo si quieres
            respuestaCorrectaMsg.innerHTML = `<strong>${palabraCorrecta}</strong>`; // en negritas

            // insertar antes del feedback
            feedback.parentNode.insertBefore(respuestaCorrectaMsg, feedback);

            // feedback sigue igual
            feedback.textContent = "🙈 Esta vez fallaste mi amor. Pero ya continua.";

            continueBtn.style.display = "inline-block";
        } else {
            feedback.textContent = `❌ Palabra incorrecta. Intento ${intentos} de 3`;
            continueBtn.style.display = "none";
        }
    }
};




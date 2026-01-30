const input = document.getElementById("clave");

input.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        entrar();
    }
});

function entrar(){
    const card = document.getElementById("card");
    const error = document.getElementById("error");

    // DEBUG: ver exactamente qué lee
    console.log("Valor escrito:", input.value);

    if(input.value === "Tribilin" || input.value === "tribilin"){
        window.location.href = "cumple.html";
    }else{
        error.innerText = "Parece que esa no es la clave...💕";
        card.classList.add("shake");
        setTimeout(() => card.classList.remove("shake"), 400);
    }
}



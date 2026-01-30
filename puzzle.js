const puzzle = document.getElementById("puzzle");
const success = document.getElementById("success");
const btn = document.getElementById("continueBtn");

const image = "img/arma1.jpeg"; // tu imagen completa
let pieces = [];
let selected = null;
const grid = 3; // 4x4
let puzzleCompletado = false;

// ================= INICIALIZAR PUZZLE =================
function initPuzzle() {
    pieces = [];
    selected = null;
    success.textContent = "";
    btn.style.display = "none";
    puzzleCompletado = false;

    // Crear 4x4 piezas (0-15)
    for (let i = 0; i < grid * grid; i++) pieces.push(i);
    pieces.sort(() => Math.random() - 0.5); // mezclar

    renderPuzzle();
}

// ================= RENDER PUZZLE =================
function renderPuzzle() {
    puzzle.innerHTML = "";
    const size = puzzle.clientWidth / grid;

    // Si está completado, mostrar solo imagen completa
    if (puzzleCompletado) {
        puzzle.style.display = "flex";
        puzzle.style.flexWrap = "wrap";

        // una sola pieza que ocupe todo el puzzle
        const div = document.createElement("div");
        div.className = "piece";
        div.style.width = puzzle.clientWidth + "px";
        div.style.height = puzzle.clientHeight + "px";
        div.style.backgroundImage = `url(${image})`;
        div.style.backgroundPosition = "center";
        div.style.backgroundSize = "cover";
        div.style.borderRadius = "10px";
        puzzle.appendChild(div);
        return;
    }

    // Mostrar piezas cortadas mientras no se complete
    pieces.forEach((pos, i) => {
        const div = document.createElement("div");
        div.className = "piece";
        div.style.width = size + "px";
        div.style.height = size + "px";

        div.style.backgroundImage = `url(${image})`;
        div.style.backgroundPosition = `${-(pos % grid) * size}px ${-Math.floor(pos / grid) * size}px`;
        div.style.backgroundSize = `${puzzle.clientWidth}px ${puzzle.clientHeight}px`;

        div.onclick = () => selectPiece(i);
        puzzle.appendChild(div);
    });
}

// ================= SELECCIÓN DE PIEZA =================
function selectPiece(index) {
    if (puzzleCompletado) return; // no permitir cambios si ya completó

    if(selected === null) {
        selected = index;
    } else {
        [pieces[selected], pieces[index]] = [pieces[index], pieces[selected]];
        selected = null;
        checkWin();
        renderPuzzle();
    }
}

// ================= COMPROBAR SI GANÓ =================
function checkWin() {
    if(pieces.every((v,i)=>v===i)){
        puzzleCompletado = true;
        success.textContent = "💖 Perfecto bonita, lo hiciste bien 💖";
        btn.style.display = "inline-block";
        renderPuzzle(); // mostrar imagen completa correctamente
    }
}

// ================= SIGUIENTE PUZZLE =================
function nextPuzzle() {
    window.location.href = "acertijo2.html";
}

// ================= INICIAR =================
initPuzzle();





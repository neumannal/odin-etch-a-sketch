const container = document.querySelector("#container");
const button = document.querySelector("#button");

console.log(container);
function createDivGrid (squaresPerSide) {
    const squareSize = container.clientWidth / squaresPerSide;
    const newDivsArray = []
    for (let i=0; i<squaresPerSide*squaresPerSide; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.cssText = `width: ${squareSize}px; height: ${squareSize}px`;
        newDivsArray.push(div)
    }
    container.replaceChildren(...newDivsArray);
}

function getRandomColorValue() {
    return Math.floor(Math.random() * 256);
}

function hoverChangeColor (event) {
    randomRed = getRandomColorValue();
    randomGreen = getRandomColorValue();
    randomBlue = getRandomColorValue();
    event.target.style.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
}

function resetGrid (event) {
    let squaresPerSide = prompt("Please enter required number of squares per side.");
    if (squaresPerSide > 100) { squaresPerSide = 100; }
    createDivGrid(squaresPerSide);
}

createDivGrid(4);

container.addEventListener("mouseover", hoverChangeColor);
button.addEventListener("click", resetGrid)
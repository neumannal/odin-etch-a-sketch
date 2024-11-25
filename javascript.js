const container = document.querySelector("#container");
const button = document.querySelector("#button");

console.log(container);
function createDivGrid (squaresPerSide) {
    const squareSize = container.clientWidth / squaresPerSide;
    const newDivsArray = []
    for (let i=0; i<squaresPerSide*squaresPerSide; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.cssText = `width: ${squareSize}px; height: ${squareSize}px; background: rgba(0 0 255 / 100%);`;
        newDivsArray.push(div)
    }
    container.replaceChildren(...newDivsArray);
}

function getRandomColorValue() {
    return Math.floor(Math.random() * 256);
}

function hoverChangeColor (event) {
    if (event.target.id !== "container") {
        randomRed = getRandomColorValue();
        randomGreen = getRandomColorValue();
        randomBlue = getRandomColorValue();
    
        const oldOpacity = event.target.style.background.split(",")[3];
        let newOpacity = 0.9;
        if (oldOpacity) {
            newOpacity = Math.max(+oldOpacity.split(")")[0] - 0.1, 0);
        }
    
        event.target.style.background = `rgb(${randomRed} ${randomGreen} ${randomBlue} / ${newOpacity})`;
    }
}

function resetGrid (event) {
    let squaresPerSide = prompt("Please enter required number of squares per side.");
    if (squaresPerSide > 100) { squaresPerSide = 100; }
    createDivGrid(squaresPerSide);
}

createDivGrid(4);

container.addEventListener("mouseover", hoverChangeColor);
button.addEventListener("click", resetGrid)
const container = document.querySelector("#container");

console.log(container);
function createDivGrid () {
    for (let i=0; i<16; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.textContent = "div";
        container.appendChild(div);
    }
}

function hoverChangeColor (event) {
    event.target.classList.toggle("hover");
    console.log(event);
}

createDivGrid();

container.addEventListener("mouseover", hoverChangeColor);

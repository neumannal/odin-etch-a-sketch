function createDivGrid () {
    const container = document.querySelector("#container");

    container.style.cssText = "display: flex; flex-wrap: wrap; width: 45vw"
    for (let i=0; i<16; i++) {
        const div = document.createElement("div");
        div.id = "square";
        div.textContent = "div";
        div.style.cssText = "width: 10vw; height: 10vw; background-color: blue";
        container.appendChild(div);
    }
}

createDivGrid();
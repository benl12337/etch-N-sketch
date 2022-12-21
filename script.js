let canvasContainer = document.querySelector('#canvas');
const button = document.querySelector('#resetSize');


// create rows of divs
function generateGrid(canvasSize) {
    canvasSize = canvasSize > 100 ? 100 : canvasSize;
    // clear the inside of the div first
    canvasContainer.innerHTML = "";
    for (let i = 0; i < canvasSize; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.className = "rowDiv"
        for (let j = 0; j < canvasSize; j++) {
            let colDiv = document.createElement('div');
            colDiv.className = "aRow";
            rowDiv.appendChild(colDiv);
        }
        canvasContainer.appendChild(rowDiv);
    }
}

button.addEventListener('click', function resetGrid() {
    let inputSize = prompt("Input size: ");
    generateGrid(inputSize);
    
    const pixels = document.querySelectorAll('.aRow');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', function() {
            pixel.style.backgroundColor = "blue";
        });
    });
});




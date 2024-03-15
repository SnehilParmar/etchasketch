const GRIDSIDE = 600;
let squarePerSide =16;


const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width=sketchArea.style.height = `${GRIDSIDE}px`;

const sliderContainer = document.querySelector("#slider-container");
const slider= document.querySelector("#slider");
const sliderValue =document.querySelector("#slider-value");

sliderValue.textContent  = `${slider.value} *${slider.value} (resolution)`

function setBackgroundColor(){
    this.style.backgroundColor = "black";
}

function createGridCells (squarePerSide){
      
    const numberOfSquares = (squarePerSide * squarePerSide);
    const widthOrHeight = ` ${(GRIDSIDE/squarePerSide) -2}px`;
    for (let i = 0 ; i< (numberOfSquares);i++){
        const gridCell = document.createElement ("div");

        gridCell.style.width = widthOrHeight;
        gridCell.style.height = widthOrHeight;

        gridCell.classList.add("cell");
        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover",setBackgroundColor) ;
    }
}

function removeGridCells(){
while (sketchArea.firstChild){
    sketchArea.removeChild(sketchArea.firstChild);
}
}

createGridCells(16);




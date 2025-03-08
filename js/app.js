
// variables/cached elements 

const gridContainer = document.querySelector('.grid-container');

const resetBtn = document.getElementById('reset');

// event listeners

resetBtn.addEventListener('click', resetGrid);

// functions 

initGrid();

function initGrid() {
    let gridSize = 27;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridBox = document.createElement('div'); // create a new div element 
        gridBox.classList.add('grid-box'); // add a class to the new div eleemt 
        gridContainer.appendChild(gridBox);

        gridBox.addEventListener('mouseover', () => {
            gridBox.style.backgroundColor = 'black';
        });
    }
};

function resetGrid() {
    const gridBoxes = document.querySelectorAll('.grid-box');
    gridBoxes.forEach((box) => {
        box.style.backgroundColor = '';
    });
}
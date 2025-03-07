// create a div in the body of the html to insert a new div into 
// this is the div that will be manipulated w/JS 

const gridContainer = document.querySelector('.grid-container');

// if mouse hovers over the div, the div will change color

initGrid();

function initGrid() {
    let gridSize = 16;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridBox = document.createElement('div'); // create a new div element 
        gridBox.classList.add('grid-box'); // add a class to the new div eleemt 
        gridContainer.appendChild(gridBox);

        // newDiv.addEventListener('mouseover', () => {
        //     newDiv.style.backgroundColor = 'black';
        // });
    }
};
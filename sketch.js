//const rowsJs = Number(prompt('How many rows of squares would you like to see?'));
const container = document.body.querySelector('.container');
const initialValue = 16;

let erasing = false;
let sketching = false;
let rainbowing = false;

//the two lines allow the computer to know how many squares should be in the row and column
container.style.gridTemplateColumns = `repeat(${initialValue}, 1fr)`;
container.style.gridTemplateRows = `repeat(${initialValue}, 1fr)`;
//the for loop creates grid
for (let i = 0; i < initialValue * initialValue; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

//random rgb generator for when the rainbow button is pressed
function randomRGBColor() {
    const letters = '0123456789ABCDEF';
    let colors = '#';
    for (let i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
}

//function to calculate which squares to change color or which squares are being clicked
function squareCheck(erasing, sketching, rainbowing) {
    const squares = document.body.querySelectorAll('.square');
    let click = false; //boolean to mark whether mousedown is active or not
    squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            click = true; //mousedown is active
            if (erasing) {
                square.style.backgroundColor = '';
            }
            else if (sketching) {
                square.style.backgroundColor = 'gray';
            }
            else if (rainbowing) {
                square.style.backgroundColor = randomRGBColor();//experimenting with color red, must change color later
            }
        });
        square.addEventListener('mouseup', () => {
            click = false;//making sure that if the user stops mousedown then the hover stops working
        });
        square.addEventListener('drag', () => {
            click = false;
        })
        square.addEventListener('mouseover', () => {
            if (click === true) { //mouseover should change the color of the square only if mousedown is active
                if (erasing) {
                    square.style.backgroundColor = '';
                }
                else if (sketching) {
                    square.style.backgroundColor = 'gray';
                }
                else if (rainbowing) {
                    square.style.backgroundColor = randomRGBColor();//experimenting with color red, must change color later
                }
            }
        });
    })
}

function gridSize() {
    const columnsJs = Number(prompt('How many rows and columns of squares would you like to see?'));
    const squared = columnsJs * columnsJs;
    if (columnsJs <= 64 && columnsJs > 0) {
        container.style.gridTemplateColumns = `repeat(${columnsJs}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${columnsJs}, 1fr)`;
        //the for loop creates grid
        for (let i = 0; i < squared; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }
    else if (columnsJs <= 100 && columnsJs > 64) {
        container.style.gridTemplateColumns = `repeat(${columnsJs + 1}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${columnsJs + 1}, 1fr)`;
        //the for loop creates grid
        for (let i = 0; i < squared; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }
    else {
        alert('Please enter a value that is between 1 and 100.');
    }
}

//simple functions to help determine which sets of color should the squares be
function erase() {
    erasing = true;
    sketching = false;
    rainbowing = false;
    squareCheck(erasing, sketching, rainbowing);
}

function sketch() {
    sketching = true;
    erasing = false;
    rainbowing = false;
    squareCheck(erasing, sketching, rainbowing);
}

function rainbow() {
    sketching = false;
    erasing = false;
    rainbowing = true;
    squareCheck(erasing, sketching, rainbowing);
}

function clear() {
    const squares = document.body.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = '';
    })
}

const sizeOfGrid = document.body.querySelector('.size');
const sketches = document.body.querySelector('.sketch');
const eraser = document.body.querySelector('.eraser');
const rainbows = document.body.querySelector('.rainbow');
const clearGrid = document.body.querySelector('.clear');

sizeOfGrid.addEventListener('click', gridSize);
sketches.addEventListener('click', sketch);
eraser.addEventListener('click', erase);
rainbows.addEventListener('click', rainbow);
clearGrid.addEventListener('click', clear);

//logic i want to build is that if the user presses sketch button when
//the user clicks and hovers that particular squares will turn gray
//when the user clicks eraser then samething happens except the squares turn white to "erase"
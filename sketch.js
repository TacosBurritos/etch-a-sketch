//const rowsJs = Number(prompt('How many rows of squares would you like to see?'));
const columnsJs = Number(prompt('How many rows and columns of squares would you like to see?'));
const squared = columnsJs * columnsJs;
const container = document.body.querySelector('.container');

container.style.gridTemplateColumns = `repeat(${columnsJs}, 1fr)`;
container.style.gridTemplateRows = `repeat(${columnsJs}, 1fr)`;
for (let i = 0; i < squared; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.textContent = 'hello';
    container.appendChild(square);
}
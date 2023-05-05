const rowsJs = Number(prompt('How many rows of squares would you like to see?'));
const columnsJs = Number(prompt('How many columns of squares would you like to see?'));

const container = document.body.querySelector('.container');


for (let i = 0; i < columnsJs; i++) {
    const columnHtml = document.createElement('div');
    columnHtml.classList.add('column');
    columnHtml.textContent = 'testing column';
    container.appendChild(columnHtml);
    for (let i = 0; i < rowsJs; i++) {
        const rowHtml = document.createElement('div');
        rowHtml.classList.add('row');
        rowHtml.textContent = 'testing row';
        columnHtml.appendChild(rowHtml);
    }
}



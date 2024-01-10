// Todo Raccolgo gli elementi
// Todo Creo un event listener
// Todo Creo le celle secondo le dimensioni della griglia

const gridElement = document.getElementById('grid');
const form = document.querySelector('form');
const gridSizeOptionElement = document.querySelector('select')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    gridElement.innerHTML = '';

    const gridSizeOption = gridSizeOptionElement.value; 
    logSomething(gridSizeOption);
    let rows = 10;
    let cols = 10;

    if (gridSizeOption === 'medium') {
        rows = 9;
        cols = 9;
    } else if (gridSizeOption === 'small') {
        rows = 7;
        cols = 7;
    }
    
    
    const cellQuantity = rows * cols;

    for (let i = 1; i <= cellQuantity; i++) {
        const cell = createCell(i);


        cell.addEventListener('click', () => {
            logSomething(i);
            cell.classList.toggle('clicked');
        })

        gridElement.appendChild(cell);
    }
    


});
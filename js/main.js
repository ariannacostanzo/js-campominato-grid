// Todo Raccolgo gli elementi
// Todo Creo un event listener
// Todo Creo le celle secondo le dimensioni della griglia
// Todo Cambio la dimensione delle celle in base al select

const gridElement = document.getElementById('grid');
const form = document.querySelector('form');
const gridSizeOptionElement = document.querySelector('select')

form.addEventListener('submit', (e) => {
    // *impedisco il reload al submit e svuoto la griglia 
    e.preventDefault();
    gridElement.innerHTML = '';

    // *Ottengo le dimensioni di rows e cols in base al select
    const gridSizeOption = gridSizeOptionElement.value; 
    logSomething(gridSizeOption);
    let rows = 10;
    let cols = 10;
    let gridSizeCode = 'big';

    if (gridSizeOption === 'medium') {
        rows = 9;
        cols = 9;
        gridSizeCode = 'medium'
    } else if (gridSizeOption === 'small') {
        rows = 7;
        cols = 7;
        gridSizeCode = 'small'
    }
    
    const cellQuantity = rows * cols;

    //* creo tante celle quante rows * cols
    for (let i = 1; i <= cellQuantity; i++) {
        const cell = createCell(i);

        //* aggiungo la classe css per regolare la dimensione delle celle
        cell.classList.add(gridSizeCode);

        //* gestisco il cambio colore al click delle celle
        cell.addEventListener('click', () => {
            logSomething(i);
            cell.classList.toggle('clicked');
        })

        gridElement.appendChild(cell);
    }
    
});
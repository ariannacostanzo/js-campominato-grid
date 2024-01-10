// Todo Raccolgo gli elementi
// Todo Creo un event listener
// Todo Creo le celle secondo le dimensioni della griglia

const gridElement = document.getElementById('grid');
const form = document.querySelector('form');

form.addEventListener('click', (e) => {
    e.preventDefault();
    
    const rows = 10;
    const cols = 10;
    const cellQuantity = rows * cols;

    for (let i = 1; i <= cellQuantity; i++) {
        const cell = createCell(i);


        gridElement.appendChild(cell);
    }
    


});
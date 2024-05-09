container = document.querySelector('#container');
btn = document.querySelector('button');
span = document.querySelector('span');

function createGrid(size=16) {
  for(let i=0; i<size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for(let j=0; j<size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
  rows = document.querySelectorAll(".cell");

  rows.forEach(cells => {
    cells.addEventListener("mouseover", () => {
      cells.style.backgroundColor = "aqua";
    });
});
}

createGrid();



btn.addEventListener("click", () => {
  user_size = prompt("Please enter your sketch pad size(Maximum is 100): ", "16");
  if (user_size === null || parseInt(user_size) > 100) {
    return;
  } else {
    container.innerHTML = "";
    span.textContent = `${user_size}*${user_size}`;
    createGrid(parseInt(user_size));
  }
})


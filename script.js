sketch_container = document.querySelector('#container');

function createGrid() {
  for(let i=0; i < 16 * 16; i++) {
    let div = document.createElement('div');
    div.classList.add('divs');
    sketch_container.appendChild(div);
  }
};

window.onload = createGrid;
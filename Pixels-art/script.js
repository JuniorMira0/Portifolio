// making a corlor palette
function makeColorBlock() {
  for (let i = 0; i < 3; i += 1) {
    const colorPalette = document.getElementById('color-palette');
    const newDiv = document.createElement('div');
    newDiv.className = 'color';
    colorPalette.appendChild(newDiv);
  }
}
// making a pixel board
function makeBoardPixel() {
  for (let i = 0; i < 25; i += 1) {
    const pixelBoard = document.getElementById('pixel-board');
    const pixelBlock = document.createElement('div');
    pixelBlock.className = 'pixel';
    pixelBoard.appendChild(pixelBlock);
  }
}
// making a rondom color
function randomColors() {
  const colors1 = Math.floor(Math.random() * 255);
  const colors2 = Math.floor(Math.random() * 255);
  const colors3 = Math.floor(Math.random() * 255);
  const random = `rgb(${colors1},${colors2},${colors3})`;
  return random;
}

function applyingColors(generateColors) {
  const palette = document.getElementsByClassName('color');
  palette[0].style.backgroundColor = 'black';
  for (let i = 1; i < palette.length; i += 1) {
    palette[i].style.backgroundColor = generateColors();
  }
}

// seleciona as cores
function clearClass() {
  const selectedColor = document.getElementsByClassName('color');
  for (let i = 0; i < selectedColor.length; i += 1) {
    if (selectedColor[i].classList.contains('selected')) {
      selectedColor[i].classList.remove('selected');
    }
  }
}

function selectColors() {
  const selectedColor = document.getElementsByClassName('color');
  for (let i = 0; i < selectedColor.length; i += 1) {
    selectedColor[i].addEventListener('click', () => {
      clearClass();
      selectedColor[i].classList.add('selected');
    });
  }
}
// pintando os pixels
function getColor() {
  const selectedColor = document.getElementsByClassName('color');
  for (let i = 0; i < selectedColor.length; i += 1) {
    if (selectedColor[i].classList.contains('selected')) {
      return selectedColor[i].style.backgroundColor;
    }
  }
}

function paintPixels() {
  const pixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', () => {
      pixel[i].style.backgroundColor = getColor();
    });
  }
}
// limpa o quadro de pixels
function clearBoard() {
  const button = document.getElementById('clear-board');
  const pixelBoard = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelBoard.length; i += 1) {
    button.addEventListener('click', () => {
      pixelBoard[i].style.backgroundColor = 'white';
    });
  }
}

window.onload = () => {
  makeColorBlock();
  makeBoardPixel();
  selectColors();
  paintPixels();
  applyingColors(randomColors);
  clearBoard();
};

// Projeto realizado com ajuda e supervisão de Emanoel Mattos Ribeiro - Turma 14 - Tribo C e Lucas Cardoso - Turma 3
// Marcos campos Turma 19 - Trbibo B pelo apoio psicologico principalmente rs

addEventListener("load", drawSquares);
addEventListener("resize", drawSquares);

function drawSquares() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  document.body.innerHTML = "";
  let i = 0;
  for (let square of calculateSquares(height, width)) {
    const squareElement = createSquareElement(
      square.size,
      square.top,
      square.left,
      i
    );
    document.body.append(squareElement);
    i++;
  }
}

function createSquareElement(size, top, left, index) {
  const el = document.createElement("div");

  el.style.position = "absolute";
  //el.style.border = "1px solid green";
  el.style.background = getColor(index);
  el.style.top = top + "px";
  el.style.left = left + "px";
  el.style.width = size + "px";
  el.style.height = size + "px";
  el.style.boxSizing = "border-box";

  return el;
}

function randomColor() {
  return `rgb(${randomNumber(0, 255)} ${randomNumber(0, 255)} ${randomNumber(
    0,
    255
  )})`;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

const colors = [];
function getColor(index) {
  if (!colors[index]) {
    colors[index] = randomColor();
  }
  return colors[index];
}

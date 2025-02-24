function calculateSquares(height, width) {
  if (height < 0 || width < 0) {
    throw new Error("Height and width can't be negative");
  }

  const epsilon = 0.01;
  let squares = [];
  let left = 0;
  let top = 0;

  while (height * width > epsilon) {
    if (width === height) {
      squares.push({ size: width, top, left });
      break;
    } else if (width < height) {
      squares.push({ size: width, top, left });
      top += width;
      height -= width;
    } else {
      squares.push({ size: height, top, left });
      left += height;
      width -= height;
    }
  }
  return squares;
}

if (typeof window === "undefined") {
  module.exports = {
    calculateSquares,
  };
}

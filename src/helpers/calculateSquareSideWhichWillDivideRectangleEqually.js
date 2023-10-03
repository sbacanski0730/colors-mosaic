// this function is related with idea of creating an algorithm which will take width and height and calculate size of equal to each other squares which could cover application display

// both the name and the algorithm itself need to be changed

const calculateSquareSideWhichWillDivideRectangleEqually = (
  squareWidth,
  squareHeight,
) => {
  let squareSide;

  // console.log("Calculate");
  // console.log("squareWidth: ", squareWidth);
  // console.log("squareHeight: ", squareHeight);

  for (let i = 1; i <= +squareWidth && i <= +squareHeight; i++) {
    if (squareWidth % i === 0 && squareHeight % i === 0) {
      squareSide = i;
    }
  }
  // console.log("calculate - squareSide: ", squareSide);
  return squareSide;
};

export default calculateSquareSideWhichWillDivideRectangleEqually;

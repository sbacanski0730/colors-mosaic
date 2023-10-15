const generateColorsArray = (arrayLength) => {
  const colorsArray = [];
  const characters = "0123456789abcdef";
  for (let i = 0; i < arrayLength; i++) {
    let newColor = "#";
    for (let j = 0; j < 6; j++) {
      newColor += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    colorsArray.push(newColor);
  }

  return colorsArray;
};
export default generateColorsArray;

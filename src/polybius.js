function polybius(input, encode = true) {
  let inputString = input.toLowerCase();
  let answer = "";
  let grid = [
    ["#", "#", "#", "#", "#", "#"],
    ["#", "a", "b", "c", "d", "e"],
    ["#", "f", "g", "h", "(i/j)", "k"],
    ["#", "l", "m", "n", "o", "p"],
    ["#", "q", "r", "s", "t", "u"],
    ["#", "v", "w", "x", "y", "z"],
  ];

  if (encode != false) {
    answer = encoderPolybius(inputString, grid);
  } else {
    answer = decoderPolybius(inputString, grid);
  }
  return answer;
}

// custom helper function
function encoderPolybius(inputString, grid) {
  let result = "";

  for (let index = 0; index < inputString.length; index++) {
    let character = inputString[index];

    if (character === " ") {
      result = result + character;
      continue;
    if (!/[a-zA-Z]/.test(character)) {
      return false;
    }

    if (character === "i" || character === "j") {
      character = "(i/j)";
    }

    for (let row = 0; row < grid.length; row++) {
      for (let column = 0; column < 6; column++) {
        if (grid[row][column] === character) {
          result = result + column;
          result = result + row;
        }
      }
    }
  }
  return result;
}

// function to decode a number to string

function decoderPolybius(inputString, grid) {
  let processedString = inputString.split(" ");
  let removedSpaces = processedString.join("");
  if (removedSpaces.length % 2 != 0) {
    return false;
  }

  let result = "";

  for (let index = 0; index < inputString.length; index = index + 2) {
    let letterCoordinate = inputString[index] + inputString[index + 1];

    if (letterCoordinate[0] === " ") {
      index = index - 1;
      result = result + letterCoordinate[0];
      continue;
    }

    for (let row = 0; row < grid.length; row++) {
      for (let column = 0; column < 6; column++) {
        if (
          row === parseInt(letterCoordinate[0]) &&
          column === parseInt(letterCoordinate[1])
        ) {
          result = result + grid[column][row];
        }
      }
    }
  }
  return result;
}
module.exports = polybius;

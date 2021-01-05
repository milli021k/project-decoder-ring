function substitution(input, alphabet, encode = true) {
  let inputString = input.toLowerCase();
  let answer = "";
  let orderdAplhabet = "abcdefghijklmnopqrstuvwxyz";
  if (alphabet.length != 26 || typeof alphabet != "string") {
    return false;
  }
  let check = checkDuplicate(alphabet);
  if (check) {
    return false;
  }

  if (encode != false) {
    answer = encoderSubstitution(inputString, alphabet, orderdAplhabet);
  } else {
    answer = decoderSubstitution(inputString, alphabet, orderdAplhabet);
  }

  return answer;
}

// decoder
function decoderSubstitution(inputString, alphabet, orderdAplhabet) {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === " ") {
      result = result + inputString[i];
    }
    for (let j = 0; j < alphabet.length; j++) {
      if (inputString[i] === alphabet[j]) {
        result = result + orderdAplhabet[j];
      }
    }
  }

  return result;
}

// encode function
function encoderSubstitution(inputString, alphabet, orderdAplhabet) {
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === " ") {
      result = result + inputString[i];
    }
    for (let j = 0; j < orderdAplhabet.length; j++) {
      if (inputString[i] === orderdAplhabet[j]) {
        result = result + alphabet[j];
      }
    }
  }

  return result;
}

function checkDuplicate(input) {
  let answer = false;
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        answer = true;
      }
    }
  }
  return answer;
}

module.exports = substitution;

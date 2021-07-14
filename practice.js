function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = (() => {
  function add(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();

function caesarCipher(string, offset) {
  const lowerCaseAlphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  const upperCaseAlphabet = [..."abcdefghijklmnopqrstuvwxyz".toUpperCase()];
  let output = "";

  let i;
  for (i = 0; i < string.length; i++) {
    if (
      lowerCaseAlphabet.includes(string[i]) ||
      upperCaseAlphabet.includes(string[i])
    ) {
      if (lowerCaseAlphabet.includes(string[i])) {
        let alphabetIndex = lowerCaseAlphabet.indexOf(string[i]);
        output += lowerCaseAlphabet[(alphabetIndex + offset) % 26];
      } else {
        let alphabetIndex = upperCaseAlphabet.indexOf(string[i]);
        output += upperCaseAlphabet[(alphabetIndex + offset) % 26];
      }
    } else {
      output += string[i];
    }
  }
  return output;
}

function analyze(numbers) {
  let output = {};

  output.average = numbers.reduce((sum, num) => sum + num) / numbers.length;

  numbers.sort();
  output.min = numbers[0];
  output.max = numbers[numbers.length - 1];

  output.length = numbers.length;

  return output;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyze,
};

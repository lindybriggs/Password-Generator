var generateBtn = document.querySelector("#generate");
// Add event listener to generate button. Waiting for user to click the button, which triggers writePassword function.
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input by defining password variable to function generatePassword returns upon completion. Using passwordText variable to choose password id on document and then changing its value to match password variable.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Defining variables, first as strings, then into arrays.
// Defining string as empty string to be able to be built onto in for loop at end of function.
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("")
let upperCase = lowerCase.toUpperCase();
let upperCaseArray = upperCase.split("");
let numeric = "0123456789"
let numericArray = numeric.split("")
let character = "!@#$%^&*()"
let characterArray = character.split("")
let string = "";

// Once button clicked, will run through entire function.
function generatePassword() {
  let chosen = [];
  // Asks user to enter value.
  let confirmLength = parseInt(prompt("How long would you like your password to be? Choose between 8 and 128."));

  // If user doesn't enter a number, or enters a number out of bounds, or clicks cancel, the alert is shown & function is returned to start.
  if (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128 || (confirmLength === null)) {
    alert("Value must be entered, and be between 8-128. Please start over.");
    return "";

    // Asks user to choose other character types for password. If condition is true, will add that character's array to chosen array. If user does not choose ANY, the chosen array will have a length losely equal to 0.
  } else {
    if (confirmLC = confirm("Want to include lower case letters?")) {
      chosen = chosen.concat(lowerCaseArray);
    } if (confirmUC = confirm("Want to include upper case letters?")) {
      chosen = chosen.concat(upperCaseArray);
    } if (confirmNumeric = confirm("Want to include numbers?")) {
      chosen = chosen.concat(numericArray);
    } if (confirmCharacters = confirm("Want to include characters?")) {
      chosen = chosen.concat(characterArray);
    } if (chosen.length === 0) {
      alert("You must choose at least 1 character type. Please start over.")
      return "";
    }
    // For loop used at end of function to randomly select a character from the chosen array based on a random whole number. Repeats and adds to string until length chosen by user in confirmLength is met.
    for (let i = 0; i < confirmLength; i++) {
      let randomNumber = Math.random() * chosen.length
      let roundedNumber = Math.floor(randomNumber);
      string += chosen[roundedNumber]
    }
  }
  return string;
}
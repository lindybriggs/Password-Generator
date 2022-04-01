var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("")
let upperCase = lowerCase.toUpperCase();
let upperCaseArray = upperCase.split("");
let numeric = "0123456789"
let numericArray = numeric.split("")
let character = "!@#$%^&*()"
let characterArray = character.split("")
let string = "";

console.log(string);
console.log(upperCase);
console.log(upperCaseArray);
console.log(numericArray);
console.log(characterArray);

// Once button clicked, will run through entire function.
function generatePassword() {
let chosen = [];
  // Asks user to enter value. if statements for when no data entered or data is not within bounds.
  let confirmLength = parseInt(prompt("How long would you like your password to be? Choose between 8 and 128."));

  if (confirmLength < 8 || confirmLength > 128) {
    alert("Value must be entered, and be between 8-128. Please start over.");
    return;
  
  // } else if (confirmLength < 8 || confirmLength > 128) {
  //   confirmLength = parseInt(prompt("Please enter value between 8 and 128!"))

    // Asks user to choose other character types for password. If condition is true, will add that character's array to chosen array
  }   else {
        if (confirmLC = confirm("Want to include lower case letters?")){
          chosen.push(lowerCaseArray);
        } if (confirmUC = confirm("Want to include upper case letters?")){
          chosen.push(upperCaseArray);
        } if (confirmNumeric = confirm("Want to include numbers?")){
          chosen.push(numericArray);
        } if (confirmCharacters = confirm("Want to include characters?")){
          chosen.push(characterArray);
        } 
          else {
            for (let i = 0; i < confirmLength; i++) {
              let randomNumber = Math.random()*chosen.length
              let roundedNumber = Math.floor(randomNumber);
            
              string += chosen[roundedNumber]
            }
          }
      }

}

console.log(generatePassword);
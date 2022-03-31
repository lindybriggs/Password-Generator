var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("")
let upperCase = lowerCase.toUpperCase();
let upperCaseArray = upperCase.split("");
let numeric = "0123456789"
let numericArray = numeric.split("")
let character = "!@#$%^&*()"
let characterArray = character.split("")
let string = "";

for (let i = 0; i < 10; i++) {
  let randomNumber = Math.random()*lowerCaseArray.length
  let roundedNumber = Math.floor(randomNumber)

  string += lowerCaseArray[roundedNumber]
}

console.log(string);
console.log(upperCase);
console.log(upperCaseArray);
console.log(numericArray);
console.log(characterArray);


// Once button clicked, will run through entire function.
function generatePassword() {

  // Asks user to enter value. if statements for when no data entered or data is not within bounds.
  confirmLength = parseInt(prompt("How long would you like your password to be? Choose between 8 and 128."))

  if (!confirmLength) {
    alert("Value must be entered, please start over.");
    return;

  } else if (confirmLength < 8 || confirmLength > 128) {
    confirmLength = parseInt(prompt("Please enter value between 8 and 128!"))

  } else 
  
  confirmLC = confirm("Want to include lower case letters?")
  confirmUC = confirm("Want to include upper case letters?")
  confirmNumeric = confirm("Want to include numbers?")
  confirmCharacters = confirm("Want to include characters?")


}
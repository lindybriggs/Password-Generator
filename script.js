var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let alphabet = "abcdefghijklmnopqrstuvwxyz"
let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("")
let string = "";

for (let i = 0; i < 10; i++) {
  let randomNumber = Math.random()*alphabetArray.length
  let roundedNumber = Math.floor(randomNumber)

  string += alphabetArray[roundedNumber]
}

console.log(string);
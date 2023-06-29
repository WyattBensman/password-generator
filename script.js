// Assignment code here

// Potential Variables
const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChars = [" ", "!", ".", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "~"];

// Password Character Array
let confirmedArrayChars = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function passwordPrompts() {
  let passwordLength = parseInt(prompt("How many characters would you like for your password to be? [Between 8 and 128 characters]"));

  // Solves 8 - 128 Characters Issue - Choose Length Issue!
  if (passwordLength >= 8 && passwordLength < 128 && !isNaN(passwordLength)) {
    // Ask users what prompts they'd like to include - Solves Character Types
    let lowerCase = confirm('Would you like to include Upper Case letters?');
    let upperCase = confirm('Would you like to include Upper Case letters?');
    let number = confirm('Would you like to include Upper Case letters?');
    let specialCharacters = confirm('Would you like to include Upper Case letters?');
  } else {
    alert("Must choose a number between 8 and 128!")
    return false;
  }

  // Check that they have at least 1 confirmed
  if (upperCase !== true && lowerCase !== true && numbers !== true && specialCharacters !== true) {
    alert("Must have one prompt selected!")
    return false;
  }

  // Adds Characters to confirmedArrayChars
  if (lowerCase === true) {
    confirmedArrayChars.concat(lowerletters);
  }

  if (upperCase === true) {
    confirmedArrayChars.concat(upperletters);
  }

  if (number === true) {
    confirmedArrayChars.concat(numbers);
  }

  if (specialCharacters === true) {
    confirmedArrayChars.concat(specialCharss);
  }

}

function generatePassword() {
  let newPassword = "";
  passwordPrompts();

  for (let i = 0; i < passwordLength; i++) {
    let randomValue = Math.floor(Math.random() * confirmedArrayChars.length)
  }
  newPassword = newPassword + randomValue.charAt(randomValue);
  console.log(newPassword);
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// KEEP THIS
generateBtn.addEventListener("click", writePassword);


/* USE CONCAT
 */

/* If they say all no, they have to pick */

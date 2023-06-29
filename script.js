// Assignment code here

// Potential Variables
const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChars = [" ", "!", ".", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function passwordOptions() {
  let passwordLength = parseInt(prompt("How many characters would you like for your password to be? [Between 8 and 128 characters]"));

  // Solves 8 - 128 Characters Issue - Choose Length Issue!
  if (passwordLength >= 8 && passwordLength < 128) {
    // Ask users what prompts they'd like to include - Solves Character Types
    let upperCase = confirm('Would you like to include Upper Case letters?');
    let lowerCase = confirm('Would you like to include Upper Case letters?');
    let numbers = confirm('Would you like to include Upper Case letters?');
    let specialCharacters = confirm('Would you like to include Upper Case letters?');
  }


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* USE CONCAT
 */

/* IF thhey say all no, they have to pick */
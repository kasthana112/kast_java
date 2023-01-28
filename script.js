
  //event listener, calling a function to generate a password
document.getElementById("generate").addEventListener("click", generatePassword);

// arrays for all characters needed in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var specialCharacters = ['!', '#', '$', '%', '&', '*', '+', '(', ')', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']

var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//user prompts for 
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?");
    if (passwordLength === null) {
      return;
    }
    else if (isNaN(passwordLength)) {
      alert('Please input a number between 8 and 128')
      generatePassword();
    }
   
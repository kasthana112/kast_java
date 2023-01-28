
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
      alert('Select password length between 8-128')
      generatePassword();
    }
    else if(passwordLength < 8) {
        alert('Password length must be at least 8 characters');
        generatePassword();
      }
      else if (passwordLength > 128) {
        alert('Password length must be no more than 128 characters');
        generatePassword();
      }
      else{
        // user must confirm and click for password criteria
        var hasNumeric = confirm("Click OK to confirm including numeric characters.");
        var hasLower = confirm("Click OK to confirm including Lower characters.");
        var hasUpper = confirm("Click OK to confirm including Upper characters.");
        var hasSpecial = confirm("Click OK to confirm including Special characters.");
  
        if (!hasNumeric && !hasLower && !hasUpper && !hasSpecial) {
          alert('Must select at least one character type');
          generatePassword();
  
        }
        else {
          // empty arrays declared inside function in case of repeated use
          var possibleCharacters = [];
          var result = [];
  
          if (hasNumeric) {
            possibleCharacters = possibleCharacters.concat(numericCharacters);
          }
  
          if (hasLower) {
            possibleCharacters = possibleCharacters.concat(lowerCharacters);
          }
  
          if (hasUpper) {
            possibleCharacters = possibleCharacters.concat(upperCharacters);
          }
  
          if (hasSpecial) {
            possibleCharacters = possibleCharacters.concat(specialCharacters);
          }
  
          for (i = 0; i < passwordLength; i++) {
            result[i] = possibleCharacters[Math.floor(possibleCharacters.length * Math.random())];
          }
  
          //call on event listener
          var password = result.join("");
          var passwordText = document.querySelector("#password");
  
          passwordText.value = password;
        }
      }
    } 
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Arrays of character types
var letters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var otherChar = [ "!", "#", "$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var number = [0,1,2,3,4,5,6,7,8,9]
//base Array containing all upper and lowercase letters
var passArray =letters
//turn result into a string
var result = ' ';

function generatePassword(length){
//once Presses button, give prompts of options for criteria
  var passwordLength = prompt("Please pick your password length between 8-128 characters long");
  console.log(passwordLength)
  //prompt for character types: numeric, and/or special characters
  var addNum = confirm("Do you want Numbers in your password?");
  var addChar = confirm("Do you want Special Characters in your password?");
//adds numbers and/or special characters into Large Password Array if selected.
  if(addNum === true) {
    passArray = passArray.concat(number)
    console.log(passArray)
  }
  if(addChar === true) {
    passArray = passArray.concat(otherChar)
    console.log(passArray)
  }

  for(var i = 0; i < length; i++) {
    result += passArray (Math.floor(Math.random() * passArray.length));
  }
  return result;
  
}
password = generateString(passwordLength);

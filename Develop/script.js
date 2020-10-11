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

//Start of testing

//Arrays of character types
var letters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var otherChar = [ "!", "#", "$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var number = Math.floor(Math.random()*10);

var randomLetter = letters[Math.floor(Math.random() * letters.length)]

var randomCharacter = otherChar[Math.floor(Math.random() * otherChar.length)]

console.log(number)
console.log(randomLetter)
console.log(randomCharacter)

function generatePassword(){
  var passArray =letters
//once Presses button, give prompts of options for criteria

  var passwordLength = prompt("Please pick your password length between 8-128 characters long");

  //prompt for character types:  lowercase, uppercase, numeric, and/or special characters
  var addNum = confirm("Do you want to add Numerals?");
  var addChar = confirm("Would you want to add Special Characters?");

  if(addNum){
    passArray = passArray.concat(number)
  }
  if(addChar){
    passArray = passArray.concat(addChar)
  }
  //password is generated based on conditions
  for(var i = 0; i < length; i++){
    console.log(passArray[Math.floor(Math.random() * letter.length)]
    
    )}
}




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
var lowercaseABC=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseABC=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var otherChar = [ "!", "#", "$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
var number = Math.floor(Math.random()*10);

var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]

var randomCharacter = otherChar[Math.floor(Math.random() * otherChar.length)]

console.log(number)
console.log(randomLetter)
console.log(randomCharacter)

function generatePassword(){
  passwordLength = prompt("Please pick your password length between 8-128 characters long");
    return (passwordlength);
  addNum = prompt("Do you need at least one Numeral?");
    return(true);

  addChar = prompt("Would you want to add Special Characters?");
return(true)
}

//once Presses button, give prompts of options for criteria

//criteria options for password

//prompt for length of password 8-128 characters

//prompt for character types:  lowercase, uppercase, numeric, and/or special characters

//make sure at least one character type is chosen.
//password is generated based on conditions
//alerted or written to page for user

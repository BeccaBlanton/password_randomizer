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
var lowerLetters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var otherChar = [ "!", "#", "$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var number = [0,1,2,3,4,5,6,7,8,9]

//to create a randomIndex for guaranteeing each type
function randomIndex(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}
//blank array variables for creating randomized arrays
var passArray = []
var randomizedPassword = []
var guaranteed = []



//function runs as soon as user hits button
function generatePassword(){
//once Presses button, give prompts of options for criteria
  var passwordLength = prompt("Please pick your password length between 8-128 characters long");
  console.log(passwordLength)

//set range of acceptable password length for responses.
  if (passwordLength < 8 || passwordLength > 128) {
   passwordLength = prompt("Password Must be between 8-128 characters long");
  }
  //prompt for character types: numeric, and/or special characters
  var addLower = true
  var addUpper = confirm("Do you want to include Uppercase letters in your password? Hit cancel if no")
  var addNum = confirm("Do you want Numbers in your password? Hit cancel if no");
  var addChar = confirm("Do you want Special Characters in your password? Hit cancel if no");

 
  
//adds numbers and/or special characters into Large Password Array if selected.
if(addLower){
  passArray = passArray.concat(lowerLetters)
  guaranteed.push(randomIndex(lowerLetters))
}

  if(addUpper){
    passArray = passArray.concat(upperLetters)
    guaranteed.push(randomIndex(upperLetters))
  }
  if(addNum) {
    passArray = passArray.concat(number)
    guaranteed.push(randomIndex(number))
  }
  if(addChar) {
    passArray = passArray.concat(otherChar)
    guaranteed.push(randomIndex(otherChar))

  }
  console.log(passArray)
  console.log(guaranteed)


//loops for given length from passwordLength prompt
//combining one array with each type selected with larger array to desired length
  for(var i = 0; i < parseInt(passwordLength); i++) {
    randomizedPassword.push(randomIndex(passArray))
  }
  for(var i = 0; i < guaranteed.length; i++){
      randomizedPassword[i] = guaranteed[i]
  }
  return randomizedPassword.join('')
}
console.log(randomizedPassword)

  
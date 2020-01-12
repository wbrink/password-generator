// getting document form data
var passwordLength = document.getElementById("length");
var specialCharsCheckBox = document.getElementById("specialCharacters");
var numbersCheckBox = document.getElementById("numbers");
var lowerCaseCheckBox = document.getElementById("lowerCase");
var upperCaseCheckBox = document.getElementById("upperCase");
var generateButton = document.getElementById("submit");

console.log("Password Length: "+ passwordLength.value);
console.log("Special: " + specialCharsCheckBox.checked);
console.log("Numbers: " + numbersCheckBox.checked);
console.log("Lowercase: " + lowerCaseCheckBox.checked);
console.log("Uppercase: " + upperCaseCheckBox.checked);

// character arrays to choose from
var specialChars = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".",
                    "/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{",
                    "|","}","~"]; // 33 length

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // length = 10

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                 "n","o","p","q","r","s","t","u","v","w","x","y","z"]; // length = 26

var upperCase = ["A", "B","C","D","E","F","G","H","I","J","K","L","M",
                 "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; // length = 26

generateButton.addEventListener("click", generatePassword); // event parameter is passed to the callback function

function generatePassword(e) {
  e.preventDefault(); // don't want the form to submit, want form data to stay the same after click
  console.log("Password Length: "+ passwordLength.value);
  console.log("Special: " + specialCharsCheckBox.checked);
  console.log("Numbers: " + numbersCheckBox.checked);
  console.log("Lowercase: " + lowerCaseCheckBox.checked);
  console.log("Uppercase: " + upperCaseCheckBox.checked);

}

//check box will tell what will be in there
//var usedCharacterArrays = [upperCase, lowerCase, numbers, specialChars];

// // this array will tell me what kind of character will be grabbed
// var array = new Uint8Array(passwordLength);
// var max = 256; // unsigned int range is 0 to 255 want 256 ::: 0 <= value < 1
// window.crypto.getRandomValues(array); // gives me array of random numbers and changes array in place

// for (var i = 0; i < array.length; i++) {
//   //get number between 0 and 3 (formula where max is exclusive)
//   var chosenNumber = Math.floor((array[i] / max) * usedCharacterArrays.length);
//   console.log(chosenNumber);
// }

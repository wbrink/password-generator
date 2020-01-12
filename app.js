// getting document elements
var passwordLength = document.getElementById("length");
var specialCharsCheckBox = document.getElementById("specialCharacters");
var numbersCheckBox = document.getElementById("numbers");
var lowerCaseCheckBox = document.getElementById("lowerCase");
var upperCaseCheckBox = document.getElementById("upperCase");
var generateButton = document.getElementById("submit"); // submit button
var message = document.getElementById("message"); // message area
var passwordGenerator = document.getElementById("password-generator");

// character arrays to choose from
var specialChars = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?",
                    "@","[","\\","]","^","_","`","{","|","}","~"]; // 33 length

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // length = 10

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                 "n","o","p","q","r","s","t","u","v","w","x","y","z"]; // length = 26

var upperCase = ["A", "B","C","D","E","F","G","H","I","J","K","L","M",
                 "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; // length = 26

generateButton.addEventListener("click", generatePassword); // event parameter is passed to the callback function

var password = [];
function generatePassword(e) {
  e.preventDefault(); // don't want the form to submit, want form data to stay the same after click
  
  var charTypes = [];

  // if no character types are checked notify and return
  if (!specialCharsCheckBox.checked && 
      !numbersCheckBox.checked &&
      !lowerCaseCheckBox.checked &&
      !upperCaseCheckBox.checked) 
  {
    message.innerHTML = "<p>Please Select A Character Type</p>";
    return;
  }

  if (passwordLength.value < 8 ) {
    message.innerHTML = "<p>Length must be between 8 and 128</p>";
    return;
  } else if (passwordLength.value > 128) {
    message.innerHTML = "<p>Length must be between 8 and 128</p>";
    return;
  }

  if (specialCharsCheckBox.checked) {
    charTypes.push(specialChars);
  } 
  if (numbersCheckBox.checked) {
    charTypes.push(numbers);
  } 
  if (lowerCaseCheckBox.checked) {
    charTypes.push(lowerCase);
  } 
  if (upperCaseCheckBox.checked) {
    charTypes.push(upperCase);
  } 

  for (var i = 0; i < passwordLength.value; i++) {
    /* have to choose what type of character will be in there
       for all (passwordLength.value) characters
    */
    console.log(i);
    // get integer between 0 (inclusive) and charTypes.length(exclusive) to get chartype
    var index = Math.floor(Math.random() * charTypes.length) 

    // then get random number for character list to get value and append to password array
    password[i] = charTypes[index][Math.floor(Math.random() * charTypes[index].length)];
    console.log(password[i]);
    
    // if first character or last character == " " then redo it.
    if (password[0] === " " || password[passwordLength.value - 1] === " ") {
      i = i - 1; 
    }
  }
  
  password = password.join("");
  // join array together to make a string
  passwordGenerator.innerText = password;

} // end submit click callback






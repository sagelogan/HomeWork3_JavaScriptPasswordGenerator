// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercasearray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var uppercasearray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numberarray = ["1","2","3","4","5","6","7","8","9","0"];

var specialchararray = ["~","@","#","$","%","^","7","*","(",")"];

var generatepasswordfromthis = [];

var generatedpassword = "";

var length = 0;

var lowercase = false;

var uppercase = false;

var numbers = false;

var specialchar = false;



//function that gets users desired password length 
function myLengthFunction() {
  var txt;
  length = prompt("Enter a length!\nMust be between 8 and 128\nThe number you eneter will determine how long the generated password will be");
  if (parseInt(length)>=8&&parseInt(length)<=128) {
    txt = ("You're password will be "+length+" characters long");
    console.log(parseInt(length));
  } else {
    txt = "please type a valid length";
  }
  document.getElementById("length").innerHTML = txt;
  
}
//funciton that determines if user wants lowercase characters in genertated password
function myLowerCaseFunction() {
  var txt;
  lowercase = confirm("Press a button!\nEither OK or Cancel.\nTo decide if lowercase characters should be included in generated password");
  if (lowercase === true) {
    txt = "You're including lowercase characters";
    generatepasswordfromthis.push(lowercasearray)
    console.log(generatepasswordfromthis);
    //apend data to array 

  } else {
    txt = "You're NOT including lowercase characters";
  }
  document.getElementById("lowercase").innerHTML = txt;
  
}
//funciton that determines if user wants lowercase characters in genertated password

function myUpperCaseFunction() {
  var txt;
  uppercase = confirm("Press a button!\nEither OK or Cancel.\nTo decide if uppercase characters should be included in generated password");
  if (uppercase === true) {
    txt = "You're including uppercase characters";
    generatepasswordfromthis.push(uppercasearray)
    console.log(generatepasswordfromthis);
    //apend data  to array 
  } else {
    txt = "You're NOT including uppercase characters";
  }
  document.getElementById("uppercase").innerHTML = txt;
  
}

function myNumbersFunction() {
  var txt;
  numbers = confirm("Press a button!\nEither OK or Cancel.\nTo decide if numbers should be included in generated password");
  if (numbers === true) {
    txt = "You're including numbers";
    generatepasswordfromthis.push(numberarray)
    console.log(generatepasswordfromthis);
    //apend data  to array 
  } else {
    txt = "You're NOT including numbers";
  }
  document.getElementById("numbers").innerHTML = txt;
  
}

function mySpecialCharFunction() {
  var txt;
  specialchar = confirm("Press a button!\nEither OK or Cancel.\nTo decide if special characters should be included in generated password");
  if (specialchar === true) {
    txt = "You're including special characters";
    generatepasswordfromthis.push(specialchararray)
    console.log(generatepasswordfromthis);
    //apend data to array 
  } else {
    txt = "You're NOT including special characters";
    console.log(generatepasswordfromthis);
  }
  document.getElementById("specialChar").innerHTML = txt;
  
}
//random operators
function getRandomLowerCase() {
      
      return lowercasearray[Math.floor(Math.random()* lowercasearray.length)];
      
    }
function getRandomUpperCase() {
      
      return uppercasearray[Math.floor(Math.random()* uppercasearray.length)];
    }
    
function getRandomNumber() {
    
      return numberarray[Math.floor(Math.random()* numberarray.length)];
    }
function getRandomSpecialChar() {
    
      return specialchararray[Math.floor(Math.random()* specialchararray.length)];
    }


function myGeneratedPasswordFunction() {
  console.log("button-click")
  console.log(parseInt(length));
  var parsedint = parseInt(length)
  for (let k=0; k<(parsedint); k++){ 

    if(lowercase === true&&generatedpassword.length<length){   
      generatedpassword+=getRandomLowerCase();
      console.log(generatedpassword);
    }

    if(uppercase === true&&generatedpassword.length<length){
      generatedpassword+=getRandomUpperCase();
      console.log(generatedpassword);
    }

    if(numbers === true&&generatedpassword.length<length){
      generatedpassword+=getRandomNumber();
      console.log(generatedpassword);
    }

    if(specialchar === true&&generatedpassword.length<length){
      generatedpassword+=getRandomSpecialChar();
      console.log(generatedpassword);
    }

  }   
  document.getElementById("password").innerHTML=generatedpassword;
  return 
}
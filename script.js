function genPassword() {
  // Define the basic variables 
  var elements = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var len = document.getElementById("input").value.trim(); // We use ternary operator to define the var len
  var len = (len === '' || len === 'string') ? 9 : parseInt(document.getElementById('input').value) - 1; 
  var password = "";

  // We use this loop to generate the combination of symbols
  for (var i = 0; i <= len; i++) {
    var randomNumber = Math.floor(Math.random() * elements.length);
    password += elements.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}
  
function genPasswordNumb() {
  // Define the basic variables
  var elements = "0123456789";
  var len = document.getElementById("input").value.trim();
  var len = (len === '' || len === 'string') ? 9 : parseInt(document.getElementById('input').value) - 1;
  var passnumb = "";
    
  // Analogical like previous function
  for (var i = 0; i <= len; i++) {
    var randomNumber = Math.floor(Math.random() * elements.length);
    passnumb += elements.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("passnumb").value = passnumb;
}
  
// Functions which clear the password's box fields 
function clearPassword() {
  document.getElementById("password").value = "";

}

function clearPasswordNumb() {
  document.getElementById("passnumb").value = "";

}

// functions copyPassword() and copyPasswordNumb() are used to copy the generated passwords
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
   
}

function copyPasswordNumb() {
  var copyTextNumb = document.getElementById("passnumb");
  copyTextNumb.select();
  document.execCommand("copy");

}
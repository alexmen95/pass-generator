var password = document.getElementById("password");
var passnumb = document.getElementById("passnumb"); 

function genPassword() {
    var elements = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var len = document.getElementById("input").value.trim();
    var len =  (len == "" || len == NaN) ? 10 : parseInt(document.getElementById('input').value) - 1;
    var password = "";
 for (var i = 0; i <= len; i++) {
   var randomNumber = Math.floor(Math.random() * elements.length);
   password += elements.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }

function genPasswordNumb() {
    var elements = "0123456789";
    var len = document.getElementById("input").value.trim();
    var len =  (len == "" || len == NaN) ? 10 : parseInt(document.getElementById('input').value) - 1;
    var passnumb = "";
 for (var i = 0; i <= len; i++) {
   var randomNumber = Math.floor(Math.random() * elements.length);
   passnumb += elements.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("passnumb").value = passnumb;
 }

function clearPassword() {
  document.getElementById("password").value = "";

}

function clearPasswordNumb() {
  document.getElementById("passnumb").value = "";

}

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
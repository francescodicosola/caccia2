 function doLogin(event) {
  var username = document.getElementById("username").value;
  var psw = document.getElementById("password").value;
  if(username == "" || psw == ""){
    alert("username e password sono obbligatori");
  }
  else {
  fetch("https://www.cacciaapi.altervista.org/login.php/loginIpad", {
   method: "POST", 
   headers: {
    "Content-Type": "application/json",
   },

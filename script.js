function generate(){

  
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase= "abcdefghijklmnopqrstuvwxyz";
  let numbers = "1234567890";
  let specialCharacters = "!@#$%^&*()";

  for (var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
  }
  
  document.getElementById("upperCase").value = password;

  document.getElementById("lowerCase").innerHTML += password + "<br />"

}
var $generateButton = document.getElementsByTagName("generate");
$generateButton.addEventListener("click", function(){ 
    alert("password");
});
document.getElementById("length").innerHTML = "length: 25";

document.getElementById("slider").oninput = function(){

}
if (document.getElementById("slider").value >0){
  document.getElementById("length").innerHTML = "length:" + document.getElementById("slider").value;
  else{
    document.getElementById("length").innerHTML = "length: 1";
  }
  var slider = document.getElementById("slider");
var output = document.getElementById("userNumber");
output.textContent = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}
}
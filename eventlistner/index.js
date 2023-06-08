var x = document.getElementById("user_btn");

x.addEventListener("mouseover", userMouseHover);
x.addEventListener("click", userClick);
x.addEventListener("mouseout", userMouseOut);

function userMouseHover() {
  document.getElementById("event_output").innerHTML += "Moused over!<br>";
}

function userClick() {
  document.getElementById("event_output").innerHTML += "Clicked!<br>";
}

function userMouseOut() {
  document.getElementById("event_output").innerHTML += "Moused out!<br>";
}
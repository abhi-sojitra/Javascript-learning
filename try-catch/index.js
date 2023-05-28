/** Try throw catch */
function getCurrentDays() {
  try {
    let currentAge = document.getElementById("age").value;
    if (isNaN(currentAge)) throw "only number input allowed";
    if (currentAge) {
      let calculate_days = currentAge * 365;
      document.getElementById("total_days").innerHTML = calculate_days;
      console.log("currentAge", currentAge);
    }
  } catch (err) {
    document.getElementById("total_days").innerHTML = "0";
    message.innerHTML = "IMPORTANT " + err;
  }
}

/** Global Scope */
let total_students = 2500;

function blockScope() {
  let x = 2;
}
// console.log(x, "x");
// x can NOT be used here

function studentManage() {
  let total_class = 20;
  let avg_student = total_students / total_class;
  console.log(avg_student, "avg_student");
}
/** Funcation Call */
studentManage();

/** Arrow Function */
var a = 10;
var b = 20;

let myFunction = (a, b) => a * b;
myFunction(a, b);

/** Fetch Method | Data Retrive Method | Data Storing Process */
function getUsers() {
  let users = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
getUsers();

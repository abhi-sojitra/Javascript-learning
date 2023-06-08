/** Try throw catch */
function getCurrentDays() {
  try {
    let currentAge = document.getElementById("age").value;
    if (isNaN(currentAge)) throw "only number input allowed";
    if (currentAge) {
      let calculate_days = currentAge * 365;
      console.log(total_students,'total_students');
      document.getElementById("total_days").innerHTML = calculate_days;
      console.log("currentAge", currentAge);
    }
  } catch (error) {
    console.log(error);
  }
}

/** Global Scope */``
let total_students = 2500;

function blockScope() {
  let x = 2;
}
// console.log(x, "x");
// x can NOT be used here

function studentManage() {
  let total_class = 20;
  let avg_student = total_students / total_class;
  // console.log(avg_student, "avg_student");
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
// getUsers();

/** Class Object */
class Car {
  /** Constructor Property for Object  */
  constructor(name, year ,dob) {
    this.name = name;
    this.year = year;
    this.user_dob = dob;

  }
  /** Function with Argument */
  age() {
    return this.user_dob;
  }
}

/** Get Date */
const date = new Date();
/** Date to Year */
let year = date.getFullYear();

let user_dob = "28-09-1999";

/** Create New Object */
const myCar = new Car("Ford", 2022 , user_dob );
console.log(myCar.age());

/** Arrow Function */
let defaultArrowFunction = (a, b) => a * b;
console.log("🚀 ~ file: index.js:77 ~ defaultArrowFunction:", defaultArrowFunction(a,b))

// setTimeout(() => {
// }, 5000);

// setInterval(() => {
//   console.log('RUn Set timeout');
// }, 1000);

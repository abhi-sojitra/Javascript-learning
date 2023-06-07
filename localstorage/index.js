/** Store in localstorage Using SetItem */
let userDetails = {
  name: "Mr. John",
  age: 28,
  phone: 7878223742,
  address: "A-56, Delwiton Melborn",
  skills: [
    {
      lang: "JS",
      experience: 2,
    },
    {
      lang: "React",
      experience: 1,
    },
  ],
};

// Serialize the object into a string using JSON.stringify
localStorage.setItem("userInfo", JSON.stringify(userDetails))

// Retrieve the serialized object from localStorage
let storedPerson = localStorage.getItem("userInfo")

// Deserialize the object using JSON.parse
var deserializedPerson = JSON.parse(storedPerson);
console.log(deserializedPerson.name);


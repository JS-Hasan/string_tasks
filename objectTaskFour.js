//Count the number of properties.
let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
//console.log(Object.keys(student));
let keys = Object.keys(student);
totalProperty = 0;
for (let key of keys) {
  totalProperty = totalProperty + 1;
  console.log("Property : ", key);
}
console.log("number of properties", totalProperty);

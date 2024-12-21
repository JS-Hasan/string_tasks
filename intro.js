let counrtyName = "Bangladesh";
console.log(counrtyName.toLowerCase()); // Lower case
console.log(counrtyName.toUpperCase()); //Upper case

let districtName = " Sylhet ";
//Trim method
console.log(districtName.trim()); //remove space end-start

//Slice Method
let favouritePlace = "Bisnakandi";
console.log(favouritePlace[0]);
console.log(favouritePlace.slice(0, 5)); // Index 0 : Start index 5 : Before end place
console.log(favouritePlace.slice(5, 10)); //Index 5 : Start index 10 : Before end place

//Split Method
console.log(favouritePlace.split("a"));

//Join Method
let realFriends = ["Rofik", "Jobbar", "Karim"];
console.log(realFriends.join(" : "));
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" and "));

//concat method
let firstName = "Hasan";
let lastName = "Ahmed";
console.log(firstName.concat(lastName)); //Output : HasanAhmed
console.log(firstName.concat(" ").concat(lastName).concat(" Noyon")); //Output : Hasan Ahmed Noyon

//reverse
let sentence = "I am learning web developing.";
let reverse = "";
for (let letter of sentence) {
  reverse = letter + reverse;
}
//console.log(reverse);

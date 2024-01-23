// davaleba 1
let cars = ["Range_Rover", "Mercedes", "BMW"];

if (Array.isArray(cars)) {
  console.log("array");
} else {
  console.log("no array");
}

// davaleba 2
console.log(cars[0]);

// davaleba 3
console.log(cars[cars.length - 1]);

// davaleba 4
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th", "st", "nd", "rd"];

console.log(`1${o[1]} choice is ${color[0]} .`);
console.log(`2${o[2]} choice is ${color[1]}.`);
console.log(`3${o[3]} choice is ${color[2]}.`);

// davaleba 5
const studenti = {
  name: "nika",
  surname: "paikidze"
};

studenti.age = 24;
console.log(studenti);
delete studenti.surname;
console.log(studenti);
studenti.name = "lika";
console.log(studenti);

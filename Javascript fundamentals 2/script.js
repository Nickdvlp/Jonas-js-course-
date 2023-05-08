"use strict";

/* using strict mode in his code is more suitable because strict mode gives you some special features you can read these on internet.

 here are some words which ecmascript reserve to use this in future updates so now they words are not working.

const interface = "Audio";  interface and private are words which use in js in future thats why ES reserves that words already they will not work as variable.okay!
const private = 534;
const if = 23; if already used in js so this is not working as a variable here. 
*/

// <<<<<< Functions >>>>>>>

function logger() {
  console.log("my name is nikhil!");
}
// here are three stages of function : calling / running / invoking;

logger(); // here we called the function.
logger();
logger();
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const Juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return Juice;
}

// fruitProcessor(5, 2); // here this line's output 5 and 2 but if we want Juice variable's value we need to create a new variable.ok

const Howmuchfruits = fruitProcessor(5, 2);
console.log(Howmuchfruits);

// second way to show the value

console.log(fruitProcessor(5, 2));

// if we want other values of juice.

const orangeMoreJuice = fruitProcessor(2, 6);
console.log(orangeMoreJuice);

// <<<<<< Functions declaration>>>>>>>

/* function calcAge1(birthYeah){
    return 2037 - birthYeah;
}
console.log(calcAge1(1991));// 1st method to print
// 2nd method to print :
const age1 = calcAge1(1991);
console.log(age1);

//<<<<<<< function expression >>>>>>>>

const calcAge2 = function calcAge1(birthYeah){
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991);
console.log(age2)

//<<<<<<<< Arrow function >>>>>>>>
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in age ${age}`
}
console.log(yearsUntilRetirement(65, "jonas"));
console.log(yearsUntilRetirement(65, "Bob"));
*/

// <<<<<< function calling other functions >>>>>>

// <<<<<<<<<<<<<< example #1 >>>>>>>>>>>>>>>
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const Juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
  return Juice;
}
console.log(fruitProcessor(2, 3));

// <<<<<<<<<<<<<< example #2 >>>>>>>>>>>>>>>

/* const calcAge = function(birthYeah) {
    return 2037 - birthYeah
}
const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
    // return retirement;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

// <<<<<<<<<<<<<< coding challenge #1 >>>>>>>>>>>>>>>

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

// const calcAverage = (a, b, c) => (a + b + c / 3);
// console.log(calcAverage(3, 4, 5));
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win 🎉 (${avgDolphins}) vs. (${avgKoalas})`)
//     }
//     else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win 🎉 (${avgKoalas}) vs. (${avgDolphins})`)

//     }
//     else {
//         console.log(`No ones wins.....`)
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 1069);

// <<<<<<<< Intro to Array >>>>>>>>>>>>

/* const friend1 = 'michael';
const friend2 = 'steven';
const friend3 = 'peter';

const friends = ['michael', 'steven', 'peter'];
console.log(friends)

const Years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'jay'; // change the array element;
console.log(friends);
// friends = ['bob', 'alice']; // here we try to change all elements of array bt we cant do this.

const firstName = 'jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas)
console.log(jonas.length)

// exercise>>>>>>>>
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = (calcAge(years[0]));
const age2 = (calcAge(years[1]));
const age3 = (calcAge(years[years.length - 1]));
console.log(age1,age2,age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

// add elements>>>>>>>>>>

// push method in array>>>>>>>>>>>>

const friends = ["michael", "steven", "peter"];
friends.push("jay");
console.log(friends);

// ushift method in array>>>>>>>>

friends.unshift("nikhil");
console.log(friends);

// remove elements>>>>>>>>>>

// pop method in array>>>>>>>

friends.pop();
console.log(friends);

// shift method in array

friends.shift();
console.log(friends);

console.log(friends.indexOf("steven")); // this method used to know which element is on which number.

console.log(friends.includes("steven")); // this method used for check element which is in array or not.
console.log(friends.includes("nikhil"));
friends.push("nikhil");
console.log(friends.includes("nikhil"));

if (friends.includes("priyanka")) {
  console.log("You have a friend called nikhil");
} // this code wasnt run because the if statement isnt true because prinyanka isnt exist in array.

if (friends.includes("nikhil")) {
  console.log("You have a friend called nikhil");
}

// <<<<<<<<< coding challenge #2 >>>>>>>>>>>>>

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);

// // if we want to plus the all values(bills and tips).
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(total);

// <<<<<<<<<<<< introduction of objects >>>>>>>>>

// const nikhilArray = [
//     'nikhil',
//     'sharma',
//     2023 - 2001,
//     'student',
//     ['michael', 'shradha', 'subodh']
// ];
/*
const nikhil = {
    firstName: 'nikhil',
    lastName: 'sharma',
    age: 2023 - 2001,
    work: 'student',
    friends: ['michael', 'shradha', 'subodh']
}
console.log(nikhil);
console.log(nikhil.firstName);

const nameKey = "Name";
console.log(nikhil['first' + nameKey]);
console.log(nikhil['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Nikhil? Choose between firstName, lastName, age, work, friends');
if(nikhil[interestedIn]) {
    console.log(nikhil[interestedIn]);
}
else {
    console.log('Wrong request! Choose between firstName, lastName, age, work, friends ')
}

nikhil.location = 'india';
nikhil['email'] = 'nikhil.sharma3755@gmail.com';
console.log(nikhil);
*/

// Challenge >>>>>>>>>>>>
// write this line with template literal
// 'nikhil has 3 friends, and his best friend is called shradha.

// console.log(`${nikhil.firstName} has ${nikhil.friends.length} friends, and his best friend is called ${nikhil.friends[1]}`);

// <<<<<<<<<< Object methods >>>>>>>>>>>

// here the function value give in a Object
const nikhil = {
  firstName: "nikhil",
  lastName: "sharma",
  age: 2001,
  work: "student",
  friends: ["michael", "shradha", "subodh"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2023 - this.age; // here this keyword is shows nikhil so the object name whatever you change bt this function always work in targeted object.
    return this.age;
  },
  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      nikhil.work
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license. `;
  },
};

// console.log(nikhil.calcAge(2001));

// console.log(nikhil.age);
// console.log(nikhil.age);
// console.log(nikhil.age);
// console.log(nikhil['calcAge'](2001));

// challenge >>>>>>>>>>>>>>>
// nikhil is a 22-years old, and he has a driver's license.

// console.log(`${nikhil.firstName} is a ${nikhil.age}-years old, and he has a driver's license.`)

console.log(nikhil.getSummery());

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀 
*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
  },
};

mark.calcBMI();
console.log(mark.bmi);

john.calcBMI();
console.log(john.bmi);

console.log(`John's BMI ${john.bmi} is higher than Mark's ${mark.bmi}!`);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}`
  );
}

// <<<<<<<<< the iteration: the for loop >>>>>>>>>>>
// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// const jonasArray = [
//     'jonas',
//     'schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['michael', 'peter', 'steven']
// ];

// const types = []; // this is empty array we will fill the value in the array from jonasArray, okay!

// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     // there is two methods to make types of elements like jonasArray.
//     types[i] = typeof jonasArray[i]; // #1
// types.push(typeof jonasArray[i]); // #2
// }

// console.log(types);

// // some more example of for loop
// const years = [1991, 2008, 1969, 2020];
// const Ages = [];

// for (let i = 0; i < years.length; i++) {

//     Ages.push(2037 - years[i]);
// }
// console.log(Ages)

// // continue and break >>>>>>>>>>

// // <<<<<<<<<<< only the string >>>>>>>>>>>
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] !== 'string') continue;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }
// // <<<<<< break with numbers >>>>>>>>>.
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] === 'Number') break;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

const jonasArray = [
  "jonas",
  "schmedtmann",
  2037 - 1991,
  "teacher",
  ["michael", "peter", "steven"],
];

// <<<<<<< looping backwards and loops in loop >>>>>>

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}

// <<<<<<<<< loop in loop >>>>>>>>>

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}

// <<<<<<<<<< the while loop >>>>>>>>>>>>

let rep = 1;
while (rep <= 10) {
  console.log(rep);
  rep++;
}
// here some code pending to write. so its help me to remember this😁😁.

// <<<<<<<< coding challenge #4 >>>>>>>>>>>
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// Bonus challenge >>>>>>>
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

// Now the javascript fundamentals are end here😁😁😁

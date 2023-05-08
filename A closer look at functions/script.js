"use strict";
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", 2, 899);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);
*/
/*
const flight = "lh234";
const jonas = {
  name: "jonas schmedtmann",
  passport: 233547485959,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "lh999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 233547485959) {
    alert("checked in");
  } else {
    alert("wrong passport");
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // is the same as doing....
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);

// <<<<<<<<<<<<<< high order functions >>>>>>>>>>>
// const high5 = function () {
//   console.log("👋");
// };
// document.body.addEventListener("click", high5);

// <<<<<<<<<< functions accept callback functions >>>>>>>>>>>

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher order functions >>>>>>>>>>>>.

// example 1 <<<<<<<<<<<<<<<<<
const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
};

transformer("javascript is the best!", upperFirstWord);
transformer("javascript is the best!", oneWord);

// example 2 >>>>>>>>>>>
const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);

["jonas", "shradha", "nikhil"].forEach(high5);

// <<<<<<<<< functions returning functions >>>>>>>>>

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetHey = greet("Hey");
greetHey("nikhil");
greetHey("shradha");

// challenge >>>>>>>>>>>>
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hey")("shradha");

//<<<<<<<<< the call and apply methods >>>>>>>>>

const lufthansa = {
  airline: "lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "nikhil sharma");
lufthansa.book(656, "shradha mishra");
console.log(lufthansa);

const eurowings = {
  airline: "eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// does not work bcs the this keyword does not work in this function this keyword work only his objects does not work in other functions or objects okeh >>>>>>>>>>>>>
// book(23, "sarah");

// if we want the this keyword also do work for another funtions or objects its three way to do this (
//   CALL APPLY AND BIND
// ) okeh >>>>>>>>>>>>>>>

book.call(eurowings, 23, "sarah williams");
console.log(eurowings);

book.call(lufthansa, 45, "shradha mishra");

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "SW",
  bookings: [],
};
book.call(swiss, 348, "mary cooper");

// <<<<<<<<<<< APPLY METHOD >>>>>>>>>>>>>>..
const flightData = [340, "george cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//<<<<<<<<<<< bind method >>>>>>>>>>>>>>

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(23, "nikhil sharma");

const bookEW23 = book.bind(eurowings, 34);
bookEW23("nikhil");
bookEW23("shradha");

//<<<<<<<<<<<<<<< with event listeners >>>>>>>>>>>>>>.

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// <<<<<<<<<< partial application >>>>>>>>>>>

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(10, 200));

// const addVAT = addTax.bind(null, 2);
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(1));
// console.log(addVAT(23));

const addTax1 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT1 = addTax1(12);

console.log(addVAT1(23));
*/
// <<<<<< coding challenge >>>>>>>>>>

/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation? 

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section �
GOOD LUCK �

*/
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("String");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "String");
*/
// <<<<<<< immediately invoked function expressions (IIFE) >>>>>>>>>>>>>

const runOnce = function () {
  console.log("this will never run again");
};

runOnce();

(function () {
  console.log("this wil never run again");
})(); // its a IIFE example okeh

(() => console.log("this will never also run again"))();

{
  const isPrivate = 34;
  var notPrivate = 35;
}

console.log(notPrivate);

// <<<<<<<<< Closures >>>>>>>>>>>>>>>>>

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// <<<<<< more examples of closures >>>>>>>>>

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
// Re- assigning f function
h();
f();

console.dir(f);

// example 2 >>>>>>>>>>>

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are 3 groups, each with ${perGroup} passengers`);
  }, wait * 3000);

  console.log(`will start boarding in ${wait} seconds`);
};
boardPassengers(90, 5);

// setTimeout(function () {
//   console.log("timer");
// }, 10001); // this function will excute in 10001 ms

// coding challenge >>>>>>>>>>

/*
This is more of a thinking challenge than a coding challenge �
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
GOOD LUCK �
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

const movements = [200, 400, -400, 3000, -700, -140, 77, 1400];

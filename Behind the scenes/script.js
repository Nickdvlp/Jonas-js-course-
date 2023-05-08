"use strict";
/*

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 2004) {
      const str = `oh, and you're a modern, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = "Nikhil";
calcAge(2001);
*/

// this keyword.........
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  // console.log(this);
};
calcAge();

const calcAgeArrow = (birthYear) => {
  console.log(2023 - birthYear);
  // console.log(this);
};

calcAgeArrow(2001);

const nikhil = {
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

nikhil.calcAge();

const shradha = {
  year: 2003,
};
shradha.calcAge = nikhil.calcAge;

shradha.calcAge();

const f = nikhil.calcAge;
f();
*/

// var firstName = "shradha";

// const nikhil = {
//   firstName: "Nikhil",
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2023 - this.year);
//     const self = this;
//     const isMillenial = function () {
//       console.log(self);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     isMillenial();
//   },

//   // greet: () => console.log(`Hey ${this.firstName}`),
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// nikhil.greet();
// nikhil.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

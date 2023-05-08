"use strict";
const Person = function (firstName, BirthYear) {
  // instance properties >>>>>>>>
  this.firstName = firstName;
  this.BirthYear = BirthYear;

  //   this.calcAge = function () {
  //     console.log(2037 - this.BirthYear);
  //   };
};
const jonas = new Person("Jonas", 1991);
console.log(jonas);

console.log(jonas instanceof Person);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("matilda", 2017);
const nikhil = new Person("nikhil", 2001);
const shradha = new Person("shradha", 2001);
console.log(nikhil, shradha);

console.log(nikhil instanceof Person);

Person.hey = function () {
  console.log("hey there😀😀");
  console.log(this);
};
Person.hey();
// jonas.hey();
// Prototypes >>>>>>>>>>>>>>>>>>>
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.BirthYear);
};

nikhil.calcAge();
shradha.calcAge();

console.log(nikhil.__proto__);
console.log(nikhil.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(nikhil));
console.log(Person.prototype.isPrototypeOf(shradha));

Person.prototype.spieces = "Homo Sepiens";
console.log(nikhil.spieces, shradha.spieces);

console.log(nikhil.hasOwnProperty("firstName"));
console.log(nikhil.hasOwnProperty("spieces"));

// object.prototype (top of prototype chain)
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [4, 5, 6, 6, 43, 2, 78, 6, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector("h1");

console.dir((x) => x + 1);

//<<<<<<<<<<< i write own this code >>>>>>>>>>>>>

// const chart = function (first, second) {
//   this.first = first;
//   this.second = second;
// };

// chart.prototype.calcAge = function () {
//   console.log(2023 - this.second);
// };

// const Nikhil = new chart("nikhil", 2001);
// console.log(Nikhil);

// Nikhil.calcAge();

/*
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK �
*/

// const Car = function (car, speed) {
//   this.car = car;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   return `${this.car} is going ${this.speed + 10} km/h`;
// };
// Car.prototype.brake = function () {
//   return `${this.car} is going ${this.speed - 5} km/h`;
// };

// const BMW = new Car("BMW", 120);
// const Mercedes = new Car("Mercedes", 95);

// console.log(BMW.accelerate());
// console.log(Mercedes.accelerate());
// console.log(BMW.brake());
// console.log(Mercedes.brake());

// <<<<<<<<<<<<<<< es6 classes >>>>>>>>>>>>>>>>>.

// <<<<<<<<< class expression >>>>>>>>>
// const PersonCl = class {};

//<<<<<<<<<< class declaration >>>>>>>>
/*
class PersonCl {
  constructor(fullName, BirthYear) {
    this.fullName = fullName;
    this.BirthYear = BirthYear;
  }
  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.BirthYear);
  }
  greet() {
    console.log(`hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.BirthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a fullname`);
    console.log(name);
  }

  get fullName() {
    this._fullName;
  }

  // <<<<<< static method >>>>>>>>>>>>>>>
  static hey() {
    console.log("hey there😀😀");
    console.log(this);
  }
}

const jessica = new PersonCl("jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
jessica.greet();

console.log(jessica.age);

const nikhil2 = new PersonCl("nikhil sharma", 2001);

PersonCl.hey();
*/
// some more details of classes----

// 1. classes are not hoisted -- we can use functions without declared in the code but with classes that does'nt work okeh
// 2. classes are first class funtions
// 3. classes are executed in strict mode

// Setters and Getters >>>>>>>>>>>

const account = {
  owner: "nikhil",
  movement: [200, 530, 120, 300],

  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movement);

// <<<<<<<<<< Object.create >>>>>>>>>>>>>>>>>>>

const PersonProto = {
  calcAge() {
    console.log(2037 - this.BirthYear);
  },

  init(firstName, BirthYear) {
    this.firstName = firstName;
    this.BirthYear = BirthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
console.log(PersonProto);
console.log(steven.__proto__ === PersonProto);
steven.name = "Steven";
steven.BirthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init("sarah", 1979);
sarah.calcAge();

/*
Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK �
*/

// class Car {
//   constructor(car, speed) {
//     {
//       this.car = car;
//       this.speed = speed;
//     }
//   }

//   accelerate() {
//     return `${this.car} is going ${this.speed + 10} km/h`;
//   }

//   brake() {
//     return `${this.car} is going ${this.speed - 5} km/h`;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(value) {
//     return value * 1.6;
//   }
// }

// const ford = new Car("ford", 120);
// console.log(ford);

// ford.speedUS = 50;

// console.log(ford.speedUS);
// console.log(ford.accelerate());
// console.log(ford.brake());

//<<<<<<<<<<<<<< inheritance between classes >>>>>>>>>>>>>>>>

const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person2.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const student = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear);
  this.course = course;
};

student.prototype = Object.create(Person2.prototype); // <<<<<< connected prototypes >>>>>
student.prototype.introduce = function () {
  console.log(
    `My name is ${this.firstName} and My birthyear is ${this.birthYear}, I am studying ${this.course}`
  );
};

const nick = new student("nick", 2001, "computer science");

nick.introduce();
nick.calcAge();

console.log(nick.__proto__);
console.log(nick.__proto__.__proto__);

student.prototype.constructor = student;
console.dir(student.prototype.constructor);

// <<<<<<<<<<<<<< Coding Challenge #3 >>>>>>>>>>>>>>>>
/* Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism �
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK �
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.charge += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h h, with the charge of ${this.charge}`
  );
};
const tesla = new EV("tesla", 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

tesla.accelerate();

//<<<<<<<<< inheritance between classes: ES6 classes >>>>>>
/*
class PersonCl {
  constructor(fullName, BirthYear) {
    this.fullName = fullName;
    this.BirthYear = BirthYear;
  }
  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.BirthYear);
  }
  greet() {
    console.log(`hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.BirthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a fullname`);
    console.log(name);
  }

  get fullName() {
    this._fullName;
  }

  // <<<<<< static method >>>>>>>>>>>>>>>
  static hey() {
    console.log("hey there😀😀");
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, BirthYear, course) {
    super(fullName, BirthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this._fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.BirthYear
      } years old, but as a student I feel more like ${
        2037 - this.BirthYear + 10
      }`
    );
    console.log(this.BirthYear);
  }
}
const martha = new StudentCl("martha jones", 2012, "computer science");

console.log(martha);
martha.introduce();
martha.calcAge();

// inheritance between 'classes': Object.create >>>>>>>

const PersonProto2 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// const steven = Object.create(PersonProto2);
const studentProto = Object.create(PersonProto2);

studentProto.init = function (firstName, birthYear, course) {
  PersonProto2.init.call(this, firstName, birthYear);
  this.course = course;
};

studentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(studentProto);
jay.init("jay", 2010, "computer science");
jay.introduce();

jay.calcAge();
*/

// <<<<<<< another class example >>>>>>>>
/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    //Protected Properties >>>
    this._movements = [];
    this._pin = pin;

    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface >>>>>
  getMovements() {
    this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
    }
  }
}

const acc1 = new Account("nikhil", "EUR", 1111);
console.log(acc1);

acc1._movements.push(250);
acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);
*/
//<<<<<<< Encapsulation: private class and fields >>>>>>>.
// there is four different kinds of fields and methods >>>
// 1.Public fields
// 2.Private fields
// 3.Private methods
// 4.public methods

class Account {
  //1. Public fields (they are not add in prototype. Only use as instances)
  locale = navigator.language;
  // _movements = [];

  //2. Private fields
  // #movements = [];
  // #pin;

  //3. Public Methods (Public interface is also Public methods so u can scroll down and see it)

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    //Protected Properties >>>
    this.pin = pin;
    this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface >>>>>
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
      return this;
    }
  }

  static helper() {
    console.log("helper");
  }
  //4. Private methods >>>>>>.
  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account("nikhil", "EUR", 1111);
console.log(acc1);

// acc1.#movements.push(250);
// acc1.#movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
Account.helper();
console.log(acc1.getMovements());
console.log(acc1);

// console.log(acc1.#approveLoan(1000));
// console.log(acc1.#pin);

//<<<<<< chaining >>>>>>>>>
acc1.deposit(300).deposit(200).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

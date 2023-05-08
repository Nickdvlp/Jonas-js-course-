"use strict";

/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ["a", "b", "c", "d", "e"];

//  SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log(...arr);

// // SPLICE
// console.log(arr.splice(2));

// REVERSE

const arr1 = ["j", "i", "h", "g", "f"];
console.log(arr1.reverse());

// CONCAT

const letters = arr.concat(arr1);
console.log(letters);
console.log(...arr, ...arr1);

// JOIN

console.log(letters.join("-"));

// <<<<<<< the new AT method >>>>>>>>>>>>>>

const arr2 = [23, 11, 64];
console.log(arr2[0]);
console.log(arr2.at(0));
console.log(arr2[arr2.length - 1]);
console.log(arr2.slice(-1)[0]);
console.log(arr2.at(-1));

// <<<<<< LOOPING ARRAYS FROM FOREACH LOOP >>>>>>>>>

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you withdraw ${Math.abs(movement)}`);
  }
}

console.log("------foreach---------");
movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you withdraw ${Math.abs(movement)}`);
  }
});

// <<<<< FOREACH WITH MAPS AND SETS >>>>>>>>>>

// Maps <<<<<<<<
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Sets <<<<<<<<<
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// <<<<<<<<< PROJECT: 'BANKIST' APP >>>>>>>>>>>>>.

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov} £</div>
  </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};
// calcPrintBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => mov + acc, 0);
  labelSumIn.textContent = `${incomes}£`;
};
// calcDisplaySummary(account1.movements);

const outSummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => mov + acc, 0);
  labelSumOut.textContent = `${Math.abs(incomes)}£`;
};
// outSummary(account1.movements);

const interestSummary = movements
  .filter((mov) => mov > 0)
  .map((deposit) => (deposit * 1.2) / 100)
  .filter((int, i, arr) => {
    // console.log(arr);
    return int >= 1;
  })

  .reduce((acc, int) => acc + int, 0);
labelSumInterest.textContent = `${interestSummary}£`;

// <<<<<<<<< computing usernames of bankist app >>>>>>

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcPrintBalance(acc);
  // Display summary
  calcDisplaySummary(acc.movements);
};

// <<<<<<<<<< implementing login >>>>>>>>>>>
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    // clear the input field
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// <<<<<<<<< coding challenge #1 >>>>>>>>>>>>>>>>>
/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far �
GOOD LUCK � 
*/

const testData = function (data1, data2) {
  const bothData = data1.concat(data2);

  bothData.forEach(function (bothData, i) {
    if (bothData > 3) {
      console.log(`Dog number ${i + 1}
    is an adult, and is ${bothData} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

// 😁😀😁😀😁 this is my own solution okeh 😁😁😁😁😁😁
// const dogsJulia = [3, 5, 2, 12, 7];

// const correctData = dogsJulia.splice(0, 3);
// console.log(correctData);
// const dogsKate = [4, 1, 15, 8, 3];

// const bothData = correctData.concat(dogsKate);

// console.log(bothData);

// const displayAge = bothData.forEach(function (bothData, i) {
//   if (bothData > 3) {
//     console.log(`Dog number ${i + 1}
//     is an adult, and is ${bothData} years old`);
//   } else {
//     console.log(`Dog number ${i + 1} is still a puppy`);
//   }
// });

// testData([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
testData([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const euroToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });
/*
const movementsUSD = movements.map((mov) => mov * euroToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDFor = [];
for (const mov of movements) movementsUSDFor.push(mov * euroToUsd);
console.log(movementsUSDFor);

const movementDescriptions = movements.map(
  (mov, i) =>
    `movement ${i + 1}: you ${mov > 0 ? "deposited" : "withdraw"} ${Math.abs(
      mov
    )}`
);
console.log(movementDescriptions);
*/

// <<<<< filter method >>>>>>>>>>>>>>.

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsfor = [];
for (const mov of movements) if (mov > 0) depositsfor.push(mov);
console.log(depositsfor);

// const withdrawalsFilter = movements.filter(function (mov) {
//   return mov < 0;
// });
const withdrawalsFilter = movements.filter((mov) => mov < 0);

console.log(withdrawalsFilter);

// <<<<<<<< reduce methods >>>>>>>>>>>>>>>.

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

// maximum value of the movements array >>>>>>>>>>>

const max = movements.reduce(function (acc, cur) {
  if (acc > cur) return acc;
  else return cur;
}, movements[0]);
console.log(max);

// <<<<<<< Coding Challenge #2 >>>>>>>>>>>
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK �
*/
// const calcAverageHumanAge = function (ages) {
//   const humanages = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanages.filter((age) => age >= 18);
//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);

// <<<<<<<< the magic of chaining methods >>>>>>>>>>
const euroToUsd = 1.1;

// pipeline >>>>>>>>>>> so you already see in this code here can not know where and which process is working so here we use a third variable(arr) in our map method to check which arrays value we process in this code okeh >>>>>>>>>>>>>
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * euroToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// <<<<<, coding challenge #3 >>>>>>>>>>>>>>

/*
rewrite the calcHumanAge function again bt this time as an arrow function and using the chaining !

Test data 1: [5, 2, 4, 1, 15, 8, 3]
test data 2: [16, 6, 10, 5, 6, 1, 4]
*/

// const calcAverageHumanAge = function (ages) {
//   const humanages = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanages.filter((age) => age >= 18);
//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return average;
// };
const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

// <<<<<<< the find method >>>>>>>>>>>>

const firstWidrawal = movements.find((mov) => mov > 0);
console.log(firstWidrawal);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

//<<<<<<<<<<<<<<< some and every method >>>>>>>>>>>>>

// includes method shows only equality bt some method shows equality with condition >>>>>>>>>>>>>>>>>>> okeh
console.log(movements.includes(-130));

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

// every >>>>>>>>>>>>>>>
// every method always true when all elements will be true in array otherwise its shows false >>>>>>>>>>>>>>>>

console.log(movements.every((mov) => mov > 0));

console.log(account4.movements.every((mov) => mov > 0));

// <<<<<<< seperate callbacks >>>>>>>>
const deposits1 = (mov) => mov > 0;
console.log(movements.some(deposits1));
console.log(movements.every(deposits1));

//<<<<<<<<<<<<< flat and flatMap >>>>>>>>>>>>>>

const arr3 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr3.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

// <<<<<<<<< sorting arrays >>>>>>>>>>>>

const owners = ["jonas", "nikhil", "shradha"];
console.log(owners.sort());
console.log(owners); // now the owner's elements set permanently with sort method >>>>>>>>>>>>

//<<<<<<< Numbers >>>>>>>>>>>>>>

console.log(movements);

// Ascending order >>>>>>>>>>>>>>

movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

// descending order >>>>>>>>>>>>>>>>

movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements);

// the another method for ascending and descending arrays >>>>

const shramarks = [34, 68, 25, 27, 37, 75, 10];

// descending order >>>>>>>>
shramarks.sort((a, b) => b - a);
console.log(shramarks);

// ascending order >>>>>>>>>>>>
shramarks.sort((a, b) => a - b);
console.log(shramarks);

// <<<<<<<< more ways of creating and filling arrays >>>>>>>>>>>

// new array method >>>>>>>>>>>>>>>>>>>>
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

console.log(x.map(() => 5));

// fills method of array >>>>>>>>>>>>>>>>>>>
x.fill(1, 3, 5); // here this line mean that the array fills from third line and it goes on fifth line with 1 number element ohk>>>>>>>>>>>>>>>>>>
console.log(x);

// array.from method >>>>>>>>>>>>>

// the array.from method is like a mixture of new array method and fills method and its lot clean n clear then these methods .....

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value")
  );
  console.log(movementsUI.map((el) => el.textContent.replace("£", "")));
});

// <<<<<<<<<<<< Array methods practice >>>>>>>>>>>>>>>>>

// 1.
const bankDepositSum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// 3.
const { deposits2, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits2 += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits2: 0, withdrawals: 0 }
  );
console.log(deposits2, withdrawals);

// 4.

const convertTitleCase = function (title) {
  const exceptions = ["a", "and", "the", "with", "an", "but", "or", "in", "on"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  return titleCase;
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

// <<<<<<<<<<< Coding Challenge #4 >>>>>>>>>>>>>>>>>>>
/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) �
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects �)


Hints:
§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them �
§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.

Test data:
 const dogs = [
 { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
 { weight: 8, curFood: 200, owners: ['Matilda'] },
 { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
 { weight: 32, curFood: 340, owners: ['Michael'] },
 ];
GOOD LUCK �
*/

// <<<<<<< Solution >>>>>>>>>>>>

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// const calcutation = dogs.map((wt) => Math.trunc(wt.weight ** 0.75 * 28));
// console.log(calcutation);

// 1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  } `
);

// 3.
const ownersEatMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatMuch);

// 4.
console.log(`${ownersEatMuch.join(" and ")} dogs eat too much`);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6.
// console.log(
//   dogs.some(
//     (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
//   )
// );
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(dogsCopy);

"use strict";

// Data needed for a later exercise

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours, // here openingHours same work n its es6 syntax.

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

restaurant.orderDelivery({
  time: "22.30",
  address: "via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

// <<<< destructuring objects >>>>>>

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// default variables

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// nested objectsf
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// <<<<<<< the Spread operator >>>>>>>>>>>

const arr = [7, 9, 8];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// const newArr = [1, 2, arr];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// copy array by spred operator

const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2);

// NOTE = iterables: arrays, strings, maps, sets, Not objects

const str = "Nikhil";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Sharma`);
/*
const ingredients = [
  prompt("Let's make pasta! ingredient 1? "),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);
*/
// Objects
const newRestaurant = { foundedIn: 2023, ...restaurant, founder: "Nikhil" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "ristorante roma";
console.log(restaurant.name);

// <<<<<<<< rest pattern and parameters >>>>>>>

// <<<<<<< 1) destructuring >>>>>>>>>
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [pizza, risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, ...otherfood);
console.log(pizza, risotto, otherfood);

// <<<<<<< 2) functions >>>>>>>>

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 2, 4, 7);
add(3, 4, 5, 6, 7, 8, 8, 0, 7, 5);
const x = [23, 34, 5];
add(...x);

let orderPizza = function (mainIngredient, ...otherIngredients) {
  console.log(mainIngredient);
  console.log(otherIngredients);
};

orderPizza("mushrooms", "onion", "olives", "spinach");
orderPizza("mushrooms");

// <<<<<< short circuiting (&& and ||) >>>>>>>>>>

// || = logical operator and in this console the first value is truthy value and second falsy so or(||) operator always show truthy value thats why tha output is jonas
console.log("jonas" || 3);
console.log(3 || "jonas"); // its output 3 bcs 3 is truthy value
console.log("" || "jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "hello" || 23 || null);

// restaurant.numGuests = 23; // if here this line if value is 0 than 0 is falsy so the output is different with 0 okay and if value is zero the solution of this in nullish coalescing operator's section.
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// <<<<<<<<< the And operator >>>>>>>>>>
// the and operators is shows always falsy values and when tha all values are true than and operator is true otherwise its always gives falsy values.
console.log(0 && "jonas");
console.log(7 && "jonas");
console.log("hello" && 34 && undefined && "jonas" && null); // here null and undefined both are falsy bt undefined placed before null thats why output is undefined.okay

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// <<<<<< the nullish coalescing operator>>>>>>>>

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guestsCorrect = restaurant.numGuests ?? 10; // in this line we use nullish coalescing operator and the zero is showed in output.
console.log(guestsCorrect);

// <<<<<<< logical assignment operators >>>>>>>>>

const rest1 = {
  name: "capri",
  numGuests: 20, // if here value is zero than the output which used after or oprator okay.
};

const rest2 = {
  name: "la plazza",
  owner: "giovanni rossi",
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10; // if here we use nullish coalescing operator than the value is shows zero otherwise or operator know the zero is falsy value then its shows the output 10. okay
rest2.numGuests ||= 10;

rest1.numGuests &&= "<ANONMYOUS>";
rest2.numGuests &&= "<ANONMYOUS>";

console.log(rest1);
console.log(rest2);

/* <<<<<<<<<<<<<<< coding challenge #1 >>>>>>>>>>>>

We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK �
*/

// const game = {
//   team1: "bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "neuer",
//       "pavard",
//       "martinez",
//       "alaba",
//       "davies",
//       "kimmich",
//       "goretzka",
//       "coman",
//       "muller",
//       "gnarby",
//       "lewandowski",
//     ],
//     [
//       "burki",
//       "schulz",
//       "akanji",
//       "hakimi",
//       "weigl",
//       "witsel",
//       "hazard",
//       "brandt",
//       "sancho",
//       "gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["lewandowski", "gnarby", "lewandowski", "hummels"],
//   date: "Nov 9th 2037",
//   odds: {
//     team1: 9.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// <<<<<<<<<<<<<<<<<<<<<<< Solution >>>>>>>>>>>>>>>>>>>

// // 1.
// const [players1, players2] = game.players;
// // console.log(player1, player2);

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(players1);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, "thiago", "coutinho", "perscic"];

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
//   console.log(players);
// };

// // printGoals("davies", "muller", "lewandowski", "kimmich");
// // printGoals("davies", "muller");
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log(`team 1 is more likely to win`);
// team1 > team2 && console.log(`team 2 is more likely to win`);

// <<<<<<<< looping arrays: the for of loop >>>>>>>>>>>>>>>

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item); // here entries is make all values in his seperate array.
}
console.log([...menu.entries()]);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// <<<<<<<<<<<< Optional chaining >>>>>>>>>>>>>

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day}, we open at ${open}`);
}

// Methods of optional chaining >>>>>>>>>>>

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Optional chaining in Arrays >>>>>>>>>>>>>>>>

const users = [{ name: "nikhil", email: "nikhil.sharma3755@gmail.com" }];

// const users = [];

console.log(users[0]?.name ?? "user array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("user array empty"); // this method same like upper line code .

// <<<<<<<< Looping objects: objects keys, values, entries >>>>>>>>>>>>>>>

let properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

// properties values >>>>>>>>>>

const values = Object.values(openingHours);
console.log(values);

// properties enteries >>>>>>>>>>>>>>>>>>>

const values1 = Object.entries(openingHours);
console.log(values1);

for (const [day, { open, close }] of values1) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/*
 <<<<<<<<<<<<<<<<<< Coding Challenge #2 >>>>>>>>>>>>>>>>>>>>>>>
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �
*/
// <<<<<<<<<<<<<<<<<<<< Solution >>>>>>>>>>>>>>>>>>>
const game = {
  team1: "bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "neuer",
      "pavard",
      "martinez",
      "alaba",
      "davies",
      "kimmich",
      "goretzka",
      "coman",
      "muller",
      "gnarby",
      "lewandowski",
    ],
    [
      "burki",
      "schulz",
      "akanji",
      "hakimi",
      "weigl",
      "witsel",
      "hazard",
      "brandt",
      "sancho",
      "gotze",
    ],
  ],
  score: "4:0",
  scored: ["lewandowski", "gnarby", "lewandowski", "hummels"],
  date: "Nov 9th 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(`Odd of ${odd}`);
  const teamStr = team === "x" ? "draw" : `'victory' ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// <<<<<<<<<<< Sets >>>>>>>>>>>>>>>>>

const orderSet = new Set(["pasta", "pizza", "rissoto", "pasta", "pizza"]);
console.log(orderSet);
console.log(new Set("jonas"));

console.log(orderSet.size);
console.log(orderSet.has("pizza"));
console.log(orderSet.has("bread"));
orderSet.add("garlic bread");
orderSet.add("garlic bread");
orderSet.delete("rissoto");
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// example>>>>>>>>>>>>>>

// const staff = new Set([
//   "waiter",
//   "chef",
//   "waiter",
//   "manager",
//   "chef",
//   "waiter",
// ]);
// console.log(staff.size);
// const staffUnique = [...new Set(staff)];
// // const staffUnique = [new Set(staff)];

// // <<<<<<<<< maps >>>>>>>>>>>>>>>>>

// const rest = new Map();
// rest.set("name", "classico italiano");
// rest.set(1, "firence italy");
// console.log(rest.set(2, "lisbon, Portugal"));

// rest
//   .set("categories", ["italian", "pizzeria", "vegetarian", "organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "we are open:D")
//   .set(false, "we are closed :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 0;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// // rest.clear();
// console.log(rest);
// console.log(rest.size);

// const arr1 = [1, 2];
// rest.set(arr1, "test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr1));

// // <<<<<< map iteration >>>>>>>>>>

// const question = new Map([
//   ["question", "what is the best programming language in the world?"],
//   [(1, "C")],
//   [2, "Java"],
//   [3, "Javascript"],
//   ["correct", 3],
//   [true, "correct🎉"],
//   [false, "try again!"],
// ]);
// console.log(question);

// // convert object to map
// console.log(Object.entries(openingHours));
// const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);

// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt("Your answer"));
// console.log(answer);
// console.log(question.get(question.get("correct") === answer));

// //convert map to array

// console.log(...question);
/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK �
*/

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `an event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `an event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "first" : "second";
  console.log(`[ HALF] ${min}: ${event}`);
}

// <<<<<<< Working with strings Pt-1 >>>>>>>>>>>

const airLine = "tap air portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airLine.length);
console.log("wow"[0]);
console.log("wow".length);

console.log(airLine.indexOf("r"));
console.log(airLine.lastIndexOf("r"));
console.log(airLine.indexOf("portugal"));

console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));

console.log(airLine.slice(0, airLine.indexOf(" ")));
console.log(airLine.slice(airLine.lastIndexOf(" ") + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const S = seat.slice(-1);
  if (S === "B" || S === "E") console.log("you got the middle seat");
  else console.log("you got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("nikhil"));
console.log(typeof new String("nikhil"));
console.log(typeof new String("nikhil").slice(1));

// <<<<<<< working with strings Pt2 >>>>>>>>>>>>>

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

const student = "niKHil";
const studentUp = student.toLowerCase();
console.log(studentUp);
const studentCorrect = studentUp[0].toUpperCase() + studentUp.slice(1);
console.log(studentCorrect);

const email = "hello@nikhil.io";
const loginEmail = "  Hello@Nikhil.io \n";

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);

// replacing strings >>>>>>>>>>>>>>>>

const priceGB = "288,97$";
const priceUS = priceGB.replace("$", "@");
console.log(priceUS);

const annoucement = "all passengers come to barding door 23. baording door 23!";
console.log(annoucement.replace("door", "gate"));
console.log(annoucement.replaceAll("door", "gate"));
console.log(annoucement.replace(/door/g, "gate")); // its the method to replace all words replace which selected in string.

// booleans >>>>>>>>>

const plane1 = "Airbus A320neo";
console.log(plane1.includes("A320neo"));
console.log(plane1.includes("nikhil"));
console.log(plane1.startsWith("A320neo"));
console.log(plane1.startsWith("A"));
console.log(plane1.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("part of the new airbus family");
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("you are not allowed on board");
  } else {
    console.log("welcome abroad");
  }
};
checkBaggage("i have a laptop, some food and a pocket knife");
checkBaggage("socks and camera");
checkBaggage("got some snacks and a gun for protection");

// <<<<<<<< working with strings Pt3 >>>>>>>>>>>>>>>>>>

// << split and join method >>>>>>>>
console.log("a+very+nice+string".split("+"));
console.log("jonas schmedtmann".split(" "));

const [firstName, lastName] = "nikhil sharma".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");

console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("jessica and smith davis");
capitalizeName("jonas schmedtmann");

// Padding >>>>>>>>>>>>>>

const message = "go to gate 23!";
console.log(message.padStart(25, "="));
console.log("jonas".padStart(25, "="));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(43364748596899605));
console.log(maskCreditCard("362920374950696069065805"));
console.log(maskCreditCard("362920374950696069065805"));

// Repeat >>>>>>>>>>>

const message1 = "bad weather... all departures delayed... ";

console.log(message1.repeat(5));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${"✈".repeat(n)}`);
};

planesInLine(5);
planesInLine(12);
planesInLine(23);

// <<<<<<<<< Coding Challenge #4 >>>>>>>>>>>>.

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �
*/

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"🤪".repeat(i + 1)}`);
  }
});

// <<<<<<<< string methods practice >>>>>>>>>>>

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

/*
  ✈ Delayed Departure from FAO to TXL (11h25)
               Arrival from BRU to FAO (11h45)
    ✈ Delayed Arrival from HEL to FAO (12h05)
             Departure from FAO to LIS (12h30)
  */

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "✈" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(":", "h")})`.padStart(46);
  console.log(output);
}

// alert("javacript is FUN!")
// let first = ("Nikhil");
// console.log(first);

// let js = (40+34*56-90)
// console.log(js);

// // <<<<< this program i create for fun only >>>>>
// let a = prompt("lets see who's in your mind");
// let b = ("shradha");
// if(a == b){
//    alert("your choice is damn right")
// }
// else {
//     alert("your thought is not good")
// }
// console.log(true)

// let nikhil = true;
// console.log(nikhil)
// console.log(typeof nikhil)

//  nikhil = ('Yes!');
// console.log(typeof nikhil)

// let year;
// console.log(year);
// console.log(typeof year)

// year = 1991;
// console.log(typeof year)

// <<<<<<< here the bug of javascript >>>>>>>

// console.log(typeof null) //here this line we wanna print type of null in console . the output of this type always shows object thats why its a bug of javascript.


// <<<<<<< coding challenge #1 >>>>>>>>

// const massJohn = 92;
// const heightJohn = 1.95;
// const massMark = 78;
// const heightMark = 1.69;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn); // here we use two methods to multiply height of both and they are give same output.
// console.log(BMIMark)
// console.log(BMIJohn)

// const markHigherBMI = BMIMark > BMIJohn
// console.log(markHigherBMI)

// const firstName = "jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a" + " " + (year - birthYear) + " years old " + job + "!";

// console.log(jonas) // now we write this code with template literals
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(jonasNew) // this is the easier method 

// some more use of backticks in js. backticks is used less but present time most devs use this ussually.now see the use of backticks.

// // <<<<<<<< write multi line output >>>>>>>>>
console.log('string with \n\ multiple \n\ lines') // this is the normal way to write multiple lines

console.log(`string with
multiple
lines`) // this is the easier and modern way to write multiple lines.

//<<<<<<<<< the decisions if...else >>>>>>>>>

const age = 15;
const isOldEnough = age >= 18; // here this condition if true then exicuted the console. else this is not show in console.
if(isOldEnough) {
console.log("Sarah can start driving license")
}
else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
}

const birthYear = 1991;
let century;
if(birthYear <= 2000){
     century = 20;

}
else {
    century = 21;
}
console.log(`century: ` + century);

// <<<<<< coding challenge #2 >>>>>>>>

const massJohn = 92;
const heightJohn = 1.95;
const massMark = 78;
const heightMark = 1.69;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn); // here we use two methods to multiply height of both and they are give same output.
console.log(BMIMark)
console.log(BMIJohn)

const markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI)

if (BMIMark > BMIJohn) {
console.log(`Mark's BMI (${BMIMark}) is higher than john's (${BMIJohn})! `)
    
}
else {
    console.log(`john's BMI (${BMIJohn}) is higher than mark's(${BMIMark})!`)
}

// <<<<<<< type conversion >>>>>>>>

const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear +18)
console.log(Number(inputYear) + 18); // here change the string to the number

console.log(String(45), 45) // here first 45 is converted in string n second still a number.

//<<<<<< type coercion >>>>>>>
console.log('I am ' + 23 + 'years old') // here + symbol converted the 23 number to the string.

console.log('23' - '10' - 3)
// here - symbol converted the string to a number.

// <<<<< falsy values: 0, '',undefined,null,NaN = they are all falsy values. >>>>>>

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0; // here money is zero and zero is a falsy value so the output shows the else statement.
if(money){
    console.log("dont spend it all")
}
else{
    console.log("You should get a job!")
}

// <<<<<< equality operators >>>>>>>

const Age = 18;
if(Age === 18) console.log("you just became an adult")

// <<<<< Boolean logic >>>>>>

// boolean logic: boolean logic are two types 
// first:A and B
// second:A or B

// A and B: if A and B both are true then the value is always true otherwise all situations are false.

// A or B: if A and B both are false then the value is always false otherwise all situations are true.


// <<<<<< logical operators >>>>>>

const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if(hasDriversLicense && hasGoodVision){
    console.log('Sarah is able to drive')
}
else {
    console.log('Someone else should drive....')
}
const isTired = true; // C 
console.log(hasDriversLicense && hasGoodVision
    && isTired)
    console.log(hasDriversLicense || hasGoodVision
        || isTired)

 // <<<<<<< coding challenge #3 >>>>>>>>
 
 const scoreDolphins =(96+108+89) / 3;
 const scoreKoalas = (88+91+110) / 3;
console.log(scoreDolphins,scoreKoalas);

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy🏆")
}
else if(scoreDolphins < scoreKoalas){
    console.log("Koalas win the trophy🏆")
}
else if(scoreDolphins === scoreKoalas){
    console.log("Both win the trophy🏆")
}

// <<<<<< ternary operator >>>>>>
const AGE = 23;
// AGE>= 18 ? console.log("I like to drink wine!") :
// console.log("I like to drink milk!")

const drink = AGE >= 18 ? 'wine!' : 'milk!';
console.log(drink)
 let drink2;
 if ( AGE >= 18) {
    drink2 = "wine!"
 }
 else {
    drink2 = ("milk!")
 }
 console.log(drink2);

//  now we can use here template literals
console.log(`I like to drink ${AGE >= 18 ? 'wine!' : 'milk!'}`); // this is the ternary operator.

// <<<<< coding challenge #4 >>>>>>>
const bill = 51;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill * tip}`);



// <<<<<<<<<<<<<😁😁😁😁😁😁 NOW END THE JAVASCRIPT FUNDAMENTALS HERE 😁😁😁😁😁😁>>>>>>>>>>>>

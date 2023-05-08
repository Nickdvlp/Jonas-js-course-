const years = [1990, 1967, 2002, 2010, 2018];
const min = Math.min(...years);
console.log(min);

// some more code for practice >>>>>>>>>>

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// <<<<<< debugging ( fixing bugs) >>>>>>>>>

// debugging with the console and breakpoints

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degrees celsius:")), // the prompt funtion always gives a string.
//   };
//   console.log(measurement);
//   console.table(measurement);

//   console.log(typeof measurement.value);
//   console.warn(measurement.value);
//   console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// coding challenge #1

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];
const testString = testData1.concat(testData2);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}℃ in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
printForecast(testString);

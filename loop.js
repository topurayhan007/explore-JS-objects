const numbers = [12, 54, 65, 3, 54];
/* for (const number of numbers) {
  console.log(number);
} */

const bottle = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: 1,
};

// 1. for of can not be used with objects
// Loop doesn't work with Object
/* for (const key of bottle) {
  console.log(key);
} */

// first option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys);
/* 
3 ways to read object properties | values
bottle.color
bottle["color"]
bottle[key]
*/
for (const key of keys) {
  // console.log(key, bottle[key]);
}

// for in loop
for (const key in bottle) {
  const value = bottle[key];
  // console.log(key, value);
}

// advanced
const pair = Object.entries(bottle);
console.log(pair);
for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}

const bottle = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: 1,
};

const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle);
// console.log(pair);
/* const twoDimension = [
  ["color", "yellow"],
  ["price", 50],
  ["isCleaned", true],
  ["capacity", 1],
]; */

// Seal doesn't allow you to delete any property but you can modify the values but not add new property
// Freeze doesn't allow you to delete, modify, add property and values.
console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);

const concat = (primaryArray, secondaryArray) => [
  ...primaryArray,
  ...secondaryArray,
];

const concatMultiple = (...arrays) => [].concat(...arrays);
const secondaryArray = "the new array we have made".split(" ");
const extraArray = "with a lot of effort".split(" ");
console.log("Primary array", exampleArray);
console.log("Secondary array", secondaryArray);
console.log(concat(exampleArray, secondaryArray));
console.log(concatMultiple(exampleArray, secondaryArray, extraArray));

console.log(
  "==== Deliverables  =========== 05-concat === Start ======================="
);
const exampleArray = "This is an example array".split(" ");

const concat = (primaryArray, secondaryArray) => [
  ...primaryArray,
  ...secondaryArray,
];

const concatMultiple = (...arrays) => [].concat(...arrays);

const concatMultiple2 = (...args) => {
  return args.reduce((acc, val) => [...acc, ...val]);
};

const secondaryArray = "the new array we have made".split(" ");
const extraArray = [1, 2, 3, 8, true, { id: 1233, name: "andy" }];
console.log("Primary array", exampleArray);
console.log("Secondary array", secondaryArray);
console.log(concat(exampleArray, secondaryArray));
console.log(
  "Concat with concat method ",
  concatMultiple(exampleArray, secondaryArray, extraArray)
);
console.log(
  "Concat with spread operator ",
  concatMultiple2(exampleArray, secondaryArray, extraArray)
);
console.log(
  "==== Deliverables  =========== 05-concat === End ======================= \n\n\n"
);

console.log(
  "==== Deliverables  =========== 01-Heads===Start ======================="
);
const inputArray = ["Andy", "test", { name: "testArray", age: 50 }];

const head = (inputArray) => {
  const [first] = inputArray;
  return first;
};
console.log("Array used", inputArray);
console.log(head(inputArray));
console.log(
  "==== Deliverables  =========== 01-Heads===End ======================= \n\n\n"
);

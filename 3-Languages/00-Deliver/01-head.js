const inputArray = ["Andy", "test", { name: "testArray", age: 50 }];

const head = (inputArray) => {
  const [first] = inputArray;
  return first;
};

console.log(head(inputArray));

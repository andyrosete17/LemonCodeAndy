import { exampleArray } from "../03-Init/index.js";
console.log(
  "==== Deliverables  =========== 04-last === Start ======================="
);

const last = (inputArray) => {
  const { [inputArray.length - 1]: last } = inputArray; // also could be return inputArray[inputArray.length - 1]
  return last;
};

console.log("latest example", exampleArray);
console.log(last(exampleArray));
console.log("latest example", exampleArray);
console.log(
  "==== Deliverables  =========== 04-last === End ======================= \n\n\n"
);

console.log(
  "==== Deliverables  =========== 03-init === Start ======================="
);

export const exampleArray = "This is an example array".split(" ");

const init = (inputArray) => {
  const [, ...newArray] = inputArray;
  return newArray;
};

console.log(exampleArray);
console.log("Init response with slice", init(exampleArray));
console.log(
  "==== Deliverables  =========== 03-init === End ======================= \n\n\n"
);

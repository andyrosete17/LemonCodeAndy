console.log(
  "==== Deliverables  =========== 03-init === Start ======================="
);

export const exampleArray = "This is an example of this".split(" ");

const init = (inputArray) => {
  const newArray = inputArray.slice(0,-1);
  return newArray;
};

console.log(exampleArray);
console.log("Init response with slice", init(exampleArray));
console.log(
  "==== Deliverables  =========== 03-init === End ======================= \n\n\n"
);

const exampleArray = "This is an example array".split(" ");

const init = (inputArray) => {
  inputArray.splice(-1, 1);
  return inputArray;
};

const initPop = (inputArray) => {
    inputArray.pop();
    return inputArray;
  };

console.log(exampleArray);
console.log('Init response', init(exampleArray));
console.log('Init pop response', initPop(exampleArray));

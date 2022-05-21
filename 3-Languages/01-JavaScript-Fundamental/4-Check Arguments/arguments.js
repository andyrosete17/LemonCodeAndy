function checkArg(input) {
  var result;
  if (input === undefined) {
    result = "Unknown";
  } else if (input === null) {
    result = "";
  } else {
    result = input;
  }
  return result;
}

function checkArgUpdated (input) {
  return input !== undefined ? input ?? '' : 'Unknown';
}

console.log(checkArg("andy"));
console.log(checkArg("undefined"));
console.log(checkArg(""));
console.log(checkArg());
console.log(checkArg(undefined));
console.log(checkArg(null));
console.log(checkArgUpdated("andy"));
console.log(checkArgUpdated("undefined"));
console.log(checkArgUpdated(""));
console.log(checkArgUpdated());
console.log(checkArgUpdated(undefined));
console.log(checkArgUpdated(null));
console.log(
  "==== Practice  =========== 05-DeepEqual ===Start ======================="
);

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };
console.log(user === clonedUser);

// const plainObjectIsEqual = (firstObject, secondObject): boolean => {
//   for (const key in firstObject) {
//     console.log("esta es la key", key);
//     if (
//       !secondObject.hasOwnProperty(key) ||
//       firstObject[key] !== secondObject[key]
//     ) {
//         console
//       return false;
//     }
//     if (typeof firstObject[key] === "object") {
//       console.log("entramos y el object es", key, firstObject[key]);
//       if (!plainObjectIsEqual(firstObject[key], secondObject[key])) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

const plainObjectIsEqual = (firstObject, secondObject): boolean => {
  for (const key in firstObject) {
    if (secondObject.hasOwnProperty(key)) {
      if (typeof firstObject[key] === "object") {
        if (!plainObjectIsEqual(firstObject[key], secondObject[key])) {
          return false;
        }
      } else if (firstObject[key] !== secondObject[key]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

console.log(plainObjectIsEqual(user, clonedUser)); // true

var complexUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var complexClonedUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

console.log(plainObjectIsEqual(complexUser, complexClonedUser)); // true

console.log(
  "==== Practice  =========== 05-DeepEqual ===End ======================="
);

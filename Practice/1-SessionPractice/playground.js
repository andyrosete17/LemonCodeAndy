import {test} from "./utils";
// let collection = ["andy", "test"];
// collection[50] = "crazy";
// console.log(collection);

const Person = (name) => {
  this.name = name;
  this.naming = () => {
    console.log(this.name);
  };
};

// var dan = new Person("Dan");
// var james = new Person("james");
Person.name = "andy";

const sum = (_first, ...nums) => {
  return nums.reduce((acc, num) => acc + num, 0);
};

// console.log(sum());
// console.log(sum(1, 2, 3, 4, 5));

const student = {
  name: "andy",
  surname: "rosete",
  country: {
    id: 21,
    name: "Spain",
    iso: "SPA",
  },
};

const {
  country: { id },
  ...other
} = student;
console.log(id);
console.log(other);

const list = [
  { name: "andy", age: 20, student },
  { name: "denise", age: 25, student },
];

const newList = [...list, list[0]];
console.log("new list", newList);

const templateFactory = (phrase, ...placeholder) => {
  console.log("phrase", phrase);
  console.log(placeholder);
  return (data) => {
    console.log("data es ", data);
    return phrase.map(
      (phrase, index) => phrase + (data[placeholder[index]] || "")
    );
  };
};
const horoscopo = templateFactory`
-${0} - 
Hola querido ${0},
Esta semana va a ser ${1} para ti,
debido a que ${2}.
- Tu pitonisio de confianza`;

const piscis = ["Piscis", "genial", "el amor llama a tu puerta."];

console.log(horoscopo(piscis));

test();
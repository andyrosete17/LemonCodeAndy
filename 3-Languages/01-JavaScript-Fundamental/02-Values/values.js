const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

const video = {
  id: 31,
  duration: 310,
  name: "long video",
  format: "mp4",
};

function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

export function values(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(obj[key]);
      result.push(obj[key]);
    }
  }
  return result;
}

values(eso2o);
values(video);

var john = new Person("John");
console.log(values(john));

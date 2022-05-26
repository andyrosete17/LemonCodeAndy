console.log("==== Practice  =========== 03-califications ===Start =======================");
const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

function printAverage(classResults) {
  const classValues = values(classResults);
  let i = 0;
  let sumValues = 0;
  for (i; i < classValues.length; i++) {
    sumValues += classValues[i];
  }
  selectAverage(sumValues / i);
}

function values(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(obj[key]);
      result.push(obj[key]);
    }
  }
  return result;
}

function selectAverage(average) {
  console.log("The average would be=>", average);
  if (average === 10) {
    console.log("Matrícula de Honor = 10");
  } else if (average < 10 && average > 9) {
    console.log("Sobresaliente = entre 9 y 10");
  } else if (average < 9 && average > 7) {
    console.log("Notable = entre 7 y 9");
  } else if (average < 7 && average > 6) {
    console.log("Bien = entre 6 y 7");
  } else if (average < 6 && average > 5) {
    console.log("Suficiente = entre 5 y 6");
  } else if (average < 5 && average > 4) {
    console.log("Insuficiente = entre 4 y 5");
  } else {
    console.log("Muy deficiente = por debajo de 4");
  }
}

printAverage(eso2o);
console.log("==== Practice  =========== 03-califications ===End ======================= \n\n\n");
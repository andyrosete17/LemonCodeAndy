console.log("==== Practice  =========== 01-biggestWord ===Start =======================");
function biggestWord(phrase) {
  console.log(phrase);
  return  phrase.split(" ").sort((a, b) => b.length - a.length)[0];
}

console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener" console.log(biggestWord("Ejercicios básicos de JavaScript")); // "E
console.log("==== Practice  =========== 01-biggestWord === End ======================= \n\n\n");
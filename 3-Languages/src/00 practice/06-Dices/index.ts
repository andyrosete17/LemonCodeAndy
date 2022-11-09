console.log(
  "==== Practice  =========== 06-Dices ===Start ======================="
);

const MIN = 1;
const MAX = 6;
function generateRandomNumber(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const runDices = () => {
  let dices: number[] = [undefined, undefined];

  return () => {
    console.log("First we do a reset of the dices");
    dices = [undefined, undefined];
    console.log("Dices reset", dices);
    dices = dices.map((x) => generateRandomNumber(MIN, MAX));

    console.log(dices);

    if (dices.filter((x) => x === 6).length === 2) {
      console.log("You have won something mate!!!");
    }
  };
};

const realDices = runDices();
realDices();
realDices();
realDices();
realDices();
realDices();

console.log(
  "==== Practice  =========== 06-Dices ===End ======================="
);

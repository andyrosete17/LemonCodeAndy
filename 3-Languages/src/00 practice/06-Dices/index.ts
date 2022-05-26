console.log(
  "==== Practice  =========== 06-Dices ===Start ======================="
);

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const runDices = () => {
  let dices: number[] = [undefined, undefined];

  return () => {
    console.log("First we do a reset of the dices");
    dices = [undefined, undefined];
    console.log("Dices reset", dices);
    dices = dices.map((x) => generateRandomNumber());

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

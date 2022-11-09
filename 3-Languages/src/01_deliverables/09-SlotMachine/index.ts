console.log(
  "==== Deliverables  =========== 09-SlotMachines === Start ======================="
);

const WIN = "Congratulations!!!. You won $1 coins!!";
const LOSE = "Good luck next time!!";

const generateRandomBool = () => {
  return Math.random() < 0.5;
};

class SlothMachine {
  constructor() {
    this.coins = 0;
  }
  private coins: number;
  play(): void {
    this.coins++;
    for (let x = 0; x < 3; x++) {
      if (!generateRandomBool()) {
        return console.log(LOSE);
      }

      const result = WIN.replace("$1", this.coins.toString());
      this.coins = 0;
      console.log(result);
    }
  }
}
const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
console.log(
  "==== Deliverables  =========== 09-SlotMachines === End ======================= \n\n\n"
);

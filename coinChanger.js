let prompt = require("prompt-sync")();
console.log("Change Calculator");
function coinChanger(centVal) {
  let quarter = 25,
    dime = 10,
    nickel = 5,
    penny = 1;

  let modQuaters = centVal % quarter;
  let modDimes = modQuaters % dime;
  let modNickels = modQuaters % nickel;
  let modPennies = modQuaters % penny;

  let numQuarters = (centVal - modQuaters) / quarter;
  let numDimes = (modQuaters - modDimes) / dime;
  let numNickels = (modDimes - modNickels) / nickel;
  let numPennies = (modNickels - modPennies) / penny;

  console.log(`Quarters: ${numQuarters}`);
  console.log(`Dimes: ${numDimes}`);
  console.log(`Nickels: ${numNickels}`);
  console.log(`Pennies: ${numPennies}`);
}

function firstPrompt() {
  let cent = prompt("Enter number of cents (0-99): ");
  coinChanger(cent);
  secPrompt();
}
function secPrompt() {
  let response = prompt("Continue? (y/n): ");
  if (response == "y") {
    firstPrompt();
  } else if (response == "n") {
    console.log("Bye!");
  }
}
firstPrompt();


console.log("Change Calculator");
function coinChanger(centVal) {
  const coinType = {
    "Quarters": 25, 
    "Dimes": 10, 
    "Nickels": 5, 
    "Pennies": 1
};

let quart = coinType.Quarters, dime = coinType.Dimes, nick = coinType.Nickels, pen = coinType.Pennies;

  if (centVal >= 0 && centVal <= 99) {
     var a = Math.floor(centVal / quart);
         console.log("Quarters: " + a);
  }
  if (centVal % quart >= 10) {
     var b = centVal % quart;
     var c = Math.floor(b / dime);
        console.log("Dimes: " + c);
  }
   else if (centVal % quart >= 5) {
         console.log("Dimes: 0");
     var g = Math.floor((centVal % quart) / nick);
        console.log(`Nickels: ${g}`);
        console.log("pennies: " + ((centVal % quart) % nick));
  }
  if (centVal % quart < 5) {
     var h = centVal % quart;
        console.log("Dimes: 0\nNickels: 0\nPennies: " + h);
  }
  if (b % dime >= 5) {
     var d = b % dime;
     var e = Math.floor(d / nick);
        console.log("Nickels: " + e);
  }
   else if (b % dime < 5) {
        console.log("Nickels: 0\nPennies: " + (b % dime));
  }
  if (d % nick >= 1) {
     var f = d % nick;
        console.log("Pennies: " + f);
  }
   else if (d % nick == 0) {
        console.log("Pennies: 0");
  }
}

function mainGuy() {
  const prompt = require("prompt-sync")();
  let cent = prompt("Enter number of cents (0-99): ");
    coinChanger(cent);

  let response = prompt("Continue? (y/n): ");
  if (response == "y") {
    while (response == "y") {
      mainGuy();
    }
  } 
  else if (response == "n") {
        console.log("Bye!");
  }
}
mainGuy();


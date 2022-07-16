
console.log("Change Calculator");
function coinChanger(centVal) {
var coinType = ["Quarters", "Dimes", "Nickels", "Pennies"];
var coinValues = [25, 10, 5, 1];
if (centVal >= 0 && centVal <= 99) {
    var a = Math.floor(centVal / coinValues[0]);
console.log("Quarters: " + a);
} 
 if ((centVal%coinValues[0]) >= 10) {
var b = (centVal%coinValues[0]);
var c = Math.floor(b / coinValues[1]);
console.log("Dimes: " + c);
} else if ((centVal%coinValues[0]) >= 5 ) {
    console.log("Dimes: 0");
var g = Math.floor((centVal%coinValues[0]) / coinValues[2]);
console.log(`Nickels: ${g}`);
console.log("pennies: " + ((centVal%coinValues[0])%coinValues[2]));
}  if ((centVal%coinValues[0]) <5) {
    var h = centVal%coinValues[0];
    console.log("Dimes: 0\nNickels: 0\nPennies: " + h);
}
if ((b%coinValues[1]) >= 5) {
    var d = (b%coinValues[1]);
    var e = Math.floor(d / coinValues[2]);
    console.log("Nickels: " + e);
} else if (b%coinValues[1] < 5) {
    console.log("Nickels: 0\nPennies: " + (b%coinValues[1]));
}
if ((d%coinValues[2]) >= 1) {
    var f = (d%coinValues[2]);
    console.log("Pennies: " + f);
}else if (d%coinValues[2] == 0) {
    console.log("Pennies: 0");
}
}
function mainGuy() {
var cent = require('prompt-sync')()("Enter number of cents (0-99): ");
console.log(coinChanger(cent));
var prompt = require('prompt-sync')()("Continue? (y/n): ");
if (prompt == "y") {
    while (prompt == "y") {
    mainGuy();
   
}
}else if (prompt == "n") {
    console.log("Bye!");
}
}
mainGuy();









// lastGuy();

// function lastGuy() {
// var prompt = require('prompt-sync')()("Continue? (y/n): ");
// while (prompt == "y") {
//     // var prompt = require('prompt-sync')()("Continue? (y/n): ");
//     mainGuy();
// }
// }
// lastGuy();
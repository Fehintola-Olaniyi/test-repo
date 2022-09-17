import { Member } from './Main.js';
const prompt = require('prompt-sync')();
class Student extends Member {
  constructor(first, last, gender, dateOfBirth, phoneNumber, emailAddress, studentNo, cla_ss) {
    super(first, last, gender, dateOfBirth, phoneNumber, emailAddress);
    this.cla_ss = cla_ss;
    this.studentNo = studentNo;
  }
}

class Staff extends Member {
  constructor(first, last, gender, dateOfBirth, phoneNumber, emailAddress) {
    super(first, last, gender, dateOfBirth, phoneNumber, emailAddress);
    this.status = "Staff";
    this.staffNo = 0;
    this.netPay = 2000;
 
  // assignToStudent(student_number) {
    
  }
} 

let dom = new Staff("john", "doe", "f", 1999, 3928734, "isdn@gmail.com");
console.log(dom.gender);
console.log(dom.dateOfRegistration);
// console.log(dom.emailAddress);
// console.log(dom.phoneNumber)
console.log(dom.netPay);








// let rankPr = prompt("Are you registering as a Student or Staff?: ");
// if (rankPr == "student") {
//   userInput();
//   let studentNoPr = prompt("input your student number: ");
//   let classPr = prompt("Input your current class: ");
//   let potentialStudent = new Student(
//     fNamePr,
//     lNamePr,
//     gendPr,
//     dobPr,
//     phonePr,
//     emailPr,
//     studentNoPr,
//     classPr
//   );
// } else {
//   // let staffNoPr = prompt("Input your staff number: ");
//   // let netPayPr = prompt("Input your net pay: ");
//   let potentialStaff = new Staff(
//     fNamePr,
//     lNamePr,
//     gendPr,
//     dobPr,
//     phonePr,
//     emailPr,
//     staffNoPr,
//     netPayPr
//   );
// }

// function userInput() {
//   let fNamePr = prompt("Input your  first name: ");
//   let lNamePr = prompt("Input your last name: ");
//   let gendPr = prompt("Input your gender(m/f): ");
//   let dobPr = prompt("Input your date of birth: ");
//   let phonePr = prompt("Input your phone number: ");
//   let emailPr = prompt("Inout your email address: ");
// }

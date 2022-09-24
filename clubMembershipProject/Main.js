// const prompt = require("prompt-sync")();
 export class Member {
  constructor(first, last, gender, dateOfBirth, phoneNumber, emailAddress) {
    this.first = first;
    this.last = last;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
    // let basesalary = frig;
  }

  set first(val) {
    this.firstName = val;
  }
  set last(val) {
    this.lastName = val;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`.toUpperCase();
  }
  set gender(val) {
    if (val == "m") {
      this._gender = val.toUpperCase() + "ale";
    } else if (val == "f") {
      this._gender = val.toUpperCase() + "emale";
    }
  }
  get gender() {
    return this._gender;
  }
  set phoneNumber(val) {
    this._phoneNumber = val;
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
  set emailAddress(val) {
    this._emailAddress = val;
  }
  get emailAddress() {
    return this._emailAddress;
  }
  getCurrentDate() {
    return new Date();
  }

  get dateOfRegistration() {
    this._dateOfRegistration = this.getCurrentDate();
    return `${this.fullName} is now registered as a ${this.rank} at ${this._dateOfRegistration}`;
  }

  borrowBook(userBook) {
    console.log("checking if book is available for borrowing...");
    console.log(`Congratulations. You have successfully borrowed ${userBook.numOfCopies} copy(ies) of 
    ${userBook.bookName} by ${userBook.author}\nTime of issuance: ${new Date()}.`);
  
  }

  returnBook(userBook) {
    console.log(`You have successfully returned ${userBook.numOfCopies} copy(ies) of 
    ${userBook.bookName} by ${userBook.author}\nTime of return: ${new Date()} .`);
  
  }
}

class Book {
  constructor(bookName, author, numOfCopies, isbnNum) {
    this.bookName = bookName;
    this.author = author;
    this.numOfCopies = numOfCopies;
    this.isbnNum = isbnNum;
  }

  set bookName(val) {
    this._bookName = val;
  }
  get bookName() {
    return this._bookName;
  }
  set author(authVal) {
    this._author = authVal;
  }
  get author() {
    return this._author;
  }
  set numOfCopies(nocVal) {
    this._numOfCopies = nocVal;
  }
  get numOfCopies() {
    return this._numOfCopies;
  }
  set isbnNum(updatedIsbn) {
    this._isbnNum = updatedIsbn;
  }
  get isbnNum() {
    return this._isbnNum;
  }

}




















// (function userReg() { 
//   console.log("Welcome to Readers Club\nWe would like to collect some info from you to get you registered...");
// let rankPr = prompt("Are you registering as a Student or Staff(1/2)?: ");

// let fNamePr = prompt("Input your  first name: ");
// let lNamePr = prompt("Input your last name: ");
// let gendPr = prompt("Input your gender(m/f): ");
// let dobPr = prompt("Input your date of birth: ");
// let phonePr = prompt("Input your phone number: ");
// let emailPr = prompt("Inout your email address: ");
//  if (rankPr == 1) {
//     let studentNoPr = prompt("input your student number: ");
//     let classPr = prompt("Input your current class: ");
// var latestMem = new Student(
//   fNamePr,
//   lNamePr,
//   gendPr,
//   dobPr,
//   phonePr,
//   emailPr,
//   studentNoPr,
//   classPr
// );
// // console.log(latestMem.dateOfRegistration);
//  } else {
//   let staffNoPr = prompt("Input your staff number: ");
//   var latestMem = new Staff(
//   fNamePr,
//   lNamePr,
//   gendPr,
//   dobPr,
//   phonePr,
//   emailPr,
//   staffNoPr
//   );
// // console.log(latestMem.dateOfRegistration);
//  }
// console.log(latestMem.dateOfRegistration);
// let menuPrompt = prompt("Now would you like to borrow  or return a book(1/2): ");
//   let bookNamePr = prompt("Input the name of the book: ");
//   let authorPr = prompt("Input the author's name: ");
//   let numOfCopiesPr = prompt("Input the number of copies: ");
//   let isbnNumPr = prompt("Input the isbn number of the book: ");
//   let newUserbook = new Book(
//     bookNamePr,
//     authorPr,
//     numOfCopiesPr,
//     isbnNumPr
//   );

//   if (menuPrompt == 1) {
//     latestMem.borrowBook(newUserbook);
//   } else {
//     latestMem.returnBook(newUserbook);
//   }

// })();



  
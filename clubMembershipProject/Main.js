const prompt = require("prompt-sync")();
class Member {
  constructor(first, last, gender, dateOfBirth, phoneNumber, emailAddress) {
    this._first = first;
    this._last = last;
    this._gender = gender;
    this._dateOfBirth = dateOfBirth;
    this._phoneNumber = phoneNumber;
    this._emailAddress = emailAddress;
  }

  // set first(val) {
  //   this._firstName = val;
  // }
  // set last(val) {
  //   this._lastName = val;
  // }
  get fullName() {
    return `${this._first} ${this._last}`.toUpperCase();
  }
  // set gender(val) {
  //   if (val == "m") {
  //     this._gender = val.toUpperCase() + "ale";
  //   } else if (val == "f") {
  //     this._gender = val.toUpperCase() + "emale";
  //   }
  // }
  get gender() {
    if (this._gender == "m") {
      this._gender = this._gender.toUpperCase() + "ale";
    } else if (this._gender == "f") {
      this._gender = this._gender.toUpperCase() + "emale";
    }
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

  // set dateOfRegistration(_val) {
  //   this._dateOfRegistration = new Date();
  // }
  get dateOfRegistration() {
    this._dateOfRegistration = new Date();
    return `${this.fullName} is now registered as at ${this._dateOfRegistration}`;
  }

  borrowBook(userBook) {}

  // returnBook() {

  // }
}

let dom = new Member("john", "doe", "f", 1999, 3928734, "isdn@gmail.com");
// console.log(dom._gender);
// console.log(dom.dateOfRegistratio    n);
// console.log(dom.emailAddress);
// console.log(dom.phoneNumber)
// console.log(dom.fullName);

class Book {
  constructor(bookName, author, numOfCopies, isbnNum) {
    this._bookName = bookName;
    this._author = author;
    this._numOfCopies = numOfCopies;
    this._isbnNum = isbnNum;
  }

  get title() {
    return this._bookName;
  }
  set title(updatedBookName) {
    this._bookName = updatedBookName;
  }
  get writer() {
    return this._author;
  }
  set writer(updatedWriter) {
    this._author = updatedWriter;
  }
  get copies() {
    return this._numOfCopies;
  }
  set copies(updatedNumOfCopies) {
    this._numOfCopies = updatedNumOfCopies;
  }
  get isbnNum() {
    return this._isbnNum;
  }
  set isbnNum(updatedIsbn) {
    this._isbnNum = updatedIsbn;
  }
}

// let userBook = new Book;

let rankPr = prompt("Student or Staff? ");
if (rankPr == "student") {
  userInput();
  let studentNoPr = prompt("input your student number: ");
  let classPr = prompt("Input your current class: ");
  let potentialStudent = new Student(
    fNamePr,
    lNamePr,
    gendPr,
    dobPr,
    phonePr,
    emailPr,
    studentNoPr,
    classPr
  );
} else {
  let staffNoPr = prompt("Input your staff number: ");
  let netPayPr = prompt("Input your net pay: ");
  let potentialStaff = new Staff(
    fNamePr,
    lNamePr,
    gendPr,
    dobPr,
    phonePr,
    emailPr,
    staffNoPr,
    netPayPr
  );
}

function userInput() {
  let fNamePr = prompt("Input your  first name: ");
  let lNamePr = prompt("Input your last name: ");
  let gendPr = prompt("Input your gender(m/f): ");
  let dobPr = prompt("Input your date of birth: ");
  let phonePr = prompt("Input your phone number: ");
  let emailPr = prompt("Inout your email address: ");
}

    export { Member };
import { Member } from './Main.js';
class Student extends Member {
  // constructor(first, last, gender, dateOfBirth, phoneNumber, emailAddress, studentNo, cla_ss) {
    // super(first, last, gender, dateOfBirth, phoneNumber, emailAddress);
    rank = "student";
    cla_ss = cla_ss;
    studentNo = studentNo;
  }
// }

class Staff extends Member {
  // constructor(first, last, gender, dateOfBirth, phoneNumber, emailAddress) {
    // super(first, last, gender, dateOfBirth, phoneNumber, emailAddress);
    rank = "Staff";
    staffNo = 0;
    netPay = 2000;
 
  assignToStudent(student_number) {
    
  }
} 

let jane = new Staff("Jane", "Doe", "f", 1999, 39282, "janedoe@gmail.com");
let james = new Staff("James", "Keys", "m", 2000, 37891, "jameskeys@gmail.com");
let matthew = new Staff("Matthew", "Jill", "m", 2004, 29373, "mattjill@gmail.com");
let alicia = new Staff("Alicia", "Morgan", "f", 1982, 90372, "alimorgan@gmail.com");


class List {
  listSize = 0;
  pos = 0;
  dataStore = [];
  insert;

  merge(element) {
    this.dataStore[this.listSize++] = element;
  }
  finds(element) {
    for(let i = 0; i < this.dataStore.length; i++) {
      if(this.dataStore[i] == element) {
        return i;
      }
    }
    return -1;
  }
  removes(element) {
    let foundAt = this.finds(element);
    if(foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      this.listSize--;
      return true;
    }
    return false;
  }
  length() {
    return this.listSize;
  }
  showStore() {
    return this.dataStore;
  }
  clears() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }
  contains(element) {
    for(let i = 0; i < this.dataStore.length; i++) {
      if(this.dataStore[i] == element) {
        return true;
      }
    }
    return false;
  }
  front() {  //advantages of using iterators over array indexing...
    this.pos = 0;
  }
  end() {
    this.pos = this.listSize-1;
  }
  prev() {
    if(this.pos > 0) {
      this.pos--;
    }
  }
  next() {
    if(this.pos < this.listSize-1) {
      this.pos++
    }
  }
  currPos() {
    return this.pos;
  }
  moveto(position) {
    this.pos = position;
  }
  getElement() {
    return  this.dataStore[this.pos];
  }

}
let staffList = new List();
let studentList = new List();
staffList.merge(jane);
staffList.merge(james);
staffList.merge(matthew);
staffList.merge(alicia);
console.log(staffList.showStore());
// staffList.front();
// console.log(staffList.getElement());
// staffList.next();
// console.log(staffList.getElement());


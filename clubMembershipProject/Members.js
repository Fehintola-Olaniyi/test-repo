// const prompt = require("prompt-sync")();
import { Member, Book, Queue } from './Main.js';
class Student extends Member {
    rank = ["Student", 0];
    cla_ss;
    studentNo;
  }

class Staff extends Member {
    rank = ["Staff", 1];
    staffNo;
    netPay = 2000;
 
  assignToStudent(student_number) {
    
  }
} 


class List {
  listSize = 0;
  pos = 0;
  dataStore = [];
  insert;

  add(element) {
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


let jane = new Staff("Jane", "Doe", "f", 1999, 39282, "janedoe@gmail.com");
let james = new Staff("James", "Keys", "m", 2000, 37891, "jameskeys@gmail.com");
let matthew = new Student("Matthew", "Jill", "m", 2004, 29373, "mattjill@gmail.com");
let alicia = new Student("Alicia", "Morgan", "f", 1982, 90372, "alimorgan@gmail.com");


staffList.add(jane);
staffList.add(james);
studentList.add(matthew);
studentList.add(alicia);

let newBook = new Book("Eat That Frog", "Brian Tracy", 1, 978);

jane.borrowBook(newBook);
alicia.borrowBook(newBook);





// console.log(staffList.showStore());
// console.log(studentList.showStore());
// staffList.front();
// console.log(staffList.getElement());
// staffList.next();
// console.log(staffList.getElement());


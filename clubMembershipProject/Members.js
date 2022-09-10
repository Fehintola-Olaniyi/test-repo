import { Member } from './main';

class Student extends Member {
  constructor(first, last, gender, dateOfBirth, phoneNumber, emailAddress, studentNo, cla_ss) {
    super(first, last, gender, dateOfBirth, phoneNumber, emailAddress);
    this.studentNo = studentNo;
    this.cla_ss = cla_ss;
  }
}

class Staff extends Member {
  constructor(first, last, gender, dateOfBirth, phoneNumber, emailAddress, staffNo, netPay) {
    super(fullName, gender, dateOfBirth, phoneNumber, emailAddress);
    this.status = "Staff";
    this.staffNo = staffNo;
    this.netPay = netPay;
  }
 ;
  assignToStudent(this,studentNo) {

  }
}


import Person from "./person.js";
export default class Customer extends Person {
  // thêm thuộc tính tên công ty, trị giá hóa đơn, đánh giá
  constructor(_name, _address, _id, _email, _company, _bill, _rating) {
    super(_name, _address, _id, _email);
    this.company = _company;
    this.bill = _bill;
    this.rating = _rating;
  }
}

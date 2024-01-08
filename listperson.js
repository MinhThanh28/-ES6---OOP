import Student from "./student.js";
import Employee from "./employee.js";
import Customer from "./customer.js";

export default class ListPerson {
  constructor() {
    this.persons = [];
  }
  // thêm người
  addPerson(person) {
    this.persons.push(person);
  }
  // xóa người theo id
  deletePerson(id) {
    let index = this.persons.findIndex((person) => person.id == id);
    if (index >= 0) {
      this.persons.splice(index, 1);
    }
  }
  // cập nhật người theo id
  updatePerson(id, person) {
    let index = this.persons.findIndex((person) => person.id == id);
    if (index >= 0) {
      this.persons[index] = person;
    }
  }
  // sắp xếp người theo tên
  sortPersonByName() {
    this.persons.sort((a, b) => {
      let x = a.name.toLowerCase().trim();
      let y = b.name.toLowerCase().trim();
      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    });
  }
  // lọc danh sách theo loại người dùng student, employee, customer
  filterPersonByType(type) {
    return this.persons.filter((person) => person.constructor.name == type);
  }
}

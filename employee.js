import Person from "./person.js";
export default class Employee extends Person{
    // thêm thuộc tính số ngày làm việc, lương theo ngày
    constructor( _name, _address, _id, _email, _dayWork, _salaryDay){
        super(_name, _address, _id, _email);
        this.dayWork = _dayWork;
        this.salaryDay = _salaryDay;

    }
    // tính lương
    getSalary(){
        return this.dayWork * this.salaryDay;
    }
}
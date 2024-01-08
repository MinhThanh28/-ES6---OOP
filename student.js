import Person from './person.js';
export default class Student extends Person {
    constructor(_name, _address, _id, _email, _toan, _ly, _hoa){
        super(_name, _address, _id, _email);
        this.toan = _toan;
        this.ly = _ly;
        this.hoa = _hoa;
    }
    getAverage(){
        return (this.toan + this.ly + this.hoa)/3;
    }
}
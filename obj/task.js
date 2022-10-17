function EmpObj(fName, lName, ctc) {
    this.fName = fName;
    this.lName = lName;
    this.ctc = ctc;
    this.monthlySalary = function () {
        return this.ctc / 12;
    }
}

class EpObj {
    constructor(fName, lName, ctc) {
        this.fName = fName;
        this.lName = lName;
        this.ctc = ctc;

    }
    monthlySalary() {
        return this.ctc / 12;
    }
    
}
const test = new EpObj('Jai', 'kumar', 500000);
console.log(test.monthlySalary());

const body = document.querySelector('body')
const temp = document.querySelector(".className")
temp.remove()
body.removeChild(temp)
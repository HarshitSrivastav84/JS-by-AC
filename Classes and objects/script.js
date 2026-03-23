// const student = {
//     fullName : "Harshit Srivastav",
//     marks : 7.48,
//     printMarks: function(){
//         console.log("marks = ", this.marks);
//     },
// };

// let arr = ["apple", "mango", "banana"];





// Object

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }
// const karanArjun = {
//     salary : 50000,
// }
// const karanArjun2 = {
//     salary : 50000,
//     calcTax(){
//         console.log("tax rate is 20%"); // This will  get priority.
//     }
// }

// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;





// Class

class ToyotaCar{
    constructor(brand, mileage){
        console.log("Creating new object", brand);
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }
    setBrand(brand){
        this.brand = brand;// this means object jiske liye function call ho raha hai.
    }
}

let fortuner = new ToyotaCar("Fortuner", 10);
console.log(fortuner);
// fortuner.brand = "Fortuner";

let lexus = new ToyotaCar("Lexus", "Twenty");
console.log(lexus);
// lexus.setBrand("Lexus");
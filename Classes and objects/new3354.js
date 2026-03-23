class Parent{
    constructor(){
        this.species = "Homo sapiens"
    }
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{
    constructor(play){
        super()// To invoke parent class constructor
        this.play = play;
    }
    eat(){
        console.log("Child eats food");
    }
}
let obj = new Child("Cricket");
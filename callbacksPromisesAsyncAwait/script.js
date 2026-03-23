// function hello(){
//     console.log("Hello");
// }
// setTimeout(hello, 2000);

// setTimeout(() => {
//     console.log("Hello")
// }, 2000)



// function calc(a, b, sumCallback){
//     sumCallback(a,b);
// }

// function sum(a, b){
//     console.log(a+b);
// }
// calc(5,7,sum);



let age = 19;
if (age >= 19) {
    if (age >= 60) {
        console.log("Senior");
    }else{
        console.log("Middle");
    }
} else {
    console.log("Child");
}
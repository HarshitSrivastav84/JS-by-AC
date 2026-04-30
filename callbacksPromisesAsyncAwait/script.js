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



// let age = 19;
// if (age >= 19) {
//     if (age >= 60) {
//         console.log("Senior");
//     }else{
//         console.log("Middle");
//     }
// } else {
//     console.log("Child");
// }



// Callback hell

// function getData(dataID, getNextData) {
//     setTimeout(() => {
//         console.log("Data", dataID);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
//     // console.log("Data", dataID);
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3);
//     });
// });



// let promise = new Promise((resolve, reject) => {
//     // console.log("I am a promise");
//     // resolve(123);
//     // reject("Some error occured");
// })
function getData2(id, giveData) {
    return new Promise(resolve, reject => {
        setTimeout(() => {
            console.log("Trying");
            resolve();
            if (giveData2) {
                giveData2();
            }
        }, 2000);
    });
}
// getData2(1);


// Practice
// function getData3(id) {
//     setTimeout(() =>{
//         console.log("Data", id);
//     }, 2000);
// }
// getData3(123)
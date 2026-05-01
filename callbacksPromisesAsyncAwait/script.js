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




// function getData2(id, giveData) {
//     return new Promise(resolve, reject => {
//         setTimeout(() => {
//             console.log("Trying", id);
//             resolve("Success");
//             if (giveData) {
//                 giveData();
//             }
//         }, 2000);
//     });
// }

// getData2(1);


// Practice
// function getData3(id) {
//     setTimeout(() =>{
//         console.log("Data", id);
//     }, 2000);
// }
// getData3(123)




let promiseHai = new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("Some error occured");
    resolve(123);
});

// What to do with promises.
let promise1 = promiseHai;
promise1.then((res) => {
    console.log("Promise fulfilled", res);
})
let promise2 = promiseHai;
promise2.catch((err) => {
    console.log("Promise rejected and got catched", err);
})
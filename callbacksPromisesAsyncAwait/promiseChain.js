// function asycnFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("Success 1");
//         }, 3000)
//     })
// }
// function asycnFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("Success 2");
//         }, 3000)
//     })
// }

// console.log("Fetching data1...");
// let p1 = asycnFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fetching data2...");
//     let p2 = asycnFunc2();
//     p2.then((res) => {
//         console.log(res);
//     })
// })



// Async-Await

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Weather");
        resolve(200);  // 200 represents a successful api call.
    }, 2000);
    });
}

async function getWeatherData(){
    await api();
}
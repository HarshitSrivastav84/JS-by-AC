// let buttons = document.querySelector("button").innerHTML;
// console.log(buttons);

// let event = (document.querySelector("div").innerHTML);


let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("Cilcked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler1")
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2")
});
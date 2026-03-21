// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);


// let para = document.querySelector("p");
// console.log(para);
// console.log(para.getAttribute("class")) 


let newBtn = document.createElement("button");
console.log(newBtn);
newBtn.innerText = "Click me";

let paragraph = document.querySelector("p");
paragraph.after(newBtn);

document.querySelector("div").remove();
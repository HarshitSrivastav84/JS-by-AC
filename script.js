// sum = 0;
// for( let i = 1; i <= 10; i++){
//     sum = sum+i;
// }
// console.log(sum);


let str = prompt("Enter your name");
for (let i=0; i<str.length; i++) {
    if (str[i] == " ") {
        alert("No spaces are allowed")
        str = prompt("Enter the name again")
    }
}
str1 = `Your user name is @${str}`
str2 = str.length;
console.log(str1.concat(str2));
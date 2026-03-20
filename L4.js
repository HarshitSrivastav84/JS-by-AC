// let arr = [1, 2, 3, 4, 5];
// let arr1 = ["Harshit", 84, 7.48, true];
// console.log(arr);
// console.log(arr1);
// console.log(typeof arr1);

// Generally forof loop is used to iterate over the array elements.

// for (const i of arr1) {
//     console.log(i);
// }
// for (const i in arr1) {
//     console.log(i, arr1[i]);
// }

// Problem 01
// let marks = [50,60,70,80,90];
// sum = 0;
// for(let i=0; i<marks.length; i++){
//     sum = sum + marks[i];
// }
// console.log("Sum:",sum);
// let avg = sum/marks.length;
// console.log(`Average: ${avg}`);

// Problem 02
let items = [250,645,300,900,50];
console.log(items);
for (let i=0; i<items.length; i++) {
    let discount = (items[i]*10)/100;
    items[i] -= discount;
    // let price =  items[i]-discount;
    // items[i] = price;
}
console.log(items);
// let counter = 0;
// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 0; i < arr.length; i++){
//     if(i % 2 === 0) {
//         console.log("even")
//     }else if(i % 2 !== 0){
//         console.log("odd")
//     }
// }

let counter = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        counter++;
    }

}
console.log("Amount of even numbers: " + counter)

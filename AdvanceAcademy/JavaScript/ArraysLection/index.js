// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.push(10);
// console.log(arr);
// arr.shift();
// console.log(arr);
// let arr2 = arr.slice(1,3)
// console.log(arr);
// console.log(arr2);

//      задача 1
// let array = [1,2,"3",true,"false",null,undefined,2n];
//
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index])
//     console.log(typeof array[index])
// }
//
// array.map(item => console.log(item,typeof item))


// Задача 2
// let array2 = [1,2,3,4,5,6,125,64,7,8];
// console.log("Фор 1");
//
// for (let index = 0; index < array2.length; index++) {
//     console.log(Math.pow(array2[index],2));
// }
// console.log("Фор 2");
//
//
// for (let element of array2){
//     console.log(Math.pow(array2[element],2));
// }
// console.log("Мап");
//
// array2.map(element => console.log(Math.pow(element,2)))

// Задача 3

// let word = "bob";
// function checkWord(word) {
//     let arr  = word.split("");
//     arr.reverse();
//     let reversed = arr.join("");
//
//     if (word === reversed){
//         return "Dumata e palindrom";
//     }
//     return "Dumata ne e palindrom";
// }
//     console.log(checkWord(word));

let input = "ABCDEFG";

function backwardInput() {
    let reversed = input.split("").reverse().map(item => console.log(item));
}
backwardInput(input);



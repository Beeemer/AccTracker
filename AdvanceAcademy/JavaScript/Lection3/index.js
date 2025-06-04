// for (let i = 1; i <= 5; i++){
//     let rowStars = "";
//     for (let j = 1; j < i+1; j++){
//         rowStars += "* ";
//     }
//     console.log(rowStars);
// }

// const MIN = 1;
//
// const MAX = 100;
// let randNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
//     console.log(randNumber);
//
//
//     let guess = prompt();
// do {
//     guess = +prompt("Enter a number")
//
// }while(randNumber !== guess)

for (let i = 1; i <= 9; i++) {
    let row = "";
    for (let j = 1; j < i + 1 ; j++) {
        row += `${j}`
    }
    console.log(row)
}
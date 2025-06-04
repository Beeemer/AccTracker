// const age = Number(prompt("Enter your age"));
// if (age < 50) {
//     console.log(50 - age);
// }
// else if (age > 50) {
//     console.log("You are over 50");
// }
// else if (age === 50) {
//     console.log("You are 50");
// }
// else{
//     console.log("Wrong input");
// }
//
// // ternary operator
// const a =1;
// // условие ? действие ако е валидно : ако не е валидно
// a >= 2 ? console.log("a is bigger than 2") :console.log("a is smaller than 2");
//
// // стойност по подразбиране
// const b = a ?? 1;

// const num = +prompt('Enter a number'); промта чака число
// const num = prompt("Enter a number"); промта е стринг
//
// num === 7 ? console.log("Num is 7") : console.log("Num is not 7");

// const weight =+ prompt("Enter Weight");
// const height =+ prompt("Enter Height");
//
// const ITM = weight / (height * height);
//
// if (ITM < 18.5) {
//     console.log("Поднормено тегло")
// }
// else if (ITM >= 18.5 && ITM <= 25) {
//     console.log("Нормално тегло")
// }
// else if(ITM > 25 && ITM <= 30){
//     console.log("Наднормено тегло")
// }
// else if(ITM > 30){
//     console.log("Затлъстяване в различните си степени")
// }
// else{
//     console.log(`Грешни данни`)
// }

const input = prompt("Enter a single letter")

switch (input.toLowerCase()) {
    case "a":
        console.log("apple")
        break;
    case "b":
        console.log("banana")
        break;
    case "c":
        console.log("coconut")
        break;
    case "d":
        console.log("dinq");
        break;
    case "e":
        console.log("plod s e")
        break;
    default:
        console.log("error");
        break;
}

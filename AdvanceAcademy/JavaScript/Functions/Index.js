// call, apply, bind
//
// function func(){
//
// }
//
// const func = () => {
//
// }

//      CALL
// function greeting(personName, age){
//     console.log(`Hello, ${personName}. My name is ${this.name}. I am ${age} years old`);
// }
// greeting("Ivan",20);
//
// const me = {
//     name: "Petar"
// }
// greeting.call(me, "Petya", 23);

//      ZAD 1

// const restaurant = {
//     greet: function(name){
//         console.log("Hello, " + this.name + "!");
//     }
// }
// const customer = {
//     name: "Petar"
// }
// restaurant.greet.call(customer);

//  APPLY

// function greetings(customer, room){
//     console.log(`Hello, ${customer}. My name is ${this.name}. I am in room ${room}`);
// }
// const c = {
//     name: "Petar"
// }
// greetings.apply(c, ["Ivan", 23]);

//  ZAD 2
// const restaurant = {
//     greet: function(msg){
//         console.log(`${msg}, ${this.name}`);
//     }
// }
// const customer = {
//     name: "Petar"
// }
// restaurant.greet.apply(customer, ["Hello"]);

// // BIND
// function greetings(){
//     console.log(`Hello, my name is ${this.name}`);
// }
// const me = {
//     name: "Martin"
// }
// const martinsGreeting = greetings.bind(me);
// martinsGreeting();

// function greetings(){
//     console.log(`Hello, my name is ${this.name}`);
// }
// const customer1 = {
//     name: "Petar"
// }
// customer1Greeting = greetings.bind(customer1);
// // customer1Greeting();
// const customer2 = {
//     name: "Martin"
// }
// customer2Greeting = greetings.bind(customer2);
// // customer2Greeting();
//
// const customer3 = {
//     name: "Ivan"
// }
// customer3Greeting = greetings.bind(customer3);
// // customer3Greeting();
//
// const customerArray = [customer1, customer2, customer3];
//
// for (let customer of customerArray){
//     customerGreeting = greetings.bind(customer);
//     customerGreeting();
// }

//  Async programming
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.chucknorris.io/jokes/random");
//
// xhr.onreadystatechange = function () {
//     if(xhr.readyState === xhr.DONE && xhr.status === 200){
//         const response = JSON.parse(xhr.responseText);
//         console.log(response.value);
//     }
// }
// xhr.send();

// fetch("https://api.chucknorris.io/jokes/random")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

const resultP = document.getElementById("result");

const showAdvice = (advice) => {
    resultP.innerHTML = advice;
}
const getAdviceById = (adviceId) => {
    fetch(`https://api.adviceslip.com/advice/${adviceId}`)
        .then(res => res.json())
        .then(data => showAdvice(data.slip.advice))
        .catch(err => showAdvice(err));
}
const inp = document.getElementById("numberInp");
inp.addEventListener("change", () => {
    getAdviceById(inp.value);
})



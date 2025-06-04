const xhr = new XMLHttpRequest();
const p1 = document.getElementById("p1");
const img1 = document.getElementById("img1");
const button1 = document.getElementById("button");
const link1 = document.getElementById("link1");

// xhr.open("GET","https://api.adviceslip.com/advice");

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === xhr.DONE && xhr.status === 200) {
//         const response = JSON.parse(xhr.responseText);
//         p1.innerHTML = response.slip.advice;
//     }
// }
// xhr.send();
//              NE E GOTOVO
// function getAdviceByInput(number){
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET" , `https://api.adviceslip.com/advice/${number}`);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const response = JSON.parse(xhr.responseText);
//             p1.innerHTML = response.slip.advice;
//         }
//     }
//     xhr.send();
// }
// document.getElementById("form1").addEventListener("submit", function (event) {
//     event.preventDefault();
//     const input = document.getElementById("numberAdv");
// })

// xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
//
//
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         const response = JSON.parse(xhr.responseText);
//         console.log(response.message);
//         img1.setAttribute("src", response.message);
//     }
// }
// xhr.send();
// button1.addEventListener("click", function (event) {
//     event.preventDefault();
//     location.reload();
// })

// xhr.open("GET","https://api.open-meteo.com/v1/forecast?latitude=43.2167&longitude=27.9167&hourly=temperature_2m&current=temperature_2m")
//
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         const response = JSON.parse(xhr.responseText);
//         console.log(response);
//         p1.innerHTML ="Current temp in Varna is: " + response.current.temperature_2m + response.hourly_units.temperature_2m;
//
//     }
// }
// xhr.send();
xhr.open("GET","https://api.thecatapi.com/v1/images/search");

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        link1.setAttribute("href", response[0].url);
    }
}
xhr.send();


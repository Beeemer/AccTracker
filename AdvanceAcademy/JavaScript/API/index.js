// API - application programming interface

const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
//
// xhr.onreadystatechange = function () {
//     if(xhr.readyState === xhr.DONE && xhr.status === 200){
//         const response = JSON.parse(xhr.responseText);
//         console.log(response);
//     }
// }
// xhr.send();

// const p1 = document.getElementById("p1");
// xhr.open("GET", "https://api.chucknorris.io/jokes/categories");
//
// xhr.onreadystatechange = function () {
//     if(xhr.readyState === xhr.DONE && xhr.status === 200){
//         const response = JSON.parse(xhr.responseText);
//         console.log(response);
//         p1.innerHTML = response.join(" ");
//
//
//
//     }
//
// }
// xhr.send();
//
// function getJokeByCategory(category){
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", `https://api.chucknorris.io/jokes/random?category=${category}`);
//     xhr.onreadystatechange = function () {
//         if(xhr.readyState === xhr.DONE && xhr.status === 200){
//             const response = JSON.parse(xhr.responseText);
//             console.log(response);
//             p1.innerHTML = response.value;
//         }
//         xhr.send();
//     }
// }
//
// document.getElementById("form2").addEventListener("submit", (e) => {
//     e.preventDefault()
//     const category = e.target.category.value;
// })
// Moq versiq
// xhr.open("GET", "https://api.chucknorris.io/jokes/random");
// xhr.onreadystatechange = function () {
//     if(xhr.readyState === xhr.DONE && xhr.status === 200){
//         getCategory();
//     }
//     xhr.send();
// }
//
// function getCategory(){
//     xhr.open("GET", "https://api.chucknorris.io/jokes/categories");
//     xhr.onreadystatechange = function () {
//         if(xhr.readyState === xhr.DONE && xhr.status === 200){
//             const response = JSON.parse(xhr.responseText);
//             console.log(response);
//         }
//         xhr.send();
//     }
// }
//
//
// xhr.send();
function getJokeByCategory(category){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.chucknorris.io/jokes/random?category=${category}`);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === xhr.DONE && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            console.log(response.value);
        }
    }
    xhr.send();
}
xhr.open("GET", "https://api.chucknorris.io/jokes/categories");

xhr.onreadystatechange = function () {
    if(xhr.readyState === xhr.DONE && xhr.status === 200){
        const response = JSON.parse(xhr.responseText);
        response.map((el) => {
            strArr = el.split("");
            if(strArr[0] === "c"){
                getJokeByCategory(el);
            }
        })
    }
}
xhr.send();






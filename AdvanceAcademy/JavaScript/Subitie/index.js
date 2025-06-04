// target = document.getElementById("p1");
function changeText() {
    target.style.color = "red";
    target.style.backgroundColor = "yellow";
}
// target.addEventListener("click", () => {changeText()})

btn = document.getElementById("btn1");

const helloAlert = () => alert("Hello");
const helloConsole = () => console.log("Hello");

btn.addEventListener("click", () => {helloAlert()})
btn.removeEventListener("click", () => {helloAlert()})
btn.addEventListener("click", () => {helloConsole()})

par2 = document.getElementById("p2");
par2.addEventListener("copy", (e) => {e.preventDefault();alert("Копирането забранено")})





document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    btn.style.backgroundColor = `rgb(${x % 255}, ${y % 255}, ${(x + y) % 255})`;
});
document.getElementById("btn2").addEventListener("click", (e) => {
    e.preventDefault();
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    document.getElementById("p3").innerHTML ='#' + `#${randomColor}`;
})

document.getElementById("activate").addEventListener("click", () => {
    document.getElementById("ready").disabled = false;
})
document.getElementById("deactivate").addEventListener("click", () => {
    document.getElementById("ready").disabled = true;
})
document.getElementById("ready").addEventListener("click", () => {
    alert("Ready!");
})
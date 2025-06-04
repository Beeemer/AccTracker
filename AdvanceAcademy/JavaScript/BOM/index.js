// console.log(window.location);

// const a = document.getElementById("p1");
//     a.innerHTML = window.location.href;
//
//     const b = document.getElementById("p2");
//     b.innerHTML = b.innerHTML + window.screen.width;
//
//     const c = document.getElementById("p3");
//     c.innerHTML = c.innerHTML + window.screen.height;
//
//     setTimeout(() => {
//         console.log("Hello!");
//     }, 1000);
//
//     let functionWinAgent = () => alert(window.navigator.userAgent);
//     // setTimeout(functionWinAgent, 3000);
//
//     let newFunction = () => alert("Hello")

    const paragraph = document.getElementById('myParagraph');

    paragraph.addEventListener('mousedown', function() {
        paragraph.style.color = 'green';
    });

    paragraph.addEventListener('mouseup', function() {
        paragraph.style.color = 'black';
    });

    const input = document.getElementById('input1');

    input.addEventListener('change', function() {
        console.log(input.value);})



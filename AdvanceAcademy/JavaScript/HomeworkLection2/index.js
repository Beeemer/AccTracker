const points = +prompt("Enter your points:");
if (points < 60) {
    const temp = 60 - points;
    alert("We are sorry you just needed " + points + " points to pass the exam.")
}
else if (points >= 60 && points <= 70) {
    alert("Congratulations you successfully passed the exam with D grade.")
}
else if (points > 70 && points <= 80) {
    alert("Congratulations you successfully passed the exam with C grade.")
}
else if (points > 80 && points <= 90) {
    alert("Congratulations you successfully passed the exam with B grade.")
}
else if (points > 90 && points <= 100) {
    alert("Congratulations you successfully passed the exam with A grade.")
}
else {
    alert("Please enter a valid input")
}

const a = +prompt("Enter first number:");
const b = +prompt("Enter second number:");
const c = +prompt("Enter third number:");

if (a => b && b > c) {
    if (a === b) {
        alert("a and b are equal and they are the biggest numbers")
    }
    else{
        alert("a is the biggest number")
    }
}

else if (b => c && c > a) {
    if(b === c) {
        alert("b and c are equal and they are the biggest numbers")
    }
    else{
        alert("b is the biggest number")
    }
}
else if (c => a && a > b) {
    if(c === a) {
        alert("c and a are equal and they are the biggest numbers")
    }
    else{
        alert("c is the biggest number")
    }

}

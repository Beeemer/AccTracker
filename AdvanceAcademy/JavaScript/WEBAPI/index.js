document.getElementById("form1").addEventListener("submit", (e) => {
    e.preventDefault();

    const login = e.target.login.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(!login || !email || !password || !confirmPassword){
        return alert("Missing data");
    }
    if(confirmPassword !== password){
        return alert("Passwords do not match");
    }
    if(password.length < 10){
        return alert("Password must be at least 10 characters long");
    }
    alert("Registration successful");
    sessionStorage.setItem("user", JSON.stringify({login, email, password, confirmPassword}));

})

document.getElementById("form2").addEventListener("submit", (e) => {
    e.preventDefault();


    const firstName = e.target.firstName.value.trim();
    const lastName = e.target.lastName.value.trim();
    const age = e.target.age.value;
    const phone = e.target.phone.value;

    if (!firstName || !lastName || !age || !phone) {
        alert("Всички полета трябва да бъдат попълнени!");
        return;
    }

    if (isNaN(age) || age <= 20) {
        alert("Регистрацията е разрешена само за лица над 20 години!");
        return;
    }

    localStorage.setItem("userData", JSON.stringify({ firstName, lastName, age, phone }));
    alert("Успешна регистрация");
})
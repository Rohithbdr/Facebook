let userName = document.getElementById("text");
let pass = document.getElementById("password");
let save = document.querySelector('.sign-btn');
let logined = document.querySelector('.login-btn');
let paragraph = document.getElementById("para");
let register = document.getElementById("register");
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
let userInput = document.getElementById("email");
let userPass = document.getElementById("emailPass");

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName"); 
let errName = document.getElementById("errorName");
let inputs = document.querySelectorAll('.hell');
let warn = document.getElementById('warning');
let lastWarn = document.getElementById("last-warning")
let emWarn = document.getElementById("email-warning");
let passWarn = document.getElementById("pass-warning");
let dob = document.getElementById("dob");
let dobWarn = document.getElementById("dob-warning");




let username = [];
let password = [];


firstName.addEventListener("blur" , (event) => {
    if(event.target.value === ""){
        firstName.style.borderColor = "red";
        warn.classList.remove("warns");
    } else {
        firstName.style.borderColor = "#dddfe2";
        warn.classList.add("warns");
    }
});




lastName.addEventListener("blur" , (event) => {
    if(event.target.value === ""){
        lastName.style.borderColor = "red";
        lastWarn.classList.remove("last-warn");
    } else {
        lastName.style.borderColor = "#dddfe2";
        lastWarn.classList.add("last-warn")
    }
});

text.addEventListener("blur" , (event) => {
    if(event.target.value === "") {
        text.style.borderColor = "red";
        emWarn.classList.remove("email-warn");
    } else {
        text.style.borderColor = "#dddfe2";
        emWarn.classList.add("email-warn");
    }
});

pass.addEventListener("blur", (event) => {
    if(event.target.value === "") {
        pass.style.borderColor = "red";
        passWarn.classList.remove("pass-warn");
    } else {
        pass.style.borderColor = "#dddfe2";
        passWarn.classList.add("pass-warn");
    }
});

dob.addEventListener("blur" , (event) => {
    if(event.target.value === "") {
        dob.style.borderColor = "red";
        dobWarn.classList.remove("dob-warn");
    } else {
        dob.style.borderColor = "#dddfe2";
        dobWarn.classList.add("dob-warn");
    }
})

inputs.forEach(function(element) {
    let activeInputs = element;
    activeInputs.onfocus = (btn) => {
        if(firstName.value === "") {
            firstName.style.borderColor = "red";          
        } else {
            firstName.style.borderColor = "#dddfe2";        
        }
    }
})


register.onclick = () => {
    modal.style.display = "block";
}


close.onclick = function() {
    modal.style.display = "none";
    userName.value = "";
    pass.value = "";
    firstName.value = "";
    lastName.value = "";  
}

save.onclick = function() {
    if(userName.value && pass.value && firstName.value && lastName.value !== "") {
        username.push(userName.value);
        password.push(pass.value)
        saved();  
        modal.style.display = "none";      
    }   

    if(firstName.value  === "") {
        firstName.style.borderColor = "red";
        warn.classList.remove("warns");
        lastName.style.borderColor = "red";
        lastWarn.classList.remove("last-warn");
        text.style.borderColor = "red";
        emWarn.classList.remove("email-warn");
        pass.style.borderColor = "red";
        passWarn.classList.remove("pass-warn");
        dob.style.borderColor = "red";
        dobWarn.classList.remove("dob-warn");
    } 
    
}

logined.onclick = function () {
    let storedUsername = localStorage.getItem("usernames");
    let parsedUser = JSON.parse(storedUsername);
    let parsedPass = JSON.parse(localStorage.getItem("passwords"));
    let filteredUser = parsedUser.filter((each) => each.includes(userInput.value));
    let filteredPass = parsedPass.filter((each) => each.includes(userPass.value));
    if((userInput.value === filteredUser[0]) && (userPass.value === filteredPass[0])){
        alert("Login Succesful")
    } else {
        alert("UserName or Password is incorrect");
    }
}

function saved() {
    localStorage.setItem("usernames" ,JSON.stringify(username));
    localStorage.setItem("passwords" , JSON.stringify(password));
    userName.value = "";
    pass.value = "";
    firstName.value = "";
    lastName.value = "";    
}


function login(event) {
    if (event.key === "Enter"){
    console.log(userName.value)
    }
}

userName.addEventListener('keydown',login);
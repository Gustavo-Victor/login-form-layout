//elements
const loginForm = document.querySelector("#login-form"); 
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputCheckbox = document.querySelector("#remember"); 
const eyeIcon = document.querySelector("#eye");
const inputs = document.querySelectorAll(".validate"); 


//events
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();    
    window.alert('Thank you!'); 
    inputEmail.value = ""; 
    inputPassword.value = ""; 
    window.location.href = './'; 
}); 

eyeIcon.addEventListener("click", () => {
    if(inputPassword.getAttribute("type") == "password") {
        inputPassword.setAttribute("type", "text")
    } else {
        inputPassword.setAttribute("type", "password")
    }
}); 
const loginForm = document.querySelector("#login-form"); 
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye");


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
}); 

eyeIcon.addEventListener("click", () => {
    if(inputPassword.getAttribute("type") == "password") {
        inputPassword.setAttribute("type", "text")
    } else {
        inputPassword.setAttribute("type", "password")
    }
})


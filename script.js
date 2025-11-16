const password = document.querySelector("#password");
const confirmPassword= document.querySelector("#confirm-password");
const errorMessage = document.querySelector("#error-message");


function validatePassword(){
    if (password.value !== confirmPassword.value){
        errorMessage.style.display = "block";
    }
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);
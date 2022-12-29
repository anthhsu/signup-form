var input_password = document.getElementById("password");
var input_password_confirm = document.getElementById("password_confirm");
var error_text = document.getElementById("error_text");
var btn_submit = document.getElementById("btn_submit");

function validatePassword() {
    if (input_password.value != input_password_confirm.value) {
        input_password.classList.add("error");
        input_password_confirm.classList.add("error");
        error_text.classList.remove("error-hidden");
        error_text.classList.add("error-shown");
        return false;
    } else {
        input_password.classList.remove("error");
        input_password_confirm.classList.remove("error");
        error_text.classList.remove("error-shown");
        error_text.classList.add("error-hidden");
        return true;
    }
}

function createAccount(e) {
    if (!validatePassword()) {
        e.preventDefault();
    }
    // continue with creating account
}
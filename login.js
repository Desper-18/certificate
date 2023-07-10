const loginBtn = document.querySelector('#login-btn')
const loginInput = document.querySelector('#input-login')
const passwordInput = document.querySelector('#input-password')

loginBtn.addEventListener('click', move)

function move(event) {
    if (
        loginInput.value === "admin" &&
        passwordInput.value === "admin1"
    ) {
        localStorage.setItem("user", {
            "login" : "admin",
            "password" : "admin1"
        })
        window.open('index.html')
    } else {
        event.preventDefault()
        loginBtn.innerHTML = "Wrong password or login"
        loginInput.classList.add("wrong-login")
        passwordInput.classList.add("wrong-login")
    }
}

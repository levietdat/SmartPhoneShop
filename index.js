const createUser = document.querySelector('.create-user')

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.modal__overlay')

const switchLogin = document.querySelector('.auth-form__switch-btn')
const register = document.querySelector('.register-form')
const login = document.querySelector('.login-form')
const loginBtn = document.querySelector('.login')

const registerBtn = document.querySelector('.auth-form__heading')

createUser.onclick = (e) =>{
    e.preventDefault();
    modal.style.display = 'flex'
}
overlay.onclick =() =>{
    modal.style.display = 'none'
}
switchLogin.onclick = () =>{
    register.style.display='none'
    login.style.display='block'
}
loginBtn.onclick = () =>{
    register.style.display='block'
    login.style.display='none'
}


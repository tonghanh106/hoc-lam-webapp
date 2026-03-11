const form = document.getElementById("loginForm")
const btn = document.getElementById("loginBtn")
const spinner = document.querySelector(".spinner")
const toggle = document.getElementById("togglePassword")
const password = document.getElementById("password")

toggle.addEventListener("click",()=>{

const type = password.type === "password" ? "text" : "password"

password.type = type

})

form.addEventListener("submit",function(e){

e.preventDefault()

const email = document.getElementById("email").value
const pass = password.value

if(email==="" || pass===""){

alert("Vui lòng nhập đầy đủ thông tin")
return

}

spinner.style.display="block"

setTimeout(()=>{

spinner.style.display="none"

alert("Đăng nhập thành công (demo)")

},1500)

})
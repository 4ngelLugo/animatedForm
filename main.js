const changeToSignin = document.getElementById("changeToSignin");
const changeToLogin = document.getElementById("changeToLogin");

const animatedContainer = document.getElementById("animatedContainer");
const signinForm = document.getElementById("SignIn");
const loginForm = document.getElementById("LogIn");
const bgBoxSignin = document.querySelector(".bgBox-content-signIn");
const bgBoxLogin = document.querySelector(".bgBox-content-logIn");

changeToLogin.addEventListener("click", () => {
  loginForm.style.display = "flex";
  signinForm.style.display = "none";
  animatedContainer.style.transform = "translate(100%, -50%)"
  bgBoxLogin.style.opacity = "0";
  bgBoxSignin.style.opacity = "1";
})

changeToSignin.addEventListener("click", () => {
  loginForm.style.display = "none";
  signinForm.style.display = "flex";
  animatedContainer.style.transform = "translate(0, -50%)";
  bgBoxLogin.style.opacity = "1";
  bgBoxSignin.style.opacity = "0";
})
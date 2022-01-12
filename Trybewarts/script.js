const email = document.getElementById("email");
const password = document.getElementById("password");
const buttonEntrar = document.getElementById("buttonEntrar");

// função para checkar email e senha
function checkUser() {
  if (email.value == "tryber@teste.com" && password.value == "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}

buttonEntrar.addEventListener("click", checkUser);

const agreement = document.getElementById("agreement");
const submitButton = document.getElementById("submit-btn");

submitButton.disabled = true;

agreement.addEventListener("click", () => {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

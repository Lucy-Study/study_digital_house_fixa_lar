let emailInput = document.querySelector("#newsletter");
let formulario = document.querySelector("#news-form");
let errorListUl = document.querySelector("#error-list ul");
let errorList = document.querySelector("#error-list");

function empty(input) {
  return input.value.trim() === "";
}

function errorMessage(message) {
  errorListUl.innerHTML += "<li>" + message + "</li>";
}

formulario.addEventListener("submit", function (evento) {
  errorListUl.innerHTML = "";

  if (empty(emailInput)) {
    errorMessage("<li>Campo não preenchido</li>");
  }

  if (errorListUl.querySelectorAll("li").length > 0) {
    evento.preventDefault();
    errorListUl.hidden = "";
  }
});

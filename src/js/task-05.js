const formEl = document.querySelector("#name-input");
const greetingEl = document.querySelector("#name-output");

formEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  greetingEl.textContent = event.currentTarget.value;
}

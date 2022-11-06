const inputEl = document.querySelector("#validation-input");

const maxNumber = Number(inputEl.dataset.length);
// let numberValue = Number(inputEl.value);

inputEl.addEventListener("blur", onBorderColorBlur);

function onBorderColorBlur() {
  // inputEl.classList.add("valid");
  if (inputEl.value.length === maxNumber) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}

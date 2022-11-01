const btnMinusEl = document.querySelector('button[data-action="decrement"');
const btnPlusEl = document.querySelector('button[data-action="increment"');
const span = document.querySelector("#value");
let counterValue = 0;

btnPlusEl.addEventListener("click", handleClickPlus);
btnMinusEl.addEventListener("click", handleClickMinus);

function handleClickPlus() {
  counterValue += 1;
  return (span.textContent = counterValue);
}
function handleClickMinus() {
  counterValue -= 1;
  return (span.textContent = counterValue);
}

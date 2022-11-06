const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeEl.addEventListener("input", onChangeTextInput);

function onChangeTextInput() {
  text.style.fontSize = rangeEl.value + "px";
}

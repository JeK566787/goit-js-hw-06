const widgetEl = document.querySelector(".widget");
const colorHexEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

widgetEl.lastElementChild.addEventListener("click", onChangeColorClick);

function onChangeColorClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorHexEl.innerHTML = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
/*
 ?  - Найменування колбеків для слухачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

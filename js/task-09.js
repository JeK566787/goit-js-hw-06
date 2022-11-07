const widgetEl = document.querySelector(".widget");
const colorHexEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

widgetEl.lastElementChild.addEventListener("click", onChangeColorClick);

function onChangeColorClick() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorHexEl.innerHTML = randomColor;
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

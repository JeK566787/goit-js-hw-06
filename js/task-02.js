const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const liEl = document.createElement("li");
// liEl.classList.add("item");
// liEl.textContent = "Potatoes";
// ingredientsEl.appendChild(liEl);

// const ingredientsEl = document.querySelector("#ingredients");
// for (let item of ingredients) {
//   let liEl = document.createElement("li");
//   liEl.textContent = item;
//   liEl.classList.add("item");
//   ingredientsEl.appendChild(liEl);
// }

// const ingredientsEl = document.querySelector("#ingredients");
// ingredients.map((item) => {
//   let liEl = document.createElement("li");
//   liEl.textContent = item;
//   liEl.classList.add("item");
//   ingredientsEl.append(liEl);
// });

// ------------------------------------------------------------
const ingredientsEl = document.querySelector("#ingredients");
let makeLiEl = (items) => {
  return items.map((item) => {
    let liEl = document.createElement("li");
    liEl.textContent = item;
    liEl.classList.add("item");

    return liEl;
  });
};
const LiArray = makeLiEl(ingredients);

ingredientsEl.append(...LiArray);

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
// ingrEl.appendChild(liEl);

// const ingrEl = document.querySelector("#ingredients");
// for (let item of ingredients) {
//   let liEl = document.createElement("li");
//   liEl.textContent = item;
//   liEl.classList.add("item");
//   ingrEl.appendChild(liEl);
// }

// const ingrEl = document.querySelector("#ingredients");
// ingredients.map((item) => {
//   let liEl = document.createElement("li");
//   liEl.textContent = item;
//   liEl.classList.add("item");
//   ingrEl.append(liEl);
// });

// ------------------------------------------------------------
const ingrEl = document.querySelector("#ingredients");
let test = (items) => {
  return items.map((item) => {
    let liEl = document.createElement("li");
    liEl.textContent = item;
    liEl.classList.add("item");

    return liEl;
  });
};
let result = test(ingredients);

ingrEl.append(...result);

console.log(test(ingredients));
console.log(result);
console.log(ingrEl);

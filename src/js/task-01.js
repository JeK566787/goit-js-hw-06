const allItemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${allItemsEl.length}`);

const paragEl = document.querySelectorAll("h2");
const itemLiEl1 = document.querySelectorAll(".item:first-child li");
const itemLiEl2 = document.querySelectorAll(".item:nth-child(2) li");
const itemLiEl3 = document.querySelectorAll(".item:last-child li");

console.log(`Category: ${paragEl[0].textContent}`);
console.log(`Elements: ${itemLiEl1.length}`);

console.log(`Category: ${paragEl[1].textContent}`);
console.log(`Elements: ${itemLiEl2.length}`);

console.log(`Category: ${paragEl[2].textContent}`);
console.log(`Elements: ${itemLiEl3.length}`);

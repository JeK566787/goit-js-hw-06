const allItemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${allItemsEl.length}`);

const headingEl = document.querySelectorAll("h2");

const subItemsEl = document.querySelectorAll(".item ul");

for (let index = 0; index < subItemsEl.length; index++) {
  // console.log(index);
  console.log(`Category: ${headingEl[index].textContent}`);
  console.log(`Elements: ${subItemsEl[index].children.length}`);
}

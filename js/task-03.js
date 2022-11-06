const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
const markup = (image) => {
  const { url, alt } = image;
  return `<li class='gallery__item'><img class='gallery__pic' src=${url} alt=${alt}></img></li>`;
};
const makePicCards = images.map(markup).join("");

galleryEl.insertAdjacentHTML("beforeend", makePicCards);

// -----------------Шаблон markUp------------------------------
// const list = document.querySelector(".list");
// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
// ------------------------------------------------------------
// -----------Через createElement------------------
// const galleryEl = document.querySelector(".gallery");

// let makePicCardEl = ({ url, alt }) => {
//   let liEl = document.createElement("li");
//   let imgEl = document.createElement("img");
//   liEl.append(imgEl);

//   imgEl.src = url;
//   imgEl.alt = alt;

//   return galleryEl.append(liEl);
// };

// const cards = images.map(makePicCardEl);
// galleryEl.style.display = "flex";

// console.log(cards);

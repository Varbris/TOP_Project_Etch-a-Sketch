let container = document.querySelector(".container");

const div = document.createElement("div");
div.classList.add("divGrid");
console.log(div);

const gridSize_x = 16;
const gridSize_y = 16;
const gridSize = gridSize_x * gridSize_y;
for (let i = 1; i <= gridSize; i++) {
  container.innerHTML += div.outerHTML;
}

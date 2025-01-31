let container = document.querySelector(".container");

const gridSize_x = 16;
const gridSize_y = 16;
const gridSize = gridSize_x * gridSize_y;

for (let i = 0; i < gridSize; i++) {
  const div = document.createElement("div");
  div.classList.add("divGrid");
  container.appendChild(div);
  div.addEventListener("mouseover", function () {
    div.style.backgroundColor = "black";
  });
}

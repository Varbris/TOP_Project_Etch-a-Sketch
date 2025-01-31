let container = document.querySelector(".container");

const gridSize_x = 16;
const gridSize_y = 16;
const gridSize = gridSize_x * gridSize_y;

for (let i = 0; i < gridSize; i++) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const div = document.createElement("div");
  div.classList.add("divGrid");
  div.classList.add("flex-grow");
  container.appendChild(div);
  div.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "#" + randomColor;
    setTimeout(function () {
      e.target.style.backgroundColor = "";
    }, 300);
  });
}

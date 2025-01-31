function generateGrid(userInput = 16) {
  let gridSize_x = userInput;
  let gridSize_y = userInput;
  let gridSize = gridSize_x * gridSize_y;

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
}

const container = document.querySelector(".container");
const sizeButton = document.querySelector("#sizeButton");
generateGrid();

sizeButton.addEventListener("click", function () {
  let userInput = prompt("What size do you want ? (pick a number)");
  container.innerHTML = "";
  generateGrid(userInput);
});

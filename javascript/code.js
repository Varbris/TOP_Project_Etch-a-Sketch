const gridContainer = document.querySelector(".grid-container");
const sizeButton = document.querySelector("#sizeButton");
const gridContainerSize = 960;

function generateGrid(userInput = 16) {
  let gridSize = parseInt(userInput * userInput);

  for (let i = 0; i < gridSize; i++) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const square = document.createElement("div");
    square.classList.add("divGrid");
    square.style.flexBasis = `${gridContainerSize / userInput}px`;

    gridContainer.appendChild(square);

    square.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "#" + randomColor;
      setTimeout(function () {
        e.target.style.backgroundColor = "";
      }, 300);
    });
  }
}

sizeButton.addEventListener("click", function () {
  let userInput = prompt("What size do you want ? (pick a number < 100)");
  if (userInput > 100) {
    alert("Your pc will lag if you do that");
    generateGrid();
    return 0;
  } else {
    gridContainer.innerHTML = "";
    generateGrid(userInput);
  }
});

generateGrid();

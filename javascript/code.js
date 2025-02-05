const gridContainer = document.querySelector(".grid-container");
const sizeButton = document.querySelector("#sizeButton");

function getContainerWidth(element, property) {
  const getContainerStyle = window.getComputedStyle(element);
  const getContainerStyleValue = getContainerStyle.getPropertyValue(property);
  const containerWidth = parseInt(getContainerStyleValue.replace("px", ""));

  return containerWidth;
}

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return randomColor;
}

function generateGrid(userInput = 16) {
  let gridSize = parseInt(userInput * userInput);
  const gridContainerWidth = getContainerWidth(gridContainer, "width");

  for (let i = 0; i < gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("divGrid");
    square.style.flexBasis = `${gridContainerWidth / userInput}px`;
    gridContainer.appendChild(square);

    //event
    square.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "#" + getRandomColor();
      setTimeout(function () {
        e.target.style.backgroundColor = "";
      }, 300);
    });
  }
}

function checkUserInput(userInput) {
  if (userInput > 100) {
    alert("Your pc will lag if you do that");
    generateGrid();
    return 0;
  } else {
    gridContainer.innerHTML = "";
    generateGrid(userInput);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  sizeButton.addEventListener("click", function () {
    let userInput = prompt("What size do you want ? (pick a number < 100)");
    checkUserInput(userInput);
  });

  generateGrid();
});

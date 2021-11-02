const grid = document.getElementById("container");
const reset = document.getElementById("reset");

function createDivs(cols, rows) {
  for (let i = 0; i < cols * rows; i++) {
    const div = document.createElement("div");

    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    grid.appendChild(div).classList.add("box");
  }
}

function updateGrid() {
  grid.innerHTML = "";
  let rows = Math.min(Math.max(parseInt(prompt("rows", "100")), 1), 50);
  let cols = Math.min(Math.max(parseInt(prompt("columns?", "100")), 1), 50);
  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  for (let i = 0; i < cols * rows; i++) {
    const div = document.createElement("div");
    grid.appendChild(div).classList.add("box");
  }

  paint();
}

function paint() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) =>
    box.addEventListener("mouseover", () => {
      let rnum = Math.floor(Math.random() * 255);
      box.style.background = `#${rnum}`;
    })
  );
}

reset.addEventListener("click", function () {
  updateGrid();
});

createDivs(16, 16);
paint();

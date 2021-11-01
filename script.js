const container = document.getElementById("container");

const rows = document.getElementsByClassName("gridRow");
const cells = document.getElementsByClassName("cell");

function makeGrid() {
  makeRows(16);
  makeCols(16);
}

function makeRows(rowNum) {
  for (i = 0; i < rowNum; i++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  }
}

function makeCols(colNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < colNum; j++) {
      let col = document.createElement("div");
      rows[j].appendChild(col).className = "cell";
    }
  }
}

makeGrid();

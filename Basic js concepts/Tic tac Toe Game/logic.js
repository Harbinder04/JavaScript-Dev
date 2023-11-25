// board-interactivity.js
const board = document.getElementById("board");
let currentPlayer = "X"; // Player 1 starts with "X"
let id1 = document.getElementById("1");
let id2 = document.getElementById("2");
let id3 = document.getElementById("3");
let id4 = document.getElementById("4");
let id5 = document.getElementById("5");
let id6 = document.getElementById("6");
let id7 = document.getElementById("7");
let id8 = document.getElementById("8");
let id9 = document.getElementById("9");

// Add click event listeners to each cell
const cells = document.getElementsByTagName("td");
for (const cell of cells) {
   cell.addEventListener("click", () => {
   console.log("Clicked on cell:", cell.textContent);
       
       if(checkIfWin()){
           displayWin(currentPlayer);
       }
    else if (!cell.textContent) {
           cell.textContent = currentPlayer;
           currentPlayer = currentPlayer === "X" ? "O" : "X";
       }
   });
}


function checkIfWin(){
   if(cells.textContent === "X" || cells.textContent ==="O"){
      // Horizontal win
      if (id1.textContent===id2.textContent && id2.textContent === id3.textContent && id3.textContent === id1.textContent) {
          return true;
      }
      if (id4.textContent === i5.textContent && id5.textContent === id6.textContent && id6.textContent === id4.textContent) {
          return true;
      }
      if (id7.textContent === id8.textContent && id8.textContent === id9.textContent && id9.textContent === id7.textContent) {
          return true;
      }
  
      // Vertical win
      if (id1.textContent === id4.textContent && id4.textContent === id7.textContent && id7.textContent === id1.textContent) {
          return true;
      }
      if (id2.textContent === id5.textContent && id5.textContent === id8.textContent && id8.textContent === id2.textContent) {
          return true;
      }
      if (id3.textContent === id6.textContent && id6.textContent === id9.textContent && id9.textContent === id3.textContent) {
          return true;
      }
  
      // Diagonal win
      if (id1.textContent === id5.textContent && id5.textContent === id9.textContent && id9.textContent === id1.textContent) {
          return true;
      }
      if (id3.textContent === id5.textContent && id5.textContent ===id7.textContent && id7.textContent === id9.textContent) {
          return true;
      }
   }
      return false;
}

function displayWin(currentPlayer) {
   board.remove();
   const div = document.createElement("div");
   div.setAttribute("class", "announce");

   const span = document.createElement("span");
   div.append(span);

   const para = document.createElement("p");
   para.innerText = "Winner is "+currentPlayer;
   span.append(para);

   document.body.append(div);
}


alert("Let's start it!");
let boxes = document.querySelectorAll(".box");
let chance = true;

const cases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box is clicked");
    if (chance) {
      box.innerText = "O";
      chance = false;
    } else {
      box.innerText = "X";
      chance = true;
    }
    box.style.pointerEvents = "none"; // Disable further clicks
    if (wingame()) {
      return;
    }
  });
});

const btndisable = () => {
  for (let box of boxes) {
    box.style.pointerEvents = "none";
  }
};

const wingame = () => {
  for (let pattern of cases) {
    let box1 = boxes[pattern[0]].innerText;
    let box2 = boxes[pattern[1]].innerText;
    let box3 = boxes[pattern[2]].innerText;

    if (box1 !== "" && box1 === box2 && box2 === box3) {
      resgame(box1);
      btndisable();
      return true;
    }
  }
  return false;
};

const resgame = (winner) => {
  document.querySelector(".clue").innerText = `Congratulations, Winner is ${winner}`;
};

let resbtn = document.querySelector(".restart");
const restar = () => {
  resbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.style.pointerEvents = "auto";
      box.innerText = "";
    });
    console.log("game restarted");
    document.querySelector(".clue").innerText = "";
    chance = true;
  });
};
restar();

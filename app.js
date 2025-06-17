let Boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Reset game function
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

// Box click handling
Boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true; 
        checkwinner();
    });
});

// Disable all boxes
const disableBoxes = () => {
    for (let box of Boxes) { 
        box.disabled = true;
    }
};

// Enable all boxes
const enableBoxes = () => {
    for (let box of Boxes) { 
        box.disabled = false;
        box.innerText = "";
    }
};

// Show winner message
const showwinner = (winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

// Check if someone has won
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = Boxes[pattern[0]].innerText; 
        let pos2val = Boxes[pattern[1]].innerText;
        let pos3val = Boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
            }
        }   
    }
};

// Button click events
newbtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);

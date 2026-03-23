let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector(".newBtn");
let msg = document.querySelector(".msg");
let sign = 1;

for (const element of boxes) {
    element.addEventListener("click", () => {
        if (sign % 2 == 1) {
            sign++;
            element.innerText = "X";
        } else {
            sign++;
            element.innerHTML = "O";
        }
        checkWinner();
        element.disabled = true;
    });
}

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const checkWinner = () => {
    for (const pattern of winPattern) {
        // console.log(pattern[0], pattern[1],pattern[2]);

        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("Winner", pos1);
                showWinner(pos1);
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `<h3>Congratulations, winner is '${winner}'</h3>`;
    msg.style.display = "block";
    disabledBoxes();
}

const disabledBoxes = () => {
    for (const element of boxes) {
        element.disabled = true;
    }
}

const enableBoxes = () => {
    for (const element of boxes) {
        element.innerText = "";
        sign = 1
        element.disabled = false;
    }
    msg.style.display = "none";
}

newGame.addEventListener("click", () => {
    enableBoxes();
});
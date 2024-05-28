let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let butt = document.querySelector("button");
let body = document.querySelector("body");
let mode = "light";

butt.addEventListener("click", () =>
{
    if(mode === "light")
    {
        mode= "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else
    {
        mode= "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(mode);
});

let turn0 = true;

const winPat =
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];  

boxes.forEach((box) =>
{
    box.addEventListener("click", () =>
    {
        if (turn0)
        {
            box.innerText = "O";
            turn0 = false;
        }
        else
        {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () =>
{
    for (pattern of winPat)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "")
        {
            if (pos1val === pos2val && pos2val === pos3val)
            {
                showWinner(pos1val);
            }
        }
    }
};


const disBox = () =>
{
    for (box of boxes)
    {
        box.disabled = true;
    }
};

const enaBox = () =>
{
    for (box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () =>
{
    turn0= true;
    enaBox();
    msgContainer.classList.add("hide");
    reset.classList.remove("hide");
};

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

const showWinner = (winner) =>
{
    msg.innerText = `${winner} is the Winner`;
    msgContainer.classList.remove("hide");
    reset.classList.add("hide");
    disBox();
};

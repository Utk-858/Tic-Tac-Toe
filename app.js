let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn"); 
let turn0 = true; //playerX, player0

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box is clicked");
        if(turn0 == true)
        {
            box.textContent = "O";
            turn0 = false;
        }
        else
        {
            box.textContent = 'X';
            turn0=true;
        }
        box.disabled = true;
        checkwinner();
    })
})

const checkwinner = () =>{
    for(let pattern of winPatterns)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="")
        {
            if(pos1 == pos2 && pos2 == pos3)
            {
                console.log("CONGRATULATIONS YOU WON!");
                showwinner();
            }
        }

    }
}

const showwinner = () =>{
    let winner = document.querySelector("#winner");
    winner.style.visibility = "visible";
}

const hidewinner = () =>{
    let winner = document.querySelector("#winner");
    winner.style.visibility = "hidden";
}

resetbtn.addEventListener("click",() => {
   boxes[0].innerText = "";
   boxes[1].innerText = "";
   boxes[2].innerText = "";
   boxes[3].innerText = "";
   boxes[4].innerText = "";
   boxes[5].innerText = "";
   boxes[6].innerText = "";
   boxes[7].innerText = "";
   boxes[8].innerText = "";

   for(let box of boxes)
   {
        box.disabled = false;
   }
   hidewinner();
})
const cell00 = document.getElementById("box1");
const cell01 = document.getElementById("box2");
const cell02 = document.getElementById("box3");
const cell10 = document.getElementById("box4");
const cell11 = document.getElementById("box5");
const cell12 = document.getElementById("box6");
const cell20 = document.getElementById("box7");
const cell21 = document.getElementById("box8");
const cell22 = document.getElementById("box9");
const res = document.getElementById("ans");
const newgame = document.getElementById("reset");
const sound = document.getElementById("audio");

var matrix = new Array(3);
for (var i = 0; i < 3; i++) {
    matrix[i] = new Array(3);
}

var chance = 1;
var remainingCells = 9;
var status = 0;

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        matrix[i][j] = 0;
    }
}

function solve(i, j) {
    if (i == 0) {
        if (j == 0) {
            if (chance == 1) {
                cell00.children[0].classList.add("cross");
                chance = 2;
                res.innerHTML = "!! Chance of Player 2 (O) !!";
            } else {
                cell00.children[0].classList.add("circle");
                chance = 1;
                res.innerHTML = "!! Chance of Player 1 (X) !!";
            }
        } else if (j == 1) {
            if (chance == 1) {
                cell01.children[0].classList.add("cross");
                chance = 2;
                res.innerHTML = "!! Chance of Player 2 (O) !!";
            } else {
                cell01.children[0].classList.add("circle");
                chance = 1;
                res.innerHTML = "!! Chance of Player 1 (X) !!";
            }
        } else {
            if (chance == 1) {
                cell02.children[0].classList.add("cross");
                chance = 2;
                res.innerHTML = "!! Chance of Player 2 (O) !!";
            } else {
                cell02.children[0].classList.add("circle");
                chance = 1;
                res.innerHTML = "!! Chance of Player 1 (X) !!";
            }
        }
    } else if (i == 1) {
        if (j == 0) {
            if (chance == 1) {
                cell10.children[0].classList.add("cross");
                chance = 2;
                res.innerHTML = "!! Chance of Player 2 (O) !!";
            } else {
                cell10.children[0].classList.add("circle");
                chance = 1;
                res.innerHTML = "!! Chance of Player 1 (X) !!";
            }
        } else if (j == 1) {
            if (chance == 1) {
                cell11.children[0].classList.add("cross");
                chance = 2;
                res.innerHTML = "!! Chance of Player 2 (O) !!";
            } else {
                cell11.children[0].classList.add("circle");
                chance = 1;
                res.innerHTML = "!! Chance of Player 1 (X) !!";
            }
        } else {
            if (chance == 1) {
                cell12.children[0].classList.add("cross");
                chance = 2;
                res.innerHTML = "!! Chance of Player 2 (O) !!";
            } else {
                cell12.children[0].classList.add("circle");
                chance = 1;
                res.innerHTML = "!! Chance of Player 1 (X) !!";
            }
        }
    } else {
        if (j == 0) {
            if (chance == 1) {
                cell20.children[0].classList.add("cross");
                chance = 2;
                res.innerHTML = "!! Chance of Player 2 (O) !!";
            } else {
                cell20.children[0].classList.add("circle");
                chance = 1;
                res.innerHTML = "!! Chance of Player 1 (X) !!";
            }
        } else if (j == 1) {
            if (chance == 1) {
                cell21.children[0].classList.add("cross");
                chance = 2;
                res.innerHTML = "!! Chance of Player 2 (O) !!";
            } else {
                cell21.children[0].classList.add("circle");
                chance = 1;
                res.innerHTML = "!! Chance of Player 1 (X) !!";
            }
        } else {
            if (chance == 1) {
                cell22.children[0].classList.add("cross");
                chance = 2;
                res.innerHTML = "!! Chance of Player 2 (O) !!";
            } else {
                cell22.children[0].classList.add("circle");
                chance = 1;
                res.innerHTML = "!! Chance of Player 1 (X) !!";
            }
        }
    }
}

function validate() {
    if (matrix[0][0] == 1 && matrix[0][1] == 1 && matrix[0][2] == 1) {
        var curVal1 = document.getElementById("box1").children[0].classList.contains("cross");
        var curVal2 = document.getElementById("box2").children[0].classList.contains("cross");
        var curVal3 = document.getElementById("box3").children[0].classList.contains("cross");
        if ((curVal1 == true && curVal2 == true && curVal3 == true) || (curVal1 == false && curVal2 == false && curVal3 == false)) {
            return true;
        }
    }
    if (matrix[1][0] == 1 && matrix[1][1] == 1 && matrix[1][2] == 1) {
        var curVal1 = document.getElementById("box4").children[0].classList.contains("cross");
        var curVal2 = document.getElementById("box5").children[0].classList.contains("cross");
        var curVal3 = document.getElementById("box6").children[0].classList.contains("cross");
        if ((curVal1 == true && curVal2 == true && curVal3 == true) || (curVal1 == false && curVal2 == false && curVal3 == false)) {
            return true;
        }
    }
    if (matrix[2][0] == 1 && matrix[2][1] == 1 && matrix[2][2] == 1) {
        var curVal1 = document.getElementById("box7").children[0].classList.contains("cross");
        var curVal2 = document.getElementById("box8").children[0].classList.contains("cross");
        var curVal3 = document.getElementById("box9").children[0].classList.contains("cross");
        if ((curVal1 == true && curVal2 == true && curVal3 == true) || (curVal1 == false && curVal2 == false && curVal3 == false)) {
            return true;
        }
    }
    if (matrix[0][0] == 1 && matrix[1][0] == 1 && matrix[2][0] == 1) {
        var curVal1 = document.getElementById("box1").children[0].classList.contains("cross");
        var curVal2 = document.getElementById("box4").children[0].classList.contains("cross");
        var curVal3 = document.getElementById("box7").children[0].classList.contains("cross");
        if ((curVal1 == true && curVal2 == true && curVal3 == true) || (curVal1 == false && curVal2 == false && curVal3 == false)) {
            return true;
        }
    }
    if (matrix[0][1] == 1 && matrix[1][1] == 1 && matrix[2][1] == 1) {
        var curVal1 = document.getElementById("box2").children[0].classList.contains("cross");
        var curVal2 = document.getElementById("box5").children[0].classList.contains("cross");
        var curVal3 = document.getElementById("box8").children[0].classList.contains("cross");
        if ((curVal1 == true && curVal2 == true && curVal3 == true) || (curVal1 == false && curVal2 == false && curVal3 == false)) {
            return true;
        }
    }
    if (matrix[0][2] == 1 && matrix[1][2] == 1 && matrix[2][2] == 1) {
        var curVal1 = document.getElementById("box3").children[0].classList.contains("cross");
        var curVal2 = document.getElementById("box6").children[0].classList.contains("cross");
        var curVal3 = document.getElementById("box9").children[0].classList.contains("cross");
        if ((curVal1 == true && curVal2 == true && curVal3 == true) || (curVal1 == false && curVal2 == false && curVal3 == false)) {
            return true;
        }
    }
    if (matrix[0][0] == 1 && matrix[1][1] == 1 && matrix[2][2] == 1) {
        var curVal1 = document.getElementById("box1").children[0].classList.contains("cross");
        var curVal2 = document.getElementById("box5").children[0].classList.contains("cross");
        var curVal3 = document.getElementById("box9").children[0].classList.contains("cross");
        if ((curVal1 == true && curVal2 == true && curVal3 == true) || (curVal1 == false && curVal2 == false && curVal3 == false)) {
            return true;
        }
    }
    if (matrix[0][2] == 1 && matrix[1][1] == 1 && matrix[2][0] == 1) {
        var curVal1 = document.getElementById("box3").children[0].classList.contains("cross");
        var curVal2 = document.getElementById("box5").children[0].classList.contains("cross");
        var curVal3 = document.getElementById("box7").children[0].classList.contains("cross");
        if ((curVal1 == true && curVal2 == true && curVal3 == true) || (curVal1 == false && curVal2 == false && curVal3 == false)) {
            return true;
        }
    }
    return false;
}

function reset() {
    sound.play();
    res.innerHTML = "!! Let's start the game !! <br><br> (Chance of player 1 (X) )";
    chance = 1;
    remainingCells = 9;
    status = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            matrix[i][j] = 0;
        }
    }
    cell00.children[0].classList.remove("cross");
    cell01.children[0].classList.remove("cross");
    cell02.children[0].classList.remove("cross");
    cell10.children[0].classList.remove("cross");
    cell11.children[0].classList.remove("cross");
    cell12.children[0].classList.remove("cross");
    cell20.children[0].classList.remove("cross");
    cell21.children[0].classList.remove("cross");
    cell22.children[0].classList.remove("cross");

    cell00.children[0].classList.remove("circle");
    cell01.children[0].classList.remove("circle");
    cell02.children[0].classList.remove("circle");
    cell10.children[0].classList.remove("circle");
    cell11.children[0].classList.remove("circle");
    cell12.children[0].classList.remove("circle");
    cell20.children[0].classList.remove("circle");
    cell21.children[0].classList.remove("circle");
    cell22.children[0].classList.remove("circle");

}

function move(i, j) {
    sound.play();
    if (status == 1 || remainingCells == 0) {
        alert("The game has been finished. Please click RESET to start a new game.");
        return;
    }
    if (matrix[i][j] == 1) {
        if (chance == 1) {
            res.innerHTML = "!! Perform move on a empty cell !! <br><br> (Chance of player 1 (X) )";
        } else {
            res.innerHTML = "!! Perform move on a empty cell !! <br><br> (Chance of player (O) )";
        }
        return;
    }
    solve(i, j);
    remainingCells--;
    matrix[i][j] = 1;
    if (validate()) {
        status = 1;
        if (chance == 1) {
            res.innerHTML = "!! Game ends !! <br><br> Player 2 (O) wins the game";
        } else {
            res.innerHTML = "!! Game ends !! <br><br> Player 1 (X) wins the game";
        }
        return;
    }
    if (remainingCells == 0) {
        res.innerHTML = "!! Game Ends !! <br><br> No one wins"
    }
}

newgame.addEventListener("click", reset);
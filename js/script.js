function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}
let computerMove = "";
let playerMove = "";

let randomNumber = Math.floor(Math.random() * 3);
if (randomNumber == 0) {
    computerMove = "kamień";
} else if (randomNumber == 1) {
    computerMove = "papier";
} else {
    computerMove = "nożyczki";
}

let playerInput = prompt('wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
if (playerInput == "1") {
    playerMove = "kamień";
} else if (playerInput == "2") {
    playerMove = "papier";
} else if (playerInput == "3") {
    playerMove = "nożyczki";
}

if (computerMove == playerMove) {
    printMessage("draw");
} else if (computerMove == "kamień" && playerMove == "papier" || computerMove == "papier" && playerMove == "nożyczki" || computerMove == "nożyczki" && playerMove == "kamień") {
    printMessage("win");
} else {
    printMessage("loss");
}
console.log(computerMove);
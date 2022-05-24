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
function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
    if (argMoveId == 0) {
        return "kamień";
    } else if (argMoveId == 1) {
        return "papier";
    } else if (argMoveId == 2) {
        return "nożyczki";
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + ".");
        return "nieznany ruch";
    }
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

let playerInput = prompt('wybierz swój ruch! 0: kamień, 1: papier, 2: nożyce.');

function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == "papier" && argPlayerMove == "nożyczki" || argComputerMove == "nożyczki" && argPlayerMove == "kamień") {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
        printMessage("Remis.");
    } else {
        printMessage('Tym razem przegrywasz :(');
    }
}

getMoveName(playerInput);
displayResult(getMoveName(randomNumber), getMoveName(playerInput));
import { Game } from './game.js';
import { Column } from './column.js';
let game = undefined;
function updateUI() {
    let board = document.getElementById('board-holder');
    let gameName = document.getElementById('game-name');
    let clickTargets = document.getElementById('click-targets');


    if (game === undefined) {
        board.classList.add('is-invisible');
    } else if (game !== undefined) {
        board.classList.remove('is-invisible');
        gameName.innerHTML = game.getName();
    }
    if (game.currentPlayer === 1) {
        clickTargets.setAttribute('class', 'black');
    } else if (game.currentPlayer === 2) {
        clickTargets.setAttribute('class', 'red');
    }

    for (let r = 0; r <= 5; r++) {   //row index
        for (let c = 0; c <= 6; c++) { //column index
            let element = document.getElementById(`square-${r}-${c}`);
            let token = game.getTokenAt(r, c);
            element.innerHTML = "";
            if (token === 1) {
                let blackToken = document.createElement('div');
                blackToken.setAttribute('class', 'token black');
                element.appendChild(blackToken);
            }
            if (token === 2) {
                let redToken = document.createElement('div');
                redToken.setAttribute('class', 'token red');
                element.appendChild(redToken);
            }
        }
    }
    for (let i = 0; i <= 6; i++) {
        let columnElement = document.getElementById(`column-${i}`);
        if (game.isColumnFull(i) === true) {
            columnElement.classList.add('full');
        } else {
            columnElement.classList.remove("full");
        }
    }
}
// THIS IS WHERE THE PROGRAM STARTS RUNNING
window.addEventListener('DOMContentLoaded', () => {
    let clickTargets = document.getElementById('click-targets');
    let newGameButton = document.getElementById('new-game');
    let player1 = document.getElementById('player-1-name');
    let player2 = document.getElementById('player-2-name');

    function playerKeyUp(player1, player2) {
        player1.addEventListener('keyup', () => {
            newGameButton.disabled = true;
            if (player1.value !== "" && player2.value !== "") {
                newGameButton.disabled = false;
            }
        })
    }
    playerKeyUp(player1, player2);
    playerKeyUp(player2, player1);

    newGameButton.addEventListener('click', () => {
        game = new Game(player1.value, player2.value);
        player1.value = "";
        player2.value = "";
        newGameButton.disabled = true;
        updateUI();
    })
    clickTargets.addEventListener('click', event => {
        if (event.target.id.includes('column-')) {
            let columnId = Number.parseInt(event.target.id[7]);
            game.playInColumn(columnId);
        };
        updateUI();
    })
});



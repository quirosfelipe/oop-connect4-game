import { Column } from './column.js';


export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
        ];
        this.winnerNumber = 0;

    }
    getName() {
        if (this.winnerNumber === 3) {
            return `${this.player1} ties with  ${this.player2}`;
        } else {
            return `${this.player1} vs. ${this.player2}`;
        }
    }
    playInColumn(columnIndex) {
        console.log(this.columns);
        //console.log(this.columns.rowPositions)
        this.columns[columnIndex].add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();
    }
    getTokenAt(rowIndex, columnIndex) {
        let correctColumn = this.columns[columnIndex];
        return correctColumn.getTokenAt(rowIndex);
    }
    isColumnFull(columnIndex) {
        return this.columns[columnIndex].isFull();
    }

    checkForTie() {
        let tie = true;
        for (let i = 0; i < 7; i++) {
            if (!this.isColumnFull(i)) {
                tie = false;
            }
        }
        if (tie) {
            this.winnerNumber = 3;
        }
    }
}




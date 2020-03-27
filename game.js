import { Column } from './column.js';
import { ColumnWinInspector } from './column-win-inspector.js';
import { RowWinInspector } from './row-win-inspector.js';
import { DiagonalWinInspector } from './diagonal-win-inspector.js';


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
        } else if (this.winnerNumber === 2) {
            return `${this.player2} wins!`;
        } else if (this.winnerNumber === 1) {
            return `${this.player1} wins!`;
        } else {
            return `${this.player1} vs. ${this.player2}`;
        }
    }
    playInColumn(columnIndex) {
        // console.log(this.columns);
        //console.log(this.columns.rowPositions)
        this.columns[columnIndex].add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();
        this.checkForDiagonalWin();
    }
    getTokenAt(rowIndex, columnIndex) {
        let correctColumn = this.columns[columnIndex];
        return correctColumn.getTokenAt(rowIndex);
    }
    isColumnFull(columnIndex) {
        if (this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        }
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
    checkForColumnWin() {
        if (this.winnerNumber > 0) return;
        for (let i = 0; i < 7; i++) {
            const inspector = new ColumnWinInspector(this.columns[i]);
            let inspectorResult = inspector.inspect();
            if (inspectorResult === 1 || inspectorResult === 2) {
                this.winnerNumber = inspectorResult;
            }
        }
    }
    checkForRowWin() {
        if (this.winnerNumber > 0) return;
        for (let i = 0; i < 4; i++) {
            let columnGroup = this.columns.slice(i, i + 4);
            const inspector = new RowWinInspector(columnGroup);
            let inspectorResult = inspector.inspect();
            if (inspectorResult === 1 || inspectorResult === 2) {
                this.winnerNumber = inspectorResult;
            }

        }
    }
    checkForDiagonalWin() {
        if (this.winnerNumber > 0) return;
        for (let i = 0; i < 4; i++) {
            let columnGroup = this.columns.slice(i, i + 4);
            const inspector = new DiagonalWinInspector(columnGroup);
            let inspectorResult = inspector.inspect();
            if (inspectorResult === 1 || inspectorResult === 2) {
                this.winnerNumber = inspectorResult;
            }
        }
    }
}
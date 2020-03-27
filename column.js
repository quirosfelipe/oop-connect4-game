export class Column {
    constructor() {
        this.rowPositions = [null, null, null, null, null, null];  // HERE IS WHERE WE WILL STORE TOKENS 
    }
    add(currentPlayer) {
        // this.rowPositions.push(currentPlayer);
        for (let i = 5; i >= 0; i--) {
            if (this.rowPositions[i] !== 1 && this.rowPositions[i] !== 2) {
                this.rowPositions[i] = currentPlayer;
                break;
            }
        }
    }
    getTokenAt(rowIndex) {
        if (this.rowPositions[rowIndex] === 1) {
            return 1;
        } else if (this.rowPositions[rowIndex] === 2) {
            return 2;
        }
        else {
            return null;
        }
    }
    isFull() {
        for (let i = 0; i < 6; i++) {
            if (this.rowPositions[i] !== 1 && this.rowPositions[i] !== 2) {
                return false;
            }

        }
        return true;
    }
}
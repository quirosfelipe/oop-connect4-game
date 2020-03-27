export class ColumnWinInspector {
    constructor(columnWinner) {
        this.columnWinner = columnWinner;
    }
    inspect() {
        let columnIsAWinner = 0;
        for (let i = 0; i < 3; i++) {
            if (this.columnWinner.getTokenAt(i) === this.columnWinner.getTokenAt(i + 1)
                && this.columnWinner.getTokenAt(i) === this.columnWinner.getTokenAt(i + 2)
                && this.columnWinner.getTokenAt(i) === this.columnWinner.getTokenAt(i + 3)
                && this.columnWinner.getTokenAt(i) !== null) {
                columnIsAWinner = this.columnWinner.getTokenAt(i);
                console.log(columnIsAWinner);
            }
        }
        return columnIsAWinner;
    }
}
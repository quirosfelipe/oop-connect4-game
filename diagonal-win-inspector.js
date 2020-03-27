export class DiagonalWinInspector {
    constructor([column0, column1, column2, column3]) {
        this.column0 = column0;
        this.column1 = column1;
        this.column2 = column2;
        this.column3 = column3;
    }
    inspect() {
        let diagonalIsAWinner = 0;
        for (let i = 0; i < 6; i++) {
            if ((this.column0.getTokenAt(i) === this.column1.getTokenAt(i + 1)
                && this.column0.getTokenAt(i) === this.column2.getTokenAt(i + 2)
                && this.column0.getTokenAt(i) === this.column3.getTokenAt(i + 3)
                && this.column0.getTokenAt(i) !== null)
                ||
                (this.column0.getTokenAt(i) === this.column1.getTokenAt(i - 1)
                    && this.column0.getTokenAt(i) === this.column2.getTokenAt(i - 2)
                    && this.column0.getTokenAt(i) === this.column3.getTokenAt(i - 3)
                    && this.column0.getTokenAt(i) !== null)) {
                diagonalIsAWinner = this.column0.getTokenAt(i);
            }
        }
        return diagonalIsAWinner;
    }
}

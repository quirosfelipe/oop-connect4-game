export class GameJsonSerializer {
    constructor(game) {
        this.game = game;
    }
    serialize() {
        const data = {
            playerOneName: this.game.player1,
            playerTwoName: this.game.player2,
            tokens: [[], [], [], [], [], []],
        };
        for (let rowIndex = 0; rowIndex < 6; rowIndex += 1) {
            for (let columnIndex = 0; columnIndex < 7; columnIndex += 1) {
                const tokenValue = this.game.getTokenAt(rowIndex, columnIndex);
                data.tokens[rowIndex][columnIndex] = tokenValue; // data.tokens is a 2D array
            }
            // getTokenAt(rowIndex, columnIndex) {
            // let correctColumn = this.columns[columnIndex];
            // return correctColumn.getTokenAt(rowIndex);
            // tokenValue = getTokenAt(0,0)
            // tokenValue = getTokenAt(4,3)
            //     ROWS-->     0         1   2   3   4    5 
            // tokens: [[0,1,2,3,4,5,6], [], [], [], [], []]  
            // TOKEN, 2D ARRAY in the form of ROW,COLUMN    
            //[ 
            //[ X , 1  , 2 ,  3 , 4  , 5 , 6 ],     0
            //[ 0 , 1  , 2 ,  3 , 4  , 5 , 6 ],     1
            //[ 0 , 1  , 2 ,  3 , 4  , 5 , 6 ],     2
            //[ 0 , 1  , 2 ,  3 , 4  , 5 , 6 ],     3
            //[ 0 , 1  , 2 ,  X , 4  , 5 , 6 ],     4
            //[ 0 , 1  , 2 ,  3 , 4  , 5 , 6 ],     5
            //]

        }
        return JSON.stringify(data);
    }
}
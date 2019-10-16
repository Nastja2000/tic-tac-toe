class TicTacToe {
    constructor() {
        this.symbol = 'x';
        this.fieldOfPlay = new Array();
        for (let i = 0; i < 3; i++) {
            this.fieldOfPlay[i] = new Array();
            for (let j = 0; j < 3; j++) {
                this.fieldOfPlay[i][j] = null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.fieldOfPlay[rowIndex][columnIndex] === null) {
            this.fieldOfPlay[rowIndex][columnIndex] = this.symbol;
            this.symbol = (this.symbol === 'x') ? 'o' : 'x';
        }
    }

    isFinished() {
        return (this.getWinner() !== null || this.isDraw() === true) ? true : false;
    }

    getWinner() {
        if (this.fieldOfPlay[0][0] === this.fieldOfPlay[1][1] && this.fieldOfPlay[0][0] === this.fieldOfPlay[2][2]) return this.fieldOfPlay[0][0];
        if (this.fieldOfPlay[2][0] === this.fieldOfPlay[1][1] && this.fieldOfPlay[2][0] === this.fieldOfPlay[0][2]) return this.fieldOfPlay[2][0];
        for (let i = 0; i < 3; i++) {
            if (this.fieldOfPlay[i][0] === this.fieldOfPlay[i][1] && this.fieldOfPlay[i][0] === this.fieldOfPlay[i][2]) return this.fieldOfPlay[i][0];
            if (this.fieldOfPlay[0][i] === this.fieldOfPlay[1][i] && this.fieldOfPlay[0][i] === this.fieldOfPlay[2][i]) return this.fieldOfPlay[0][i];
        }
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.fieldOfPlay[i][j] === null)
                    return false;
            }
        }
        return true;
    }

    isDraw() {
        return (this.getWinner() !== null || this.noMoreTurns() === false) ? false : true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.fieldOfPlay[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
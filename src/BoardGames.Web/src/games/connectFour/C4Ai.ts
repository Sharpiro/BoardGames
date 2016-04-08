class C4Ai
{
    private squares: Array<Square>;

    public getMovePosition(squares: Array<Square>): number
    {
        this.squares = squares;
        const winningMove = this.getWinningMove();
        if (winningMove !== null)
            return winningMove;
        const defensiveMove = this.getDefensiveMove();
        if (defensiveMove !== null)
            return defensiveMove;
        const offensiveMove = this.getOffensiveMove();
        if (offensiveMove !== null)
            return offensiveMove;
        const randomMove = GameBoard.getRandomEmptyPos(this.squares);
        this.squares = null;
        return randomMove;
    }

    private getDefensiveMove(): number
    {
        const horizontalMove = this.getDefensiveMoveHorizontal();
        if (horizontalMove !== null)
            return horizontalMove;
        const verticalMove = this.getDefensiveMoveVertical();
        if (verticalMove !== null)
            return verticalMove;
        const diagonalMove = this.getDefensiveMoveDiagonal();
        if (diagonalMove !== null)
            return diagonalMove;
        return null;
    }

    private getDefensiveMoveHorizontal(): number
    {
        let winCounter = 0;
        for (let i = 0; i < this.squares.length; i++)
        {
            if (i % 7 === 0)
                winCounter = 0;
            if (this.squares[i] && this.squares[i].owner === OWNER.Player)
            {
                winCounter++;
                if (winCounter === 3)
                {
                    if (this.squareIsEmpty(i + 1) && this.squareIsTop(i + 1))
                        return i + 1;
                    if (this.squareIsEmpty(i - 3) && this.squareIsTop(i - 3))
                        return i - 3;
                    winCounter = 0;
                }
            }
            else
                winCounter = 0;
        }
        return null;
    }

    private getDefensiveMoveVertical(): number
    {
        let winCounter = 0;
        let column = 0;
        for (let i = 0; i < this.squares.length; i++)
        {
            const j = i % GameBoard.segmentsY;
            const pos = (j * GameBoard.segmentsX) + column;
            if (i > 1 && (i + 1) % GameBoard.segmentsY === 0)
                column++;
            if (this.squares[pos] && this.squares[pos].owner === OWNER.Player)
            {
                winCounter++;
                if (winCounter === 3)
                {
                    const problemPos = pos - 3 * GameBoard.segmentsX;
                    if (this.squareIsEmpty(problemPos))
                        return problemPos;
                    winCounter = 0;
                }
            }
            else
                winCounter = 0;
        }
        return null;
    }

    private getDefensiveMoveDiagonal(): number
    {
        let column = 0;
        let diagonalIndex = 0;
        const nList = [5, 3, 1, -1, -3, -5];
        let winCounters = [0, 0, 0, 0];
        const boardLength = GameBoard.segmentsX * GameBoard.segmentsY;
        for (let i = 1; i <= boardLength / 2; i++)
        {
            //let temp = (t: number) => t + 1;
            //var temp2 = temp(1);
            const modPosition = diagonalIndex % (column + 1);
            const pos = modPosition * (GameBoard.segmentsX - 1) + column;
            const invPos = boardLength - 1 - pos;
            const row = Math.ceil((pos + .01) / 7) - 1;
            const rotPos = pos + (7 * nList[row]);
            const invRotPos = boardLength - 1 - rotPos;
            const nextColumn = ((diagonalIndex + 1) % (column + 1) === 0 && diagonalIndex !== 0) || i === 1;
            const positions = [pos, invPos, rotPos, invRotPos];
            for (let j = 0; j < positions.length; j++)
            {
                if (this.squares[positions[j]] && this.squares[positions[j]].owner === OWNER.Player)
                {
                    winCounters[j]++;
                    if (winCounters[j] === 3)
                    {
                        const currentPos = positions[j];
                        const problemPos = currentPos - 3 * GameBoard.segmentsX;
                        //if (this.squareIsEmpty(problemPos) && this.squareIsTop(problemPos))
                        //    return problemPos;
                        return null;
                    }
                }
                else
                    winCounters[j] = 0;
            }
            if (nextColumn)
            {
                column++;
                diagonalIndex = 0;
                winCounters = [0, 0, 0, 0];
            }
            else
                diagonalIndex++;
        }
        return null;
    }

    private getWinningMove(): number
    {
        return null;
    }

    private getOffensiveMove(): number
    {
        return null;
    }

    private squareIsEmpty(pos: number): boolean
    {
        if (this.squares[pos] && this.squares[pos].owner === OWNER.Empty)
            return true;
        return false;
    }

    private squareIsTop(pos: number): boolean
    {
        const rowLowerPos = pos + GameBoard.segmentsX;
        const maxPositions = GameBoard.segmentsX * GameBoard.segmentsY - 1;
        if (rowLowerPos > maxPositions || this.squares[rowLowerPos].owner !== OWNER.Empty)
            return true;
        return false;
    }
}
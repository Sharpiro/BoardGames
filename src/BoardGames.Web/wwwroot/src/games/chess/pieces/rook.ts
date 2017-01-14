/// <reference path="./ChessSquare"/>

class Rook extends ChessPiece
{
    constructor(gameBoard: GameBoard<ChessSquare>, icon: HTMLImageElement, gridX: number, gridY: number, owner: Owner)
    {
        super(gameBoard, icon, gridX, gridY, owner);
    }

    public getAvailableMoves(): ChessSquare[]
    {
        var moves: ChessSquare[] = [];

        for (var i = 1; i < this.gameBoard.segmentsY + 1; i++)
        {
            var square = <ChessSquare>this.gameBoard.getSquare(this.gridX, i);
            if (this.equals(square)) continue;
            moves.push(square);
        }

        for (var i = 1; i < this.gameBoard.segmentsX + 1; i++)
        {
            var square = <ChessSquare>this.gameBoard.getSquare(i, this.gridY);
            if (this.equals(square)) continue;
            moves.push(square);
        }
        return moves.filter(s => s !== undefined);
    }
}
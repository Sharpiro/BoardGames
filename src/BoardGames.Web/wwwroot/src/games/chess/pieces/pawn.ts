/// <reference path="./ChessSquare"/>

class Pawn extends ChessPiece
{
    constructor(gameBoard: GameBoard<ChessSquare>, icon: HTMLImageElement, gridX: number, gridY: number, owner: Owner)
    {
        super(gameBoard, icon, gridX, gridY, owner);
    }

    public getAvailableMoves(): ChessSquare[]
    {
        var above = <ChessSquare>this.gameBoard.getSquare(this.gridX, this.gridY + 1);
        var below = <ChessSquare>this.gameBoard.getSquare(this.gridX, this.gridY - 1);
        return [above, below].filter(s => s !== undefined);
    }
}
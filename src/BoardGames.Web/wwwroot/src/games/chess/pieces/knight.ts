/// <reference path="./ChessSquare"/>

class Knight extends ChessPiece
{
    constructor(gameBoard: GameBoard<ChessSquare>, icon: HTMLImageElement, gridX: number, gridY: number, owner: Owner)
    {
        super(gameBoard, icon, gridX, gridY, owner);
    }

    public getAvailableMoves(): ChessSquare[]
    {
        let moves = [
            <ChessSquare>this.gameBoard.getSquare(this.gridX - 2, this.gridY - 1),
            <ChessSquare>this.gameBoard.getSquare(this.gridX - 1, this.gridY - 2),
            <ChessSquare>this.gameBoard.getSquare(this.gridX + 1, this.gridY - 2),
            <ChessSquare>this.gameBoard.getSquare(this.gridX + 2, this.gridY - 1),
            <ChessSquare>this.gameBoard.getSquare(this.gridX + 2, this.gridY + 1),
            <ChessSquare>this.gameBoard.getSquare(this.gridX + 1, this.gridY + 2),
            <ChessSquare>this.gameBoard.getSquare(this.gridX - 1, this.gridY + 2),
            <ChessSquare>this.gameBoard.getSquare(this.gridX - 2, this.gridY + 1),
        ]

        return moves.filter(s => s !== undefined);
    }
}
/// <reference path="./ChessSquare"/>

class Pawn extends ChessSquare
{
    constructor(gameBoard: GameBoard<ChessSquare>, private icon: HTMLImageElement, gridX: number, gridY: number, owner: Owner)
    {
        super(gameBoard, gridX, gridY, owner, true);
    }

    public getAvailableMoves(): ChessSquare[]
    {
        var x = <ChessSquare>this.gameBoard.getSquare(this.gridX, this.gridY + 1);
        return [x];
    }

    public render(): void
    {
        if (!this.isActive()) return;
        var coordinates = gameBoard.GetSquareCoordinates(this);
        this.gameBoard.gameWindow.drawImage(this.icon, coordinates.x, coordinates.y, this.icon.width, this.icon.height);
    }
}
abstract class ChessSquare extends OwnableSquare
{
    public abstract getAvailableMoves(): ChessSquare[];
}

class EmptyChessSquare extends ChessSquare
{
    public getAvailableMoves(): ChessSquare[]
    {
        return [];
    }

    public render(isFillable?: boolean, color?: string): void
    {
        if (!this.isActive()) return;
        var coords = this.gameBoard.GetSquareCoordinates(this);
        this.gameBoard.gameWindow.fillRect(coords.x, coords.y, this.gameBoard.xInterval, this.gameBoard.yInterval);
    }
}
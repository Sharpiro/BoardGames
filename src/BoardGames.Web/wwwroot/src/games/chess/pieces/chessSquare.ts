abstract class ChessSquare extends OwnableSquare
{
    protected isHighlighted = false;

    public abstract getAvailableMoves(): ChessSquare[];

    public highlight(): void
    {
        this.isHighlighted = true;
    }

    public deHighlight(): void
    {
        this.isHighlighted = false;
    }

    public render(isFillable?: boolean, color?: string): void
    {
        if (!this.isHighlighted) return;
        var coords = this.gameBoard.GetSquareCoordinates(this);
        this.gameBoard.gameWindow.fillRect(coords.x, coords.y, this.gameBoard.xInterval, this.gameBoard.yInterval, "green");
    }
}

class EmptyChessSquare extends ChessSquare
{
    public getAvailableMoves(): ChessSquare[]
    {
        return [];
    }
}

abstract class ChessPiece extends ChessSquare
{
    constructor(gameBoard: GameBoard<ChessSquare>, protected icon: HTMLImageElement, gridX: number, gridY: number, owner: Owner)
    {
        super(gameBoard, gridX, gridY, owner)
    }

    public render(): void
    {
        super.render();
        var coords = gameBoard.GetSquareCoordinates(this);
        this.gameBoard.gameWindow.drawImage(this.icon, coords.x, coords.y, this.icon.width, this.icon.height);
    }

    protected filterInvalid(squares: ChessSquare[]): ChessSquare[]
    {
        var filteredSquares: ChessSquare[] = [];
        for (let square of squares)
        {
            if (square === undefined) continue;
            if (square.owner === this.owner) continue;
            filteredSquares.push(square);
        }
        return filteredSquares;
    }

    protected getSquareSequences(pointModifiers: ((point: Point) => Point)[], segments = this.gameBoard.segmentsX): ChessSquare[]
    {
        let moves: ChessSquare[] = [];
        for (var pointModifier of pointModifiers)
        {
            let point = new Point(this.gridX, this.gridY);
            for (let i = 1; i <= segments + 1; i++)
            {
                let square = <ChessSquare>this.gameBoard.getSquare(point.x, point.y);
                point = pointModifier(point);
                if (square === undefined || this.equals(square)) continue;
                moves.push(square);
                if (square.owner !== Owner.Empty) break;
            }
        }
        return moves;
    }
}
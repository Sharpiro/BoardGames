class Square implements IDrawable
{
    public arrayPos: number;

    constructor(public gridPosition: Point, public owner: OWNER)
    {
        this.arrayPos = ((this.gridPosition.y - 1) * (GameBoard.segmentsX)) + (this.gridPosition.x - 1);
    }

    public render(gameWindow: GameWindow): void
    {
        const color = this.owner === OWNER.Player ? "black" : "red";
        gameWindow.drawGridCircle(this.gridPosition.x, this.gridPosition.y, color);
    }

    public toString(): string
    {
        const squareString = `(${this.gridPosition.x}, ${this.gridPosition.y}), (${this.arrayPos}), ${OWNER[this.owner]}`;
        return squareString;
    }
}

enum OWNER
{
    Empty, Player, Computer
}
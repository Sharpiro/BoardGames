class Square extends BoardSquare
{
    constructor(gridX: number, gridY: number, public owner = OWNER.Empty)
    {
        super(gridX, gridY);
    }

    public render(board: IGameBoard): void
    {
        const color = this.owner === OWNER.Player ? "black" : "red";
        board.drawSkinnyGridBox(this.GridX, this.GridY, color);
    }

    //public toString(): string
    //{
    //    const squareString = `(${this.gridPosition.x}, ${this.gridPosition.y}), (${this.getArrayPosition()}), ${OWNER[this.owner]}`;
    //    return squareString;
    //}
}

enum OWNER
{
    Empty, Player, Computer
}
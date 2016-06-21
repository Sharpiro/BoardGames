class Square
{
    constructor(public gridPosition: Point, public owner = OWNER.Empty)
    {
    }

    public render(board: IGameBoard): void
    {
        const color = this.owner === OWNER.Player ? "black" : "red";
        board.drawSkinnyGridBox(this.gridPosition.x, this.gridPosition.y, color);
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
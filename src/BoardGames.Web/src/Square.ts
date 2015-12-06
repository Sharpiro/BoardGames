class Square implements IDrawable
{
    constructor(public gridPosition: Point, public owner: OWNER)
    {

    }

    public render(gameWindow: GameWindow): void
    {
        //gameWindow.drawGridBox(this.gridPosition.x, this.gridPosition.y);
        const color = this.owner === OWNER.Player ? "black" : "red";
        gameWindow.drawGridCircle(this.gridPosition.x, this.gridPosition.y, color);
    }
}

enum OWNER
{
    Empty, Player, Computer
}
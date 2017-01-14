class OwnableSquare extends RenderableSquare
{
    private _isActive = false;

    constructor(gameBoard: GameBoard<RenderableSquare>, gridX: number, gridY: number, public owner = Owner.Empty, isActive = false)
    {
        super(gameBoard, gridX, gridY);
        this._isActive = isActive;
    }

    public render(): void
    {
        if (!this.isActive()) return
        const color = this.owner === Owner.Player ? "black" : "red";
        this.gameBoard.gameWindow.drawSkinnyGridBox(this.gridX, this.gridY, 0, 0, color);
    }

    public isActive(): boolean
    {
        return this._isActive;
    }

    public activate(): void
    {
        this._isActive = true;;
    }

    public deActivate(): void
    {
        this._isActive = false;;
    }
}

enum Owner
{
    Empty, Player, Computer
}
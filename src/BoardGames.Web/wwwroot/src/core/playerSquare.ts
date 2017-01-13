class PlayerSquare extends BoardSquare
{
    private _isActive = false;

    constructor(gridX: number, gridY: number, public owner = Owner.Empty, isActive = false)
    {
        super(gridX, gridY);
        this._isActive = isActive;
    }

    public render(board: IGameBoard): void
    {
        const color = this.owner === Owner.Player ? "black" : "red";
        if (this.isActive())
            board.drawSkinnyGridBox(this.GridX, this.GridY, color);
    }

    public isActive(): boolean
    {
        return this._isActive;
    }

    public activate(): void
    {
        this._isActive = true;;
    }
}

enum Owner
{
    Empty, Player, Computer
}
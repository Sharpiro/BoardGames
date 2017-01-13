class PlayerSquare extends BoardSquare
{
    private _isActive = false;

    constructor(gridX: number, gridY: number, public owner = Owner.Empty, isActive = false)
    {
        super(gridX, gridY);
        this._isActive = isActive;
    }

    public render(window: GameWindow): void
    {
        const color = this.owner === Owner.Player ? "black" : "red";
        if (this.isActive())
            window.drawSkinnyGridBox(this.GridX, this.GridY, 0, 0, color);
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
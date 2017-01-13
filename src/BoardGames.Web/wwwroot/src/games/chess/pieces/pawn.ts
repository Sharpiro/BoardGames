class Pawn extends PlayerSquare
{
    constructor(private icon: HTMLImageElement, gridX: number, gridY: number, owner: Owner)
    {
        super(gridX, gridY, owner, true);
    }

    public render(window: GameWindow): void
    {
        //const color = this.owner === Owner.Player ? "black" : "red";
        if (!this.isActive()) return;
        window.drawImage(this.icon, this.GridX, this.GridY, this.icon.width, this.icon.height);
    }
}
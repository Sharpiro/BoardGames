class Pawn extends PlayerSquare
{
    private icon: HTMLImageElement;

    constructor(gridX: number, gridY: number, owner: Owner)
    {
        super(gridX, gridY, owner, true);
        this.icon = new Image;
        this.icon.src = "/content/pieces/whitepawn.png";
    }

    public render(board: IGameBoard): void
    {
        const color = this.owner === Owner.Player ? "black" : "red";
        if (this.isActive())
            //board.drawSkinnyGridBox(this.GridX, this.GridY, color);
            board.drawImage(this.icon, this.GridX, this.GridY);
    }
}
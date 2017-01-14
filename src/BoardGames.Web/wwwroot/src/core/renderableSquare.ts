abstract class RenderableSquare
{
    constructor(protected gameBoard: GameBoard<RenderableSquare>, public gridX: number, public gridY: number)
    {

    }

    public abstract render(isFillable?: boolean, color?: string): void;

    public equals(otherSquare: RenderableSquare): boolean
    {
        if (otherSquare == undefined) return false;
        return this.gridX == otherSquare.gridX && this.gridY == otherSquare.gridY;
    }
    //public abstract isActive(): boolean;
    //public abstract activate(): void;
    //public abstract deActivate(): void;
}
abstract class RenderableSquare
{
    constructor(protected gameBoard: GameBoard<RenderableSquare>, public gridX: number, public gridY: number)
    {

    }

    public abstract render(isFillable?: boolean, color?: string): void;
    public abstract isActive(): boolean;
    public abstract activate(): void;
    public abstract deActivate(): void;
}
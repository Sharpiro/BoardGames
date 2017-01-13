abstract class BoardSquare
{
    constructor(public GridX: number, public GridY: number)
    {

    }

    public abstract render(window: GameWindow, isFillable?: boolean, color?: string): void;

    public abstract isActive(): boolean;
}
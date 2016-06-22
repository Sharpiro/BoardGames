abstract class BoardSquare
{
    constructor(public GridX: number, public GridY: number)
    {

    }

    public abstract render(gameBoard: IGameBoard, isFillable?: boolean, color?: string): void;
}
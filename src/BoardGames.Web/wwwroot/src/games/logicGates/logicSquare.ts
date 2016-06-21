class LogicSquare extends GenericSquare
{
    constructor(x: number, y: number, width: number, height: number, public State: LogicSquareType)
    {
        super(x, y, width, height);
    }

    //public render(gameWindow: GameWindow): void
    //{
    //    super.render(gameWindow);
    //}
}

enum LogicSquareType { Power, Boolean, Pipe }
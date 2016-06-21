/// <reference path="./logicSquare"/>

class BooleanSquare extends LogicSquare
{
    private _isActive = false;

    constructor(x = 0, y = 0, width = 0, height = 0, public isActive = false)
    {
        super(x, y, width, height, LogicSquareType.Boolean);
    }

    public render(gameWindow: GameWindow): void
    {
        super.render(gameWindow);
    }
}

class PowerSquare extends LogicSquare
{

    constructor(x = 0, y = 0, width = 0, height = 0)
    {
        super(x, y, width, height, LogicSquareType.Power);
    }

    public render(gameWindow: GameWindow): void
    {
        super.render(gameWindow, true, "red");
    }
}

class PipeSquare extends LogicSquare
{
    constructor(x = 0, y = 0, width = 0, height = 0)
    {
        super(x, y, width, height, LogicSquareType.Power);
    }

    public render(gameWindow: GameWindow): void
    {
        super.render(gameWindow);
    }
}
/// <reference path="./logicSquare"/>


class EmptySquare extends LogicSquare
{
    constructor(gridX: number, gridY: number)
    {
        super(gridX, gridY, LogicSquareType.Empty);
    }

    public render(gameBoard: IGameBoard): void
    {
        //draw nothing
    }
}


class BooleanSquare extends LogicSquare
{
    constructor(gridX: number, gridY: number, isActive = false)
    {
        super(gridX, gridY, LogicSquareType.Boolean, isActive);
    }

    public render(gameBoard: IGameBoard): void
    {
        if (this.isActive)
            gameBoard.drawGridBox(this.GridX, this.GridY, "yellow");
        else
            gameBoard.drawGridBox(this.GridX, this.GridY, "white");
    }
}

class PowerSquare extends LogicSquare
{
    constructor(gridX: number, gridY: number, isActive = false)
    {
        super(gridX, gridY, LogicSquareType.Power, isActive);
    }

    public render(gameBoard: IGameBoard): void
    {
        gameBoard.drawGridBox(this.GridX, this.GridY, "red");
    }
}

class PipeSquare extends LogicSquare
{
    constructor(gridX: number, gridY: number, isActive = false)
    {
        super(gridX, gridY, LogicSquareType.Pipe, isActive);
    }

    public render(gameBoard: IGameBoard): void
    {
        gameBoard.drawSkinnyGridBox(this.GridX, this.GridY);
    }
}
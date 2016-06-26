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

    public update(previousSquare: LogicSquare)
    {
        this.setActive(false);
    }
}

class LampSquare extends LogicSquare
{
    constructor(gridX: number, gridY: number, isActive = false)
    {
        super(gridX, gridY, LogicSquareType.Lamp, isActive);
        this.power = 2;
    }

    public render(gameBoard: IGameBoard): void
    {
        if (this.isActive())
            gameBoard.drawGridBox(this.GridX, this.GridY, "yellow");
        else
            gameBoard.drawGridBox(this.GridX, this.GridY, "white");
    }

    public update(otherSquare: LogicSquare)
    {
        if (this.isActive())
            return;
        if (otherSquare.isActive())
        {
            this.setActive(true);
            if (otherSquare.type === LogicSquareType.Lamp)
            {
                this.power = otherSquare.power - 1;
            }
        }
    }
}

class PowerSquare extends LogicSquare
{
    constructor(gridX: number, gridY: number, isActive = true)
    {
        super(gridX, gridY, LogicSquareType.Power, isActive);
        this.power = 5;
    }

    public render(gameBoard: IGameBoard): void
    {
        if (this.isActive())
            gameBoard.drawGridBox(this.GridX, this.GridY, "red");
        else
            gameBoard.drawGridBox(this.GridX, this.GridY, "red", false);
    }

    public update(previousSquare: LogicSquare)
    {

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
        if (this.isActive())
            gameBoard.drawSkinnyGridBox(this.GridX, this.GridY, "red", true);
        else
            gameBoard.drawSkinnyGridBox(this.GridX, this.GridY, "red", false);
    }

    public update(otherSquare: LogicSquare)
    {
        if (this.isActive())
            return;
        if (otherSquare.isActive())
        {
            this.setActive(true);
            this.power = otherSquare.power - 1;
        }
    }
}

class RepeaterSquare extends LogicSquare
{
    private basePower = this.power;

    constructor(gridX: number, gridY: number, isActive = false)
    {
        super(gridX, gridY, LogicSquareType.Pipe, isActive);
    }

    public render(gameBoard: IGameBoard): void
    {
        if (this.isActive())
            gameBoard.drawGridBox(this.GridX, this.GridY, "#66CD00");
        else
            gameBoard.drawGridBox(this.GridX, this.GridY, "#66CD00", false);
    }

    public update(previousSquare: LogicSquare)
    {
        if (previousSquare.isActive())
        {
            this.setActive(true);
            this.power = this.basePower + previousSquare.power;
        }
    }
}

class InverterSquare extends LogicSquare
{
    constructor(gridX: number, gridY: number, isActive = false)
    {
        super(gridX, gridY, LogicSquareType.Pipe, isActive);
    }

    public render(gameBoard: IGameBoard): void
    {
        gameBoard.drawGridBox(this.GridX, this.GridY, "orange");
    }

    public update(previousSquare: LogicSquare)
    {
        this.setActive(!previousSquare.isActive());
    }
}
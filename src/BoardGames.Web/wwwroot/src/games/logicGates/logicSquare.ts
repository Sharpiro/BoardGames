/// <reference path="../../core/boardSquare"/>

abstract class LogicSquare extends BoardSquare
{
    public type: LogicSquareType
    public isActive = false;

    constructor(gridX: number, gridY: number, type = LogicSquareType.Empty, isActive = false)
    {
        super(gridX, gridY);
        this.type = type;
        this.isActive = isActive;
    }
}

enum LogicSquareType { Empty, Power, Boolean, Pipe }
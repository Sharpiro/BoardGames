/// <reference path="../../core/boardSquare"/>

abstract class LogicSquare extends BoardSquare
{
    public type: LogicSquareType
    private _isActive = false;

    constructor(gridX: number, gridY: number, type = LogicSquareType.Empty, isActive = false)
    {
        super(gridX, gridY);
        this.type = type;
        this._isActive = isActive;
    }

    public isActive(): boolean
    {
        return (this.type !== LogicSquareType.Empty && this._isActive)
    }

    public setActive(state: boolean): void
    {
        this._isActive = state;
    }

    public isNotEmpty(): boolean
    {
        return this.type !== LogicSquareType.Empty;
    }
}

enum LogicSquareType { Empty, Power, Boolean, Pipe }
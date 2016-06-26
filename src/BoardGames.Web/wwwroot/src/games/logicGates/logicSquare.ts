/// <reference path="../../core/boardSquare"/>

abstract class LogicSquare extends BoardSquare
{
    public type: LogicSquareType
    private _isActive = false;
    public power = 4;

    constructor(gridX: number, gridY: number, type = LogicSquareType.Empty, isActive = false)
    {
        super(gridX, gridY);
        this.type = type;
        this._isActive = isActive;
    }

    public isActive(): boolean
    {
        var isEmpty = this.type !== LogicSquareType.Empty;
        var isActive = this._isActive;
        var hasPower = this.power > 0;
        return isEmpty && isActive && hasPower;
    }

    public setActive(state: boolean): void
    {
        this._isActive = state;
    }

    public switchActive(): void
    {
        this._isActive = !this._isActive;
    }

    public isNotEmpty(): boolean
    {
        return this.type !== LogicSquareType.Empty;
    }

    public update(previousSquare: LogicSquare): void
    {

    }
}

enum LogicSquareType { Empty, Power, Lamp, Pipe }
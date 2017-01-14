///// <reference path="../../core/RenderableSquare"/>

//abstract class LogicSquare extends RenderableSquare
//{
//    public type: LogicSquareType
//    private _isActive = false;
//    public power = 4;
//    public powerSource: LogicSquare;

//    constructor(gridX: number, gridY: number, type = LogicSquareType.Empty, isActive = false)
//    {
//        super(gridX, gridY);
//        this.type = type;
//        this._isActive = isActive;
//    }

//    public isActive(): boolean
//    {
//        var isEmpty = this.type !== LogicSquareType.Empty;
//        var isActive = this._isActive;
//        var hasPower = this.power > 0;
//        var powerSorceActive = (this.powerSource && this.powerSource._isActive) || this.type === LogicSquareType.Power;
//        return isEmpty && isActive && hasPower && powerSorceActive;
//    }

//    //public setActive(state: boolean): void
//    //{
//    //    this._isActive = state;
//    //}

//    public activate(powerSource: LogicSquare): void
//    {
//        this._isActive = true;
//        this.powerSource = powerSource;
//    }

//    public deactivate(): void
//    {
//        this._isActive = false;
//        this.powerSource = null;
//        this.power = 0;
//    }

//    public switchActive(): void
//    {
//        this._isActive = !this._isActive;
//    }

//    public isNotEmpty(): boolean
//    {
//        return this.type !== LogicSquareType.Empty;
//    }

//    public update(squares: LogicSquare[], index: number): void
//    {

//    }
//}

//enum LogicSquareType { Empty, Power, Lamp, Pipe }
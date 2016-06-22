﻿/// <reference path="../games/logicGates/logicSquare"/>

class LogicBoard implements IGameBoard
{
    public segmentsX: number;
    public segmentsY: number;
    public xInterval: number;
    public yInterval: number;
    public squares = [] as LogicSquare[];
    public activationOrder = [] as LogicSquare[];
    public hoveredSquare: LogicSquare;
    public clickedSquare: LogicSquare;

    constructor(segmentsX: number, segmentsY: number, private _gameWindow: GameWindow)
    {
        this.segmentsX = segmentsX;
        this.segmentsY = segmentsY;
        this.xInterval = _gameWindow.width / segmentsX;
        this.yInterval = _gameWindow.height / segmentsY;
        this._gameWindow.canvas.addEventListener("mousemove", this.onMouseMove, false);
        this._gameWindow.canvas.addEventListener("mousedown", this.onMouseDown, false);
        this.hoveredSquare = new PipeSquare(0, 0);
        for (let i = 0; i < segmentsY; i++) 
        {
            for (let j = 0; j < segmentsX; j++)
            {
                this.squares.push(new EmptySquare(j + 1, i + 1));
            }
        }
    }

    private onMouseDown = (e: MouseEvent): void =>
    {
        if (Game.state === GAME_STATE.AwaitingPlayerInput)
        {
            const gridPosition = this.getGridPosition(e.clientX, e.clientY);
            this.hoveredSquare.GridX = gridPosition.x;
            this.hoveredSquare.GridY = gridPosition.y;
            var point = new Point(this.hoveredSquare.GridX, this.hoveredSquare.GridY);
            this.clickedSquare = new PipeSquare(point.x, point.y);
            console.log(`[${point.x}, ${point.y}] - ${this.getArrayPosition(this.clickedSquare)}`);
            Game.state = GAME_STATE.PlayerInputReceived;
        }
    }


    private onMouseMove = (e: MouseEvent): void =>
    {
        var gridPosition = this.getGridPosition(e.clientX, e.clientY);
        this.hoveredSquare.GridX = gridPosition.x;
        this.hoveredSquare.GridY = gridPosition.y;
    }

    public getArrayPosition(square: LogicSquare): number
    {
        var pos = ((square.GridY - 1) * (this.segmentsX)) + (square.GridX - 1);
        return pos;
    }

    private getGridPosition(clientX: number, clientY: number): Point
    {
        const offset = this._gameWindow.getBoundingClientRect();
        const mouseX = clientX - offset.left;
        const mouseY = clientY - offset.top;
        const xGridBlock = Math.floor(mouseX / this.xInterval) + 1;
        const yGridBlock = Math.floor(mouseY / this.yInterval) + 1;
        return new Point(xGridBlock, yGridBlock);
    }

    public render(): void
    {
        for (let i = 1; i < this.segmentsX; i++)
        {
            this._gameWindow.drawLine(i * this.xInterval, 0, i * this.xInterval, this._gameWindow.height);
        }

        for (let i = 1; i < this.segmentsY; i++)
        {
            this._gameWindow.drawLine(0, i * this.yInterval, this._gameWindow.width, i * this.yInterval);
        }
        this.squares.filter(square => square.type !== LogicSquareType.Empty)
            .forEach(square => square.render(this));
    }

    public getSquares(): Array<LogicSquare>
    {
        return this.squares.slice();
    }

    public getSquare(arrayPos: number): LogicSquare
    {
        return this.squares[arrayPos];
    }

    public activateSquare(square: LogicSquare): void
    {
        const arrayPos = (square.GridY - 1) * this.segmentsX + square.GridX - 1;
        this.squares[arrayPos] = square;
        this.activationOrder.push(square);
    }

    public drawGridBox(x: number, y: number, color = "grey", isFillable = true): void
    {
        if (isFillable)
            this._gameWindow.fillRect((x * this.xInterval) + 1, (y * this.yInterval) + 1, this.xInterval - 2, this.yInterval - 2, color);
        else
            this._gameWindow.strokeRect((x * this.xInterval) + 1, (y * this.yInterval) + 1, this.xInterval - 2, this.yInterval - 2, color);
    }

    public drawSkinnyGridBox(x: number, y: number, color = "grey", isFillable = true): void
    {
        if (isFillable)
            this._gameWindow.fillRect((x * this.xInterval) - this.xInterval + 1, (y * this.yInterval - this.yInterval + (this.yInterval / 4.0)) + 1, this.xInterval - 2, this.yInterval / 2 - 2, color);
        else
            this._gameWindow.strokeRect((x * this.xInterval) - this.xInterval + 1, (y * this.yInterval - this.yInterval + (this.yInterval / 4.0)) + 1, this.xInterval - 2, this.yInterval / 2 - 2, color);
    }

    public drawGridCircle(x: number, y: number, color = "grey"): void
    {
        this._gameWindow.drawCircle(x, y, this.xInterval, this.yInterval, color);
    }

    public drawGridCircleTop(x: number, y: number, color = "grey"): void
    {
        this._gameWindow.drawCircleTop(x, y, this.xInterval, this.yInterval, color);
    }
}
/// <reference path="../../src/core/BoardSquare.ts"/>
/// <reference path="../../src/core/PlayerSquare.ts"/>

class ChessBoard implements IGameBoard
{
    public segmentsX: number;
    public segmentsY: number;
    public xInterval: number;
    public yInterval: number;
    public squares = [] as BoardSquare[];
    public activationOrder = [] as BoardSquare[];
    public hoveredSquare: BoardSquare;
    public clickedSquare: BoardSquare;

    constructor(segmentsX: number, segmentsY: number, private _gameWindow: GameWindow)
    {
        this.segmentsX = segmentsX;
        this.segmentsY = segmentsY;
        this.xInterval = _gameWindow.width / segmentsX;
        this.yInterval = _gameWindow.height / segmentsY;
        this._gameWindow.registerEvent("mousemove", this.onMouseMove);
        this._gameWindow.registerEvent("mousedown", this.onMouseDown);
        this._gameWindow.registerEvent("contextmenu", (e: MouseEvent) => e.preventDefault());
        this.hoveredSquare = new PlayerSquare(0, 0, Owner.Empty, true);
        for (let i = 0; i < segmentsY; i++) 
        {
            for (let j = 0; j < segmentsX; j++)
            {
                this.squares.push(new PlayerSquare(j + 1, i + 1));
            }
        }
    }

    private onMouseDown = (e: MouseEvent): void =>
    {
       
    }

    private onMouseMove = (e: MouseEvent): void =>
    {
        var gridPosition = this.getGridPosition(e.clientX, e.clientY);
        this.hoveredSquare = this.getSquare(gridPosition.x, gridPosition.y);
    }

    public getArrayPosition(square: BoardSquare): number
    {
        return -1;
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
        this._gameWindow.clearScreen();
        for (let i = 1; i < this.segmentsX; i++)
        {
            this._gameWindow.drawLine(i * this.xInterval, 0, i * this.xInterval, this._gameWindow.height);
        }

        for (let i = 1; i < this.segmentsY; i++)
        {
            this._gameWindow.drawLine(0, i * this.yInterval, this._gameWindow.width, i * this.yInterval);
        }
        this.squares.forEach(square => square.render(this));
    }

    public getSquares(): Array<BoardSquare>
    {
        return this.squares.slice();
    }

    public getSquare(gridX: number, gridY: number): BoardSquare
    {
        const arrayPos = (gridY - 1) * this.segmentsX + gridX - 1;
        return this.squares[arrayPos];
    }

    public setSquare(square: BoardSquare): void
    {
        const arrayPos = (square.GridY - 1) * this.segmentsX + square.GridX - 1;
        this.squares[arrayPos] = square;
        this.activationOrder.push(square);
    }

    public drawGridBox(x: number, y: number, color = "grey", isFillable = true): void
    {
        if (isFillable)
            this._gameWindow.fillRect(((x - 1) * this.xInterval) + 1, ((y - 1) * this.yInterval) + 1, this.xInterval - 2, this.yInterval - 2, color);
        else
            this._gameWindow.strokeRect(((x - 1) * this.xInterval) + 1, ((y - 1) * this.yInterval) + 1, this.xInterval - 2, this.yInterval - 2, color);
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

    public drawImage(image: HTMLImageElement, x: number, y: number): void
    {
        var xCoord = (x * this.xInterval) - this.xInterval;
        var yCoord = y * this.yInterval - this.yInterval;
        this._gameWindow.context.drawImage(image, xCoord, yCoord, this.xInterval, this.yInterval);
    }
}
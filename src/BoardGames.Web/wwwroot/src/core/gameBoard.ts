/// <reference path="../../src/core/BoardSquare.ts"/>
/// <reference path="../../src/core/PlayerSquare.ts"/>

class GameBoard
{
    public segmentsX: number;
    public segmentsY: number;
    public xInterval: number;
    public yInterval: number;
    public squares = [] as BoardSquare[];
    public activationOrder = [] as BoardSquare[];
    public hoveredSquare: BoardSquare;
    public clickedSquare: BoardSquare;

    constructor(segmentsX: number, segmentsY: number, protected gameWindow: GameWindow)
    {
        this.segmentsX = segmentsX;
        this.segmentsY = segmentsY;
        this.xInterval = gameWindow.width / segmentsX;
        this.yInterval = gameWindow.height / segmentsY;
        this.gameWindow.registerEvent("contextmenu", (e: MouseEvent) => e.preventDefault());
        this.hoveredSquare = new PlayerSquare(0, 0, Owner.Empty, true);
        for (let i = 0; i < segmentsY; i++) 
        {
            for (let j = 0; j < segmentsX; j++)
            {
                this.squares.push(new PlayerSquare(j + 1, i + 1));
            }
        }
    }

    public render(): void
    {
        this.gameWindow.clearScreen();
        if (Game.state === GAME_STATE.AwaitingPlayerInput)
            var hoveredCoords = this.GetSquareCoordinates(this.hoveredSquare);
        this.gameWindow.drawSkinnyGridBox(hoveredCoords.x, hoveredCoords.y, this.xInterval, this.yInterval);

        for (let i = 1; i < this.segmentsX; i++)
        {
            this.gameWindow.drawLine(i * this.xInterval, 0, i * this.xInterval, this.gameWindow.height);
        }

        for (let i = 1; i < this.segmentsY; i++)
        {
            this.gameWindow.drawLine(0, i * this.yInterval, this.gameWindow.width, i * this.yInterval);
        }

        for (var square of this.squares)
        {
            square.render(this.gameWindow);
        }
    }

    protected getGridPosition(clientX: number, clientY: number): Point
    {
        const offset = this.gameWindow.getBoundingClientRect();
        const mouseX = clientX - offset.left;
        const mouseY = clientY - offset.top;
        const xGridBlock = Math.floor(mouseX / this.xInterval) + 1;
        const yGridBlock = Math.floor(mouseY / this.yInterval) + 1;
        return new Point(xGridBlock, yGridBlock);
    }

    public GetSquareCoordinates(square: BoardSquare): Point
    {
        var xCoord = square.GridX * this.xInterval - this.xInterval;
        var yCoord = square.GridY * this.yInterval - this.yInterval;
        return new Point(xCoord, yCoord);
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

    public setSquares(squares: BoardSquare[]): void
    {
        this.squares = squares;
        this.activationOrder = [];
    }

    //public drawGridBox(x: number, y: number, color = "grey", isFillable = true): void
    //{
    //    if (isFillable)
    //        this.gameWindow.fillRect(((x - 1) * this.xInterval) + 1, ((y - 1) * this.yInterval) + 1, this.xInterval - 2, this.yInterval - 2, color);
    //    else
    //        this.gameWindow.strokeRect(((x - 1) * this.xInterval) + 1, ((y - 1) * this.yInterval) + 1, this.xInterval - 2, this.yInterval - 2, color);
    //}

    //public drawSkinnyGridBox(x: number, y: number, color = "grey", isFillable = true): void
    //{
    //    if (isFillable)
    //        this.gameWindow.fillRect((x * this.xInterval) - this.xInterval + 1, (y * this.yInterval - this.yInterval + (this.yInterval / 4.0)) + 1, this.xInterval - 2, this.yInterval / 2 - 2, color);
    //    else
    //        this.gameWindow.strokeRect((x * this.xInterval) - this.xInterval + 1, (y * this.yInterval - this.yInterval + (this.yInterval / 4.0)) + 1, this.xInterval - 2, this.yInterval / 2 - 2, color);
    //}

    //public drawGridCircle(x: number, y: number, color = "grey"): void
    //{
    //    this.gameWindow.drawCircle(x, y, this.xInterval, this.yInterval, color);
    //}

    //public drawGridCircleTop(x: number, y: number, color = "grey"): void
    //{
    //    this.gameWindow.drawCircleTop(x, y, this.xInterval, this.yInterval, color);
    //}
}
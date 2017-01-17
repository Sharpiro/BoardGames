/// <reference path="../../src/core/RenderableSquare"/>
/// <reference path="../../src/core/OwnableSquare"/>

class GameBoard<T extends RenderableSquare>
{
    public segmentsX: number;
    public segmentsY: number;
    public xInterval: number;
    public yInterval: number;
    public squares = [] as T[];
    public activationOrder = [] as T[];
    public hoveredSquare: T;
    public clickedSquare: T;

    constructor(segmentsX: number, segmentsY: number, public gameWindow: GameWindow)
    {
        this.segmentsX = segmentsX;
        this.segmentsY = segmentsY;
        this.xInterval = gameWindow.width / segmentsX;
        this.yInterval = gameWindow.height / segmentsY;
        this.gameWindow.registerEvent("mousemove", this.baseOnMouseMove);
        this.gameWindow.registerEvent("contextmenu", (e: MouseEvent) => e.preventDefault());
        for (let i = 0; i < segmentsY; i++) 
        {
            for (let j = 0; j < segmentsX; j++)
            {
                this.squares.push(<T><RenderableSquare>new OwnableSquare(this, j + 1, i + 1));
            }
        }
    }

    private baseOnMouseMove = (e: MouseEvent): void =>
    {
        var gridPosition = this.getGridPosition(e.clientX, e.clientY);
        this.hoveredSquare = <T>this.getSquare(gridPosition.x, gridPosition.y);
    }

    public shortestPath(source: T, destination: T): T[]
    {
        let deltaX = destination.gridX - source.gridX;
        let deltaY = destination.gridY - source.gridY;
        let absDeltaX = Math.abs(deltaX);
        let absDeltaY = Math.abs(deltaY);
        let xIsNegative = deltaX < 0 ? true : false;
        let yIsNegative = deltaY < 0 ? true : false;
        let squares: T[] = [];
        let xArray: number[] = [];
        let yArray: number[] = [];
        for (let i = 1; i <= absDeltaX; i++)
        {
            let x = xIsNegative ? source.gridX - i : source.gridX + i;
            xArray.push(x);
        }

        for (let i = 1; i <= absDeltaY; i++)
        {
            let y = yIsNegative ? source.gridY - i : source.gridY + i;
            yArray.push(y);
        }

        for (let i = 0; i < Math.max(absDeltaX, absDeltaY); i++)
        {
            let x = xArray[i] === undefined ? destination.gridX : xArray[i];
            let y = yArray[i] === undefined ? destination.gridY : yArray[i];
            let square = this.getSquare(x, y);
            squares.push(square);
        }

        var obj = squares.map(s => { return { x: s.gridX, y: s.gridY } });
        obj.forEach(s => console.log(s));
        //console.log(obj);
        //console.log(squares);
        //console.log(xArray);
        //console.log(yArray);
        return squares;
    }

    public render(): void
    {
        this.gameWindow.clearScreen();
        let hoveredCoords = this.hoveredSquare.getPixelCoordinates();
        this.gameWindow.drawSkinnyGridBox(hoveredCoords.x, hoveredCoords.y, this.xInterval, this.yInterval, "orange");

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
            square.render();
        }
    }

    public getGridPosition(clientX: number, clientY: number): Point
    {
        const offset = this.gameWindow.getBoundingClientRect();
        const mouseX = clientX - offset.left;
        const mouseY = clientY - offset.top;
        const xGridBlock = Math.floor(mouseX / this.xInterval) + 1;
        const yGridBlock = Math.floor(mouseY / this.yInterval) + 1;
        return new Point(xGridBlock, yGridBlock);
    }

    public getSquares(): Array<T>
    {
        return <Array<T>>this.squares.slice();
    }

    public getSquare(gridX: number, gridY: number): T
    {
        if (gridX > this.segmentsX || gridY > this.segmentsY) return undefined;
        if (gridX < 1 || gridY < 1) return undefined;
        const arrayPos = (gridY - 1) * this.segmentsX + gridX - 1;
        return <T>this.squares[arrayPos];
    }

    public setSquare(square: T): void
    {
        const arrayPos = (square.gridY - 1) * this.segmentsX + square.gridX - 1;
        this.squares[arrayPos] = square;
        this.activationOrder.push(square);
    }

    public setSquares(squares: T[]): void
    {
        squares.forEach(value => this.setSquare(value));
    }

    public initializeSquares(squares: T[]): void
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
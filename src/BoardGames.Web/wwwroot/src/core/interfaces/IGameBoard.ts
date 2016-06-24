interface IGameBoard
{
    segmentsX: number;
    segmentsY: number;
    xInterval: number;
    yInterval: number;
    squares: BoardSquare[];
    activationOrder: BoardSquare[];
    hoveredSquare: BoardSquare;
    clickedSquare: BoardSquare;

    drawSkinnyGridBox(x: number, y: number, color?: string, isFillable?: boolean): void;
    drawGridBox(x: number, y: number, color?: string, isFillable?: boolean): void
    drawGridCircle(x: number, y: number, color?: string): void
    drawGridCircleTop(x: number, y: number, color?: string): void
    getSquares(): BoardSquare[];
    getSquare(gridX: number, gridY: number): BoardSquare
    render(): void;
    setSquare(square: BoardSquare): void;
}

interface ILogicBoard extends IGameBoard
{
    squares: LogicSquare[];
    activationOrder: LogicSquare[];
    hoveredSquare: LogicSquare;
    clickedSquare: LogicSquare;

    getSquares(): LogicSquare[];
    getSquare(gridX: number, gridY: number): LogicSquare
    setSquare(square: LogicSquare): void;
}
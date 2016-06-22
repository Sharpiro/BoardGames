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

    activateSquare(square: BoardSquare): void;
    drawSkinnyGridBox(x: number, y: number, color?: string, isFillable?: boolean): void;
    drawGridBox(x: number, y: number, color?: string, isFillable?: boolean): void
    drawGridCircle(x: number, y: number, color?: string): void
    drawGridCircleTop(x: number, y: number, color?: string): void
    getSquares(): BoardSquare[];
    getSquare(arrayPos: number): BoardSquare
    render(gameWindow: GameWindow): void;
}
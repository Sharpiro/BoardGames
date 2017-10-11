//interface IGameBoard
//{
//    segmentsX: number;
//    segmentsY: number;
//    xInterval: number;
//    yInterval: number;
//    squares: RenderableSquare[];
//    activationOrder: RenderableSquare[];
//    hoveredSquare: RenderableSquare;
//    clickedSquare: RenderableSquare;

//    drawImage(image: HTMLImageElement, x: number, y: number): void;
//    drawSkinnyGridBox(x: number, y: number, color?: string, isFillable?: boolean): void;
//    drawGridBox(x: number, y: number, color?: string, isFillable?: boolean): void
//    drawGridCircle(x: number, y: number, color?: string): void
//    drawGridCircleTop(x: number, y: number, color?: string): void
//    getSquares(): RenderableSquare[];
//    getSquare(gridX: number, gridY: number): RenderableSquare
//    render(): void;
//    setSquare(square: RenderableSquare): void;
//}

//interface ILogicBoard extends IGameBoard
//{
//    squares: LogicSquare[];
//    activationOrder: LogicSquare[];
//    hoveredSquare: LogicSquare;
//    clickedSquare: LogicSquare;

//    getSquares(): LogicSquare[];
//    getSquare(gridX: number, gridY: number): LogicSquare
//    setSquare(square: LogicSquare): void;
//}
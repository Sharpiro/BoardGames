interface IGameBoard
{
    xInterval: number;
    yInterval: number;
    hoveredSquare: Square;

    activateSquare(square: Square): void;
    clickedSquare: Square;
    drawSkinnyGridBox(x: number, y: number, color?: string): void;
    getSquares(): Square[];
    getSquare(arrayPos: number): Square
    render(gameWindow: GameWindow): void;
}
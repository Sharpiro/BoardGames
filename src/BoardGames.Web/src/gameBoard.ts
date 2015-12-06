///<reference path="./Square.ts"/>
class GameBoard
{
    public static segmentsX: number;
    public static segmentsY: number;
    public static xInterval: number;
    public static yInterval: number;
    public playerBlocks = <Array<Square>>[];
    public aiBlocks = <Array<Square>>[];
    public squares = <Array<Square>>[];

    constructor(segmentsX: number, segmentsY: number)
    {
        GameBoard.segmentsX = segmentsX;
        GameBoard.segmentsY = segmentsY;
        GameBoard.xInterval = GameWindow.width / segmentsX;
        GameBoard.yInterval = GameWindow.height / segmentsY;
        for (let i = 0; i < segmentsY; i++) 
        {
            for (let j = 0; j < segmentsX; j++)
            {
                this.squares.push(new Square(new Point(j + 1, i + 1), OWNER.Empty));
            }
        }
    }

    public render(gameWindow: GameWindow): void
    {
        for (let i = 1; i < GameBoard.segmentsX; i++)
        {
            gameWindow.drawLine(i * GameBoard.xInterval, 0, i * GameBoard.xInterval, GameWindow.height);
        }

        for (let i = 1; i < GameBoard.segmentsY; i++)
        {
            gameWindow.drawLine(0, i * GameBoard.yInterval, GameWindow.width, i * GameBoard.yInterval);
        }
        this.playerBlocks.forEach((block) =>
        {
            block.render(gameWindow);
        });
        this.aiBlocks.forEach((block) =>
        {
            block.render(gameWindow);
        });
    }

    public getRandomEmptySquare(): Point
    {
        const emptySquares = this.squares.filter((value) => value.owner === OWNER.Empty);
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        return emptySquares[randomIndex].gridPosition;
    }

    public squareIsEmpty(point: Point): boolean
    {
        const arrayPos = (point.y - 1) * GameBoard.segmentsX + point.x - 1;
        return this.squares[arrayPos].owner === OWNER.Empty;
    }

    public insertSquare(square: Square): void
    {
        const arrayPos = (square.gridPosition.y - 1) * GameBoard.segmentsX + square.gridPosition.x - 1;
        console.log(arrayPos);
        this.squares[arrayPos] = square;
    }

    public activateEmptyRandomSquare(): void
    {
        const blockPosition = this.getRandomEmptySquare();
        const square = new Square(blockPosition, OWNER.Computer);
        this.aiBlocks.push(square);
        this.insertSquare(square);
    }
}
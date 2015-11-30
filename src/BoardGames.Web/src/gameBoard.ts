class GameBoard
{
    public static segmentsX: number;
    public static segmentsY: number;
    public static xInterval: number;
    public static yInterval: number;

    constructor(segmentsX: number, segmentsY: number)
    {
        GameBoard.segmentsX = segmentsX;
        GameBoard.segmentsY = segmentsY;
        GameBoard.xInterval = GameWindow.width / segmentsX;
        GameBoard.yInterval = GameWindow.height / segmentsY;
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
    }

    public GetRandomSqure(): Point
    {
        const randX = Math.floor(Math.random() * GameBoard.segmentsX);
        const randY = Math.floor(Math.random() * GameBoard.segmentsY);
        return new Point(randX, randY);
    }
}
/// <reference path="../../src/core/RenderableSquare"/>
/// <reference path="../../src/core/OwnableSquare"/>
/// <reference path="./GameBoard"/>
/// <reference path="../../src/games/chess/ChessSquareFactory"/>

class ChessBoard extends GameBoard<ChessSquare>
{
    constructor(segmentsX: number, segmentsY: number, gameWindow: GameWindow)
    {
        super(segmentsX, segmentsY, gameWindow);
        this.gameWindow.registerEvent("mousemove", this.onMouseMove);
        this.gameWindow.registerEvent("mousedown", this.onMouseDown);
        this.gameWindow.registerEvent("contextmenu", (e: MouseEvent) => e.preventDefault());
        this.hoveredSquare = new EmptyChessSquare(this, 0, 0);
        const squares = ChessSquareFactory.getSquares(this, this.segmentsX, this.segmentsY, this.xInterval, this.yInterval);
        this.initializeSquares(squares);
    }

    public deHighlightSquares()
    {
        for (var square of this.squares)
        {
            square.deHighlight();
        }
    }

    public highlightSquares(squares: ChessSquare[])
    {
        for (var square of squares)
        {
            square.highlight();
        }
    }

    private onMouseDown = (e: MouseEvent): void =>
    {
    }

    private onMouseMove = (e: MouseEvent): void =>
    {
    }

    public render(): void
    {
        super.render();
    }
}
/// <reference path="../../src/core/BoardSquare.ts"/>
/// <reference path="../../src/core/PlayerSquare.ts"/>
/// <reference path="./GameBoard"/>
/// <reference path="../../src/games/chess/ChessSquareFactory"/>

class ChessBoard extends GameBoard
{
    constructor(segmentsX: number, segmentsY: number, gameWindow: GameWindow)
    {
        super(segmentsX, segmentsY, gameWindow);

        this.gameWindow.registerEvent("mousemove", this.onMouseMove);
        this.gameWindow.registerEvent("mousedown", this.onMouseDown);
        this.gameWindow.registerEvent("contextmenu", (e: MouseEvent) => e.preventDefault());
        this.hoveredSquare = new PlayerSquare(0, 0, Owner.Empty, true);
        const squares = ChessSquareFactory.getSquares(this.segmentsX, this.segmentsY, this.xInterval, this.yInterval);
        this.setSquares(squares);
    }

    private onMouseDown = (e: MouseEvent): void =>
    {

    }

    private onMouseMove = (e: MouseEvent): void =>
    {
        var gridPosition = this.getGridPosition(e.clientX, e.clientY);
        this.hoveredSquare = this.getSquare(gridPosition.x, gridPosition.y);
    }

    public render(): void
    {
        super.render();
    }
}
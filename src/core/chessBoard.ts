import { GameBoard } from "./gameBoard";
import { GameWindow } from "./gameWindow";
import { ChessSquareFactory } from "../games/chess/chessSquareFactory";
import { ChessSquare, EmptyChessSquare } from "../games/chess/pieces/chessSquare";
import { Owner } from "./ownableSquare";

export class ChessBoard extends GameBoard<ChessSquare>
{
    constructor(segmentsX: number, segmentsY: number, gameWindow: GameWindow) {
        super(segmentsX, segmentsY, gameWindow);
        this.gameWindow.registerEvent("mousemove", this.onMouseMove);
        this.gameWindow.registerEvent("contextmenu", (e: MouseEvent) => e.preventDefault());
        this.hoveredSquare = new EmptyChessSquare(this, 0, 0);
        const squares = ChessSquareFactory.getSquares(this, this.segmentsX, this.segmentsY, this.xInterval, this.yInterval);
        this.initializeSquares(squares);
    }

    public swapSquares(source: ChessSquare, destination: ChessSquare, callback: () => void = null): void {
        var shortestPathSquares = this.shortestPath(source, destination);

        this.swapSquare(source, destination);
        //callback();
        //callback = () =>
        //{
        //    callback();
        //};
        shortestPathSquares.forEach((square, index) => {
            setTimeout(() => {
                let lastItemCallback = index + 1 === shortestPathSquares.length ? callback : null;
                this.swapSquareGraphics(source, square, lastItemCallback);
            }, 200 * index);
        });
    }

    public swapSquareGraphics(source: ChessSquare, destination: ChessSquare, callback: () => void = null): void {
        if (source === undefined || destination === undefined) throw "error swapping squares, 1 was undefined";
        if (source.equals(destination)) throw "cannot swap, source and destination are the same";
        if (source.owner !== destination.owner && destination.owner !== Owner.Empty)
            destination = new EmptyChessSquare(this, destination.gridX, destination.gridY);

        var tempPosition = source.getGridPosition();
        source.setGridPosition(destination.getGridPosition());
        destination.setGridPosition(tempPosition);

        if (callback) callback();
    }

    public swapSquare(source: ChessSquare, destination: ChessSquare): void {
        if (source === undefined || destination === undefined) throw "error swapping squares, 1 was undefined";
        if (source.equals(destination)) throw "cannot swap, source and destination are the same";
        if (source.owner !== destination.owner && destination.owner !== Owner.Empty)
            destination = new EmptyChessSquare(this, destination.gridX, destination.gridY);

        this.squares[source.getArrayPosition()] = destination;
        this.squares[destination.getArrayPosition()] = source;

        //var tempPosition = source.getGridPosition();
        //source.setGridPosition(destination.getGridPosition());
        //destination.setGridPosition(tempPosition);

    }

    public deHighlightSquares() {
        for (var square of this.squares) {
            square.deHighlight();
        }
    }

    public highlightSquares(squares: ChessSquare[]) {
        for (var square of squares) {
            square.highlight();
        }
    }

    private onMouseMove = (e: MouseEvent): void => {
    }

    public render(): void {
        super.render();
    }
}
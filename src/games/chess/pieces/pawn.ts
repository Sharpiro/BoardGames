import { ChessPiece } from "./chessPiece";
import { GameBoard } from "../../../core/gameBoard";
import { ChessSquare, ChessSquareType } from "./chessSquare";
import { Owner } from "../../../core/ownableSquare";
import { Point } from "../../../core/point";

export class Pawn extends ChessPiece
{
    constructor(gameBoard: GameBoard<ChessSquare>, icon: HTMLImageElement, gridX: number, gridY: number, owner: Owner)
    {
        super(gameBoard, icon, gridX, gridY, owner, ChessSquareType.Pawn);
    }

    public getAvailableMoves(): ChessSquare[]
    {
        var above = <ChessSquare>this.gameBoard.getSquare(this.gridX, this.gridY + 1);
        above = above !== undefined && above.owner !== this.owner && above.owner !== Owner.Empty
            ? undefined : above;
        var below = <ChessSquare>this.gameBoard.getSquare(this.gridX, this.gridY - 1);
        below = below !== undefined && below.owner !== this.owner && below.owner !== Owner.Empty
            ? undefined : below;

        let modifiers = [
            (p: Point) => new Point(++p.x, ++p.y),
            (p: Point) => new Point(--p.x, ++p.y),
            (p: Point) => new Point(++p.x, --p.y),
            (p: Point) => new Point(--p.x, --p.y)
        ];
        let diagonals = this.getSquareSequences(modifiers, 1).filter(s => s.owner !== this.owner && s.owner !== Owner.Empty);

        var x = [above, below].concat(diagonals);

        var squares = this.filterInvalid(x);
        return squares;
    }
}
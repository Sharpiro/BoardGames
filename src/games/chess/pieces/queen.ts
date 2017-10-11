import { ChessSquare, ChessSquareType } from "./chessSquare";
import { ChessPiece } from "./chessPiece";
import { GameBoard } from "../../../core/gameBoard";
import { Point } from "../../../core/point";
import { Owner } from "../../../core/ownableSquare";

export class Queen extends ChessPiece
{
    constructor(gameBoard: GameBoard<ChessSquare>, icon: HTMLImageElement, gridX: number, gridY: number, owner: Owner)
    {
        super(gameBoard, icon, gridX, gridY, owner, ChessSquareType.Queen);
    }

    public getAvailableMoves(): ChessSquare[]
    {
        let modifiers = [
            (p: Point) => new Point(++p.x, ++p.y),
            (p: Point) => new Point(--p.x, ++p.y),
            (p: Point) => new Point(++p.x, --p.y),
            (p: Point) => new Point(--p.x, --p.y),
            (p: Point) => new Point(++p.x, p.y),
            (p: Point) => new Point(p.x, ++p.y),
            (p: Point) => new Point(--p.x, p.y),
            (p: Point) => new Point(p.x, --p.y)
        ];
        let moves = this.getSquareSequences(modifiers);
        moves = this.filterInvalid(moves);

        return moves;
    }
}
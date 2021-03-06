﻿import { Point } from "../../../core/point";
import { ChessSquare, ChessSquareType } from "./chessSquare";
import { GameBoard } from "../../../core/gameBoard";
import { ChessPiece } from "./chessPiece";
import { Owner } from "../../../core/ownableSquare";

export class King extends ChessPiece
{
    constructor(gameBoard: GameBoard<ChessSquare>, icon: HTMLImageElement, gridX: number, gridY: number, owner: Owner)
    {
        super(gameBoard, icon, gridX, gridY, owner, ChessSquareType.King);
        this.squreType = ChessSquareType.King;
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
        let moves = this.getSquareSequences(modifiers, 1);
        moves = this.filterInvalid(moves);

        return moves;
    }
}
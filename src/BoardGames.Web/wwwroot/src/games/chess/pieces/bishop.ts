﻿/// <reference path="./ChessSquare"/>

class Bishop extends ChessPiece
{
    constructor(gameBoard: GameBoard<ChessSquare>, icon: HTMLImageElement, gridX: number, gridY: number, owner: Owner)
    {
        super(gameBoard, icon, gridX, gridY, owner);
    }

    public getAvailableMoves(): ChessSquare[]
    {
        let modifiers = [
            (p: Point) => new Point(++p.x, ++p.y),
            (p: Point) => new Point(--p.x, ++p.y),
            (p: Point) => new Point(++p.x, --p.y),
            (p: Point) => new Point(--p.x, --p.y)
        ];
        let moves = this.getSquareSequences(modifiers);

        return moves.filter(s => s !== undefined);
    }
}
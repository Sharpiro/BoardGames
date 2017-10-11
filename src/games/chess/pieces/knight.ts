import { ChessPiece } from "./chessPiece";
import { GameBoard } from "../../../core/gameBoard";
import { ChessSquare, ChessSquareType } from "./chessSquare";
import { Owner } from "../../../core/ownableSquare";

export class Knight extends ChessPiece
{
    constructor(gameBoard: GameBoard<ChessSquare>, icon: HTMLImageElement, gridX: number, gridY: number, owner: Owner)
    {
        super(gameBoard, icon, gridX, gridY, owner, ChessSquareType.Knight);
    }

    public getAvailableMoves(): ChessSquare[]
    {
        let moves = [
            <ChessSquare>this.gameBoard.getSquare(this.gridX - 2, this.gridY - 1),
            <ChessSquare>this.gameBoard.getSquare(this.gridX - 1, this.gridY - 2),
            <ChessSquare>this.gameBoard.getSquare(this.gridX + 1, this.gridY - 2),
            <ChessSquare>this.gameBoard.getSquare(this.gridX + 2, this.gridY - 1),
            <ChessSquare>this.gameBoard.getSquare(this.gridX + 2, this.gridY + 1),
            <ChessSquare>this.gameBoard.getSquare(this.gridX + 1, this.gridY + 2),
            <ChessSquare>this.gameBoard.getSquare(this.gridX - 1, this.gridY + 2),
            <ChessSquare>this.gameBoard.getSquare(this.gridX - 2, this.gridY + 1),
        ]
        moves = this.filterInvalid(moves);

        return moves;
    }
}
import { ChessSquare } from "./pieces/chessSquare"

export interface IChessMove {
    sourceSquare: ChessSquare;
    destinationSquare: ChessSquare;
}
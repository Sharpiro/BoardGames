import { IChessMove } from "./iMove";
import { ChessBoard } from "../../core/chessBoard";
import { ChessSquare } from "./pieces/chessSquare";
import { Owner } from "../../core/ownableSquare";

export class ShallowBlue {
    constructor(private gameBoard: ChessBoard) { }

    public getMove(): IChessMove {
        let takePiecemove = this.takePieceMove()
        if (takePiecemove) return takePiecemove;

        return this.randomMove();
    }

    private randomMove(): IChessMove {
        var computerSquares = this.gameBoard.getSquares().filter(s => s.owner === Owner.Computer);
        let randomDestinationSquare: ChessSquare;
        while (randomDestinationSquare === undefined) {
            var randomSquareIndex = Math.floor(Math.random() * computerSquares.length);
            var randomSourceSquare = computerSquares[randomSquareIndex];

            var moves = randomSourceSquare.getAvailableMoves();
            let randomMoveIndex = Math.floor(Math.random() * moves.length);
            randomDestinationSquare = moves[0];
            computerSquares.splice(randomSquareIndex, 1);
        }
        return <IChessMove>{ sourceSquare: randomSourceSquare, destinationSquare: randomDestinationSquare };
    }

    private takePieceMove(): IChessMove {
        var computerSquares = this.gameBoard.getSquares().filter(s => s.owner === Owner.Computer);
        for (var square of computerSquares) {
            var moves = square.getAvailableMoves();
            for (var move of moves) {
                if (move.owner !== Owner.Player) continue;
                return <IChessMove>{ sourceSquare: square, destinationSquare: move };
            }
        }
        return null;
    }
}
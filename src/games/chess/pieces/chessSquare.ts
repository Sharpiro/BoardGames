import { OwnableSquare, Owner } from "../../../core/ownableSquare";
import { GameBoard } from "../../../core/gameBoard";

export abstract class ChessSquare extends OwnableSquare {
    protected isHighlighted = false;

    constructor(gameBoard: GameBoard<ChessSquare>, gridX: number, gridY: number,
        owner: Owner = Owner.Empty, public squareType = ChessSquareType.Empty) {
        super(gameBoard, gridX, gridY, owner);
    }
    public squreType = ChessSquareType.Empty;

    public abstract getAvailableMoves(): ChessSquare[];

    public highlight(): void {
        this.isHighlighted = true;
    }

    public deHighlight(): void {
        this.isHighlighted = false;
    }

    public render(isFillable?: boolean, color?: string): void {
        if (!this.isHighlighted) return;
        var coords = this.getPixelCoordinates();;
        this.gameBoard.gameWindow.fillRect(coords.x, coords.y, this.gameBoard.xInterval, this.gameBoard.yInterval, "green");
    }
}

export class EmptyChessSquare extends ChessSquare {
    public getAvailableMoves(): ChessSquare[] {
        return [];
    }
}

export enum ChessSquareType { Empty, Pawn, Rook, Knight, Bishop, Queen, King }
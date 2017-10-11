import { RenderableSquare } from "./renderableSquare";
import { GameBoard } from "./gameBoard";

export class OwnableSquare extends RenderableSquare {
    constructor(gameBoard: GameBoard<RenderableSquare>, gridX: number, gridY: number, public owner = Owner.Empty) {
        super(gameBoard, gridX, gridY);
    }

    public render(): void {
        const color = this.owner === Owner.Player ? "black" : "red";
        this.gameBoard.gameWindow.drawSkinnyGridBox(this.gridX, this.gridY, 0, 0, color);
    }
}

export enum Owner {
    Empty, Player, Computer
}
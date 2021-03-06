﻿import { InputHandler } from "./InputHandler";
import { GameBoard } from "./gameBoard";
import { RenderableSquare } from "./renderableSquare";
import { Owner } from "./ownableSquare";

export abstract class Game {
    protected frameId: number;
    protected inputHandler: InputHandler;
    protected startTime: number;
    protected nowTime: number;

    constructor(protected gameBoard: GameBoard<RenderableSquare>) {
        this.inputHandler = new InputHandler();
    }
    protected render(): void {
        this.gameBoard.render();
    }

    protected updateView(stateName: string) {
        document.getElementById("gameState").innerText = stateName;
        // $("#gameState").text(stateName);
    }

    protected abstract update(): void;
    protected abstract checkWinCondition(owner: Owner): void;
}
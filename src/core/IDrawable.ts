import { GameWindow } from "./gameWindow";

export interface IDrawable {
    render(gameWindow: GameWindow): void;
}
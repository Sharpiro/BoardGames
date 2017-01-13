/// <reference path= "./InputHandler" />

abstract class Game
{
    protected frameId: number;
    protected inputHandler: InputHandler;
    public static state: GAME_STATE;
    protected startTime: number;
    protected nowTime: number;

    constructor(protected gameBoard: GameBoard)
    {
        this.inputHandler = new InputHandler();
        Game.state = GAME_STATE.AwaitingPlayerInput;
    }
    protected render(): void
    {
        this.gameBoard.render();
    }

    protected updateView()
    {
        $("#playerTurn").text(Game.state);
    }

    protected abstract update(): void;
    protected abstract updateInput(): void;
    protected abstract checkWinCondition(owner: Owner): void;
}

enum GAME_STATE
{
    AwaitingPlayerInput, PlayerInputReceived, AwaitingPlayerUpdate, AiTurn, GameOver, Replay
}


///<reference path="./gameWindow.ts"/>
///<reference path="./InputHandler.ts"/>
///<reference path="./gameBoard.ts"/>
///<reference path="../lib/definitions/jquery/jquery.d.ts"/>
abstract class Game
{
    protected gameWindow: GameWindow;
    protected frameId: number;
    protected inputHandler: InputHandler;
    protected gameBoard: GameBoard;
    public static state: GAME_STATE;
    protected startTime: number;
    protected nowTime: number;
    //connect4game

    constructor()
    {
        this.gameWindow = new GameWindow(800, 750, this);
        this.inputHandler = new InputHandler();
        this.gameBoard = new GameBoard(7, 6);
        Game.state = GAME_STATE.AwaitingPlayerInput;
    }
    protected render(): void
    {
        this.gameWindow.clearScreen();
        this.gameBoard.render(this.gameWindow);
        if (Game.state === GAME_STATE.AwaitingPlayerInput)
            this.gameWindow.drawGridCircleTop(this.gameWindow.hoveredBlock.x, this.gameWindow.hoveredBlock.y);
    }

    protected updateView()
    {
        $("#playerTurn").text(Game.state);
    }

    protected abstract update(): void;
    protected abstract updateInput(): void;
    protected abstract checkWinCondition(owner: OWNER): void;
}

enum GAME_STATE
{
    AwaitingPlayerInput, PlayerInputReceived, AwaitingPlayerUpdate, AiTurn, GameOver, Replay
}


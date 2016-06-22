/// <reference path="./booleanSquare"/>

class LogicGates extends Game
{
    constructor(gameWindow: GameWindow, gameBoard: IGameBoard)
    {
        super(gameWindow, gameBoard);
        Game.state = GAME_STATE.AwaitingPlayerInput;
        this.tick();
    }

    protected tick = (time: number = null): void =>
    {
        super.render();
        var powerSquare = new PowerSquare(1, 1);
        var booleanSquare = new BooleanSquare(5, 1);
        powerSquare.render(this.gameBoard);
        booleanSquare.render(this.gameBoard);
        this.updateInput();
        this.frameId = requestAnimationFrame(this.tick);
    }

    private reset()
    {

    }

    protected update()
    {
    }

    protected updateInput()
    {
        if (Game.state === GAME_STATE.PlayerInputReceived)
        {
            this.gameBoard.activateSquare(this.gameBoard.clickedSquare);
            Game.state = GAME_STATE.AwaitingPlayerInput;
        }
    }

    protected checkWinCondition()
    {

    }
}
var gameWindow = new GameWindow(600, 600);
var gameBoard = new LogicBoard(15, 15, gameWindow);
var game = new LogicGates(gameWindow, gameBoard);
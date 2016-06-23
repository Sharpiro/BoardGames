/// <reference path="../../core/game"/>
/// <reference path="./booleanSquare"/>

class LogicGame extends Game
{
    constructor(gameBoard: IGameBoard)
    {
        super(gameBoard);
        Game.state = GAME_STATE.AwaitingPlayerInput;
        this.initialize();
        this.tick();
    }

    private initialize(): void
    {
        this.gameBoard.setSquare(new PowerSquare(1, 1));
        this.gameBoard.setSquare(new PowerSquare(15, 1));
        this.gameBoard.setSquare(new BooleanSquare(5, 1));
        this.gameBoard.setSquare(new BooleanSquare(10, 1));
    }

    protected tick = (time: number = null): void =>
    {
        super.render();
        this.updateInput();
        this.update();
        this.frameId = requestAnimationFrame(this.tick);
    }

    private reset()
    {

    }

    protected update()
    {
        this.checkSquares();
    }

    private checkSquares()
    {
        var squares = this.gameBoard.getSquares() as LogicSquare[];
        for (let i = 1; i < squares.length - 1; i++)
        {
            if (squares[i - 1].isActive() && squares[i].isNotEmpty())
            {
                squares[i].setActive(true);
            }
            else if (squares[i + 1].isActive() && squares[i].isNotEmpty())
            {
                squares[i].setActive(true);
            }
            else
                squares[i].setActive(false);
        }
    }

    protected updateInput()
    {
        if (Game.state === GAME_STATE.PlayerInputReceived)
        {
            this.gameBoard.setSquare(this.gameBoard.clickedSquare);
            Game.state = GAME_STATE.AwaitingPlayerInput;
        }
    }

    protected checkWinCondition()
    {

    }
}
var gameWindow = new GameWindow(600, 600);
var gameBoard = new LogicBoard(15, 15, gameWindow);
var game = new LogicGame(gameBoard);
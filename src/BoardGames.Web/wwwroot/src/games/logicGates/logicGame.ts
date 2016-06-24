/// <reference path="../../core/game"/>
/// <reference path="./booleanSquare"/>
/// <reference path="../../core/GameWindow"/>

class LogicGame extends Game
{
    constructor(protected gameBoard: ILogicBoard)
    {
        super(gameBoard);
        Game.state = GAME_STATE.AwaitingPlayerInput;
        this.initialize();
        this.tick();
    }

    private initialize(): void
    {
        this.gameBoard.setSquare(new PowerSquare(1, 1));
        this.gameBoard.setSquare(new InverterSquare(5, 1));
        this.gameBoard.setSquare(new LampSquare(9, 1));
        this.gameBoard.setSquare(new PipeSquare(2, 1));
        this.gameBoard.setSquare(new PipeSquare(3, 1));
        this.gameBoard.setSquare(new PipeSquare(4, 1));
        this.gameBoard.setSquare(new PipeSquare(6, 1));
        this.gameBoard.setSquare(new PipeSquare(7, 1));
        this.gameBoard.setSquare(new PipeSquare(8, 1));

        this.gameBoard.setSquare(new PowerSquare(1, 3));
        this.gameBoard.setSquare(new LampSquare(9, 3));
        this.gameBoard.setSquare(new PipeSquare(2, 3));
        this.gameBoard.setSquare(new PipeSquare(3, 3));
        this.gameBoard.setSquare(new PipeSquare(4, 3));
        this.gameBoard.setSquare(new PipeSquare(5, 3));
        this.gameBoard.setSquare(new PipeSquare(6, 3));
        this.gameBoard.setSquare(new PipeSquare(7, 3));
        this.gameBoard.setSquare(new PipeSquare(8, 3));
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
        var squares = this.gameBoard.getSquares();
        for (let i = 0; i < squares.length - 1; i++)
        {
            if (squares[i].type != LogicSquareType.Power)
                squares[i].setActive(false);
        }
        for (let i = 0; i < squares.length; i++)
        {
            if (squares[i - 1])
            {
                squares[i].update(squares[i - 1]);
            }
        }
        //for (let i = squares.length - 1; i > 0; i--)
        //{
        //    if (squares[i + 1] && squares[i + 1].isActive() && squares[i].isNotEmpty())
        //    {
        //        squares[i].setActive(true);
        //    }
        //}
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
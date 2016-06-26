/// <reference path="../../core/game"/>
/// <reference path="./booleanSquare"/>
/// <reference path="../../core/GameWindow"/>
/// <reference path="../../core/LogicBoard"/>

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
        this.gameBoard.setSquare(new PowerSquare(1, 1, false));
        this.gameBoard.setSquare(new PipeSquare(2, 1));
        this.gameBoard.setSquare(new PipeSquare(3, 1));
        this.gameBoard.setSquare(new PipeSquare(4, 1));
        this.gameBoard.setSquare(new InverterSquare(5, 1));

        this.gameBoard.setSquare(new PipeSquare(6, 1));
        this.gameBoard.setSquare(new PipeSquare(6, 2));
        this.gameBoard.setSquare(new PipeSquare(6, 3));
        this.gameBoard.setSquare(new PipeSquare(6, 5));
        this.gameBoard.setSquare(new PipeSquare(6, 6));
        this.gameBoard.setSquare(new PipeSquare(6, 7));

        this.gameBoard.setSquare(new PowerSquare(1, 7, false));
        this.gameBoard.setSquare(new PipeSquare(2, 7));
        this.gameBoard.setSquare(new PipeSquare(3, 7));
        this.gameBoard.setSquare(new PipeSquare(4, 7));
        this.gameBoard.setSquare(new InverterSquare(5, 7));
        this.gameBoard.setSquare(new InverterSquare(7, 4));

        this.gameBoard.setSquare(new PipeSquare(8, 4));
        this.gameBoard.setSquare(new PipeSquare(9, 4));
        this.gameBoard.setSquare(new PipeSquare(10, 4));
        this.gameBoard.setSquare(new LampSquare(11, 4));
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
        for (let i = 0; i < squares.length; i++)
        {
            let square = squares[i];
                let otherSquare = squares[i + 15];
                if (otherSquare)
                {
                    squares[i].update(otherSquare);
                }
        }

        for (let i = squares.length - 1; i >= 0; i--)
        {
            let square = squares[i];
                let otherSquare = squares[i - 15];
                if (otherSquare)
                {
                    square.update(otherSquare);
                }
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
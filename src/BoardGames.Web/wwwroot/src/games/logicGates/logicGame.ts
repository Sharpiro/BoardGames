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
        this.gameBoard.setSquare(new PowerSquare(1, 1, true));
        this.gameBoard.setSquare(new PipeSquare(2, 1));
        this.gameBoard.setSquare(new PipeSquare(3, 1));
        this.gameBoard.setSquare(new PipeSquare(4, 1));
        this.gameBoard.setSquare(new LampSquare(5, 1));

        //this.gameBoard.setSquare(new PipeSquare(6, 1));
        //this.gameBoard.setSquare(new PipeSquare(7, 1));
        //this.gameBoard.setSquare(new PipeSquare(8, 1));
        //this.gameBoard.setSquare(new PipeSquare(9, 1));
        //this.gameBoard.setSquare(new PipeSquare(10, 1));
        //this.gameBoard.setSquare(new PowerSquare(11, 1, true));

        //this.gameBoard.setSquare(new PipeSquare(5, 2));
        //this.gameBoard.setSquare(new PipeSquare(5, 3));
        //this.gameBoard.setSquare(new PipeSquare(5, 4));
        //this.gameBoard.setSquare(new PipeSquare(5, 5));
        //this.gameBoard.setSquare(new PipeSquare(5, 6));
        //this.gameBoard.setSquare(new PowerSquare(5, 7, true));

        this.gameBoard.setSquare(new PowerSquare(1, 7));
        this.gameBoard.setSquare(new PipeSquare(2, 7));
        this.gameBoard.setSquare(new PipeSquare(3, 7));
        this.gameBoard.setSquare(new PipeSquare(4, 7));
        this.gameBoard.setSquare(new LampSquare(5, 7));
        this.gameBoard.setSquare(new InverterSquare(7, 4));

        //this.gameBoard.setSquare(new PipeSquare(8, 4));
        //this.gameBoard.setSquare(new PipeSquare(9, 4));
        //this.gameBoard.setSquare(new PipeSquare(10, 4));
        //this.gameBoard.setSquare(new LampSquare(11, 4));
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
        //for (let i = 0; i < squares.length - 1; i++)
        //{
        //    //if (squares[i].type != LogicSquareType.Power)
        //    //{
        //    var square = squares[i];
        //    if (!square.isActive())
        //    {
        //        squares[i].deactivate();
        //    }
        //    //}
        //}
        for (let i = 0; i < squares.length; i++)
        {
            squares[i].update(squares, i);
        }
        //for (let i = 0; i < squares.length; i++)
        //{
        //    let square = squares[i];
        //    let otherSquare = squares[i + 15];
        //    if (otherSquare)
        //    {
        //        squares[i].update(otherSquare);
        //    }
        //}

        //for (let i = squares.length - 1; i >= 0; i--)
        //{
        //    let square = squares[i];
        //    let otherSquare = squares[i - 15];
        //    if (otherSquare)
        //    {
        //        square.update(otherSquare);
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
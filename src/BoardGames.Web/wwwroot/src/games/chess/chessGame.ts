/// <reference path="../../core/game"/>
/// <reference path="../../core/GameWindow"/>
/// <reference path="./pieces/Pawn"/>

class ChessGame extends Game
{
    constructor(protected gameBoard: GameBoard)
    {
        super(gameBoard);
        Game.state = GAME_STATE.AwaitingPlayerInput;
        this.initialize();
        this.tick();
    }

    private initialize(): void
    {
        //this.gameBoard.setSquare(new Pawn(2, 3, Owner.Empty));
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
var gameBoard = new ChessBoard(8, 8, gameWindow);
var game = new ChessGame(gameBoard);
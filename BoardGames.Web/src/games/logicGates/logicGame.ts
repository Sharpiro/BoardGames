///// <reference path="../../core/game"/>
///// <reference path="./booleanSquare"/>
///// <reference path="../../core/GameWindow"/>
///// <reference path="../../core/LogicBoard"/>

//class LogicGame extends Game
//{
//    constructor(protected gameBoard: ILogicBoard)
//    {
//        super(gameBoard);
//        Game.state = GAME_STATE.AwaitingPlayerInput;
//        this.initialize();
//        this.tick();
//    }

//    private initialize(): void
//    {
//        this.gameBoard.setSquare(new PowerSquare(1, 1, true));
//        this.gameBoard.setSquare(new PipeSquare(2, 1));
//        this.gameBoard.setSquare(new PipeSquare(3, 1));
//        this.gameBoard.setSquare(new PipeSquare(4, 1));
//        this.gameBoard.setSquare(new LampSquare(5, 1));

 
//    }

//    protected tick = (time: number = null): void =>
//    {
//        super.render();
//        this.updateInput();
//        this.update();
//        this.frameId = requestAnimationFrame(this.tick);
//    }

//    private reset()
//    {

//    }

//    protected update()
//    {
//        this.checkSquares();
//    }

//    private checkSquares()
//    {
//        var squares = this.gameBoard.getSquares();
    
      
//    }

//    protected updateInput()
//    {
//        if (Game.state === GAME_STATE.PlayerInputReceived)
//        {
//            this.gameBoard.setSquare(this.gameBoard.clickedSquare);
//            Game.state = GAME_STATE.AwaitingPlayerInput;
//        }
//    }

//    protected checkWinCondition()
//    {

//    }
//}
////var gameWindow = new GameWindow(600, 600);
////var gameBoard = new LogicBoard(15, 15, gameWindow);
////var game = new LogicGame(gameBoard);
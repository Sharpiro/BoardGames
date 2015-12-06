///<reference path="./gameWindow.ts"/>
///<reference path="./InputHandler.ts"/>
///<reference path="./gameBoard.ts"/>
///<reference path="../lib/definitions/jquery/jquery.d.ts"/>
class Game
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
        this.tick();
    }

    protected tick = (time: number = null): void =>
    {
        if (!this.startTime)
            this.startTime = time;
        this.nowTime = time - this.startTime;
        if (this.nowTime / 1000 > 3)
        {
            this.update();
            this.startTime = time;
        }
        this.updateInput();
        this.render();
        this.updateView();
        this.frameId = requestAnimationFrame(this.tick);
    }

    protected update()
    {
        if (Game.state === GAME_STATE.AwaitingPlayerUpdate)
        {
            Game.state = GAME_STATE.AiTurn;
        }
        if (Game.state === GAME_STATE.AiTurn)
        {
            this.gameBoard.activateEmptyRandomSquare();
            Game.state = GAME_STATE.AwaitingPlayerInput;
        }
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

    protected updateInput()
    {
        //if (Game.state === GAME_STATE.PlayerInputReceived)
        //{
        //    const clickedSquare = new Square(this.gameWindow.clickedBlock, OWNER.Player);
        //    this.gameBoard.playerBlocks.push(clickedSquare);
        //    this.gameBoard.insertSquare(clickedSquare);
        //    //connect4game.intpuUpdate();
        //    Game.state = GAME_STATE.AwaitingPlayerUpdate;
        //}
    }
}

enum GAME_STATE
{
    AwaitingPlayerInput, PlayerInputReceived, AwaitingPlayerUpdate, AiTurn
}


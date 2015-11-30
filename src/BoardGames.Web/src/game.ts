///<reference path="./gameWindow.ts"/>
///<reference path="./turnHandler.ts"/>
///<reference path="./gameBoard.ts"/>
///<reference path="../lib/definitions/jquery/jquery.d.ts"/>
class Game
{
    private gameWindow: GameWindow;
    private frameId: number;
    private drawables: any;
    private turnHandler: TurnHandler;
    private clickedBlocks: Array<Point>;
    private gameBoard: GameBoard;
    public static acceptingInput = true;
    public aiBlocks: Array<Point>;
    public static state: GameState;
    private startTime: number;
    private nowTime: number;

    constructor()
    {
        this.gameWindow = new GameWindow(800, 750);
        this.turnHandler = new TurnHandler();
        this.gameBoard = new GameBoard(7, 6);
        Game.state = GameState.AwaitingInput;
        this.clickedBlocks = [];
        this.drawables = [];
        this.aiBlocks = [];
        this.tick();
    }

    private tick = (time: number = null): void =>
    {
        this.update(time);
        this.render();
        this.frameId = requestAnimationFrame(this.tick);
    }

    private update(time: number)
    {
        if (Game.state === GameState.AwaitingInput)
        {
            if (this.turnHandler.isPlayerTurn && this.gameWindow.blockClicked)
            {
                this.clickedBlocks.push(this.gameWindow.clickedBlock);
                this.gameWindow.blockClicked = false;
                this.turnHandler.isPlayerTurn = false;
            }
            else if (!this.turnHandler.isPlayerTurn)
            {
                this.aiBlocks.push(this.gameBoard.GetRandomSqure());
                //this.turnHandler.isPlayerTurn = true;
                Game.state = GameState.WaitingForUpdate;
            }
        }
        if (!this.startTime)
            this.startTime = time;
        this.nowTime = time - this.startTime;
        if (this.nowTime / 1000 > 3)
        {
            console.log("updating...");
            this.turnHandler.update();
            this.startTime = time;
        }
        this.updateView();
    }

    public render(): void
    {
        this.gameWindow.clearScreen();
        this.gameBoard.render(this.gameWindow);
        this.clickedBlocks.forEach((block) =>
        {
            this.gameWindow.drawGridCircle(block.x, block.y, "black");
        });
        this.aiBlocks.forEach((block) =>
        {
            this.gameWindow.drawGridCircle(block.x, block.y, "red");
        });
        this.gameWindow.drawGridCircle(this.gameWindow.hoveredBlock.x, this.gameWindow.hoveredBlock.y);
    }

    private updateView()
    {
        $("#playerTurn").text(this.turnHandler.isPlayerTurn);
    }
}

enum GameState
{
    AwaitingInput, WaitingForUpdate
}

var game = new Game();
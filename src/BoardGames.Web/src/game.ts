///<reference path="./gameWindow.ts"/>
///<reference path="./turnHandler.ts"/>
class Game
{
    private gameWindow: GameWindow;
    private frameId: number;
    private drawables: any;
    private turnHandler: TurnHandler;
    private clickedBlocks: Array<Point>;
    public static acceptingInput = true;

    constructor()
    {
        this.turnHandler = new TurnHandler();
        this.clickedBlocks = [];
        this.gameWindow = new GameWindow(800, 400);
        this.drawables = [];
        this.tick();
    }

    private tick = (time: number = null): void =>
    {
        this.update();
        this.render();
        this.frameId = requestAnimationFrame(this.tick);
    }

    private update()
    {
        if (this.turnHandler.isPlayerTurn() && this.gameWindow.blockClicked)
        {
            this.clickedBlocks.push(this.gameWindow.clickedBlock);
            this.turnHandler.update();
            this.gameWindow.blockClicked = false;
        }
    }

    public render(): void
    {
        this.gameWindow.clearScreen();
        this.gameWindow.drawGrid();
        //for (let item in this.drawables)
        //{
        //    item.draw();
        //}
        this.clickedBlocks.forEach((block) =>
        {
            this.gameWindow.drawGridBox(block.x, block.y, "yellow");
        });
        //for (var block in this.clickedBlocks)
        //{
        //}
        this.gameWindow.drawGridBox(this.gameWindow.hoveredBlock.x, this.gameWindow.hoveredBlock.y);
    }
}

var game = new Game();
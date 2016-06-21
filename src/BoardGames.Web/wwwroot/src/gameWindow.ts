class GameWindow
{
    private canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public hoveredBlock: Point;
    public clickedBlock: Point;
    public windowDimensions: Point;
    public static width: number;
    public static height: number;

    constructor(width: number, height: number, game: Game)
    {
        this.hoveredBlock = new Point(0, 0);
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        GameWindow.width = width;
        GameWindow.height = height;
        this.windowDimensions = new Point(this.canvas.width, this.canvas.height);
        this.canvas.style.background = "#eeeeee";
        this.context = this.canvas.getContext("2d");
        this.canvas.addEventListener("mousemove", this.onMouseMove, false);
        this.canvas.addEventListener("mousedown", this.onMouseDown, false);
    }

    private onMouseDown = (e: MouseEvent): void =>
    {
        if (Game.state === GAME_STATE.AwaitingPlayerInput)
        {
            const gridPosition = this.getGridPosition(e.clientX, e.clientY);
            this.hoveredBlock.x = gridPosition.x;
            this.hoveredBlock.y = gridPosition.y;
            this.clickedBlock = new Point(this.hoveredBlock.x, this.hoveredBlock.y);
            Game.state = GAME_STATE.PlayerInputReceived;
        }
    }

    private onMouseMove = (e: MouseEvent): void =>
    {
        var gridPosition = this.getGridPosition(e.clientX, e.clientY);
        this.hoveredBlock.x = gridPosition.x;
        this.hoveredBlock.y = gridPosition.y;
    }

    public drawGridBox(x: number, y: number, color: string = "grey")
    {
        this.context.fillStyle = color;
        this.context.fillRect((x * GameBoard.xInterval) + 1, (y * GameBoard.yInterval) + 1, GameBoard.xInterval - 2, GameBoard.yInterval - 2);
    }

    public drawGridCircle(x: number, y: number, color: string = "grey")
    {
        this.context.fillStyle = color;
        this.context.beginPath();
        const radius = Math.min(GameBoard.xInterval, GameBoard.yInterval) / 2 - 1;
        this.context.arc(((x - 1) * GameBoard.xInterval) + GameBoard.xInterval / 2, ((y - 1) * GameBoard.yInterval) + GameBoard.yInterval / 2, radius, 0, 2 * Math.PI);
        this.context.fill();
        //this.context.fillRect((x * GameBoard.xInterval) + 1, (y * GameBoard.yInterval) + 1, GameBoard.xInterval - 2, GameBoard.yInterval - 2);
    }

    public drawGridCircleTop(x: number, y: number, color: string = "grey")
    {
        this.context.fillStyle = color;
        this.context.beginPath();
        const radius = Math.min(GameBoard.xInterval, GameBoard.yInterval) / 2 - 1;
        this.context.arc(((x - 1) * GameBoard.xInterval) + GameBoard.xInterval / 2, ((1 - 1) * GameBoard.yInterval) + GameBoard.yInterval / 2, radius, 0, 2 * Math.PI);
        this.context.fill();
        //this.context.fillRect((x * GameBoard.xInterval) + 1, (y * GameBoard.yInterval) + 1, GameBoard.xInterval - 2, GameBoard.yInterval - 2);
    }

    private getGridPosition(clientX: number, clientY: number): Point
    {
        const offset = this.canvas.getBoundingClientRect();
        const mouseX = clientX - offset.left;
        const mouseY = clientY - offset.top;
        const xGridBlock = Math.floor(mouseX / GameBoard.xInterval) + 1;
        const yGridBlock = Math.floor(mouseY / GameBoard.yInterval) + 1;
        return new Point(xGridBlock, yGridBlock);
    }

    public drawLine(x1: number, y1: number, x2: number, y2: number): void
    {
        this.context.strokeStyle = "black";
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();
    }

    public clearScreen()
    {
        this.context.clearRect(0, 0, this.windowDimensions.x, this.windowDimensions.y);
    }
}
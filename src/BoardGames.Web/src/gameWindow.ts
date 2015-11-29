///<reference path="./point.ts"/>
class GameWindow
{
    private canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public hoveredBlock: Point;
    public clickedBlock: Point;
    public windowDimensions: Point;
    public blockClicked: boolean;

    constructor(width: number, height: number)
    {
        this.hoveredBlock = new Point(0, 0);
        this.blockClicked = false;
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.windowDimensions = new Point(this.canvas.width, this.canvas.height);
        this.canvas.style.background = "#eeeeee";
        this.context = this.canvas.getContext("2d");
        this.canvas.addEventListener("mousemove", this.onMouseMove, false);
        this.canvas.addEventListener("mousedown", this.onMouseDown, false);
    }

    private onMouseDown = (e: MouseEvent): void =>
    {
        var gridPosition = this.getGridPosition(e.clientX, e.clientY);
        this.hoveredBlock.x = gridPosition.x;
        this.hoveredBlock.y = gridPosition.y;
        this.clickedBlock = new Point(this.hoveredBlock.x, this.hoveredBlock.y);
        if (Game.acceptingInput)
            this.blockClicked = true;
    }

    private onMouseMove = (e: MouseEvent): void =>
    {
        var gridPosition = this.getGridPosition(e.clientX, e.clientY);
        this.hoveredBlock.x = gridPosition.x;
        this.hoveredBlock.y = gridPosition.y;
    }

    public drawGridBox(x: number, y: number, color: string = "black")
    {
        this.context.fillStyle = color;
        this.context.fillRect(x * 100, y * 100, 100, 100);
    }

    private getGridPosition(clientX: number, clientY: number): Point
    {
        const offset = this.canvas.getBoundingClientRect();
        const mouseX = clientX - offset.left;
        const mouseY = clientY - offset.top;
        const xGridBlock = Math.floor(mouseX / 100);
        const yGridBlock = Math.floor(mouseY / 100);
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

    public drawGrid(segments: number = 8): void
    {
        const xInterval = this.canvas.width / segments;
        const yInterval = this.canvas.height / (segments / 2);
        for (let i = 1; i < segments; i++)
        {
            this.drawLine(i * xInterval, 0, i * xInterval, this.canvas.height);
        }

        for (let i = 1; i < segments / 2; i++)
        {
            this.drawLine(0, i * yInterval, this.canvas.width, i * yInterval);
        }
    }

    public clearScreen()
    {
        this.context.clearRect(0, 0, this.windowDimensions.x, this.windowDimensions.y);
    }
}
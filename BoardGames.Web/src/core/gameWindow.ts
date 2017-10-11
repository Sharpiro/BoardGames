export class GameWindow {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;

    constructor(public width: number, public height: number) {
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.background = "#eeeeee";
        this.context = this.canvas.getContext("2d");
    }

    public getBoundingClientRect(): any {
        return this.canvas.getBoundingClientRect();
    }

    public drawLine(x1: number, y1: number, x2: number, y2: number): void {
        this.context.strokeStyle = "black";
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();
    }

    public strokeRect(x: number, y: number, width: number, height: number, color: string = "black") {
        this.context.strokeStyle = color;
        this.context.strokeRect(x, y, width, height);
    }

    public fillRect(x: number, y: number, width: number, height: number, color: string = "black") {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);
    }

    public drawCircle(x: number, y: number, width: number, height: number, color: string = "grey") {
        this.context.fillStyle = color;
        this.context.beginPath();
        const radius = Math.min(width, height) / 2 - 1;
        this.context.arc(((x - 1) * width) + width / 2, ((y - 1) * height) + height / 2, radius, 0, 2 * Math.PI);
        this.context.fill();
    }

    public drawCircleTop(x: number, y: number, width: number, height: number, color: string = "grey") {
        this.context.fillStyle = color;
        this.context.beginPath();
        const radius = Math.min(width, height) / 2 - 1;
        this.context.arc(((x - 1) * width) + width / 2, ((1 - 1) * height) + height / 2, radius, 0, 2 * Math.PI);
        this.context.fill();
    }

    public clearScreen() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    public registerEvent(eventName: string, callback: (event: UIEvent) => void): void {
        this.canvas.addEventListener(eventName, callback, false);
    }

    public drawImage(image: HTMLImageElement, xCoord: number, yCoord: number, width: number, height: number): void {
        this.context.drawImage(image, xCoord, yCoord, width, height);
    }

    public drawSkinnyGridBox(x: number, y: number, width: number, height: number, color = "grey", isFillable = true): void {
        if (isFillable)
            this.fillRect(x, y, width, height, color);
        //this.fillRect((x * width) - width + 1, (y * height - height + (height / 4.0)) + 1, width - 2, height / 2 - 2, color);
        else
            this.strokeRect((x * width) - width + 1, (y * height - height + (height / 4.0)) + 1, width - 2, height / 2 - 2, color);
    }
}
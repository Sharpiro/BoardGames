abstract class GenericSquare
{
    constructor(public x: number, public y: number, public width: number, public height: number)
    {

    }

    public render(gameWindow: GameWindow, isFillable = true, color = "black"): void
    {
        //if (isFillable)
        //    gameWindow.fillRect(this.x, this.y, this.width, this.height, color);
        //else
        //    gameWindow.strokeRect(this.x, this.y, this.width, this.height, color);
        //gameWindow.drawGridBox(this.x, this.y, color);
    }
}
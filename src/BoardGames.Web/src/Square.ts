class Square implements IDrawable
{
    public gridLocation: Point;

    public render(gameWindow: GameWindow): void
    {
        gameWindow.drawGridBox(this.gridLocation.x, this.gridLocation.y);
    }
}
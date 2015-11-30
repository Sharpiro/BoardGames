class TurnHandler
{
    public isPlayerTurn: boolean;
    public static acceptingInput = true;

    constructor()
    {
        this.isPlayerTurn = true;
    }

    public update(): void
    {
        if (Game.state === GameState.WaitingForUpdate)
        {
            this.isPlayerTurn = !this.isPlayerTurn;
            Game.state = GameState.AwaitingInput;
            //if (this.isPlayerTurn)
            //    Game.acceptingInput = true;
            //else
            //{
            //    Game.acceptingInput = false;
            //    setTimeout(() =>
            //    {
            //        this.isPlayerTurn = !this.isPlayerTurn;
            //        Game.acceptingInput = true;
            //    }, 2500);
            //}
        }
    }
}
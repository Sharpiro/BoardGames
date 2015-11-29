class TurnHandler
{
    private playerTurn: boolean;

    constructor()
    {
        this.playerTurn = true;
    }

    public update(): void
    {
        this.playerTurn = !this.playerTurn;
        if (this.playerTurn)
            Game.acceptingInput = true;
        else
        {
            Game.acceptingInput = false;
            setTimeout(() =>
            {
                alert("turn swap");
                this.playerTurn = !this.playerTurn;
                Game.acceptingInput = true;
            }, 5000);
        }
    }

    public isPlayerTurn(): boolean
    {
        return this.playerTurn;
    }
}
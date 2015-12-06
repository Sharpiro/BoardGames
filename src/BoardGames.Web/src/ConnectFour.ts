///<reference path="./game.ts"/>
class ConnectFour extends Game
{
    constructor()
    {
        super();
    }

    protected update()
    {
        //update connect 4 stuff
        super.update();
    }

    protected updateInput()
    {
        if (Game.state === GAME_STATE.PlayerInputReceived)
        {
            const square = new Square(this.gameWindow.clickedBlock, OWNER.Player);
            this.gameBoard.playerBlocks.push(square);
            this.gameBoard.insertSquare(square);
            //connect4game.intpuUpdate();
            Game.state = GAME_STATE.AwaitingPlayerUpdate;
        }
    }
}

var game = new ConnectFour();


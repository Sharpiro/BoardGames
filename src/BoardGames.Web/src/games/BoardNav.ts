///<reference path="../game.ts"/>
class BoardNav extends Game
{
    private index = 1;
    private diagonalIndex = 0;
    private column = 0;

    constructor()
    {
        super();
        this.tick();
        Game.state = GAME_STATE.AiTurn;
    }

    protected tick = (time: number = null): void =>
    {
        if (!this.startTime)
            this.startTime = time;
        this.nowTime = time - this.startTime;
        if (this.nowTime / 1000 > .25)
        {
            this.update();
            this.startTime = time;
        }
        this.updateInput();
        super.render();
        super.updateView();
        this.frameId = requestAnimationFrame(this.tick);
    }

    private reset()
    {
        this.gameBoard.resetSquares();
        this.index = 1;
        this.diagonalIndex = 0;
        this.column = 0;
    }

    protected update()
    {
        if (this.index > 21)
        {
            //this.reset();
            Game.state = GAME_STATE.GameOver;
        }
        if (Game.state !== GAME_STATE.GameOver)
        {
            this.diagonalNav2();
            //this.diagonalNav();
        }
        else
        {
            //this.diagonalNav2();
        }
    }

    protected updateInput()
    {

    }

    protected checkWinCondition(owner: OWNER): boolean
    {
        return false;
    }

    private diagonalNav(): boolean
    {
        const boardLength = GameBoard.segmentsX * GameBoard.segmentsY;
        while (this.index <= boardLength / 2)
        {
            const modPosition = this.diagonalIndex % (this.column + 1);
            const pos = modPosition * (GameBoard.segmentsX - 1) + this.column;
            const invPos = boardLength - 1 - pos;
            const resetColumn = (this.diagonalIndex + 1) % (this.column + 1) === 0;
            if ((this.diagonalIndex !== 0 && resetColumn) || this.index === 1)
            {
                this.column++;
                this.diagonalIndex = 0;
            }
            else
            {
                this.diagonalIndex++;
            }
            console.log(pos);
            this.index++;
            this.gameBoard.updateSquare(pos, OWNER.Computer);
            this.gameBoard.updateSquare(invPos, OWNER.Player);
            break;
        }
        return false;
    }

    private diagonalNav2(): boolean
    {
        const nList = [5, 3, 1, -1, -3, -5];
        const boardLength = GameBoard.segmentsX * GameBoard.segmentsY;
        while (this.index <= boardLength / 2)
        {
            const modPosition = this.diagonalIndex % (this.column + 1);
            const pos = modPosition * (GameBoard.segmentsX - 1) + this.column;
            const invPos = boardLength - 1 - pos;
            const row = Math.ceil((pos + .01) / 7) - 1;
            const rotPos = pos + (7 * nList[row]);
            const invRotPos = boardLength - 1 - rotPos;
            const nextColumn = ((this.diagonalIndex + 1) % (this.column + 1) === 0 && this.diagonalIndex !== 0) || this.index === 1;
            if (nextColumn)
            {
                this.column++;
                this.diagonalIndex = 0;
            }
            else
                this.diagonalIndex++;
            this.index++;
            this.gameBoard.updateSquare(pos, OWNER.Computer);
            this.gameBoard.updateSquare(invPos, OWNER.Computer);
            this.gameBoard.updateSquare(rotPos, OWNER.Player);
            this.gameBoard.updateSquare(invRotPos, OWNER.Player);
            break;
        }
        return false;
    }
}

//var game = new BoardNav();
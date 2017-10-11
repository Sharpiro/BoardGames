//class ConnectFour extends Game
//{
//    private computerAi: C4Ai;

//    constructor(gameWindow: GameWindow, gameBoard: LogicBoard)
//    {
//        super(gameWindow, gameBoard);
//        this.computerAi = new C4Ai();
//        //this.replay();
//        this.tick();
//    }

//    protected tick = (time: number = null): void =>
//    {
//        if (!this.startTime)
//            this.startTime = time;
//        this.nowTime = time - this.startTime;
//        if (this.nowTime / 1000 > 3)
//        {
//            this.update();
//            this.startTime = time;
//        }
//        this.updateInput();
//        super.render();
//        super.updateView();
//        this.frameId = requestAnimationFrame(this.tick);
//    }

//    protected update()
//    {
//        if (Game.state === GAME_STATE.AwaitingPlayerUpdate)
//        {
//            const gameOver = this.checkWinCondition(OWNER.Player);
//            Game.state = gameOver ? GAME_STATE.GameOver : GAME_STATE.AiTurn;
//        }
//        if (Game.state === GAME_STATE.AiTurn)
//        {
//            const aiMovePos = this.computerAi.getMovePosition(this.gameBoard.getSquares());
//            this.gameBoard.activateLowestBlockInColumnByPos(aiMovePos, OWNER.Computer);
//            const gameOver = this.checkWinCondition(OWNER.Computer);
//            Game.state = gameOver ? GAME_STATE.GameOver : GAME_STATE.AwaitingPlayerInput;
//        }
//    }

//    private replay(): void
//    {
//        Game.state = GAME_STATE.Replay;
//        const json = prompt("Enter debug json", "");
//        if (json === "" || json === null)
//        {
//            console.error("invalid replay input");
//            return;
//        }
//        const activationOrder = JSON.parse(json) as Array<Square>;
//        for (let i = 0; i < activationOrder.length; i++)
//        {
//            const square = activationOrder[i];
//            this.gameBoard.activateSquareByPos(square.getArrayPosition(), square.owner);
//            const gameOver = this.checkWinCondition(square.owner);
//            if (gameOver)
//                console.log();
//        }
//    }

//    protected updateInput()
//    {
//        if (Game.state === GAME_STATE.PlayerInputReceived)
//        {
//            const lowestPosition = this.gameBoard.getLowestPosInColumn(this.gameWindow.clickedSquare);
//            this.gameBoard.activateSquareByPos(lowestPosition, OWNER.Player);
//            Game.state = GAME_STATE.AwaitingPlayerUpdate;
//        }
//    }

//    protected checkWinCondition(owner: OWNER): boolean
//    {
//        const squares = this.gameBoard.getSquares();
//        const horizontalWin = this.checkHorizontalWin(squares, owner);
//        const verticalWin = this.checkVerticalWin(squares, owner);
//        const diagonalWin = this.checkDiagonalWin(squares, owner);
//        if (horizontalWin || verticalWin || diagonalWin)
//        {
//            console.log("Win Type:", horizontalWin, verticalWin, diagonalWin);
//            alert(`${owner} has won the game`);
//            this.gameBoard.printActivationOrder();
//            return true;
//        }
//        return false;
//    }

//    private checkHorizontalWin(squares: Array<Square>, owner: OWNER): boolean
//    {
//        let winCounter = 0;
//        for (let i = 0; i < squares.length; i++)
//        {
//            if (i % 7 === 0)
//                winCounter = 0;
//            if (squares[i] && squares[i].owner === owner)
//            {
//                winCounter++;
//                if (winCounter === 4)
//                {
//                    return true;
//                }
//            }
//            else
//                winCounter = 0;
//        }
//        return false;
//    }

//    private checkVerticalWin(squares: Array<Square>, owner: OWNER): boolean
//    {
//        let winCounter = 0;
//        let column = 0;
//        for (let i = 0; i < squares.length; i++)
//        {
//            const j = i % LogicBoard.segmentsY;
//            const pos = (j * LogicBoard.segmentsX) + column;
//            if (i > 1 && (i + 1) % LogicBoard.segmentsY === 0)
//                column++;
//            if (squares[pos] && squares[pos].owner === owner)
//            {
//                winCounter++;
//                if (winCounter === 4)
//                {
//                    return true;
//                }
//            }
//            else
//                winCounter = 0;
//        }
//        return false;
//    }

//    private checkDiagonalWin(squares: Array<Square>, owner: OWNER): boolean
//    {
//        let column = 0;
//        let diagonalIndex = 0;
//        const nList = [5, 3, 1, -1, -3, -5];
//        let winCounters = [0, 0, 0, 0];
//        const boardLength = LogicBoard.segmentsX * LogicBoard.segmentsY;
//        for (let i = 1; i <= boardLength / 2; i++)
//        {
//            const modPosition = diagonalIndex % (column + 1);
//            const pos = modPosition * (LogicBoard.segmentsX - 1) + column;
//            const invPos = boardLength - 1 - pos;
//            const row = Math.ceil((pos + .01) / 7) - 1;
//            const rotPos = pos + (7 * nList[row]);
//            const invRotPos = boardLength - 1 - rotPos;
//            const nextColumn = ((diagonalIndex + 1) % (column + 1) === 0 && diagonalIndex !== 0) || i === 1;
//            const positions = [pos, invPos, rotPos, invRotPos];
//            for (let j = 0; j < positions.length; j++)
//            {
//                if (squares[positions[j]] && squares[positions[j]].owner === owner)
//                {
//                    winCounters[j]++;
//                    if (winCounters[j] === 4)
//                        return true;
//                }
//                else
//                    winCounters[j] = 0;
//            }
//            if (nextColumn)
//            {
//                column++;
//                diagonalIndex = 0;
//                winCounters = [0, 0, 0, 0];
//            }
//            else
//                diagonalIndex++;
//        }
//        return false;
//    }
//}
////var gameWindow = new GameWindow(800, 750, this);
////var gameBoard = new LogicBoard(7, 6);
////var game = new ConnectFour(gameWindow, gameBoard);
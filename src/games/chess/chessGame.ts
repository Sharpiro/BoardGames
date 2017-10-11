import { Game } from "../../core/game";
import { ChessSquare, ChessSquareType } from "./pieces/chessSquare";
import { ChessBoard } from "../../core/chessBoard";
import { ShallowBlue } from "./shallowBlue";
import { Owner } from "../../core/ownableSquare";
import { GameWindow } from "../../core/gameWindow";

class ChessGame extends Game
{
    public state: ChessGameState;
    public sourceSquare: ChessSquare;
    public destinationSquare: ChessSquare;

    constructor(protected gameBoard: ChessBoard, private computerAi: ShallowBlue)
    {
        super(gameBoard);
        this.state = ChessGameState.AwaitingPlayerInput;
        this.gameBoard.gameWindow.registerEvent("mousedown", this.onMouseDown);
        this.tick();
    }

    protected tick = (time: number = null): void =>
    {
        this.update();
        super.render();
        this.frameId = requestAnimationFrame(this.tick);
    }

    private reset()
    {

    }

    protected update()
    {
        this.checkHoveredAvailableMoves();
        this.computerMove();
        this.updateView(ChessGameState[this.state]);
        this.checkWinCondition()
    }

    private computerMove(): void
    {
        if (this.state !== ChessGameState.ComputerTurnStart) return;
        //this.state = ChessGameState.ComputerTurnInProgress;
        //var move = this.computerAi.getMove();
        //this.gameBoard.swapSquares(move.sourceSquare, move.destinationSquare,
        //    () => this.state = ChessGameState.AwaitingPlayerInput);
    }

    private checkHoveredAvailableMoves()
    {
        var squares = this.state === ChessGameState.AwaitingPlayerInput ?
            this.gameBoard.hoveredSquare.getAvailableMoves() :
            this.gameBoard.clickedSquare.getAvailableMoves();
        this.gameBoard.deHighlightSquares();
        this.gameBoard.highlightSquares(squares);
    }

    protected checkWinCondition()
    {
        var kingSquares = this.gameBoard.getSquares().filter(s => s.squreType === ChessSquareType.King);
        if (kingSquares.length === 2) return;
        this.state = ChessGameState.GameOver;
    }

    private onMouseDown = (e: MouseEvent): void =>
    {
        const gridPosition = this.gameBoard.getGridPosition(e.clientX, e.clientY);
        this.gameBoard.hoveredSquare = this.gameBoard.getSquare(gridPosition.x, gridPosition.y);
        this.gameBoard.clickedSquare = this.gameBoard.hoveredSquare;
        if (this.state === ChessGameState.AwaitingPlayerInput)
        {
            if (this.gameBoard.clickedSquare.owner !== Owner.Player) return;
            this.sourceSquare = this.gameBoard.clickedSquare;
            let availableMoves = this.sourceSquare.getAvailableMoves()
            if (availableMoves.length === 0) return;
            this.state = ChessGameState.SourceSquareClicked;
        }
        else if (this.state === ChessGameState.SourceSquareClicked)
        {
            this.destinationSquare = this.gameBoard.clickedSquare;
            let availableMoves = this.sourceSquare.getAvailableMoves()
            if (!availableMoves.some(s => s.equals(this.destinationSquare)))
            {
                this.state = ChessGameState.AwaitingPlayerInput;
                return;
            }

            this.gameBoard.swapSquares(this.sourceSquare, this.destinationSquare,
                //() => this.state = ChessGameState.ComputerTurnStart);
                () => this.state = ChessGameState.AwaitingPlayerInput);
        }
    }
}

enum ChessGameState
{
    AwaitingPlayerInput, SourceSquareClicked, ComputerTurnStart, ComputerTurnInProgress, GameOver
}

var gameWindow = new GameWindow(600, 600);
var gameBoard = new ChessBoard(8, 8, gameWindow);
var shallowBlue = new ShallowBlue(gameBoard);
var game = new ChessGame(gameBoard, shallowBlue);
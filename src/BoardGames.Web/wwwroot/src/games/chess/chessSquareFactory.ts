/// <reference path="./pieces/Rook"/>
/// <reference path="./pieces/Knight"/>
/// <reference path="./pieces/Bishop"/>

class ChessSquareFactory
{
    private static whiteRookSrc = "/content/pieces/whiteRook.png";
    private static whiteKnightSrc = "/content/pieces/whiteKnight.png";
    private static whiteBishopSrc = "/content/pieces/WhiteBishop.png";
    private static whiteKingSrc = "/content/pieces/whiteKing.png";
    private static whiteQueenSrc = "/content/pieces/WhiteQueen.png";
    private static whitePawnSrc = "/content/pieces/WhitePawn.png";

    private static blackRookSrc = "/content/pieces/BlackRook.png";
    private static blackKnightSrc = "/content/pieces/BlackKnight.png";
    private static blackBishopSrc = "/content/pieces/blackBishop.png";
    private static blackKingSrc = "/content/pieces/BlackKing.png";
    private static blackQueenSrc = "/content/pieces/blackQueen.png";
    private static blackPawnSrc = "/content/pieces/blackPawn.png";

    public static getSquares(gameBoard: GameBoard<ChessSquare>, squaresX: number, squaresY: number, squareWidth: number, squareHeight: number): ChessSquare[]
    {
        //white icons
        const whiteRookIcon = new Image(squareWidth, squareHeight);
        whiteRookIcon.src = this.whiteRookSrc;
        const whiteKnightIcon = new Image(squareWidth, squareHeight);
        whiteKnightIcon.src = this.whiteKnightSrc;
        const whiteBishopIcon = new Image(squareWidth, squareHeight);
        whiteBishopIcon.src = this.whiteBishopSrc;
        const whiteKingIcon = new Image(squareWidth, squareHeight);
        whiteKingIcon.src = this.whiteKingSrc;
        const whiteQueenIcon = new Image(squareWidth, squareHeight);
        whiteQueenIcon.src = this.whiteQueenSrc;
        const whitePawnIcon = new Image(squareWidth, squareHeight);
        whitePawnIcon.src = this.whitePawnSrc;

        //black icons
        const blackRookIcon = new Image(squareWidth, squareHeight);
        blackRookIcon.src = this.blackRookSrc;
        const blackKnightIcon = new Image(squareWidth, squareHeight);
        blackKnightIcon.src = this.blackKnightSrc;
        const blackBishopIcon = new Image(squareWidth, squareHeight);
        blackBishopIcon.src = this.blackBishopSrc;
        const blackKingIcon = new Image(squareWidth, squareHeight);
        blackKingIcon.src = this.blackKingSrc;
        const blackQueenIcon = new Image(squareWidth, squareHeight);
        blackQueenIcon.src = this.blackQueenSrc;
        const blackPawnIcon = new Image(squareWidth, squareHeight);
        blackPawnIcon.src = this.blackPawnSrc;

        let pieces: ChessSquare[] = [
            //white misc
            new Rook(gameBoard, whiteRookIcon, 1, 1, Owner.Player),
            new Knight(gameBoard, whiteKnightIcon, 4, 4, Owner.Player),
            new Bishop(gameBoard, whiteBishopIcon, 3, 1, Owner.Player),
            new Pawn(gameBoard, whiteKingIcon, 4, 1, Owner.Player),
            new Pawn(gameBoard, whiteQueenIcon, 5, 1, Owner.Player),
            new Bishop(gameBoard, whiteBishopIcon, 6, 1, Owner.Player),
            new Knight(gameBoard, whiteKnightIcon, 7, 1, Owner.Player),
            new Rook(gameBoard, whiteRookIcon, 8, 1, Owner.Player),

            //white pawns
            new Pawn(gameBoard, whitePawnIcon, 1, 2, Owner.Player),
            new Pawn(gameBoard, whitePawnIcon, 2, 2, Owner.Player),
            new Pawn(gameBoard, whitePawnIcon, 3, 2, Owner.Player),
            new Pawn(gameBoard, whitePawnIcon, 4, 2, Owner.Player),
            new Pawn(gameBoard, whitePawnIcon, 5, 2, Owner.Player),
            new Pawn(gameBoard, whitePawnIcon, 6, 2, Owner.Player),
            new Pawn(gameBoard, whitePawnIcon, 7, 2, Owner.Player),
            new Pawn(gameBoard, whitePawnIcon, 8, 2, Owner.Player),

            //black pawns
            new Pawn(gameBoard, blackPawnIcon, 1, 7, Owner.Computer),
            new Pawn(gameBoard, blackPawnIcon, 2, 7, Owner.Computer),
            new Pawn(gameBoard, blackPawnIcon, 3, 7, Owner.Computer),
            new Pawn(gameBoard, blackPawnIcon, 4, 7, Owner.Computer),
            new Pawn(gameBoard, blackPawnIcon, 5, 7, Owner.Computer),
            new Pawn(gameBoard, blackPawnIcon, 6, 7, Owner.Computer),
            new Pawn(gameBoard, blackPawnIcon, 7, 7, Owner.Computer),
            new Pawn(gameBoard, blackPawnIcon, 8, 7, Owner.Computer),

            //black misc
            new Rook(gameBoard, blackRookIcon, 1, 8, Owner.Player),
            new Knight(gameBoard, blackKnightIcon, 2, 8, Owner.Player),
            new Bishop(gameBoard, blackBishopIcon, 3, 8, Owner.Player),
            new Pawn(gameBoard, blackKingIcon, 4, 8, Owner.Player),
            new Pawn(gameBoard, blackQueenIcon, 5, 8, Owner.Player),
            new Bishop(gameBoard, blackBishopIcon, 6, 8, Owner.Player),
            new Knight(gameBoard, blackKnightIcon, 7, 8, Owner.Player),
            new Rook(gameBoard, blackRookIcon, 8, 8, Owner.Player),
        ];

        let allSquares: ChessSquare[] = [];
        for (let i = 0; i < squaresY; i++) 
        {
            for (let j = 0; j < squaresX; j++)
            {
                let x = pieces.filter(s => s.gridX === j + 1 && s.gridY === i + 1)[0];
                let y = x !== undefined ? x : new EmptyChessSquare(gameBoard, j + 1, i + 1);
                allSquares.push(y);
            }
        }

        return allSquares;
    }
}
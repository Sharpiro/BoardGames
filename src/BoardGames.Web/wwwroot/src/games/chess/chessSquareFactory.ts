class ChessSquareFactory
{
    private static whitePawnSrc = "/content/pieces/WhitePawn.png";

    public static getSquares(squaresX: number, squaresY: number, squareWidth: number, squareHeight: number): BoardSquare[]
    {
        const whitePawnIcon = new Image(squareWidth, squareHeight);
        whitePawnIcon.src = this.whitePawnSrc;

        var squares: BoardSquare[] = [];
        for (let i = 0; i < squaresY; i++) 
        {
            for (let j = 0; j < squaresX; j++)
            {
                squares.push(new PlayerSquare(j + 1, i + 1));
            }
        }
        squares[0] = new Pawn(whitePawnIcon, 1, 1, Owner.Player);
        squares[1] = new Pawn(whitePawnIcon, 2, 1, Owner.Player);
        squares[2] = new Pawn(whitePawnIcon, 3, 1, Owner.Player);
        squares[3] = new Pawn(whitePawnIcon, 4, 1, Owner.Player);
        squares[4] = new Pawn(whitePawnIcon, 5, 1, Owner.Player);
        squares[5] = new Pawn(whitePawnIcon, 6, 1, Owner.Player);
        squares[6] = new Pawn(whitePawnIcon, 7, 1, Owner.Player);
        squares[7] = new Pawn(whitePawnIcon, 8, 1, Owner.Player);

        return squares;
    }
}
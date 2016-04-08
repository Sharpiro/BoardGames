///<reference path="./Square.ts"/>
class GameBoard
{
    public static segmentsX: number;
    public static segmentsY: number;
    public static xInterval: number;
    public static yInterval: number;
    private playerBlocks = [] as Array<Square>;
    private aiBlocks = [] as Array<Square>;
    private squares = [] as Array<Square>;
    private activationOrder = [] as Array<Square>;

    constructor(segmentsX: number, segmentsY: number)
    {
        GameBoard.segmentsX = segmentsX;
        GameBoard.segmentsY = segmentsY;
        GameBoard.xInterval = GameWindow.width / segmentsX;
        GameBoard.yInterval = GameWindow.height / segmentsY;
        for (let i = 0; i < segmentsY; i++) 
        {
            for (let j = 0; j < segmentsX; j++)
            {
                this.squares.push(new Square(new Point(j + 1, i + 1), OWNER.Empty));
            }
        }
    }

    public render(gameWindow: GameWindow): void
    {
        for (let i = 1; i < GameBoard.segmentsX; i++)
        {
            gameWindow.drawLine(i * GameBoard.xInterval, 0, i * GameBoard.xInterval, GameWindow.height);
        }

        for (let i = 1; i < GameBoard.segmentsY; i++)
        {
            gameWindow.drawLine(0, i * GameBoard.yInterval, GameWindow.width, i * GameBoard.yInterval);
        }
        this.squares.filter((square) => square.owner !== OWNER.Empty).forEach((block) => block.render(gameWindow));
    }

    public getSquares(): Array<Square>
    {
        return this.squares.slice();
    }

    public getPosition(coords: Point): number
    {
        const pos = ((coords.y - 1) * (GameBoard.segmentsX)) + (coords.x - 1);
        return pos;
    }

    public getCoords(pos: number): Point
    {
        //const mod = pos % GameBoard.segmentsY;
        //const coords = null;
        return null;
    }

    public getRandomEmptyPoint(): Point
    {
        const emptySquares = this.squares.filter((square) => square.owner === OWNER.Empty);
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        return emptySquares[randomIndex].gridPosition;
    }

    public static getRandomEmptyPos(squares: Array<Square>): number
    {
        const emptySquares = squares.filter((square) => square.owner === OWNER.Empty);
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        return randomIndex;
    }

    public getLowestBlockInColumn(point: Point): number
    {
        const column = point.x;
        const bottomPosition = column + (GameBoard.segmentsX * (GameBoard.segmentsY - 1)) - 1;
        let isTaken = true;
        let lowestPointPosition: number = null;
        for (let i = bottomPosition; isTaken; i -= GameBoard.segmentsX)
        {
            if (this.squareIsEmptyPos(i))
            {
                lowestPointPosition = i;
                isTaken = false;
            }
        }
        return lowestPointPosition;
    }

    public getLowestBlockInColumnPos(pos: number): number
    {
        const column = pos % GameBoard.segmentsX;
        const bottomPosition = column + (GameBoard.segmentsX * (GameBoard.segmentsY - 1));
        let isTaken = true;
        let lowestPointPosition: number = null;
        for (let i = bottomPosition; isTaken; i -= GameBoard.segmentsX)
        {
            if (this.squareIsEmptyPos(i))
            {
                lowestPointPosition = i;
                isTaken = false;
            }
        }
        return lowestPointPosition;
    }

    public getSquare(position: number): Square
    {
        return this.squares[position];
    }

    public getActivationOrder(): Array<Square>
    {
        return this.activationOrder;
    }

    public squareIsEmpty(point: Point): boolean
    {
        const arrayPos = (point.y - 1) * GameBoard.segmentsX + point.x - 1;
        return this.squares[arrayPos].owner === OWNER.Empty;
    }

    public squareIsEmptyPos(position: number): boolean
    {
        return this.squares[position].owner === OWNER.Empty;
    }

    public updateSquare(position: number, owner: OWNER): void
    {
        const square = this.squares[position];
        square.owner = owner;
        this.activationOrder.push(square);
    }

    public updateColumn(pos: number, owner: OWNER): void
    {
        const coords = pos;
        const columnPos = this.getLowestBlockInColumnPos(coords);
        const square = this.squares[columnPos];
        square.owner = owner;
        this.activationOrder.push(square);
    }

    public resetSquares(): void
    {
        this.squares.forEach((square) =>
        {
            square.owner = OWNER.Empty;
        });
    }

    public insertSquare(square: Square): void
    {
        const arrayPos = (square.gridPosition.y - 1) * GameBoard.segmentsX + square.gridPosition.x - 1;
        console.log(arrayPos);
        this.squares[arrayPos] = square;
    }

    public activateEmptyRandomSquare(): void
    {
        const blockPosition = this.getRandomEmptyPoint();
        const square = new Square(blockPosition, OWNER.Computer);
        this.aiBlocks.push(square);
        this.insertSquare(square);
    }

    public activateRandomColumn(owner: OWNER): void
    {
        const randomPoint = this.getRandomEmptyPoint();
        const pos = this.getLowestBlockInColumn(randomPoint);
        this.updateSquare(pos, owner);
    }

    public printActivationOrder(): void
    {
        console.log("---------Player----------");
        this.activationOrder.filter(square => square.owner === OWNER.Player).forEach((square, index) =>
        {
            console.log(`${index + 1}: ${square.toString() }`);
        });
        console.log("---------Computer--------");
        this.activationOrder.filter(square => square.owner === OWNER.Computer).forEach((square, index) =>
        {
            console.log(`${index + 1}: ${square.toString() }`);
        });
        console.log(JSON.stringify(this.activationOrder));
    }
}
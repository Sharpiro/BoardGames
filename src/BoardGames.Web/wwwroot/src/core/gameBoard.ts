//class LogicBoard
//{
//    public static segmentsX: number;
//    public static segmentsY: number;
//    public static xInterval: number;
//    public static yInterval: number;
//    private squares = [] as Array<Square>;
//    private activationOrder = [] as Array<Square>;

//    constructor(segmentsX: number, segmentsY: number)
//    {
//        LogicBoard.segmentsX = segmentsX;
//        LogicBoard.segmentsY = segmentsY;
//        LogicBoard.xInterval = GameWindow.width / segmentsX;
//        LogicBoard.yInterval = GameWindow.height / segmentsY;
//        for (let i = 0; i < segmentsY; i++) 
//        {
//            for (let j = 0; j < segmentsX; j++)
//            {
//                this.squares.push(new Square(new Point(j + 1, i + 1)));
//            }
//        }
//    }

//    public render(gameWindow: GameWindow): void
//    {
//        for (let i = 1; i < LogicBoard.segmentsX; i++)
//        {
//            gameWindow.drawLine(i * LogicBoard.xInterval, 0, i * LogicBoard.xInterval, GameWindow.height);
//        }

//        for (let i = 1; i < LogicBoard.segmentsY; i++)
//        {
//            gameWindow.drawLine(0, i * LogicBoard.yInterval, GameWindow.width, i * LogicBoard.yInterval);
//        }
//        this.squares.filter(block => block.owner !== OWNER.Empty).forEach((block) => block.render(gameWindow));
//    }

//    public getSquares(): Array<Square>
//    {
//        return this.squares.slice();
//    }

//    public getSquare(position: number): Square
//    {
//        return this.squares[position];
//    }

//    public getRandomEmptySquare(): Square
//    {
//        const emptySquares = this.squares.filter((square) => square.owner === OWNER.Empty);
//        const randomIndex = Math.floor(Math.random() * emptySquares.length);
//        return emptySquares[randomIndex];
//    }

//    public static getRandomEmptyPos(squares: Array<Square>): number
//    {
//        const emptySquares = squares.filter((square) => square.owner === OWNER.Empty);
//        const randomIndex = Math.floor(Math.random() * emptySquares.length);
//        return randomIndex;
//    }

//    public getLowestPosInColumn(square: Square): number
//    {
//        const column = square.gridPosition.x;
//        const bottomPosition = column + (LogicBoard.segmentsX * (LogicBoard.segmentsY - 1)) - 1;
//        let isTaken = true;
//        let lowestPointPosition: number = null;
//        for (let i = bottomPosition; isTaken; i -= LogicBoard.segmentsX)
//        {
//            if (this.squareIsEmptyPos(i))
//            {
//                lowestPointPosition = i;
//                isTaken = false;
//            }
//        }
//        return lowestPointPosition;
//    }

//    public getLowestSquareInColumnPos(pos: number): number
//    {
//        const column = pos % LogicBoard.segmentsX;
//        const bottomPosition = column + (LogicBoard.segmentsX * (LogicBoard.segmentsY - 1));
//        let isTaken = true;
//        let lowestPointPosition: number = null;
//        for (let i = bottomPosition; isTaken; i -= LogicBoard.segmentsX)
//        {
//            if (this.squareIsEmptyPos(i))
//            {
//                lowestPointPosition = i;
//                isTaken = false;
//            }
//        }
//        return lowestPointPosition;
//    }

//    public getActivationOrder(): Array<Square>
//    {
//        return this.activationOrder;
//    }

//    public squareIsEmpty(point: Point): boolean
//    {
//        const arrayPos = (point.y - 1) * LogicBoard.segmentsX + point.x - 1;
//        return this.squares[arrayPos].owner === OWNER.Empty;
//    }

//    public squareIsEmptyPos(position: number): boolean
//    {
//        return this.squares[position].owner === OWNER.Empty;
//    }

//    public activateSquareByPos(position: number, owner: OWNER): void
//    {
//        const square = this.squares[position];
//        square.owner = owner;
//        this.activationOrder.push(square);
//    }

//    public activateSquare(square: Square): void
//    {
//        const arrayPos = (square.gridPosition.y - 1) * LogicBoard.segmentsX + square.gridPosition.x - 1;
//        this.squares[arrayPos] = square;
//        this.activationOrder.push(square);
//    }

//    public activateLowestBlockInColumnByPos(pos: number, owner: OWNER): void
//    {
//        const coords = pos;
//        const columnPos = this.getLowestSquareInColumnPos(coords);
//        const square = this.squares[columnPos];
//        square.owner = owner;
//        this.activationOrder.push(square);
//    }

//    public activateLowestSquareInRandomColumn(owner: OWNER): void
//    {
//        const randomPoint = this.getRandomEmptySquare();
//        const pos = this.getLowestPosInColumn(randomPoint);
//        this.activateSquareByPos(pos, owner);
//    }

//    public activateEmptyRandomSquare(): void
//    {
//        const square = this.getRandomEmptySquare();
//        square.owner = OWNER.Computer;
//        this.activateSquare(square);
//        this.activationOrder.push(square);
//    }

//    public resetSquares(): void
//    {
//        this.squares.forEach((square) =>
//        {
//            square.owner = OWNER.Empty;
//        });
//    }

//    public printActivationOrder(): void
//    {
//        console.log("---------Player----------");
//        this.activationOrder.filter(square => square.owner === OWNER.Player).forEach((square, index) =>
//        {
//            console.log(`${index + 1}: ${square.toString() }`);
//        });
//        console.log("---------Computer--------");
//        this.activationOrder.filter(square => square.owner === OWNER.Computer).forEach((square, index) =>
//        {
//            console.log(`${index + 1}: ${square.toString() }`);
//        });
//        console.log(JSON.stringify(this.activationOrder));
//    }
//}
//class EmptySquare extends LogicSquare
//{
//    constructor(gridX: number, gridY: number)
//    {
//        super(gridX, gridY, LogicSquareType.Empty);
//    }

//    public render(gameBoard: IGameBoard): void
//    {
//        //draw nothing
//    }

//    public update(squares: LogicSquare[], index: number): void
//    {
//        this.deactivate();
//    }
//}

//class LampSquare extends LogicSquare
//{
//    constructor(gridX: number, gridY: number, isActive = false)
//    {
//        super(gridX, gridY, LogicSquareType.Lamp, isActive);
//        this.power = 4;
//    }

//    public render(gameBoard: IGameBoard): void
//    {
//        if (this.isActive())
//            gameBoard.drawGridBox(this.GridX, this.GridY, "yellow");
//        else
//            gameBoard.drawGridBox(this.GridX, this.GridY, "white");
//    }

//    public update(squares: LogicSquare[], index: number): void
//    {
//        //if (this.isActive())
//        //    return;
//        let otherSquare = squares[index - 1];
//        if (otherSquare && otherSquare.isActive())
//        {
//            this.activate(otherSquare.powerSource);
//            //otherSquare = squares[index + 15];
//            //if (otherSquare)
//            //    otherSquare.activate(this.powerSource);
//            //if (otherSquare.type === LogicSquareType.Lamp)
//            //{
//            //    this.power = otherSquare.power - 1;
//            //}
//        }
//    }
//}

//class PowerSquare extends LogicSquare
//{
//    constructor(gridX: number, gridY: number, isActive = true)
//    {
//        super(gridX, gridY, LogicSquareType.Power, isActive);
//        this.power = 5;
//        this.powerSource = this;
//    }

//    public render(gameBoard: IGameBoard): void
//    {
//        if (this.isActive())
//            gameBoard.drawGridBox(this.GridX, this.GridY, "red");
//        else
//            gameBoard.drawGridBox(this.GridX, this.GridY, "red", false);
//    }

//    public update(squares: LogicSquare[], index: number): void
//    {

//    }
//}

//class PipeSquare extends LogicSquare
//{
//    constructor(gridX: number, gridY: number, isActive = false)
//    {
//        super(gridX, gridY, LogicSquareType.Pipe, isActive);
//    }

//    public render(gameBoard: IGameBoard): void
//    {
//        if (this.isActive())
//            gameBoard.drawSkinnyGridBox(this.GridX, this.GridY, "red", true);
//        else
//            gameBoard.drawSkinnyGridBox(this.GridX, this.GridY, "red", false);
//    }

//    public update(squares: LogicSquare[], index: number): void
//    {
//        if (this.isActive())
//            return;
//        let otherSquare = squares[index - 1];
//        if (otherSquare && otherSquare.isActive())
//        {
//            this.activate(otherSquare.powerSource);
//            this.power = otherSquare.power - 1;
//        }
//        otherSquare = squares[index + 1];
//        if (otherSquare && otherSquare.isActive())
//        {
//            this.activate(otherSquare.powerSource);
//            this.power = otherSquare.power - 1;
//        }
//        otherSquare = squares[index - 15];
//        if (otherSquare && otherSquare.isActive())
//        {
//            this.activate(otherSquare.powerSource);
//            this.power = otherSquare.power - 1;
//        }
//        otherSquare = squares[index + 15];
//        if (otherSquare && otherSquare.isActive())
//        {
//            this.activate(otherSquare.powerSource);
//            this.power = otherSquare.power - 1;
//        }
//    }
//}

//class RepeaterSquare extends LogicSquare
//{
//    private basePower = this.power;

//    constructor(gridX: number, gridY: number, isActive = false)
//    {
//        super(gridX, gridY, LogicSquareType.Pipe, isActive);
//    }

//    public render(gameBoard: IGameBoard): void
//    {
//        if (this.isActive())
//            gameBoard.drawGridBox(this.GridX, this.GridY, "#66CD00");
//        else
//            gameBoard.drawGridBox(this.GridX, this.GridY, "#66CD00", false);
//    }

//    public update(squares: LogicSquare[], index: number): void
//    {
//        let otherSquare = squares[index - 1];
//        if (otherSquare && otherSquare.isActive())
//        {
//            this.activate(otherSquare.powerSource);
//            this.power = this.basePower + otherSquare.power;
//        }
//    }
//}

//class InverterSquare extends LogicSquare
//{
//    constructor(gridX: number, gridY: number, isActive = false)
//    {
//        super(gridX, gridY, LogicSquareType.Pipe, isActive);
//    }

//    public render(gameBoard: IGameBoard): void
//    {
//        gameBoard.drawGridBox(this.GridX, this.GridY, "orange");
//    }

//    public update(squares: LogicSquare[], index: number): void
//    {
//        var otherSquare = squares[index - 1];
//        if (otherSquare && !otherSquare.isActive())
//            this.activate(otherSquare.powerSource);
//    }
//}
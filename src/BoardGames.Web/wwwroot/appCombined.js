var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game = (function () {
    function Game(gameWindow, gameBoard) {
        this.gameWindow = gameWindow;
        this.gameBoard = gameBoard;
        this.inputHandler = new InputHandler();
        Game.state = GAME_STATE.AwaitingPlayerInput;
    }
    Game.prototype.render = function () {
        this.gameWindow.clearScreen();
        this.gameBoard.render(this.gameWindow);
        if (Game.state === GAME_STATE.AwaitingPlayerInput)
            this.gameBoard.drawSkinnyGridBox(this.gameBoard.hoveredSquare.gridPosition.x, this.gameBoard.hoveredSquare.gridPosition.y);
    };
    Game.prototype.updateView = function () {
        $("#playerTurn").text(Game.state);
    };
    return Game;
}());
var GAME_STATE;
(function (GAME_STATE) {
    GAME_STATE[GAME_STATE["AwaitingPlayerInput"] = 0] = "AwaitingPlayerInput";
    GAME_STATE[GAME_STATE["PlayerInputReceived"] = 1] = "PlayerInputReceived";
    GAME_STATE[GAME_STATE["AwaitingPlayerUpdate"] = 2] = "AwaitingPlayerUpdate";
    GAME_STATE[GAME_STATE["AiTurn"] = 3] = "AiTurn";
    GAME_STATE[GAME_STATE["GameOver"] = 4] = "GameOver";
    GAME_STATE[GAME_STATE["Replay"] = 5] = "Replay";
})(GAME_STATE || (GAME_STATE = {}));
var GameWindow = (function () {
    function GameWindow(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.background = "#eeeeee";
        this.context = this.canvas.getContext("2d");
    }
    GameWindow.prototype.getBoundingClientRect = function () {
        return this.canvas.getBoundingClientRect();
    };
    GameWindow.prototype.drawLine = function (x1, y1, x2, y2) {
        this.context.strokeStyle = "black";
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();
    };
    GameWindow.prototype.strokeRect = function (x, y, width, height, color) {
        if (color === void 0) { color = "black"; }
        this.context.strokeStyle = color;
        this.context.strokeRect(x, y, width, height);
    };
    GameWindow.prototype.fillRect = function (x, y, width, height, color) {
        if (color === void 0) { color = "black"; }
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);
    };
    GameWindow.prototype.drawCircle = function (x, y, width, height, color) {
        if (color === void 0) { color = "grey"; }
        this.context.fillStyle = color;
        this.context.beginPath();
        var radius = Math.min(width, height) / 2 - 1;
        this.context.arc(((x - 1) * width) + width / 2, ((y - 1) * height) + height / 2, radius, 0, 2 * Math.PI);
        this.context.fill();
    };
    GameWindow.prototype.drawCircleTop = function (x, y, width, height, color) {
        if (color === void 0) { color = "grey"; }
        this.context.fillStyle = color;
        this.context.beginPath();
        var radius = Math.min(width, height) / 2 - 1;
        this.context.arc(((x - 1) * width) + width / 2, ((1 - 1) * height) + height / 2, radius, 0, 2 * Math.PI);
        this.context.fill();
    };
    GameWindow.prototype.clearScreen = function () {
        this.context.clearRect(0, 0, this.width, this.height);
    };
    return GameWindow;
}());
var GenericSquare = (function () {
    function GenericSquare(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    GenericSquare.prototype.render = function (gameWindow, isFillable, color) {
        if (isFillable === void 0) { isFillable = true; }
        if (color === void 0) { color = "black"; }
    };
    return GenericSquare;
}());
var InputHandler = (function () {
    function InputHandler() {
    }
    InputHandler.prototype.update = function (clickedBlocks) {
    };
    return InputHandler;
}());
var LogicBoard = (function () {
    function LogicBoard(segmentsX, segmentsY, _gameWindow) {
        var _this = this;
        this._gameWindow = _gameWindow;
        this.squares = [];
        this.activationOrder = [];
        this.onMouseDown = function (e) {
            if (Game.state === GAME_STATE.AwaitingPlayerInput) {
                var gridPosition = _this.getGridPosition(e.clientX, e.clientY);
                _this.hoveredSquare.gridPosition.x = gridPosition.x;
                _this.hoveredSquare.gridPosition.y = gridPosition.y;
                var point = new Point(_this.hoveredSquare.gridPosition.x, _this.hoveredSquare.gridPosition.y);
                _this.clickedSquare = new Square(point, OWNER.Player);
                console.log("[" + point.x + ", " + point.y + "] - " + _this.getArrayPosition(_this.clickedSquare));
                Game.state = GAME_STATE.PlayerInputReceived;
            }
        };
        this.onMouseMove = function (e) {
            var gridPosition = _this.getGridPosition(e.clientX, e.clientY);
            _this.hoveredSquare.gridPosition.x = gridPosition.x;
            _this.hoveredSquare.gridPosition.y = gridPosition.y;
        };
        this.segmentsX = segmentsX;
        this.segmentsY = segmentsY;
        this.xInterval = _gameWindow.width / segmentsX;
        this.yInterval = _gameWindow.height / segmentsY;
        this._gameWindow.canvas.addEventListener("mousemove", this.onMouseMove, false);
        this._gameWindow.canvas.addEventListener("mousedown", this.onMouseDown, false);
        this.hoveredSquare = new Square(new Point(0, 0));
        for (var i = 0; i < segmentsY; i++) {
            for (var j = 0; j < segmentsX; j++) {
                this.squares.push(new Square(new Point(j + 1, i + 1)));
            }
        }
    }
    LogicBoard.prototype.getArrayPosition = function (square) {
        var pos = ((square.gridPosition.y - 1) * (this.segmentsX)) + (square.gridPosition.x - 1);
        return pos;
    };
    LogicBoard.prototype.getGridPosition = function (clientX, clientY) {
        var offset = this._gameWindow.getBoundingClientRect();
        var mouseX = clientX - offset.left;
        var mouseY = clientY - offset.top;
        var xGridBlock = Math.floor(mouseX / this.xInterval) + 1;
        var yGridBlock = Math.floor(mouseY / this.yInterval) + 1;
        return new Point(xGridBlock, yGridBlock);
    };
    LogicBoard.prototype.render = function () {
        var _this = this;
        for (var i = 1; i < this.segmentsX; i++) {
            this._gameWindow.drawLine(i * this.xInterval, 0, i * this.xInterval, this._gameWindow.height);
        }
        for (var i = 1; i < this.segmentsY; i++) {
            this._gameWindow.drawLine(0, i * this.yInterval, this._gameWindow.width, i * this.yInterval);
        }
        this.squares.forEach(function (square) { return square.render(_this); });
    };
    LogicBoard.prototype.getSquares = function () {
        return this.squares.slice();
    };
    LogicBoard.prototype.getSquare = function (arrayPos) {
        return this.squares[arrayPos];
    };
    LogicBoard.prototype.activateSquare = function (square) {
        var arrayPos = (square.gridPosition.y - 1) * this.segmentsX + square.gridPosition.x - 1;
        this.squares[arrayPos] = square;
        this.activationOrder.push(square);
    };
    LogicBoard.prototype.drawGridBox = function (x, y, color) {
        if (color === void 0) { color = "grey"; }
        this._gameWindow.fillRect((x * this.xInterval) + 1, (y * this.yInterval) + 1, this.xInterval - 2, this.yInterval - 2, color);
    };
    LogicBoard.prototype.drawSkinnyGridBox = function (x, y, color) {
        if (color === void 0) { color = "grey"; }
        this._gameWindow.fillRect((x * this.xInterval) - this.xInterval + 1, (y * this.yInterval - this.yInterval + (this.yInterval / 4.0)) + 1, this.xInterval - 2, this.yInterval / 2 - 2, color);
    };
    LogicBoard.prototype.drawGridCircle = function (x, y, color) {
        if (color === void 0) { color = "grey"; }
        this._gameWindow.drawCircle(x, y, this.xInterval, this.yInterval, color);
    };
    LogicBoard.prototype.drawGridCircleTop = function (x, y, color) {
        if (color === void 0) { color = "grey"; }
        this._gameWindow.drawCircleTop(x, y, this.xInterval, this.yInterval, color);
    };
    return LogicBoard;
}());
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.equals = function (otherPoint) {
        if (this.x === otherPoint.x && this.y === otherPoint.y) {
            return true;
        }
        return false;
    };
    return Point;
}());
var Square = (function () {
    function Square(gridPosition, owner) {
        if (owner === void 0) { owner = OWNER.Empty; }
        this.gridPosition = gridPosition;
        this.owner = owner;
    }
    Square.prototype.render = function (board) {
        var color = this.owner === OWNER.Player ? "black" : "red";
        board.drawSkinnyGridBox(this.gridPosition.x, this.gridPosition.y, color);
    };
    return Square;
}());
var OWNER;
(function (OWNER) {
    OWNER[OWNER["Empty"] = 0] = "Empty";
    OWNER[OWNER["Player"] = 1] = "Player";
    OWNER[OWNER["Computer"] = 2] = "Computer";
})(OWNER || (OWNER = {}));
var LogicSquare = (function (_super) {
    __extends(LogicSquare, _super);
    function LogicSquare(x, y, width, height, State) {
        _super.call(this, x, y, width, height);
        this.State = State;
    }
    return LogicSquare;
}(GenericSquare));
var LogicSquareType;
(function (LogicSquareType) {
    LogicSquareType[LogicSquareType["Power"] = 0] = "Power";
    LogicSquareType[LogicSquareType["Boolean"] = 1] = "Boolean";
    LogicSquareType[LogicSquareType["Pipe"] = 2] = "Pipe";
})(LogicSquareType || (LogicSquareType = {}));
var BooleanSquare = (function (_super) {
    __extends(BooleanSquare, _super);
    function BooleanSquare(x, y, width, height, isActive) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (isActive === void 0) { isActive = false; }
        _super.call(this, x, y, width, height, LogicSquareType.Boolean);
        this.isActive = isActive;
        this._isActive = false;
    }
    BooleanSquare.prototype.render = function (gameWindow) {
        _super.prototype.render.call(this, gameWindow);
    };
    return BooleanSquare;
}(LogicSquare));
var PowerSquare = (function (_super) {
    __extends(PowerSquare, _super);
    function PowerSquare(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        _super.call(this, x, y, width, height, LogicSquareType.Power);
    }
    PowerSquare.prototype.render = function (gameWindow) {
        _super.prototype.render.call(this, gameWindow, true, "red");
    };
    return PowerSquare;
}(LogicSquare));
var PipeSquare = (function (_super) {
    __extends(PipeSquare, _super);
    function PipeSquare(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        _super.call(this, x, y, width, height, LogicSquareType.Power);
    }
    PipeSquare.prototype.render = function (gameWindow) {
        _super.prototype.render.call(this, gameWindow);
    };
    return PipeSquare;
}(LogicSquare));
var LogicGates = (function (_super) {
    __extends(LogicGates, _super);
    function LogicGates(gameWindow, gameBoard) {
        var _this = this;
        _super.call(this, gameWindow, gameBoard);
        this.tick = function (time) {
            if (time === void 0) { time = null; }
            _super.prototype.render.call(_this);
            var square = new PowerSquare(1, 1, _this.gameBoard.xInterval, _this.gameBoard.yInterval);
            square.render(_this.gameWindow);
            _this.updateInput();
            _this.frameId = requestAnimationFrame(_this.tick);
        };
        Game.state = GAME_STATE.AwaitingPlayerInput;
        this.tick();
    }
    LogicGates.prototype.reset = function () {
    };
    LogicGates.prototype.update = function () {
    };
    LogicGates.prototype.updateInput = function () {
        if (Game.state === GAME_STATE.PlayerInputReceived) {
            this.gameBoard.activateSquare(this.gameBoard.clickedSquare);
            Game.state = GAME_STATE.AwaitingPlayerInput;
        }
    };
    LogicGates.prototype.checkWinCondition = function () {
    };
    return LogicGates;
}(Game));
var gameWindow = new GameWindow(600, 600);
var gameBoard = new LogicBoard(15, 15, gameWindow);
var game = new LogicGates(gameWindow, gameBoard);
//# sourceMappingURL=appCombined.js.map
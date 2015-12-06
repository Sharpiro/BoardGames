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
})();
///<reference path="./point.ts"/>
var GameWindow = (function () {
    function GameWindow(width, height, game) {
        var _this = this;
        this.onMouseDown = function (e) {
            if (Game.state === GAME_STATE.AwaitingPlayerInput) {
                var gridPosition = _this.getGridPosition(e.clientX, e.clientY);
                _this.hoveredBlock.x = gridPosition.x;
                _this.hoveredBlock.y = gridPosition.y;
                _this.clickedBlock = new Point(_this.hoveredBlock.x, _this.hoveredBlock.y);
                Game.state = GAME_STATE.PlayerInputReceived;
            }
        };
        this.onMouseMove = function (e) {
            var gridPosition = _this.getGridPosition(e.clientX, e.clientY);
            _this.hoveredBlock.x = gridPosition.x;
            _this.hoveredBlock.y = gridPosition.y;
        };
        this.hoveredBlock = new Point(0, 0);
        this.canvas = document.getElementById("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        GameWindow.width = width;
        GameWindow.height = height;
        this.windowDimensions = new Point(this.canvas.width, this.canvas.height);
        this.canvas.style.background = "#eeeeee";
        this.context = this.canvas.getContext("2d");
        this.canvas.addEventListener("mousemove", this.onMouseMove, false);
        this.canvas.addEventListener("mousedown", this.onMouseDown, false);
    }
    GameWindow.prototype.drawGridBox = function (x, y, color) {
        if (color === void 0) { color = "grey"; }
        this.context.fillStyle = color;
        this.context.fillRect((x * GameBoard.xInterval) + 1, (y * GameBoard.yInterval) + 1, GameBoard.xInterval - 2, GameBoard.yInterval - 2);
    };
    GameWindow.prototype.drawGridCircle = function (x, y, color) {
        if (color === void 0) { color = "grey"; }
        this.context.fillStyle = color;
        this.context.beginPath();
        var radius = Math.min(GameBoard.xInterval, GameBoard.yInterval) / 2 - 1;
        this.context.arc(((x - 1) * GameBoard.xInterval) + GameBoard.xInterval / 2, ((y - 1) * GameBoard.yInterval) + GameBoard.yInterval / 2, radius, 0, 2 * Math.PI);
        this.context.fill();
    };
    GameWindow.prototype.drawGridCircleTop = function (x, y, color) {
        if (color === void 0) { color = "grey"; }
        this.context.fillStyle = color;
        this.context.beginPath();
        var radius = Math.min(GameBoard.xInterval, GameBoard.yInterval) / 2 - 1;
        this.context.arc(((x - 1) * GameBoard.xInterval) + GameBoard.xInterval / 2, ((1 - 1) * GameBoard.yInterval) + GameBoard.yInterval / 2, radius, 0, 2 * Math.PI);
        this.context.fill();
    };
    GameWindow.prototype.getGridPosition = function (clientX, clientY) {
        var offset = this.canvas.getBoundingClientRect();
        var mouseX = clientX - offset.left;
        var mouseY = clientY - offset.top;
        var xGridBlock = Math.floor(mouseX / GameBoard.xInterval) + 1;
        var yGridBlock = Math.floor(mouseY / GameBoard.yInterval) + 1;
        return new Point(xGridBlock, yGridBlock);
    };
    GameWindow.prototype.drawLine = function (x1, y1, x2, y2) {
        this.context.strokeStyle = "black";
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();
    };
    GameWindow.prototype.clearScreen = function () {
        this.context.clearRect(0, 0, this.windowDimensions.x, this.windowDimensions.y);
    };
    return GameWindow;
})();
var InputHandler = (function () {
    function InputHandler() {
    }
    InputHandler.prototype.update = function (clickedBlocks) {
    };
    return InputHandler;
})();
var Square = (function () {
    function Square(gridPosition, owner) {
        this.gridPosition = gridPosition;
        this.owner = owner;
    }
    Square.prototype.render = function (gameWindow) {
        var color = this.owner === OWNER.Player ? "black" : "red";
        gameWindow.drawGridCircle(this.gridPosition.x, this.gridPosition.y, color);
    };
    return Square;
})();
var OWNER;
(function (OWNER) {
    OWNER[OWNER["Empty"] = 0] = "Empty";
    OWNER[OWNER["Player"] = 1] = "Player";
    OWNER[OWNER["Computer"] = 2] = "Computer";
})(OWNER || (OWNER = {}));
///<reference path="./Square.ts"/>
var GameBoard = (function () {
    function GameBoard(segmentsX, segmentsY) {
        this.playerBlocks = [];
        this.aiBlocks = [];
        this.squares = [];
        GameBoard.segmentsX = segmentsX;
        GameBoard.segmentsY = segmentsY;
        GameBoard.xInterval = GameWindow.width / segmentsX;
        GameBoard.yInterval = GameWindow.height / segmentsY;
        for (var i = 0; i < segmentsY; i++) {
            for (var j = 0; j < segmentsX; j++) {
                this.squares.push(new Square(new Point(j + 1, i + 1), OWNER.Empty));
            }
        }
    }
    GameBoard.prototype.render = function (gameWindow) {
        for (var i = 1; i < GameBoard.segmentsX; i++) {
            gameWindow.drawLine(i * GameBoard.xInterval, 0, i * GameBoard.xInterval, GameWindow.height);
        }
        for (var i = 1; i < GameBoard.segmentsY; i++) {
            gameWindow.drawLine(0, i * GameBoard.yInterval, GameWindow.width, i * GameBoard.yInterval);
        }
        this.playerBlocks.forEach(function (block) {
            block.render(gameWindow);
        });
        this.aiBlocks.forEach(function (block) {
            block.render(gameWindow);
        });
    };
    GameBoard.prototype.getRandomEmptySquare = function () {
        var emptySquares = this.squares.filter(function (value) { return value.owner === OWNER.Empty; });
        var randomIndex = Math.floor(Math.random() * emptySquares.length);
        return emptySquares[randomIndex].gridPosition;
    };
    GameBoard.prototype.squareIsEmpty = function (point) {
        var arrayPos = (point.y - 1) * GameBoard.segmentsX + point.x - 1;
        return this.squares[arrayPos].owner === OWNER.Empty;
    };
    GameBoard.prototype.insertSquare = function (square) {
        var arrayPos = (square.gridPosition.y - 1) * GameBoard.segmentsX + square.gridPosition.x - 1;
        console.log(arrayPos);
        this.squares[arrayPos] = square;
    };
    GameBoard.prototype.activateEmptyRandomSquare = function () {
        var blockPosition = this.getRandomEmptySquare();
        var square = new Square(blockPosition, OWNER.Computer);
        this.aiBlocks.push(square);
        this.insertSquare(square);
    };
    return GameBoard;
})();
///<reference path="./gameWindow.ts"/>
///<reference path="./InputHandler.ts"/>
///<reference path="./gameBoard.ts"/>
///<reference path="../lib/definitions/jquery/jquery.d.ts"/>
var Game = (function () {
    function Game() {
        var _this = this;
        this.tick = function (time) {
            if (time === void 0) { time = null; }
            if (!_this.startTime)
                _this.startTime = time;
            _this.nowTime = time - _this.startTime;
            if (_this.nowTime / 1000 > 3) {
                _this.update();
                _this.startTime = time;
            }
            _this.updateInput();
            _this.render();
            _this.updateView();
            _this.frameId = requestAnimationFrame(_this.tick);
        };
        this.gameWindow = new GameWindow(800, 750, this);
        this.inputHandler = new InputHandler();
        this.gameBoard = new GameBoard(7, 6);
        Game.state = GAME_STATE.AwaitingPlayerInput;
        this.tick();
    }
    Game.prototype.update = function () {
        if (Game.state === GAME_STATE.AwaitingPlayerUpdate) {
            Game.state = GAME_STATE.AiTurn;
        }
        if (Game.state === GAME_STATE.AiTurn) {
            this.gameBoard.activateEmptyRandomSquare();
            Game.state = GAME_STATE.AwaitingPlayerInput;
        }
    };
    Game.prototype.render = function () {
        this.gameWindow.clearScreen();
        this.gameBoard.render(this.gameWindow);
        if (Game.state === GAME_STATE.AwaitingPlayerInput)
            this.gameWindow.drawGridCircleTop(this.gameWindow.hoveredBlock.x, this.gameWindow.hoveredBlock.y);
    };
    Game.prototype.updateView = function () {
        $("#playerTurn").text(Game.state);
    };
    Game.prototype.updateInput = function () {
    };
    return Game;
})();
var GAME_STATE;
(function (GAME_STATE) {
    GAME_STATE[GAME_STATE["AwaitingPlayerInput"] = 0] = "AwaitingPlayerInput";
    GAME_STATE[GAME_STATE["PlayerInputReceived"] = 1] = "PlayerInputReceived";
    GAME_STATE[GAME_STATE["AwaitingPlayerUpdate"] = 2] = "AwaitingPlayerUpdate";
    GAME_STATE[GAME_STATE["AiTurn"] = 3] = "AiTurn";
})(GAME_STATE || (GAME_STATE = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="./game.ts"/>
var ConnectFour = (function (_super) {
    __extends(ConnectFour, _super);
    function ConnectFour() {
        _super.call(this);
    }
    ConnectFour.prototype.update = function () {
        _super.prototype.update.call(this);
    };
    ConnectFour.prototype.updateInput = function () {
        if (Game.state === GAME_STATE.PlayerInputReceived) {
            var square = new Square(this.gameWindow.clickedBlock, OWNER.Player);
            this.gameBoard.playerBlocks.push(square);
            this.gameBoard.insertSquare(square);
            Game.state = GAME_STATE.AwaitingPlayerUpdate;
        }
    };
    return ConnectFour;
})(Game);
var game = new ConnectFour();
//# sourceMappingURL=appCombined.js.map
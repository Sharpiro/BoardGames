var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
})();
///<reference path="./point.ts"/>
var GameWindow = (function () {
    function GameWindow(width, height) {
        var _this = this;
        this.onMouseDown = function (e) {
            var gridPosition = _this.getGridPosition(e.clientX, e.clientY);
            _this.hoveredBlock.x = gridPosition.x;
            _this.hoveredBlock.y = gridPosition.y;
            _this.clickedBlock = new Point(_this.hoveredBlock.x, _this.hoveredBlock.y);
            if (Game.acceptingInput)
                _this.blockClicked = true;
        };
        this.onMouseMove = function (e) {
            var gridPosition = _this.getGridPosition(e.clientX, e.clientY);
            _this.hoveredBlock.x = gridPosition.x;
            _this.hoveredBlock.y = gridPosition.y;
        };
        this.hoveredBlock = new Point(0, 0);
        this.blockClicked = false;
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
        this.context.arc((x * GameBoard.xInterval) + GameBoard.xInterval / 2, (y * GameBoard.yInterval) + GameBoard.yInterval / 2, radius, 0, 2 * Math.PI);
        this.context.fill();
    };
    GameWindow.prototype.getGridPosition = function (clientX, clientY) {
        var offset = this.canvas.getBoundingClientRect();
        var mouseX = clientX - offset.left;
        var mouseY = clientY - offset.top;
        var xGridBlock = Math.floor(mouseX / GameBoard.xInterval);
        var yGridBlock = Math.floor(mouseY / GameBoard.yInterval);
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
var TurnHandler = (function () {
    function TurnHandler() {
        this.isPlayerTurn = true;
    }
    TurnHandler.prototype.update = function () {
        if (Game.state === GameState.WaitingForUpdate) {
            this.isPlayerTurn = !this.isPlayerTurn;
            Game.state = GameState.AwaitingInput;
        }
    };
    TurnHandler.acceptingInput = true;
    return TurnHandler;
})();
var GameBoard = (function () {
    function GameBoard(segmentsX, segmentsY) {
        GameBoard.segmentsX = segmentsX;
        GameBoard.segmentsY = segmentsY;
        GameBoard.xInterval = GameWindow.width / segmentsX;
        GameBoard.yInterval = GameWindow.height / segmentsY;
    }
    GameBoard.prototype.render = function (gameWindow) {
        for (var i = 1; i < GameBoard.segmentsX; i++) {
            gameWindow.drawLine(i * GameBoard.xInterval, 0, i * GameBoard.xInterval, GameWindow.height);
        }
        for (var i = 1; i < GameBoard.segmentsY; i++) {
            gameWindow.drawLine(0, i * GameBoard.yInterval, GameWindow.width, i * GameBoard.yInterval);
        }
    };
    GameBoard.prototype.GetRandomSqure = function () {
        var randX = Math.floor(Math.random() * GameBoard.segmentsX);
        var randY = Math.floor(Math.random() * GameBoard.segmentsY);
        return new Point(randX, randY);
    };
    return GameBoard;
})();
///<reference path="./gameWindow.ts"/>
///<reference path="./turnHandler.ts"/>
///<reference path="./gameBoard.ts"/>
///<reference path="../lib/definitions/jquery/jquery.d.ts"/>
var Game = (function () {
    function Game() {
        var _this = this;
        this.tick = function (time) {
            if (time === void 0) { time = null; }
            _this.update(time);
            _this.render();
            _this.frameId = requestAnimationFrame(_this.tick);
        };
        this.gameWindow = new GameWindow(800, 750);
        this.turnHandler = new TurnHandler();
        this.gameBoard = new GameBoard(7, 6);
        Game.state = GameState.AwaitingInput;
        this.clickedBlocks = [];
        this.drawables = [];
        this.aiBlocks = [];
        this.tick();
    }
    Game.prototype.update = function (time) {
        if (Game.state === GameState.AwaitingInput) {
            if (this.turnHandler.isPlayerTurn && this.gameWindow.blockClicked) {
                this.clickedBlocks.push(this.gameWindow.clickedBlock);
                this.gameWindow.blockClicked = false;
                this.turnHandler.isPlayerTurn = false;
            }
            else if (!this.turnHandler.isPlayerTurn) {
                this.aiBlocks.push(this.gameBoard.GetRandomSqure());
                Game.state = GameState.WaitingForUpdate;
            }
        }
        if (!this.startTime)
            this.startTime = time;
        this.nowTime = time - this.startTime;
        if (this.nowTime / 1000 > 3) {
            console.log("updating...");
            this.turnHandler.update();
            this.startTime = time;
        }
        this.updateView();
    };
    Game.prototype.render = function () {
        var _this = this;
        this.gameWindow.clearScreen();
        this.gameBoard.render(this.gameWindow);
        this.clickedBlocks.forEach(function (block) {
            _this.gameWindow.drawGridCircle(block.x, block.y, "black");
        });
        this.aiBlocks.forEach(function (block) {
            _this.gameWindow.drawGridCircle(block.x, block.y, "red");
        });
        this.gameWindow.drawGridCircle(this.gameWindow.hoveredBlock.x, this.gameWindow.hoveredBlock.y);
    };
    Game.prototype.updateView = function () {
        $("#playerTurn").text(this.turnHandler.isPlayerTurn);
    };
    Game.acceptingInput = true;
    return Game;
})();
var GameState;
(function (GameState) {
    GameState[GameState["AwaitingInput"] = 0] = "AwaitingInput";
    GameState[GameState["WaitingForUpdate"] = 1] = "WaitingForUpdate";
})(GameState || (GameState = {}));
var game = new Game();
var Square = (function () {
    function Square() {
    }
    Square.prototype.render = function (gameWindow) {
        gameWindow.drawGridBox(this.gridLocation.x, this.gridLocation.y);
    };
    return Square;
})();
//# sourceMappingURL=appCombined.js.map
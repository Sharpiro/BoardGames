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
        this.windowDimensions = new Point(this.canvas.width, this.canvas.height);
        this.canvas.style.background = "#eeeeee";
        this.context = this.canvas.getContext("2d");
        this.canvas.addEventListener("mousemove", this.onMouseMove, false);
        this.canvas.addEventListener("mousedown", this.onMouseDown, false);
    }
    GameWindow.prototype.drawGridBox = function (x, y, color) {
        if (color === void 0) { color = "black"; }
        this.context.fillStyle = color;
        this.context.fillRect(x * 100, y * 100, 100, 100);
    };
    GameWindow.prototype.getGridPosition = function (clientX, clientY) {
        var offset = this.canvas.getBoundingClientRect();
        var mouseX = clientX - offset.left;
        var mouseY = clientY - offset.top;
        var xGridBlock = Math.floor(mouseX / 100);
        var yGridBlock = Math.floor(mouseY / 100);
        return new Point(xGridBlock, yGridBlock);
    };
    GameWindow.prototype.drawLine = function (x1, y1, x2, y2) {
        this.context.strokeStyle = "black";
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();
    };
    GameWindow.prototype.drawGrid = function (segments) {
        if (segments === void 0) { segments = 8; }
        var xInterval = this.canvas.width / segments;
        var yInterval = this.canvas.height / (segments / 2);
        for (var i = 1; i < segments; i++) {
            this.drawLine(i * xInterval, 0, i * xInterval, this.canvas.height);
        }
        for (var i = 1; i < segments / 2; i++) {
            this.drawLine(0, i * yInterval, this.canvas.width, i * yInterval);
        }
    };
    GameWindow.prototype.clearScreen = function () {
        this.context.clearRect(0, 0, this.windowDimensions.x, this.windowDimensions.y);
    };
    return GameWindow;
})();
var TurnHandler = (function () {
    function TurnHandler() {
        this.playerTurn = true;
    }
    TurnHandler.prototype.update = function () {
        var _this = this;
        this.playerTurn = !this.playerTurn;
        if (this.playerTurn)
            Game.acceptingInput = true;
        else {
            Game.acceptingInput = false;
            setTimeout(function () {
                alert("turn swap");
                _this.playerTurn = !_this.playerTurn;
                Game.acceptingInput = true;
            }, 5000);
        }
    };
    TurnHandler.prototype.isPlayerTurn = function () {
        return this.playerTurn;
    };
    return TurnHandler;
})();
///<reference path="./gameWindow.ts"/>
///<reference path="./turnHandler.ts"/>
var Game = (function () {
    function Game() {
        var _this = this;
        this.tick = function (time) {
            if (time === void 0) { time = null; }
            _this.update();
            _this.render();
            _this.frameId = requestAnimationFrame(_this.tick);
        };
        this.turnHandler = new TurnHandler();
        this.clickedBlocks = [];
        this.gameWindow = new GameWindow(800, 400);
        this.drawables = [];
        this.tick();
    }
    Game.prototype.update = function () {
        if (this.turnHandler.isPlayerTurn() && this.gameWindow.blockClicked) {
            this.clickedBlocks.push(this.gameWindow.clickedBlock);
            this.turnHandler.update();
            this.gameWindow.blockClicked = false;
        }
    };
    Game.prototype.render = function () {
        var _this = this;
        this.gameWindow.clearScreen();
        this.gameWindow.drawGrid();
        this.clickedBlocks.forEach(function (block) {
            _this.gameWindow.drawGridBox(block.x, block.y, "yellow");
        });
        this.gameWindow.drawGridBox(this.gameWindow.hoveredBlock.x, this.gameWindow.hoveredBlock.y);
    };
    Game.acceptingInput = true;
    return Game;
})();
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
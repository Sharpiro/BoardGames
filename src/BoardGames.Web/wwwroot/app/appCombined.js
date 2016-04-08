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
        this.arrayPos = ((this.gridPosition.y - 1) * (GameBoard.segmentsX)) + (this.gridPosition.x - 1);
    }
    Square.prototype.render = function (gameWindow) {
        var color = this.owner === OWNER.Player ? "black" : "red";
        gameWindow.drawGridCircle(this.gridPosition.x, this.gridPosition.y, color);
    };
    Square.prototype.toString = function () {
        var squareString = "(" + this.gridPosition.x + ", " + this.gridPosition.y + "), (" + this.arrayPos + "), " + OWNER[this.owner];
        return squareString;
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
        this.activationOrder = [];
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
        this.squares.filter(function (square) { return square.owner !== OWNER.Empty; }).forEach(function (block) { return block.render(gameWindow); });
    };
    GameBoard.prototype.getSquares = function () {
        return this.squares.slice();
    };
    GameBoard.prototype.getPosition = function (coords) {
        var pos = ((coords.y - 1) * (GameBoard.segmentsX)) + (coords.x - 1);
        return pos;
    };
    GameBoard.prototype.getCoords = function (pos) {
        return null;
    };
    GameBoard.prototype.getRandomEmptyPoint = function () {
        var emptySquares = this.squares.filter(function (square) { return square.owner === OWNER.Empty; });
        var randomIndex = Math.floor(Math.random() * emptySquares.length);
        return emptySquares[randomIndex].gridPosition;
    };
    GameBoard.getRandomEmptyPos = function (squares) {
        var emptySquares = squares.filter(function (square) { return square.owner === OWNER.Empty; });
        var randomIndex = Math.floor(Math.random() * emptySquares.length);
        return randomIndex;
    };
    GameBoard.prototype.getLowestBlockInColumn = function (point) {
        var column = point.x;
        var bottomPosition = column + (GameBoard.segmentsX * (GameBoard.segmentsY - 1)) - 1;
        var isTaken = true;
        var lowestPointPosition = null;
        for (var i = bottomPosition; isTaken; i -= GameBoard.segmentsX) {
            if (this.squareIsEmptyPos(i)) {
                lowestPointPosition = i;
                isTaken = false;
            }
        }
        return lowestPointPosition;
    };
    GameBoard.prototype.getLowestBlockInColumnPos = function (pos) {
        var column = pos % GameBoard.segmentsX;
        var bottomPosition = column + (GameBoard.segmentsX * (GameBoard.segmentsY - 1));
        var isTaken = true;
        var lowestPointPosition = null;
        for (var i = bottomPosition; isTaken; i -= GameBoard.segmentsX) {
            if (this.squareIsEmptyPos(i)) {
                lowestPointPosition = i;
                isTaken = false;
            }
        }
        return lowestPointPosition;
    };
    GameBoard.prototype.getSquare = function (position) {
        return this.squares[position];
    };
    GameBoard.prototype.getActivationOrder = function () {
        return this.activationOrder;
    };
    GameBoard.prototype.squareIsEmpty = function (point) {
        var arrayPos = (point.y - 1) * GameBoard.segmentsX + point.x - 1;
        return this.squares[arrayPos].owner === OWNER.Empty;
    };
    GameBoard.prototype.squareIsEmptyPos = function (position) {
        return this.squares[position].owner === OWNER.Empty;
    };
    GameBoard.prototype.updateSquare = function (position, owner) {
        var square = this.squares[position];
        square.owner = owner;
        this.activationOrder.push(square);
    };
    GameBoard.prototype.updateColumn = function (pos, owner) {
        var coords = pos;
        var columnPos = this.getLowestBlockInColumnPos(coords);
        var square = this.squares[columnPos];
        square.owner = owner;
        this.activationOrder.push(square);
    };
    GameBoard.prototype.resetSquares = function () {
        this.squares.forEach(function (square) {
            square.owner = OWNER.Empty;
        });
    };
    GameBoard.prototype.insertSquare = function (square) {
        var arrayPos = (square.gridPosition.y - 1) * GameBoard.segmentsX + square.gridPosition.x - 1;
        console.log(arrayPos);
        this.squares[arrayPos] = square;
    };
    GameBoard.prototype.activateEmptyRandomSquare = function () {
        var blockPosition = this.getRandomEmptyPoint();
        var square = new Square(blockPosition, OWNER.Computer);
        this.aiBlocks.push(square);
        this.insertSquare(square);
    };
    GameBoard.prototype.activateRandomColumn = function (owner) {
        var randomPoint = this.getRandomEmptyPoint();
        var pos = this.getLowestBlockInColumn(randomPoint);
        this.updateSquare(pos, owner);
    };
    GameBoard.prototype.printActivationOrder = function () {
        console.log("---------Player----------");
        this.activationOrder.filter(function (square) { return square.owner === OWNER.Player; }).forEach(function (square, index) {
            console.log((index + 1) + ": " + square.toString());
        });
        console.log("---------Computer--------");
        this.activationOrder.filter(function (square) { return square.owner === OWNER.Computer; }).forEach(function (square, index) {
            console.log((index + 1) + ": " + square.toString());
        });
        console.log(JSON.stringify(this.activationOrder));
    };
    return GameBoard;
})();
///<reference path="./gameWindow.ts"/>
///<reference path="./InputHandler.ts"/>
///<reference path="./gameBoard.ts"/>
///<reference path="../lib/definitions/jquery/jquery.d.ts"/>
var Game = (function () {
    function Game() {
        this.gameWindow = new GameWindow(800, 750, this);
        this.inputHandler = new InputHandler();
        this.gameBoard = new GameBoard(7, 6);
        Game.state = GAME_STATE.AwaitingPlayerInput;
    }
    Game.prototype.render = function () {
        this.gameWindow.clearScreen();
        this.gameBoard.render(this.gameWindow);
        if (Game.state === GAME_STATE.AwaitingPlayerInput)
            this.gameWindow.drawGridCircleTop(this.gameWindow.hoveredBlock.x, this.gameWindow.hoveredBlock.y);
    };
    Game.prototype.updateView = function () {
        $("#playerTurn").text(Game.state);
    };
    return Game;
})();
var GAME_STATE;
(function (GAME_STATE) {
    GAME_STATE[GAME_STATE["AwaitingPlayerInput"] = 0] = "AwaitingPlayerInput";
    GAME_STATE[GAME_STATE["PlayerInputReceived"] = 1] = "PlayerInputReceived";
    GAME_STATE[GAME_STATE["AwaitingPlayerUpdate"] = 2] = "AwaitingPlayerUpdate";
    GAME_STATE[GAME_STATE["AiTurn"] = 3] = "AiTurn";
    GAME_STATE[GAME_STATE["GameOver"] = 4] = "GameOver";
    GAME_STATE[GAME_STATE["Replay"] = 5] = "Replay";
})(GAME_STATE || (GAME_STATE = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../game.ts"/>
var BoardNav = (function (_super) {
    __extends(BoardNav, _super);
    function BoardNav() {
        var _this = this;
        _super.call(this);
        this.index = 1;
        this.diagonalIndex = 0;
        this.column = 0;
        this.tick = function (time) {
            if (time === void 0) { time = null; }
            if (!_this.startTime)
                _this.startTime = time;
            _this.nowTime = time - _this.startTime;
            if (_this.nowTime / 1000 > .25) {
                _this.update();
                _this.startTime = time;
            }
            _this.updateInput();
            _super.prototype.render.call(_this);
            _super.prototype.updateView.call(_this);
            _this.frameId = requestAnimationFrame(_this.tick);
        };
        this.tick();
        Game.state = GAME_STATE.AiTurn;
    }
    BoardNav.prototype.reset = function () {
        this.gameBoard.resetSquares();
        this.index = 1;
        this.diagonalIndex = 0;
        this.column = 0;
    };
    BoardNav.prototype.update = function () {
        if (this.index > 21) {
            Game.state = GAME_STATE.GameOver;
        }
        if (Game.state !== GAME_STATE.GameOver) {
            this.diagonalNav2();
        }
        else {
        }
    };
    BoardNav.prototype.updateInput = function () {
    };
    BoardNav.prototype.checkWinCondition = function (owner) {
        return false;
    };
    BoardNav.prototype.diagonalNav = function () {
        var boardLength = GameBoard.segmentsX * GameBoard.segmentsY;
        while (this.index <= boardLength / 2) {
            var modPosition = this.diagonalIndex % (this.column + 1);
            var pos = modPosition * (GameBoard.segmentsX - 1) + this.column;
            var invPos = boardLength - 1 - pos;
            var resetColumn = (this.diagonalIndex + 1) % (this.column + 1) === 0;
            if ((this.diagonalIndex !== 0 && resetColumn) || this.index === 1) {
                this.column++;
                this.diagonalIndex = 0;
            }
            else {
                this.diagonalIndex++;
            }
            console.log(pos);
            this.index++;
            this.gameBoard.updateSquare(pos, OWNER.Computer);
            this.gameBoard.updateSquare(invPos, OWNER.Player);
            break;
        }
        return false;
    };
    BoardNav.prototype.diagonalNav2 = function () {
        var nList = [5, 3, 1, -1, -3, -5];
        var boardLength = GameBoard.segmentsX * GameBoard.segmentsY;
        while (this.index <= boardLength / 2) {
            var modPosition = this.diagonalIndex % (this.column + 1);
            var pos = modPosition * (GameBoard.segmentsX - 1) + this.column;
            var invPos = boardLength - 1 - pos;
            var row = Math.ceil((pos + .01) / 7) - 1;
            var rotPos = pos + (7 * nList[row]);
            var invRotPos = boardLength - 1 - rotPos;
            var nextColumn = ((this.diagonalIndex + 1) % (this.column + 1) === 0 && this.diagonalIndex !== 0) || this.index === 1;
            if (nextColumn) {
                this.column++;
                this.diagonalIndex = 0;
            }
            else
                this.diagonalIndex++;
            this.index++;
            this.gameBoard.updateSquare(pos, OWNER.Computer);
            this.gameBoard.updateSquare(invPos, OWNER.Computer);
            this.gameBoard.updateSquare(rotPos, OWNER.Player);
            this.gameBoard.updateSquare(invRotPos, OWNER.Player);
            break;
        }
        return false;
    };
    return BoardNav;
})(Game);
var C4Ai = (function () {
    function C4Ai() {
    }
    C4Ai.prototype.getMovePosition = function (squares) {
        this.squares = squares;
        var winningMove = this.getWinningMove();
        if (winningMove !== null)
            return winningMove;
        var defensiveMove = this.getDefensiveMove();
        if (defensiveMove !== null)
            return defensiveMove;
        var offensiveMove = this.getOffensiveMove();
        if (offensiveMove !== null)
            return offensiveMove;
        var randomMove = GameBoard.getRandomEmptyPos(this.squares);
        this.squares = null;
        return randomMove;
    };
    C4Ai.prototype.getDefensiveMove = function () {
        var horizontalMove = this.getDefensiveMoveHorizontal();
        if (horizontalMove !== null)
            return horizontalMove;
        var verticalMove = this.getDefensiveMoveVertical();
        if (verticalMove !== null)
            return verticalMove;
        var diagonalMove = this.getDefensiveMoveDiagonal();
        if (diagonalMove !== null)
            return diagonalMove;
        return null;
    };
    C4Ai.prototype.getDefensiveMoveHorizontal = function () {
        var winCounter = 0;
        for (var i = 0; i < this.squares.length; i++) {
            if (i % 7 === 0)
                winCounter = 0;
            if (this.squares[i] && this.squares[i].owner === OWNER.Player) {
                winCounter++;
                if (winCounter === 3) {
                    if (this.squareIsEmpty(i + 1) && this.squareIsTop(i + 1))
                        return i + 1;
                    if (this.squareIsEmpty(i - 3) && this.squareIsTop(i - 3))
                        return i - 3;
                    winCounter = 0;
                }
            }
            else
                winCounter = 0;
        }
        return null;
    };
    C4Ai.prototype.getDefensiveMoveVertical = function () {
        var winCounter = 0;
        var column = 0;
        for (var i = 0; i < this.squares.length; i++) {
            var j = i % GameBoard.segmentsY;
            var pos = (j * GameBoard.segmentsX) + column;
            if (i > 1 && (i + 1) % GameBoard.segmentsY === 0)
                column++;
            if (this.squares[pos] && this.squares[pos].owner === OWNER.Player) {
                winCounter++;
                if (winCounter === 3) {
                    var problemPos = pos - 3 * GameBoard.segmentsX;
                    if (this.squareIsEmpty(problemPos))
                        return problemPos;
                    winCounter = 0;
                }
            }
            else
                winCounter = 0;
        }
        return null;
    };
    C4Ai.prototype.getDefensiveMoveDiagonal = function () {
        var column = 0;
        var diagonalIndex = 0;
        var nList = [5, 3, 1, -1, -3, -5];
        var winCounters = [0, 0, 0, 0];
        var boardLength = GameBoard.segmentsX * GameBoard.segmentsY;
        for (var i = 1; i <= boardLength / 2; i++) {
            var modPosition = diagonalIndex % (column + 1);
            var pos = modPosition * (GameBoard.segmentsX - 1) + column;
            var invPos = boardLength - 1 - pos;
            var row = Math.ceil((pos + .01) / 7) - 1;
            var rotPos = pos + (7 * nList[row]);
            var invRotPos = boardLength - 1 - rotPos;
            var nextColumn = ((diagonalIndex + 1) % (column + 1) === 0 && diagonalIndex !== 0) || i === 1;
            var positions = [pos, invPos, rotPos, invRotPos];
            for (var j = 0; j < positions.length; j++) {
                if (this.squares[positions[j]] && this.squares[positions[j]].owner === OWNER.Player) {
                    winCounters[j]++;
                    if (winCounters[j] === 3) {
                        var currentPos = positions[j];
                        var problemPos = currentPos - 3 * GameBoard.segmentsX;
                        return null;
                    }
                }
                else
                    winCounters[j] = 0;
            }
            if (nextColumn) {
                column++;
                diagonalIndex = 0;
                winCounters = [0, 0, 0, 0];
            }
            else
                diagonalIndex++;
        }
        return null;
    };
    C4Ai.prototype.getWinningMove = function () {
        return null;
    };
    C4Ai.prototype.getOffensiveMove = function () {
        return null;
    };
    C4Ai.prototype.squareIsEmpty = function (pos) {
        if (this.squares[pos] && this.squares[pos].owner === OWNER.Empty)
            return true;
        return false;
    };
    C4Ai.prototype.squareIsTop = function (pos) {
        var rowLowerPos = pos + GameBoard.segmentsX;
        var maxPositions = GameBoard.segmentsX * GameBoard.segmentsY - 1;
        if (rowLowerPos > maxPositions || this.squares[rowLowerPos].owner !== OWNER.Empty)
            return true;
        return false;
    };
    return C4Ai;
})();
///<reference path="../../game.ts"/>
///<reference path="./C4Ai.ts"/>
var ConnectFour = (function (_super) {
    __extends(ConnectFour, _super);
    function ConnectFour() {
        var _this = this;
        _super.call(this);
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
            _super.prototype.render.call(_this);
            _super.prototype.updateView.call(_this);
            _this.frameId = requestAnimationFrame(_this.tick);
        };
        this.computerAi = new C4Ai();
        this.tick();
    }
    ConnectFour.prototype.update = function () {
        if (Game.state === GAME_STATE.AwaitingPlayerUpdate) {
            var gameOver = this.checkWinCondition(OWNER.Player);
            Game.state = gameOver ? GAME_STATE.GameOver : GAME_STATE.AiTurn;
        }
        if (Game.state === GAME_STATE.AiTurn) {
            var aiMovePos = this.computerAi.getMovePosition(this.gameBoard.getSquares());
            this.gameBoard.updateColumn(aiMovePos, OWNER.Computer);
            var gameOver = this.checkWinCondition(OWNER.Computer);
            Game.state = gameOver ? GAME_STATE.GameOver : GAME_STATE.AwaitingPlayerInput;
        }
    };
    ConnectFour.prototype.replay = function () {
        Game.state = GAME_STATE.Replay;
        var json = prompt("Enter debug json", "");
        if (json === "" || json === null) {
            console.error("invalid replay input");
            return;
        }
        var activationOrder = JSON.parse(json);
        for (var i = 0; i < activationOrder.length; i++) {
            var square = activationOrder[i];
            this.gameBoard.updateSquare(square.arrayPos, square.owner);
            var gameOver = this.checkWinCondition(square.owner);
            if (gameOver)
                console.log();
        }
    };
    ConnectFour.prototype.updateInput = function () {
        if (Game.state === GAME_STATE.PlayerInputReceived) {
            var lowestPosition = this.gameBoard.getLowestBlockInColumn(this.gameWindow.clickedBlock);
            this.gameBoard.updateSquare(lowestPosition, OWNER.Player);
            Game.state = GAME_STATE.AwaitingPlayerUpdate;
        }
    };
    ConnectFour.prototype.checkWinCondition = function (owner) {
        var squares = this.gameBoard.getSquares();
        var horizontalWin = this.checkHorizontalWin(squares, owner);
        var verticalWin = this.checkVerticalWin(squares, owner);
        var diagonalWin = this.checkDiagonalWin(squares, owner);
        if (horizontalWin || verticalWin || diagonalWin) {
            console.log("Win Type:", horizontalWin, verticalWin, diagonalWin);
            alert(owner + " has won the game");
            this.gameBoard.printActivationOrder();
            return true;
        }
        return false;
    };
    ConnectFour.prototype.checkHorizontalWin = function (squares, owner) {
        var winCounter = 0;
        for (var i = 0; i < squares.length; i++) {
            if (i % 7 === 0)
                winCounter = 0;
            if (squares[i] && squares[i].owner === owner) {
                winCounter++;
                if (winCounter === 4) {
                    return true;
                }
            }
            else
                winCounter = 0;
        }
        return false;
    };
    ConnectFour.prototype.checkVerticalWin = function (squares, owner) {
        var winCounter = 0;
        var column = 0;
        for (var i = 0; i < squares.length; i++) {
            var j = i % GameBoard.segmentsY;
            var pos = (j * GameBoard.segmentsX) + column;
            if (i > 1 && (i + 1) % GameBoard.segmentsY === 0)
                column++;
            if (squares[pos] && squares[pos].owner === owner) {
                winCounter++;
                if (winCounter === 4) {
                    return true;
                }
            }
            else
                winCounter = 0;
        }
        return false;
    };
    ConnectFour.prototype.checkDiagonalWin = function (squares, owner) {
        var column = 0;
        var diagonalIndex = 0;
        var nList = [5, 3, 1, -1, -3, -5];
        var winCounters = [0, 0, 0, 0];
        var boardLength = GameBoard.segmentsX * GameBoard.segmentsY;
        for (var i = 1; i <= boardLength / 2; i++) {
            var modPosition = diagonalIndex % (column + 1);
            var pos = modPosition * (GameBoard.segmentsX - 1) + column;
            var invPos = boardLength - 1 - pos;
            var row = Math.ceil((pos + .01) / 7) - 1;
            var rotPos = pos + (7 * nList[row]);
            var invRotPos = boardLength - 1 - rotPos;
            var nextColumn = ((diagonalIndex + 1) % (column + 1) === 0 && diagonalIndex !== 0) || i === 1;
            var positions = [pos, invPos, rotPos, invRotPos];
            for (var j = 0; j < positions.length; j++) {
                if (squares[positions[j]] && squares[positions[j]].owner === owner) {
                    winCounters[j]++;
                    if (winCounters[j] === 4)
                        return true;
                }
                else
                    winCounters[j] = 0;
            }
            if (nextColumn) {
                column++;
                diagonalIndex = 0;
                winCounters = [0, 0, 0, 0];
            }
            else
                diagonalIndex++;
        }
        return false;
    };
    return ConnectFour;
})(Game);
var game = new ConnectFour();
//# sourceMappingURL=appCombined.js.map
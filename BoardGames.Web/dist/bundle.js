/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ownableSquare_1 = __webpack_require__(1);
var ChessSquare = /** @class */ (function (_super) {
    __extends(ChessSquare, _super);
    function ChessSquare(gameBoard, gridX, gridY, owner, squareType) {
        if (owner === void 0) { owner = ownableSquare_1.Owner.Empty; }
        if (squareType === void 0) { squareType = ChessSquareType.Empty; }
        var _this = _super.call(this, gameBoard, gridX, gridY, owner) || this;
        _this.squareType = squareType;
        _this.isHighlighted = false;
        _this.squreType = ChessSquareType.Empty;
        return _this;
    }
    ChessSquare.prototype.highlight = function () {
        this.isHighlighted = true;
    };
    ChessSquare.prototype.deHighlight = function () {
        this.isHighlighted = false;
    };
    ChessSquare.prototype.render = function (isFillable, color) {
        if (!this.isHighlighted)
            return;
        var coords = this.getPixelCoordinates();
        ;
        this.gameBoard.gameWindow.fillRect(coords.x, coords.y, this.gameBoard.xInterval, this.gameBoard.yInterval, "green");
    };
    return ChessSquare;
}(ownableSquare_1.OwnableSquare));
exports.ChessSquare = ChessSquare;
var EmptyChessSquare = /** @class */ (function (_super) {
    __extends(EmptyChessSquare, _super);
    function EmptyChessSquare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyChessSquare.prototype.getAvailableMoves = function () {
        return [];
    };
    return EmptyChessSquare;
}(ChessSquare));
exports.EmptyChessSquare = EmptyChessSquare;
var ChessSquareType;
(function (ChessSquareType) {
    ChessSquareType[ChessSquareType["Empty"] = 0] = "Empty";
    ChessSquareType[ChessSquareType["Pawn"] = 1] = "Pawn";
    ChessSquareType[ChessSquareType["Rook"] = 2] = "Rook";
    ChessSquareType[ChessSquareType["Knight"] = 3] = "Knight";
    ChessSquareType[ChessSquareType["Bishop"] = 4] = "Bishop";
    ChessSquareType[ChessSquareType["Queen"] = 5] = "Queen";
    ChessSquareType[ChessSquareType["King"] = 6] = "King";
})(ChessSquareType = exports.ChessSquareType || (exports.ChessSquareType = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var renderableSquare_1 = __webpack_require__(7);
var OwnableSquare = /** @class */ (function (_super) {
    __extends(OwnableSquare, _super);
    function OwnableSquare(gameBoard, gridX, gridY, owner) {
        if (owner === void 0) { owner = Owner.Empty; }
        var _this = _super.call(this, gameBoard, gridX, gridY) || this;
        _this.owner = owner;
        return _this;
    }
    OwnableSquare.prototype.render = function () {
        var color = this.owner === Owner.Player ? "black" : "red";
        this.gameBoard.gameWindow.drawSkinnyGridBox(this.gridX, this.gridY, 0, 0, color);
    };
    return OwnableSquare;
}(renderableSquare_1.RenderableSquare));
exports.OwnableSquare = OwnableSquare;
var Owner;
(function (Owner) {
    Owner[Owner["Empty"] = 0] = "Empty";
    Owner[Owner["Player"] = 1] = "Player";
    Owner[Owner["Computer"] = 2] = "Computer";
})(Owner = exports.Owner || (exports.Owner = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
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
exports.Point = Point;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chessSquare_1 = __webpack_require__(0);
var point_1 = __webpack_require__(2);
var ownableSquare_1 = __webpack_require__(1);
var ChessPiece = /** @class */ (function (_super) {
    __extends(ChessPiece, _super);
    function ChessPiece(gameBoard, icon, gridX, gridY, owner, squareType) {
        var _this = _super.call(this, gameBoard, gridX, gridY, owner, squareType) || this;
        _this.gameBoard = gameBoard;
        _this.icon = icon;
        return _this;
    }
    ChessPiece.prototype.render = function () {
        _super.prototype.render.call(this);
        var coords = this.getPixelCoordinates();
        this.gameBoard.gameWindow.drawImage(this.icon, coords.x, coords.y, this.icon.width, this.icon.height);
    };
    ChessPiece.prototype.filterInvalid = function (squares) {
        var filteredSquares = [];
        for (var _i = 0, squares_1 = squares; _i < squares_1.length; _i++) {
            var square = squares_1[_i];
            if (square === undefined)
                continue;
            if (square.owner === this.owner)
                continue;
            filteredSquares.push(square);
        }
        return filteredSquares;
    };
    ChessPiece.prototype.getSquareSequences = function (pointModifiers, segments) {
        if (segments === void 0) { segments = this.gameBoard.segmentsX; }
        var moves = [];
        for (var _i = 0, pointModifiers_1 = pointModifiers; _i < pointModifiers_1.length; _i++) {
            var pointModifier = pointModifiers_1[_i];
            var point = new point_1.Point(this.gridX, this.gridY);
            for (var i = 1; i <= segments + 1; i++) {
                var square = this.gameBoard.getSquare(point.x, point.y);
                point = pointModifier(point);
                if (square === undefined || this.equals(square))
                    continue;
                moves.push(square);
                if (square.owner !== ownableSquare_1.Owner.Empty)
                    break;
            }
        }
        return moves;
    };
    return ChessPiece;
}(chessSquare_1.ChessSquare));
exports.ChessPiece = ChessPiece;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __webpack_require__(5);
var chessSquare_1 = __webpack_require__(0);
var chessBoard_1 = __webpack_require__(8);
var shallowBlue_1 = __webpack_require__(17);
var ownableSquare_1 = __webpack_require__(1);
var gameWindow_1 = __webpack_require__(18);
var ChessGame = /** @class */ (function (_super) {
    __extends(ChessGame, _super);
    function ChessGame(gameBoard, computerAi) {
        var _this = _super.call(this, gameBoard) || this;
        _this.gameBoard = gameBoard;
        _this.computerAi = computerAi;
        _this.tick = function (time) {
            if (time === void 0) { time = null; }
            _this.update();
            _super.prototype.render.call(_this);
            _this.frameId = requestAnimationFrame(_this.tick);
        };
        _this.onMouseDown = function (e) {
            var gridPosition = _this.gameBoard.getGridPosition(e.clientX, e.clientY);
            _this.gameBoard.hoveredSquare = _this.gameBoard.getSquare(gridPosition.x, gridPosition.y);
            _this.gameBoard.clickedSquare = _this.gameBoard.hoveredSquare;
            if (_this.state === ChessGameState.AwaitingPlayerInput) {
                if (_this.gameBoard.clickedSquare.owner !== ownableSquare_1.Owner.Player)
                    return;
                _this.sourceSquare = _this.gameBoard.clickedSquare;
                var availableMoves = _this.sourceSquare.getAvailableMoves();
                if (availableMoves.length === 0)
                    return;
                _this.state = ChessGameState.SourceSquareClicked;
            }
            else if (_this.state === ChessGameState.SourceSquareClicked) {
                _this.destinationSquare = _this.gameBoard.clickedSquare;
                var availableMoves = _this.sourceSquare.getAvailableMoves();
                if (!availableMoves.some(function (s) { return s.equals(_this.destinationSquare); })) {
                    _this.state = ChessGameState.AwaitingPlayerInput;
                    return;
                }
                _this.gameBoard.swapSquares(_this.sourceSquare, _this.destinationSquare, 
                //() => this.state = ChessGameState.ComputerTurnStart);
                function () { return _this.state = ChessGameState.AwaitingPlayerInput; });
            }
        };
        _this.state = ChessGameState.AwaitingPlayerInput;
        _this.gameBoard.gameWindow.registerEvent("mousedown", _this.onMouseDown);
        _this.tick();
        return _this;
    }
    ChessGame.prototype.reset = function () {
    };
    ChessGame.prototype.update = function () {
        this.checkHoveredAvailableMoves();
        this.computerMove();
        this.updateView(ChessGameState[this.state]);
        this.checkWinCondition();
    };
    ChessGame.prototype.computerMove = function () {
        if (this.state !== ChessGameState.ComputerTurnStart)
            return;
        //this.state = ChessGameState.ComputerTurnInProgress;
        //var move = this.computerAi.getMove();
        //this.gameBoard.swapSquares(move.sourceSquare, move.destinationSquare,
        //    () => this.state = ChessGameState.AwaitingPlayerInput);
    };
    ChessGame.prototype.checkHoveredAvailableMoves = function () {
        var squares = this.state === ChessGameState.AwaitingPlayerInput ?
            this.gameBoard.hoveredSquare.getAvailableMoves() :
            this.gameBoard.clickedSquare.getAvailableMoves();
        this.gameBoard.deHighlightSquares();
        this.gameBoard.highlightSquares(squares);
    };
    ChessGame.prototype.checkWinCondition = function () {
        var kingSquares = this.gameBoard.getSquares().filter(function (s) { return s.squreType === chessSquare_1.ChessSquareType.King; });
        if (kingSquares.length === 2)
            return;
        this.state = ChessGameState.GameOver;
    };
    return ChessGame;
}(game_1.Game));
var ChessGameState;
(function (ChessGameState) {
    ChessGameState[ChessGameState["AwaitingPlayerInput"] = 0] = "AwaitingPlayerInput";
    ChessGameState[ChessGameState["SourceSquareClicked"] = 1] = "SourceSquareClicked";
    ChessGameState[ChessGameState["ComputerTurnStart"] = 2] = "ComputerTurnStart";
    ChessGameState[ChessGameState["ComputerTurnInProgress"] = 3] = "ComputerTurnInProgress";
    ChessGameState[ChessGameState["GameOver"] = 4] = "GameOver";
})(ChessGameState || (ChessGameState = {}));
var gameWindow = new gameWindow_1.GameWindow(600, 600);
var gameBoard = new chessBoard_1.ChessBoard(8, 8, gameWindow);
var shallowBlue = new shallowBlue_1.ShallowBlue(gameBoard);
var game = new ChessGame(gameBoard, shallowBlue);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputHandler_1 = __webpack_require__(6);
var Game = /** @class */ (function () {
    function Game(gameBoard) {
        this.gameBoard = gameBoard;
        this.inputHandler = new InputHandler_1.InputHandler();
    }
    Game.prototype.render = function () {
        this.gameBoard.render();
    };
    Game.prototype.updateView = function (stateName) {
        document.getElementById("gameState").innerText = stateName;
        // $("#gameState").text(stateName);
    };
    return Game;
}());
exports.Game = Game;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputHandler = /** @class */ (function () {
    //public isPlayerTurn: boolean;
    //public static buttonClicked = false;
    //public static acceptingInput = true;
    function InputHandler() {
        //this.isPlayerTurn = true;
    }
    InputHandler.prototype.update = function (clickedBlocks) {
    };
    return InputHandler;
}());
exports.InputHandler = InputHandler;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(2);
var RenderableSquare = /** @class */ (function () {
    function RenderableSquare(gameBoard, gridX, gridY) {
        this.gameBoard = gameBoard;
        this.gridX = gridX;
        this.gridY = gridY;
    }
    RenderableSquare.prototype.equals = function (otherSquare) {
        if (otherSquare == undefined)
            return false;
        return this.gridX == otherSquare.gridX && this.gridY == otherSquare.gridY;
    };
    RenderableSquare.prototype.getPixelCoordinates = function () {
        var xCoord = this.gridX * this.gameBoard.xInterval - this.gameBoard.xInterval;
        var yCoord = this.gridY * this.gameBoard.yInterval - this.gameBoard.yInterval;
        return new point_1.Point(xCoord, yCoord);
    };
    RenderableSquare.prototype.getArrayPosition = function () {
        var pos = ((this.gridY - 1) * (this.gameBoard.segmentsX)) + (this.gridX - 1);
        return pos;
    };
    RenderableSquare.prototype.getGridPosition = function () {
        return new point_1.Point(this.gridX, this.gridY);
    };
    RenderableSquare.prototype.setGridPosition = function (point) {
        this.gridX = point.x;
        this.gridY = point.y;
    };
    return RenderableSquare;
}());
exports.RenderableSquare = RenderableSquare;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var gameBoard_1 = __webpack_require__(9);
var chessSquareFactory_1 = __webpack_require__(10);
var chessSquare_1 = __webpack_require__(0);
var ownableSquare_1 = __webpack_require__(1);
var ChessBoard = /** @class */ (function (_super) {
    __extends(ChessBoard, _super);
    function ChessBoard(segmentsX, segmentsY, gameWindow) {
        var _this = _super.call(this, segmentsX, segmentsY, gameWindow) || this;
        _this.onMouseMove = function (e) {
        };
        _this.gameWindow.registerEvent("mousemove", _this.onMouseMove);
        _this.gameWindow.registerEvent("contextmenu", function (e) { return e.preventDefault(); });
        _this.hoveredSquare = new chessSquare_1.EmptyChessSquare(_this, 0, 0);
        var squares = chessSquareFactory_1.ChessSquareFactory.getSquares(_this, _this.segmentsX, _this.segmentsY, _this.xInterval, _this.yInterval);
        _this.initializeSquares(squares);
        return _this;
    }
    ChessBoard.prototype.swapSquares = function (source, destination, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        var shortestPathSquares = this.shortestPath(source, destination);
        this.swapSquare(source, destination);
        //callback();
        //callback = () =>
        //{
        //    callback();
        //};
        shortestPathSquares.forEach(function (square, index) {
            setTimeout(function () {
                var lastItemCallback = index + 1 === shortestPathSquares.length ? callback : null;
                _this.swapSquareGraphics(source, square, lastItemCallback);
            }, 200 * index);
        });
    };
    ChessBoard.prototype.swapSquareGraphics = function (source, destination, callback) {
        if (callback === void 0) { callback = null; }
        if (source === undefined || destination === undefined)
            throw "error swapping squares, 1 was undefined";
        if (source.equals(destination))
            throw "cannot swap, source and destination are the same";
        if (source.owner !== destination.owner && destination.owner !== ownableSquare_1.Owner.Empty)
            destination = new chessSquare_1.EmptyChessSquare(this, destination.gridX, destination.gridY);
        var tempPosition = source.getGridPosition();
        source.setGridPosition(destination.getGridPosition());
        destination.setGridPosition(tempPosition);
        if (callback)
            callback();
    };
    ChessBoard.prototype.swapSquare = function (source, destination) {
        if (source === undefined || destination === undefined)
            throw "error swapping squares, 1 was undefined";
        if (source.equals(destination))
            throw "cannot swap, source and destination are the same";
        if (source.owner !== destination.owner && destination.owner !== ownableSquare_1.Owner.Empty)
            destination = new chessSquare_1.EmptyChessSquare(this, destination.gridX, destination.gridY);
        this.squares[source.getArrayPosition()] = destination;
        this.squares[destination.getArrayPosition()] = source;
        //var tempPosition = source.getGridPosition();
        //source.setGridPosition(destination.getGridPosition());
        //destination.setGridPosition(tempPosition);
    };
    ChessBoard.prototype.deHighlightSquares = function () {
        for (var _i = 0, _a = this.squares; _i < _a.length; _i++) {
            var square = _a[_i];
            square.deHighlight();
        }
    };
    ChessBoard.prototype.highlightSquares = function (squares) {
        for (var _i = 0, squares_1 = squares; _i < squares_1.length; _i++) {
            var square = squares_1[_i];
            square.highlight();
        }
    };
    ChessBoard.prototype.render = function () {
        _super.prototype.render.call(this);
    };
    return ChessBoard;
}(gameBoard_1.GameBoard));
exports.ChessBoard = ChessBoard;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ownableSquare_1 = __webpack_require__(1);
var point_1 = __webpack_require__(2);
var GameBoard = /** @class */ (function () {
    function GameBoard(segmentsX, segmentsY, gameWindow) {
        var _this = this;
        this.gameWindow = gameWindow;
        this.squares = [];
        this.activationOrder = [];
        this.baseOnMouseMove = function (e) {
            var gridPosition = _this.getGridPosition(e.clientX, e.clientY);
            _this.hoveredSquare = _this.getSquare(gridPosition.x, gridPosition.y);
        };
        this.segmentsX = segmentsX;
        this.segmentsY = segmentsY;
        this.xInterval = gameWindow.width / segmentsX;
        this.yInterval = gameWindow.height / segmentsY;
        this.gameWindow.registerEvent("mousemove", this.baseOnMouseMove);
        this.gameWindow.registerEvent("contextmenu", function (e) { return e.preventDefault(); });
        for (var i = 0; i < segmentsY; i++) {
            for (var j = 0; j < segmentsX; j++) {
                this.squares.push(new ownableSquare_1.OwnableSquare(this, j + 1, i + 1));
            }
        }
    }
    GameBoard.prototype.shortestPath = function (source, destination) {
        var deltaX = destination.gridX - source.gridX;
        var deltaY = destination.gridY - source.gridY;
        var absDeltaX = Math.abs(deltaX);
        var absDeltaY = Math.abs(deltaY);
        var xIsNegative = deltaX < 0 ? true : false;
        var yIsNegative = deltaY < 0 ? true : false;
        var squares = [];
        var xArray = [];
        var yArray = [];
        for (var i = 1; i <= absDeltaX; i++) {
            var x = xIsNegative ? source.gridX - i : source.gridX + i;
            xArray.push(x);
        }
        for (var i = 1; i <= absDeltaY; i++) {
            var y = yIsNegative ? source.gridY - i : source.gridY + i;
            yArray.push(y);
        }
        for (var i = 0; i < Math.max(absDeltaX, absDeltaY); i++) {
            var x = xArray[i] === undefined ? destination.gridX : xArray[i];
            var y = yArray[i] === undefined ? destination.gridY : yArray[i];
            var square = this.getSquare(x, y);
            squares.push(square);
        }
        var obj = squares.map(function (s) { return { x: s.gridX, y: s.gridY }; });
        obj.forEach(function (s) { return console.log(s); });
        //console.log(obj);
        //console.log(squares);
        //console.log(xArray);
        //console.log(yArray);
        return squares;
    };
    GameBoard.prototype.render = function () {
        this.gameWindow.clearScreen();
        var hoveredCoords = this.hoveredSquare.getPixelCoordinates();
        this.gameWindow.drawSkinnyGridBox(hoveredCoords.x, hoveredCoords.y, this.xInterval, this.yInterval, "orange");
        for (var i = 1; i < this.segmentsX; i++) {
            this.gameWindow.drawLine(i * this.xInterval, 0, i * this.xInterval, this.gameWindow.height);
        }
        for (var i = 1; i < this.segmentsY; i++) {
            this.gameWindow.drawLine(0, i * this.yInterval, this.gameWindow.width, i * this.yInterval);
        }
        for (var _i = 0, _a = this.squares; _i < _a.length; _i++) {
            var square = _a[_i];
            square.render();
        }
    };
    GameBoard.prototype.getGridPosition = function (clientX, clientY) {
        var offset = this.gameWindow.getBoundingClientRect();
        var mouseX = clientX - offset.left;
        var mouseY = clientY - offset.top;
        var xGridBlock = Math.floor(mouseX / this.xInterval) + 1;
        var yGridBlock = Math.floor(mouseY / this.yInterval) + 1;
        return new point_1.Point(xGridBlock, yGridBlock);
    };
    GameBoard.prototype.getSquares = function () {
        return this.squares.slice();
    };
    GameBoard.prototype.getSquare = function (gridX, gridY) {
        if (gridX > this.segmentsX || gridY > this.segmentsY)
            return undefined;
        if (gridX < 1 || gridY < 1)
            return undefined;
        var arrayPos = (gridY - 1) * this.segmentsX + gridX - 1;
        return this.squares[arrayPos];
    };
    GameBoard.prototype.setSquare = function (square) {
        var arrayPos = (square.gridY - 1) * this.segmentsX + square.gridX - 1;
        this.squares[arrayPos] = square;
        this.activationOrder.push(square);
    };
    GameBoard.prototype.setSquares = function (squares) {
        var _this = this;
        squares.forEach(function (value) { return _this.setSquare(value); });
    };
    GameBoard.prototype.initializeSquares = function (squares) {
        this.squares = squares;
        this.activationOrder = [];
    };
    return GameBoard;
}());
exports.GameBoard = GameBoard;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chessSquare_1 = __webpack_require__(0);
var rook_1 = __webpack_require__(11);
var knight_1 = __webpack_require__(12);
var bishop_1 = __webpack_require__(13);
var king_1 = __webpack_require__(14);
var queen_1 = __webpack_require__(15);
var pawn_1 = __webpack_require__(16);
var ownableSquare_1 = __webpack_require__(1);
var ChessSquareFactory = /** @class */ (function () {
    function ChessSquareFactory() {
    }
    ChessSquareFactory.getSquares = function (gameBoard, squaresX, squaresY, squareWidth, squareHeight) {
        //white icons
        var whiteRookIcon = new Image(squareWidth, squareHeight);
        whiteRookIcon.src = this.whiteRookSrc;
        var whiteKnightIcon = new Image(squareWidth, squareHeight);
        whiteKnightIcon.src = this.whiteKnightSrc;
        var whiteBishopIcon = new Image(squareWidth, squareHeight);
        whiteBishopIcon.src = this.whiteBishopSrc;
        var whiteKingIcon = new Image(squareWidth, squareHeight);
        whiteKingIcon.src = this.whiteKingSrc;
        var whiteQueenIcon = new Image(squareWidth, squareHeight);
        whiteQueenIcon.src = this.whiteQueenSrc;
        var whitePawnIcon = new Image(squareWidth, squareHeight);
        whitePawnIcon.src = this.whitePawnSrc;
        //black icons
        var blackRookIcon = new Image(squareWidth, squareHeight);
        blackRookIcon.src = this.blackRookSrc;
        var blackKnightIcon = new Image(squareWidth, squareHeight);
        blackKnightIcon.src = this.blackKnightSrc;
        var blackBishopIcon = new Image(squareWidth, squareHeight);
        blackBishopIcon.src = this.blackBishopSrc;
        var blackKingIcon = new Image(squareWidth, squareHeight);
        blackKingIcon.src = this.blackKingSrc;
        var blackQueenIcon = new Image(squareWidth, squareHeight);
        blackQueenIcon.src = this.blackQueenSrc;
        var blackPawnIcon = new Image(squareWidth, squareHeight);
        blackPawnIcon.src = this.blackPawnSrc;
        var pieces = [
            //white misc
            new rook_1.Rook(gameBoard, whiteRookIcon, 1, 1, ownableSquare_1.Owner.Computer),
            new knight_1.Knight(gameBoard, whiteKnightIcon, 2, 1, ownableSquare_1.Owner.Computer),
            new bishop_1.Bishop(gameBoard, whiteBishopIcon, 3, 1, ownableSquare_1.Owner.Computer),
            new king_1.King(gameBoard, whiteKingIcon, 5, 1, ownableSquare_1.Owner.Computer),
            new queen_1.Queen(gameBoard, whiteQueenIcon, 4, 1, ownableSquare_1.Owner.Computer),
            new bishop_1.Bishop(gameBoard, whiteBishopIcon, 6, 1, ownableSquare_1.Owner.Computer),
            new knight_1.Knight(gameBoard, whiteKnightIcon, 7, 1, ownableSquare_1.Owner.Computer),
            new rook_1.Rook(gameBoard, whiteRookIcon, 8, 1, ownableSquare_1.Owner.Computer),
            //white pawns
            new pawn_1.Pawn(gameBoard, whitePawnIcon, 1, 2, ownableSquare_1.Owner.Computer),
            new pawn_1.Pawn(gameBoard, whitePawnIcon, 2, 2, ownableSquare_1.Owner.Computer),
            new pawn_1.Pawn(gameBoard, whitePawnIcon, 3, 2, ownableSquare_1.Owner.Computer),
            new pawn_1.Pawn(gameBoard, whitePawnIcon, 4, 2, ownableSquare_1.Owner.Computer),
            new pawn_1.Pawn(gameBoard, whitePawnIcon, 5, 2, ownableSquare_1.Owner.Computer),
            new pawn_1.Pawn(gameBoard, whitePawnIcon, 6, 2, ownableSquare_1.Owner.Computer),
            new pawn_1.Pawn(gameBoard, whitePawnIcon, 7, 2, ownableSquare_1.Owner.Computer),
            new pawn_1.Pawn(gameBoard, whitePawnIcon, 8, 2, ownableSquare_1.Owner.Computer),
            //black pawns
            new pawn_1.Pawn(gameBoard, blackPawnIcon, 1, 7, ownableSquare_1.Owner.Player),
            new pawn_1.Pawn(gameBoard, blackPawnIcon, 2, 7, ownableSquare_1.Owner.Player),
            new pawn_1.Pawn(gameBoard, blackPawnIcon, 3, 7, ownableSquare_1.Owner.Player),
            new pawn_1.Pawn(gameBoard, blackPawnIcon, 4, 7, ownableSquare_1.Owner.Player),
            new pawn_1.Pawn(gameBoard, blackPawnIcon, 5, 7, ownableSquare_1.Owner.Player),
            new pawn_1.Pawn(gameBoard, blackPawnIcon, 6, 7, ownableSquare_1.Owner.Player),
            new pawn_1.Pawn(gameBoard, blackPawnIcon, 7, 7, ownableSquare_1.Owner.Player),
            new pawn_1.Pawn(gameBoard, blackPawnIcon, 8, 7, ownableSquare_1.Owner.Player),
            //black misc
            new rook_1.Rook(gameBoard, blackRookIcon, 1, 8, ownableSquare_1.Owner.Player),
            new knight_1.Knight(gameBoard, blackKnightIcon, 2, 8, ownableSquare_1.Owner.Player),
            new bishop_1.Bishop(gameBoard, blackBishopIcon, 3, 8, ownableSquare_1.Owner.Player),
            new king_1.King(gameBoard, blackKingIcon, 4, 8, ownableSquare_1.Owner.Player),
            new queen_1.Queen(gameBoard, blackQueenIcon, 5, 8, ownableSquare_1.Owner.Player),
            new bishop_1.Bishop(gameBoard, blackBishopIcon, 6, 8, ownableSquare_1.Owner.Player),
            new knight_1.Knight(gameBoard, blackKnightIcon, 7, 8, ownableSquare_1.Owner.Player),
            new rook_1.Rook(gameBoard, blackRookIcon, 8, 8, ownableSquare_1.Owner.Player),
        ];
        var allSquares = [];
        var _loop_1 = function (i) {
            var _loop_2 = function (j) {
                var x = pieces.filter(function (s) { return s.gridX === j + 1 && s.gridY === i + 1; })[0];
                var y = x !== undefined ? x : new chessSquare_1.EmptyChessSquare(gameBoard, j + 1, i + 1);
                allSquares.push(y);
            };
            for (var j = 0; j < squaresX; j++) {
                _loop_2(j);
            }
        };
        for (var i = 0; i < squaresY; i++) {
            _loop_1(i);
        }
        return allSquares;
    };
    ChessSquareFactory.whiteRookSrc = "./content/pieces/whiteRook.png";
    ChessSquareFactory.whiteKnightSrc = "./content/pieces/whiteKnight.png";
    ChessSquareFactory.whiteBishopSrc = "./content/pieces/WhiteBishop.png";
    ChessSquareFactory.whiteKingSrc = "./content/pieces/whiteKing.png";
    ChessSquareFactory.whiteQueenSrc = "./content/pieces/WhiteQueen.png";
    ChessSquareFactory.whitePawnSrc = "./content/pieces/WhitePawn.png";
    ChessSquareFactory.blackRookSrc = "./content/pieces/BlackRook.png";
    ChessSquareFactory.blackKnightSrc = "./content/pieces/BlackKnight.png";
    ChessSquareFactory.blackBishopSrc = "./content/pieces/blackBishop.png";
    ChessSquareFactory.blackKingSrc = "./content/pieces/BlackKing.png";
    ChessSquareFactory.blackQueenSrc = "./content/pieces/blackQueen.png";
    ChessSquareFactory.blackPawnSrc = "./content/pieces/blackPawn.png";
    return ChessSquareFactory;
}());
exports.ChessSquareFactory = ChessSquareFactory;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chessPiece_1 = __webpack_require__(3);
var chessSquare_1 = __webpack_require__(0);
var point_1 = __webpack_require__(2);
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(gameBoard, icon, gridX, gridY, owner) {
        return _super.call(this, gameBoard, icon, gridX, gridY, owner, chessSquare_1.ChessSquareType.Rook) || this;
    }
    Rook.prototype.getAvailableMoves = function () {
        var modifiers = [
            function (p) { return new point_1.Point(++p.x, p.y); },
            function (p) { return new point_1.Point(p.x, ++p.y); },
            function (p) { return new point_1.Point(--p.x, p.y); },
            function (p) { return new point_1.Point(p.x, --p.y); }
        ];
        var moves = this.getSquareSequences(modifiers);
        moves = this.filterInvalid(moves);
        return moves;
    };
    return Rook;
}(chessPiece_1.ChessPiece));
exports.Rook = Rook;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chessPiece_1 = __webpack_require__(3);
var chessSquare_1 = __webpack_require__(0);
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(gameBoard, icon, gridX, gridY, owner) {
        return _super.call(this, gameBoard, icon, gridX, gridY, owner, chessSquare_1.ChessSquareType.Knight) || this;
    }
    Knight.prototype.getAvailableMoves = function () {
        var moves = [
            this.gameBoard.getSquare(this.gridX - 2, this.gridY - 1),
            this.gameBoard.getSquare(this.gridX - 1, this.gridY - 2),
            this.gameBoard.getSquare(this.gridX + 1, this.gridY - 2),
            this.gameBoard.getSquare(this.gridX + 2, this.gridY - 1),
            this.gameBoard.getSquare(this.gridX + 2, this.gridY + 1),
            this.gameBoard.getSquare(this.gridX + 1, this.gridY + 2),
            this.gameBoard.getSquare(this.gridX - 1, this.gridY + 2),
            this.gameBoard.getSquare(this.gridX - 2, this.gridY + 1),
        ];
        moves = this.filterInvalid(moves);
        return moves;
    };
    return Knight;
}(chessPiece_1.ChessPiece));
exports.Knight = Knight;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chessPiece_1 = __webpack_require__(3);
var chessSquare_1 = __webpack_require__(0);
var point_1 = __webpack_require__(2);
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(gameBoard, icon, gridX, gridY, owner) {
        var _this = _super.call(this, gameBoard, icon, gridX, gridY, owner, chessSquare_1.ChessSquareType.Bishop) || this;
        _this.squreType = chessSquare_1.ChessSquareType.Bishop;
        return _this;
    }
    Bishop.prototype.getAvailableMoves = function () {
        var modifiers = [
            function (p) { return new point_1.Point(++p.x, ++p.y); },
            function (p) { return new point_1.Point(--p.x, ++p.y); },
            function (p) { return new point_1.Point(++p.x, --p.y); },
            function (p) { return new point_1.Point(--p.x, --p.y); }
        ];
        var moves = this.getSquareSequences(modifiers);
        moves = this.filterInvalid(moves);
        return moves;
    };
    return Bishop;
}(chessPiece_1.ChessPiece));
exports.Bishop = Bishop;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(2);
var chessSquare_1 = __webpack_require__(0);
var chessPiece_1 = __webpack_require__(3);
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King(gameBoard, icon, gridX, gridY, owner) {
        var _this = _super.call(this, gameBoard, icon, gridX, gridY, owner, chessSquare_1.ChessSquareType.King) || this;
        _this.squreType = chessSquare_1.ChessSquareType.King;
        return _this;
    }
    King.prototype.getAvailableMoves = function () {
        var modifiers = [
            function (p) { return new point_1.Point(++p.x, ++p.y); },
            function (p) { return new point_1.Point(--p.x, ++p.y); },
            function (p) { return new point_1.Point(++p.x, --p.y); },
            function (p) { return new point_1.Point(--p.x, --p.y); },
            function (p) { return new point_1.Point(++p.x, p.y); },
            function (p) { return new point_1.Point(p.x, ++p.y); },
            function (p) { return new point_1.Point(--p.x, p.y); },
            function (p) { return new point_1.Point(p.x, --p.y); }
        ];
        var moves = this.getSquareSequences(modifiers, 1);
        moves = this.filterInvalid(moves);
        return moves;
    };
    return King;
}(chessPiece_1.ChessPiece));
exports.King = King;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chessSquare_1 = __webpack_require__(0);
var chessPiece_1 = __webpack_require__(3);
var point_1 = __webpack_require__(2);
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen(gameBoard, icon, gridX, gridY, owner) {
        return _super.call(this, gameBoard, icon, gridX, gridY, owner, chessSquare_1.ChessSquareType.Queen) || this;
    }
    Queen.prototype.getAvailableMoves = function () {
        var modifiers = [
            function (p) { return new point_1.Point(++p.x, ++p.y); },
            function (p) { return new point_1.Point(--p.x, ++p.y); },
            function (p) { return new point_1.Point(++p.x, --p.y); },
            function (p) { return new point_1.Point(--p.x, --p.y); },
            function (p) { return new point_1.Point(++p.x, p.y); },
            function (p) { return new point_1.Point(p.x, ++p.y); },
            function (p) { return new point_1.Point(--p.x, p.y); },
            function (p) { return new point_1.Point(p.x, --p.y); }
        ];
        var moves = this.getSquareSequences(modifiers);
        moves = this.filterInvalid(moves);
        return moves;
    };
    return Queen;
}(chessPiece_1.ChessPiece));
exports.Queen = Queen;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chessPiece_1 = __webpack_require__(3);
var chessSquare_1 = __webpack_require__(0);
var ownableSquare_1 = __webpack_require__(1);
var point_1 = __webpack_require__(2);
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(gameBoard, icon, gridX, gridY, owner) {
        return _super.call(this, gameBoard, icon, gridX, gridY, owner, chessSquare_1.ChessSquareType.Pawn) || this;
    }
    Pawn.prototype.getAvailableMoves = function () {
        var _this = this;
        var above = this.gameBoard.getSquare(this.gridX, this.gridY + 1);
        above = above !== undefined && above.owner !== this.owner && above.owner !== ownableSquare_1.Owner.Empty
            ? undefined : above;
        var below = this.gameBoard.getSquare(this.gridX, this.gridY - 1);
        below = below !== undefined && below.owner !== this.owner && below.owner !== ownableSquare_1.Owner.Empty
            ? undefined : below;
        var modifiers = [
            function (p) { return new point_1.Point(++p.x, ++p.y); },
            function (p) { return new point_1.Point(--p.x, ++p.y); },
            function (p) { return new point_1.Point(++p.x, --p.y); },
            function (p) { return new point_1.Point(--p.x, --p.y); }
        ];
        var diagonals = this.getSquareSequences(modifiers, 1).filter(function (s) { return s.owner !== _this.owner && s.owner !== ownableSquare_1.Owner.Empty; });
        var x = [above, below].concat(diagonals);
        var squares = this.filterInvalid(x);
        return squares;
    };
    return Pawn;
}(chessPiece_1.ChessPiece));
exports.Pawn = Pawn;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ownableSquare_1 = __webpack_require__(1);
var ShallowBlue = /** @class */ (function () {
    function ShallowBlue(gameBoard) {
        this.gameBoard = gameBoard;
    }
    ShallowBlue.prototype.getMove = function () {
        var takePiecemove = this.takePieceMove();
        if (takePiecemove)
            return takePiecemove;
        return this.randomMove();
    };
    ShallowBlue.prototype.randomMove = function () {
        var computerSquares = this.gameBoard.getSquares().filter(function (s) { return s.owner === ownableSquare_1.Owner.Computer; });
        var randomDestinationSquare;
        while (randomDestinationSquare === undefined) {
            var randomSquareIndex = Math.floor(Math.random() * computerSquares.length);
            var randomSourceSquare = computerSquares[randomSquareIndex];
            var moves = randomSourceSquare.getAvailableMoves();
            var randomMoveIndex = Math.floor(Math.random() * moves.length);
            randomDestinationSquare = moves[0];
            computerSquares.splice(randomSquareIndex, 1);
        }
        return { sourceSquare: randomSourceSquare, destinationSquare: randomDestinationSquare };
    };
    ShallowBlue.prototype.takePieceMove = function () {
        var computerSquares = this.gameBoard.getSquares().filter(function (s) { return s.owner === ownableSquare_1.Owner.Computer; });
        for (var _i = 0, computerSquares_1 = computerSquares; _i < computerSquares_1.length; _i++) {
            var square = computerSquares_1[_i];
            var moves = square.getAvailableMoves();
            for (var _a = 0, moves_1 = moves; _a < moves_1.length; _a++) {
                var move = moves_1[_a];
                if (move.owner !== ownableSquare_1.Owner.Player)
                    continue;
                return { sourceSquare: square, destinationSquare: move };
            }
        }
        return null;
    };
    return ShallowBlue;
}());
exports.ShallowBlue = ShallowBlue;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameWindow = /** @class */ (function () {
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
    GameWindow.prototype.registerEvent = function (eventName, callback) {
        this.canvas.addEventListener(eventName, callback, false);
    };
    GameWindow.prototype.drawImage = function (image, xCoord, yCoord, width, height) {
        this.context.drawImage(image, xCoord, yCoord, width, height);
    };
    GameWindow.prototype.drawSkinnyGridBox = function (x, y, width, height, color, isFillable) {
        if (color === void 0) { color = "grey"; }
        if (isFillable === void 0) { isFillable = true; }
        if (isFillable)
            this.fillRect(x, y, width, height, color);
        else
            this.strokeRect((x * width) - width + 1, (y * height - height + (height / 4.0)) + 1, width - 2, height / 2 - 2, color);
    };
    return GameWindow;
}());
exports.GameWindow = GameWindow;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2VkMWI5NzEyYjA2YTkwYTJhM2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2NoZXNzL3BpZWNlcy9jaGVzc1NxdWFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9vd25hYmxlU3F1YXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9jaGVzcy9waWVjZXMvY2hlc3NQaWVjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlc3MvY2hlc3NHYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSW5wdXRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JlbmRlcmFibGVTcXVhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY2hlc3NCb2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lQm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2NoZXNzL2NoZXNzU3F1YXJlRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMvY2hlc3MvcGllY2VzL3Jvb2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2NoZXNzL3BpZWNlcy9rbmlnaHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2NoZXNzL3BpZWNlcy9iaXNob3AudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2NoZXNzL3BpZWNlcy9raW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9jaGVzcy9waWVjZXMvcXVlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVzL2NoZXNzL3BpZWNlcy9wYXduLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lcy9jaGVzcy9zaGFsbG93Qmx1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lV2lu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QUFDLFlBQVksQ0FBQztRQUN0QyxJQUFNLGVBQWUsR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDN0QsZUFBZSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzFDLElBQU0sZUFBZSxHQUFHLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM3RCxlQUFlLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDMUMsSUFBTSxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzNELGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFNLGNBQWMsR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDNUQsY0FBYyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQU0sYUFBYSxHQUFHLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMzRCxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFdEMsSUFBSSxNQUFNLEdBQWtCO1lBQ3hCLFlBQVk7WUFDWixJQUFJLFdBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUscUJBQUssQ0FBQyxRQUFRLENBQUM7WUFDeEQsSUFBSSxlQUFNLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLHFCQUFLLENBQUMsUUFBUSxDQUFDO1lBQzVELElBQUksZUFBTSxDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxxQkFBSyxDQUFDLFFBQVEsQ0FBQztZQUM1RCxJQUFJLFdBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUscUJBQUssQ0FBQyxRQUFRLENBQUM7WUFDeEQsSUFBSSxhQUFLLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLHFCQUFLLENBQUMsUUFBUSxDQUFDO1lBQzFELElBQUksZUFBTSxDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxxQkFBSyxDQUFDLFFBQVEsQ0FBQztZQUM1RCxJQUFJLGVBQU0sQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUscUJBQUssQ0FBQyxRQUFRLENBQUM7WUFDNUQsSUFBSSxXQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLHFCQUFLLENBQUMsUUFBUSxDQUFDO1lBRXhELGFBQWE7WUFDYixJQUFJLFdBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUscUJBQUssQ0FBQyxRQUFRLENBQUM7WUFDeEQsSUFBSSxXQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLHFCQUFLLENBQUMsUUFBUSxDQUFDO1lBQ3hELElBQUksV0FBSSxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxxQkFBSyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLFdBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUscUJBQUssQ0FBQyxRQUFRLENBQUM7WUFDeEQsSUFBSSxXQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLHFCQUFLLENBQUMsUUFBUSxDQUFDO1lBQ3hELElBQUksV0FBSSxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxxQkFBSyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLFdBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUscUJBQUssQ0FBQyxRQUFRLENBQUM7WUFDeEQsSUFBSSxXQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLHFCQUFLLENBQUMsUUFBUSxDQUFDO1lBRXhELGFBQWE7WUFDYixJQUFJLFdBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUscUJBQUssQ0FBQyxNQUFNLENBQUM7WUFDdEQsSUFBSSxXQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLHFCQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3RELElBQUksV0FBSSxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxxQkFBSyxDQUFDLE1BQU0sQ0FBQztZQUN0RCxJQUFJLFdBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUscUJBQUssQ0FBQyxNQUFNLENBQUM7WUFDdEQsSUFBSSxXQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLHFCQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3RELElBQUksV0FBSSxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxxQkFBSyxDQUFDLE1BQU0sQ0FBQztZQUN0RCxJQUFJLFdBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUscUJBQUssQ0FBQyxNQUFNLENBQUM7WUFDdEQsSUFBSSxXQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLHFCQUFLLENBQUMsTUFBTSxDQUFDO1lBRXRELFlBQVk7WUFDWixJQUFJLFdBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUscUJBQUssQ0FBQyxNQUFNLENBQUM7WUFDdEQsSUFBSSxlQUFNLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFB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QUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDeEU7UUFDRCxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxDQXZCMkIsdUJBQVUsR0F1QnJDO0FBdkJZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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LENBQUM7SUFFTSxrQ0FBYSxHQUFwQixVQUFxQixTQUFpQixFQUFFLFFBQWtDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sOEJBQVMsR0FBaEIsVUFBaUIsS0FBdUIsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQ25HLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sc0NBQWlCLEdBQXhCLFVBQXlCLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFBRSxLQUFjLEVBQUUsVUFBaUI7UUFBakMsc0NBQWM7UUFBRSw4Q0FBaUI7UUFDM0csRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFOUMsSUFBSTtZQUNBLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0gsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQXJFWSxnQ0FBVSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZWQxYjk3MTJiMDZhOTBhMmEzZiIsImltcG9ydCB7IE93bmFibGVTcXVhcmUsIE93bmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvb3duYWJsZVNxdWFyZVwiO1xyXG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9nYW1lQm9hcmRcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGVzc1NxdWFyZSBleHRlbmRzIE93bmFibGVTcXVhcmUge1xyXG4gICAgcHJvdGVjdGVkIGlzSGlnaGxpZ2h0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lQm9hcmQ6IEdhbWVCb2FyZDxDaGVzc1NxdWFyZT4sIGdyaWRYOiBudW1iZXIsIGdyaWRZOiBudW1iZXIsXHJcbiAgICAgICAgb3duZXI6IE93bmVyID0gT3duZXIuRW1wdHksIHB1YmxpYyBzcXVhcmVUeXBlID0gQ2hlc3NTcXVhcmVUeXBlLkVtcHR5KSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZUJvYXJkLCBncmlkWCwgZ3JpZFksIG93bmVyKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzcXVyZVR5cGUgPSBDaGVzc1NxdWFyZVR5cGUuRW1wdHk7XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGdldEF2YWlsYWJsZU1vdmVzKCk6IENoZXNzU3F1YXJlW107XHJcblxyXG4gICAgcHVibGljIGhpZ2hsaWdodCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzSGlnaGxpZ2h0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZUhpZ2hsaWdodCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzSGlnaGxpZ2h0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKGlzRmlsbGFibGU/OiBib29sZWFuLCBjb2xvcj86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0hpZ2hsaWdodGVkKSByZXR1cm47XHJcbiAgICAgICAgdmFyIGNvb3JkcyA9IHRoaXMuZ2V0UGl4ZWxDb29yZGluYXRlcygpOztcclxuICAgICAgICB0aGlzLmdhbWVCb2FyZC5nYW1lV2luZG93LmZpbGxSZWN0KGNvb3Jkcy54LCBjb29yZHMueSwgdGhpcy5nYW1lQm9hcmQueEludGVydmFsLCB0aGlzLmdhbWVCb2FyZC55SW50ZXJ2YWwsIFwiZ3JlZW5cIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbXB0eUNoZXNzU3F1YXJlIGV4dGVuZHMgQ2hlc3NTcXVhcmUge1xyXG4gICAgcHVibGljIGdldEF2YWlsYWJsZU1vdmVzKCk6IENoZXNzU3F1YXJlW10ge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2hlc3NTcXVhcmVUeXBlIHsgRW1wdHksIFBhd24sIFJvb2ssIEtuaWdodCwgQmlzaG9wLCBRdWVlbiwgS2luZyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWVzL2NoZXNzL3BpZWNlcy9jaGVzc1NxdWFyZS50cyIsImltcG9ydCB7IFJlbmRlcmFibGVTcXVhcmUgfSBmcm9tIFwiLi9yZW5kZXJhYmxlU3F1YXJlXCI7XHJcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE93bmFibGVTcXVhcmUgZXh0ZW5kcyBSZW5kZXJhYmxlU3F1YXJlIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVCb2FyZDogR2FtZUJvYXJkPFJlbmRlcmFibGVTcXVhcmU+LCBncmlkWDogbnVtYmVyLCBncmlkWTogbnVtYmVyLCBwdWJsaWMgb3duZXIgPSBPd25lci5FbXB0eSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWVCb2FyZCwgZ3JpZFgsIGdyaWRZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vd25lciA9PT0gT3duZXIuUGxheWVyID8gXCJibGFja1wiIDogXCJyZWRcIjtcclxuICAgICAgICB0aGlzLmdhbWVCb2FyZC5nYW1lV2luZG93LmRyYXdTa2lubnlHcmlkQm94KHRoaXMuZ3JpZFgsIHRoaXMuZ3JpZFksIDAsIDAsIGNvbG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gT3duZXIge1xyXG4gICAgRW1wdHksIFBsYXllciwgQ29tcHV0ZXJcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL293bmFibGVTcXVhcmUudHMiLCJleHBvcnQgY2xhc3MgUG9pbnQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHg6IG51bWJlciwgcHVibGljIHk6IG51bWJlcikge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcXVhbHMob3RoZXJQb2ludDogUG9pbnQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy54ID09PSBvdGhlclBvaW50LnggJiYgdGhpcy55ID09PSBvdGhlclBvaW50LnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL3BvaW50LnRzIiwiaW1wb3J0IHsgQ2hlc3NTcXVhcmUsIENoZXNzU3F1YXJlVHlwZSB9IGZyb20gXCIuL2NoZXNzU3F1YXJlXCI7XHJcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2dhbWVCb2FyZFwiO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3BvaW50XCI7XHJcbmltcG9ydCB7IE93bmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvb3duYWJsZVNxdWFyZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENoZXNzUGllY2UgZXh0ZW5kcyBDaGVzc1NxdWFyZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZ2FtZUJvYXJkOiBHYW1lQm9hcmQ8Q2hlc3NTcXVhcmU+LCBwcm90ZWN0ZWQgaWNvbjogSFRNTEltYWdlRWxlbWVudCxcclxuICAgICAgICBncmlkWDogbnVtYmVyLCBncmlkWTogbnVtYmVyLCBvd25lcjogT3duZXIsIHNxdWFyZVR5cGU6IENoZXNzU3F1YXJlVHlwZSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWVCb2FyZCwgZ3JpZFgsIGdyaWRZLCBvd25lciwgc3F1YXJlVHlwZSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xyXG4gICAgICAgIHZhciBjb29yZHMgPSB0aGlzLmdldFBpeGVsQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgICB0aGlzLmdhbWVCb2FyZC5nYW1lV2luZG93LmRyYXdJbWFnZSh0aGlzLmljb24sIGNvb3Jkcy54LCBjb29yZHMueSwgdGhpcy5pY29uLndpZHRoLCB0aGlzLmljb24uaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZmlsdGVySW52YWxpZChzcXVhcmVzOiBDaGVzc1NxdWFyZVtdKTogQ2hlc3NTcXVhcmVbXSB7XHJcbiAgICAgICAgdmFyIGZpbHRlcmVkU3F1YXJlczogQ2hlc3NTcXVhcmVbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBzcXVhcmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChzcXVhcmUgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChzcXVhcmUub3duZXIgPT09IHRoaXMub3duZXIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFNxdWFyZXMucHVzaChzcXVhcmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsdGVyZWRTcXVhcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRTcXVhcmVTZXF1ZW5jZXMocG9pbnRNb2RpZmllcnM6ICgocG9pbnQ6IFBvaW50KSA9PiBQb2ludClbXSwgc2VnbWVudHMgPSB0aGlzLmdhbWVCb2FyZC5zZWdtZW50c1gpOiBDaGVzc1NxdWFyZVtdIHtcclxuICAgICAgICBsZXQgbW92ZXM6IENoZXNzU3F1YXJlW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBwb2ludE1vZGlmaWVyIG9mIHBvaW50TW9kaWZpZXJzKSB7XHJcbiAgICAgICAgICAgIGxldCBwb2ludCA9IG5ldyBQb2ludCh0aGlzLmdyaWRYLCB0aGlzLmdyaWRZKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2VnbWVudHMgKyAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSA8Q2hlc3NTcXVhcmU+dGhpcy5nYW1lQm9hcmQuZ2V0U3F1YXJlKHBvaW50LngsIHBvaW50LnkpO1xyXG4gICAgICAgICAgICAgICAgcG9pbnQgPSBwb2ludE1vZGlmaWVyKHBvaW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChzcXVhcmUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmVxdWFscyhzcXVhcmUpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIG1vdmVzLnB1c2goc3F1YXJlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzcXVhcmUub3duZXIgIT09IE93bmVyLkVtcHR5KSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbW92ZXM7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZXMvY2hlc3MvcGllY2VzL2NoZXNzUGllY2UudHMiLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uL2NvcmUvZ2FtZVwiO1xyXG5pbXBvcnQgeyBDaGVzc1NxdWFyZSwgQ2hlc3NTcXVhcmVUeXBlIH0gZnJvbSBcIi4vcGllY2VzL2NoZXNzU3F1YXJlXCI7XHJcbmltcG9ydCB7IENoZXNzQm9hcmQgfSBmcm9tIFwiLi4vLi4vY29yZS9jaGVzc0JvYXJkXCI7XHJcbmltcG9ydCB7IFNoYWxsb3dCbHVlIH0gZnJvbSBcIi4vc2hhbGxvd0JsdWVcIjtcclxuaW1wb3J0IHsgT3duZXIgfSBmcm9tIFwiLi4vLi4vY29yZS9vd25hYmxlU3F1YXJlXCI7XHJcbmltcG9ydCB7IEdhbWVXaW5kb3cgfSBmcm9tIFwiLi4vLi4vY29yZS9nYW1lV2luZG93XCI7XHJcblxyXG5jbGFzcyBDaGVzc0dhbWUgZXh0ZW5kcyBHYW1lXHJcbntcclxuICAgIHB1YmxpYyBzdGF0ZTogQ2hlc3NHYW1lU3RhdGU7XHJcbiAgICBwdWJsaWMgc291cmNlU3F1YXJlOiBDaGVzc1NxdWFyZTtcclxuICAgIHB1YmxpYyBkZXN0aW5hdGlvblNxdWFyZTogQ2hlc3NTcXVhcmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGdhbWVCb2FyZDogQ2hlc3NCb2FyZCwgcHJpdmF0ZSBjb21wdXRlckFpOiBTaGFsbG93Qmx1ZSlcclxuICAgIHtcclxuICAgICAgICBzdXBlcihnYW1lQm9hcmQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBDaGVzc0dhbWVTdGF0ZS5Bd2FpdGluZ1BsYXllcklucHV0O1xyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLmdhbWVXaW5kb3cucmVnaXN0ZXJFdmVudChcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duKTtcclxuICAgICAgICB0aGlzLnRpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdGljayA9ICh0aW1lOiBudW1iZXIgPSBudWxsKTogdm9pZCA9PlxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5mcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldCgpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2hlY2tIb3ZlcmVkQXZhaWxhYmxlTW92ZXMoKTtcclxuICAgICAgICB0aGlzLmNvbXB1dGVyTW92ZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldyhDaGVzc0dhbWVTdGF0ZVt0aGlzLnN0YXRlXSk7XHJcbiAgICAgICAgdGhpcy5jaGVja1dpbkNvbmRpdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wdXRlck1vdmUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDaGVzc0dhbWVTdGF0ZS5Db21wdXRlclR1cm5TdGFydCkgcmV0dXJuO1xyXG4gICAgICAgIC8vdGhpcy5zdGF0ZSA9IENoZXNzR2FtZVN0YXRlLkNvbXB1dGVyVHVybkluUHJvZ3Jlc3M7XHJcbiAgICAgICAgLy92YXIgbW92ZSA9IHRoaXMuY29tcHV0ZXJBaS5nZXRNb3ZlKCk7XHJcbiAgICAgICAgLy90aGlzLmdhbWVCb2FyZC5zd2FwU3F1YXJlcyhtb3ZlLnNvdXJjZVNxdWFyZSwgbW92ZS5kZXN0aW5hdGlvblNxdWFyZSxcclxuICAgICAgICAvLyAgICAoKSA9PiB0aGlzLnN0YXRlID0gQ2hlc3NHYW1lU3RhdGUuQXdhaXRpbmdQbGF5ZXJJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0hvdmVyZWRBdmFpbGFibGVNb3ZlcygpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHNxdWFyZXMgPSB0aGlzLnN0YXRlID09PSBDaGVzc0dhbWVTdGF0ZS5Bd2FpdGluZ1BsYXllcklucHV0ID9cclxuICAgICAgICAgICAgdGhpcy5nYW1lQm9hcmQuaG92ZXJlZFNxdWFyZS5nZXRBdmFpbGFibGVNb3ZlcygpIDpcclxuICAgICAgICAgICAgdGhpcy5nYW1lQm9hcmQuY2xpY2tlZFNxdWFyZS5nZXRBdmFpbGFibGVNb3ZlcygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLmRlSGlnaGxpZ2h0U3F1YXJlcygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLmhpZ2hsaWdodFNxdWFyZXMoc3F1YXJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNoZWNrV2luQ29uZGl0aW9uKClcclxuICAgIHtcclxuICAgICAgICB2YXIga2luZ1NxdWFyZXMgPSB0aGlzLmdhbWVCb2FyZC5nZXRTcXVhcmVzKCkuZmlsdGVyKHMgPT4gcy5zcXVyZVR5cGUgPT09IENoZXNzU3F1YXJlVHlwZS5LaW5nKTtcclxuICAgICAgICBpZiAoa2luZ1NxdWFyZXMubGVuZ3RoID09PSAyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENoZXNzR2FtZVN0YXRlLkdhbWVPdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Nb3VzZURvd24gPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT5cclxuICAgIHtcclxuICAgICAgICBjb25zdCBncmlkUG9zaXRpb24gPSB0aGlzLmdhbWVCb2FyZC5nZXRHcmlkUG9zaXRpb24oZS5jbGllbnRYLCBlLmNsaWVudFkpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkLmhvdmVyZWRTcXVhcmUgPSB0aGlzLmdhbWVCb2FyZC5nZXRTcXVhcmUoZ3JpZFBvc2l0aW9uLngsIGdyaWRQb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmdhbWVCb2FyZC5jbGlja2VkU3F1YXJlID0gdGhpcy5nYW1lQm9hcmQuaG92ZXJlZFNxdWFyZTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ2hlc3NHYW1lU3RhdGUuQXdhaXRpbmdQbGF5ZXJJbnB1dClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVCb2FyZC5jbGlja2VkU3F1YXJlLm93bmVyICE9PSBPd25lci5QbGF5ZXIpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VTcXVhcmUgPSB0aGlzLmdhbWVCb2FyZC5jbGlja2VkU3F1YXJlO1xyXG4gICAgICAgICAgICBsZXQgYXZhaWxhYmxlTW92ZXMgPSB0aGlzLnNvdXJjZVNxdWFyZS5nZXRBdmFpbGFibGVNb3ZlcygpXHJcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVNb3Zlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENoZXNzR2FtZVN0YXRlLlNvdXJjZVNxdWFyZUNsaWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IENoZXNzR2FtZVN0YXRlLlNvdXJjZVNxdWFyZUNsaWNrZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uU3F1YXJlID0gdGhpcy5nYW1lQm9hcmQuY2xpY2tlZFNxdWFyZTtcclxuICAgICAgICAgICAgbGV0IGF2YWlsYWJsZU1vdmVzID0gdGhpcy5zb3VyY2VTcXVhcmUuZ2V0QXZhaWxhYmxlTW92ZXMoKVxyXG4gICAgICAgICAgICBpZiAoIWF2YWlsYWJsZU1vdmVzLnNvbWUocyA9PiBzLmVxdWFscyh0aGlzLmRlc3RpbmF0aW9uU3F1YXJlKSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBDaGVzc0dhbWVTdGF0ZS5Bd2FpdGluZ1BsYXllcklucHV0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdhbWVCb2FyZC5zd2FwU3F1YXJlcyh0aGlzLnNvdXJjZVNxdWFyZSwgdGhpcy5kZXN0aW5hdGlvblNxdWFyZSxcclxuICAgICAgICAgICAgICAgIC8vKCkgPT4gdGhpcy5zdGF0ZSA9IENoZXNzR2FtZVN0YXRlLkNvbXB1dGVyVHVyblN0YXJ0KTtcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc3RhdGUgPSBDaGVzc0dhbWVTdGF0ZS5Bd2FpdGluZ1BsYXllcklucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmVudW0gQ2hlc3NHYW1lU3RhdGVcclxue1xyXG4gICAgQXdhaXRpbmdQbGF5ZXJJbnB1dCwgU291cmNlU3F1YXJlQ2xpY2tlZCwgQ29tcHV0ZXJUdXJuU3RhcnQsIENvbXB1dGVyVHVybkluUHJvZ3Jlc3MsIEdhbWVPdmVyXHJcbn1cclxuXHJcbnZhciBnYW1lV2luZG93ID0gbmV3IEdhbWVXaW5kb3coNjAwLCA2MDApO1xyXG52YXIgZ2FtZUJvYXJkID0gbmV3IENoZXNzQm9hcmQoOCwgOCwgZ2FtZVdpbmRvdyk7XHJcbnZhciBzaGFsbG93Qmx1ZSA9IG5ldyBTaGFsbG93Qmx1ZShnYW1lQm9hcmQpO1xyXG52YXIgZ2FtZSA9IG5ldyBDaGVzc0dhbWUoZ2FtZUJvYXJkLCBzaGFsbG93Qmx1ZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWVzL2NoZXNzL2NoZXNzR2FtZS50cyIsImltcG9ydCB7IElucHV0SGFuZGxlciB9IGZyb20gXCIuL0lucHV0SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcclxuaW1wb3J0IHsgUmVuZGVyYWJsZVNxdWFyZSB9IGZyb20gXCIuL3JlbmRlcmFibGVTcXVhcmVcIjtcclxuaW1wb3J0IHsgT3duZXIgfSBmcm9tIFwiLi9vd25hYmxlU3F1YXJlXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2FtZSB7XHJcbiAgICBwcm90ZWN0ZWQgZnJhbWVJZDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGlucHV0SGFuZGxlcjogSW5wdXRIYW5kbGVyO1xyXG4gICAgcHJvdGVjdGVkIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG5vd1RpbWU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZ2FtZUJvYXJkOiBHYW1lQm9hcmQ8UmVuZGVyYWJsZVNxdWFyZT4pIHtcclxuICAgICAgICB0aGlzLmlucHV0SGFuZGxlciA9IG5ldyBJbnB1dEhhbmRsZXIoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCByZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZpZXcoc3RhdGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVTdGF0ZVwiKS5pbm5lclRleHQgPSBzdGF0ZU5hbWU7XHJcbiAgICAgICAgLy8gJChcIiNnYW1lU3RhdGVcIikudGV4dChzdGF0ZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCB1cGRhdGUoKTogdm9pZDtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjaGVja1dpbkNvbmRpdGlvbihvd25lcjogT3duZXIpOiB2b2lkO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvZ2FtZS50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4vcG9pbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEhhbmRsZXIge1xyXG4gICAgLy9wdWJsaWMgaXNQbGF5ZXJUdXJuOiBib29sZWFuO1xyXG4gICAgLy9wdWJsaWMgc3RhdGljIGJ1dHRvbkNsaWNrZWQgPSBmYWxzZTtcclxuICAgIC8vcHVibGljIHN0YXRpYyBhY2NlcHRpbmdJbnB1dCA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy90aGlzLmlzUGxheWVyVHVybiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShjbGlja2VkQmxvY2tzOiBQb2ludFtdKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vcHVibGljIHVwZGF0ZSgpOiB2b2lkXHJcbiAgICAvL3tcclxuICAgIC8vICAgIGlmIChHYW1lLnN0YXRlID09PSBHQU1FX1NUQVRFLlBsYXllclR1cm4pXHJcbiAgICAvLyAgICB7XHJcbiAgICAvLyAgICAgICAgdGhpcy5pc1BsYXllclR1cm4gPSAhdGhpcy5pc1BsYXllclR1cm47XHJcbiAgICAvLyAgICAgICAgR2FtZS5zdGF0ZSA9IEdBTUVfU1RBVEUuUGxheWVyVHVybjtcclxuICAgIC8vICAgICAgICAvL2lmICh0aGlzLmlzUGxheWVyVHVybilcclxuICAgIC8vICAgICAgICAvLyAgICBHYW1lLmFjY2VwdGluZ0lucHV0ID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAvL2Vsc2VcclxuICAgIC8vICAgICAgICAvL3tcclxuICAgIC8vICAgICAgICAvLyAgICBHYW1lLmFjY2VwdGluZ0lucHV0ID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgLy8gICAgc2V0VGltZW91dCgoKSA9PlxyXG4gICAgLy8gICAgICAgIC8vICAgIHtcclxuICAgIC8vICAgICAgICAvLyAgICAgICAgdGhpcy5pc1BsYXllclR1cm4gPSAhdGhpcy5pc1BsYXllclR1cm47XHJcbiAgICAvLyAgICAgICAgLy8gICAgICAgIEdhbWUuYWNjZXB0aW5nSW5wdXQgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgIC8vICAgIH0sIDI1MDApO1xyXG4gICAgLy8gICAgICAgIC8vfVxyXG4gICAgLy8gICAgfVxyXG4gICAgLy99XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9JbnB1dEhhbmRsZXIudHMiLCJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi9wb2ludFwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlbmRlcmFibGVTcXVhcmUge1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGdhbWVCb2FyZDogR2FtZUJvYXJkPFJlbmRlcmFibGVTcXVhcmU+LCBwdWJsaWMgZ3JpZFg6IG51bWJlciwgcHVibGljIGdyaWRZOiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IHJlbmRlcihpc0ZpbGxhYmxlPzogYm9vbGVhbiwgY29sb3I/OiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBlcXVhbHMob3RoZXJTcXVhcmU6IFJlbmRlcmFibGVTcXVhcmUpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAob3RoZXJTcXVhcmUgPT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFggPT0gb3RoZXJTcXVhcmUuZ3JpZFggJiYgdGhpcy5ncmlkWSA9PSBvdGhlclNxdWFyZS5ncmlkWTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGl4ZWxDb29yZGluYXRlcygpOiBQb2ludCB7XHJcbiAgICAgICAgdmFyIHhDb29yZCA9IHRoaXMuZ3JpZFggKiB0aGlzLmdhbWVCb2FyZC54SW50ZXJ2YWwgLSB0aGlzLmdhbWVCb2FyZC54SW50ZXJ2YWw7XHJcbiAgICAgICAgdmFyIHlDb29yZCA9IHRoaXMuZ3JpZFkgKiB0aGlzLmdhbWVCb2FyZC55SW50ZXJ2YWwgLSB0aGlzLmdhbWVCb2FyZC55SW50ZXJ2YWw7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh4Q29vcmQsIHlDb29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFycmF5UG9zaXRpb24oKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgcG9zID0gKCh0aGlzLmdyaWRZIC0gMSkgKiAodGhpcy5nYW1lQm9hcmQuc2VnbWVudHNYKSkgKyAodGhpcy5ncmlkWCAtIDEpO1xyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEdyaWRQb3NpdGlvbigpOiBQb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLmdyaWRYLCB0aGlzLmdyaWRZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0R3JpZFBvc2l0aW9uKHBvaW50OiBQb2ludCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ3JpZFggPSBwb2ludC54O1xyXG4gICAgICAgIHRoaXMuZ3JpZFkgPSBwb2ludC55O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvcmVuZGVyYWJsZVNxdWFyZS50cyIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xyXG5pbXBvcnQgeyBHYW1lV2luZG93IH0gZnJvbSBcIi4vZ2FtZVdpbmRvd1wiO1xyXG5pbXBvcnQgeyBDaGVzc1NxdWFyZUZhY3RvcnkgfSBmcm9tIFwiLi4vZ2FtZXMvY2hlc3MvY2hlc3NTcXVhcmVGYWN0b3J5XCI7XHJcbmltcG9ydCB7IENoZXNzU3F1YXJlLCBFbXB0eUNoZXNzU3F1YXJlIH0gZnJvbSBcIi4uL2dhbWVzL2NoZXNzL3BpZWNlcy9jaGVzc1NxdWFyZVwiO1xyXG5pbXBvcnQgeyBPd25lciB9IGZyb20gXCIuL293bmFibGVTcXVhcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVzc0JvYXJkIGV4dGVuZHMgR2FtZUJvYXJkPENoZXNzU3F1YXJlPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihzZWdtZW50c1g6IG51bWJlciwgc2VnbWVudHNZOiBudW1iZXIsIGdhbWVXaW5kb3c6IEdhbWVXaW5kb3cpIHtcclxuICAgICAgICBzdXBlcihzZWdtZW50c1gsIHNlZ21lbnRzWSwgZ2FtZVdpbmRvdyk7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LnJlZ2lzdGVyRXZlbnQoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LnJlZ2lzdGVyRXZlbnQoXCJjb250ZXh0bWVudVwiLCAoZTogTW91c2VFdmVudCkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgICAgICB0aGlzLmhvdmVyZWRTcXVhcmUgPSBuZXcgRW1wdHlDaGVzc1NxdWFyZSh0aGlzLCAwLCAwKTtcclxuICAgICAgICBjb25zdCBzcXVhcmVzID0gQ2hlc3NTcXVhcmVGYWN0b3J5LmdldFNxdWFyZXModGhpcywgdGhpcy5zZWdtZW50c1gsIHRoaXMuc2VnbWVudHNZLCB0aGlzLnhJbnRlcnZhbCwgdGhpcy55SW50ZXJ2YWwpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVNxdWFyZXMoc3F1YXJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN3YXBTcXVhcmVzKHNvdXJjZTogQ2hlc3NTcXVhcmUsIGRlc3RpbmF0aW9uOiBDaGVzc1NxdWFyZSwgY2FsbGJhY2s6ICgpID0+IHZvaWQgPSBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHNob3J0ZXN0UGF0aFNxdWFyZXMgPSB0aGlzLnNob3J0ZXN0UGF0aChzb3VyY2UsIGRlc3RpbmF0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5zd2FwU3F1YXJlKHNvdXJjZSwgZGVzdGluYXRpb24pO1xyXG4gICAgICAgIC8vY2FsbGJhY2soKTtcclxuICAgICAgICAvL2NhbGxiYWNrID0gKCkgPT5cclxuICAgICAgICAvL3tcclxuICAgICAgICAvLyAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIC8vfTtcclxuICAgICAgICBzaG9ydGVzdFBhdGhTcXVhcmVzLmZvckVhY2goKHNxdWFyZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEl0ZW1DYWxsYmFjayA9IGluZGV4ICsgMSA9PT0gc2hvcnRlc3RQYXRoU3F1YXJlcy5sZW5ndGggPyBjYWxsYmFjayA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3YXBTcXVhcmVHcmFwaGljcyhzb3VyY2UsIHNxdWFyZSwgbGFzdEl0ZW1DYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0sIDIwMCAqIGluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dhcFNxdWFyZUdyYXBoaWNzKHNvdXJjZTogQ2hlc3NTcXVhcmUsIGRlc3RpbmF0aW9uOiBDaGVzc1NxdWFyZSwgY2FsbGJhY2s6ICgpID0+IHZvaWQgPSBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkIHx8IGRlc3RpbmF0aW9uID09PSB1bmRlZmluZWQpIHRocm93IFwiZXJyb3Igc3dhcHBpbmcgc3F1YXJlcywgMSB3YXMgdW5kZWZpbmVkXCI7XHJcbiAgICAgICAgaWYgKHNvdXJjZS5lcXVhbHMoZGVzdGluYXRpb24pKSB0aHJvdyBcImNhbm5vdCBzd2FwLCBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGFyZSB0aGUgc2FtZVwiO1xyXG4gICAgICAgIGlmIChzb3VyY2Uub3duZXIgIT09IGRlc3RpbmF0aW9uLm93bmVyICYmIGRlc3RpbmF0aW9uLm93bmVyICE9PSBPd25lci5FbXB0eSlcclxuICAgICAgICAgICAgZGVzdGluYXRpb24gPSBuZXcgRW1wdHlDaGVzc1NxdWFyZSh0aGlzLCBkZXN0aW5hdGlvbi5ncmlkWCwgZGVzdGluYXRpb24uZ3JpZFkpO1xyXG5cclxuICAgICAgICB2YXIgdGVtcFBvc2l0aW9uID0gc291cmNlLmdldEdyaWRQb3NpdGlvbigpO1xyXG4gICAgICAgIHNvdXJjZS5zZXRHcmlkUG9zaXRpb24oZGVzdGluYXRpb24uZ2V0R3JpZFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIGRlc3RpbmF0aW9uLnNldEdyaWRQb3NpdGlvbih0ZW1wUG9zaXRpb24pO1xyXG5cclxuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN3YXBTcXVhcmUoc291cmNlOiBDaGVzc1NxdWFyZSwgZGVzdGluYXRpb246IENoZXNzU3F1YXJlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkIHx8IGRlc3RpbmF0aW9uID09PSB1bmRlZmluZWQpIHRocm93IFwiZXJyb3Igc3dhcHBpbmcgc3F1YXJlcywgMSB3YXMgdW5kZWZpbmVkXCI7XHJcbiAgICAgICAgaWYgKHNvdXJjZS5lcXVhbHMoZGVzdGluYXRpb24pKSB0aHJvdyBcImNhbm5vdCBzd2FwLCBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGFyZSB0aGUgc2FtZVwiO1xyXG4gICAgICAgIGlmIChzb3VyY2Uub3duZXIgIT09IGRlc3RpbmF0aW9uLm93bmVyICYmIGRlc3RpbmF0aW9uLm93bmVyICE9PSBPd25lci5FbXB0eSlcclxuICAgICAgICAgICAgZGVzdGluYXRpb24gPSBuZXcgRW1wdHlDaGVzc1NxdWFyZSh0aGlzLCBkZXN0aW5hdGlvbi5ncmlkWCwgZGVzdGluYXRpb24uZ3JpZFkpO1xyXG5cclxuICAgICAgICB0aGlzLnNxdWFyZXNbc291cmNlLmdldEFycmF5UG9zaXRpb24oKV0gPSBkZXN0aW5hdGlvbjtcclxuICAgICAgICB0aGlzLnNxdWFyZXNbZGVzdGluYXRpb24uZ2V0QXJyYXlQb3NpdGlvbigpXSA9IHNvdXJjZTtcclxuXHJcbiAgICAgICAgLy92YXIgdGVtcFBvc2l0aW9uID0gc291cmNlLmdldEdyaWRQb3NpdGlvbigpO1xyXG4gICAgICAgIC8vc291cmNlLnNldEdyaWRQb3NpdGlvbihkZXN0aW5hdGlvbi5nZXRHcmlkUG9zaXRpb24oKSk7XHJcbiAgICAgICAgLy9kZXN0aW5hdGlvbi5zZXRHcmlkUG9zaXRpb24odGVtcFBvc2l0aW9uKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlSGlnaGxpZ2h0U3F1YXJlcygpIHtcclxuICAgICAgICBmb3IgKHZhciBzcXVhcmUgb2YgdGhpcy5zcXVhcmVzKSB7XHJcbiAgICAgICAgICAgIHNxdWFyZS5kZUhpZ2hsaWdodCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlnaGxpZ2h0U3F1YXJlcyhzcXVhcmVzOiBDaGVzc1NxdWFyZVtdKSB7XHJcbiAgICAgICAgZm9yICh2YXIgc3F1YXJlIG9mIHNxdWFyZXMpIHtcclxuICAgICAgICAgICAgc3F1YXJlLmhpZ2hsaWdodCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvY2hlc3NCb2FyZC50cyIsImltcG9ydCB7IFJlbmRlcmFibGVTcXVhcmUgfSBmcm9tIFwiLi9yZW5kZXJhYmxlU3F1YXJlXCI7XHJcbmltcG9ydCB7IEdhbWVXaW5kb3cgfSBmcm9tIFwiLi9nYW1lV2luZG93XCI7XHJcbmltcG9ydCB7IE93bmFibGVTcXVhcmUgfSBmcm9tIFwiLi9vd25hYmxlU3F1YXJlXCI7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4vcG9pbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQm9hcmQ8VCBleHRlbmRzIFJlbmRlcmFibGVTcXVhcmU+XHJcbntcclxuICAgIHB1YmxpYyBzZWdtZW50c1g6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzZWdtZW50c1k6IG51bWJlcjtcclxuICAgIHB1YmxpYyB4SW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5SW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzcXVhcmVzID0gW10gYXMgVFtdO1xyXG4gICAgcHVibGljIGFjdGl2YXRpb25PcmRlciA9IFtdIGFzIFRbXTtcclxuICAgIHB1YmxpYyBob3ZlcmVkU3F1YXJlOiBUO1xyXG4gICAgcHVibGljIGNsaWNrZWRTcXVhcmU6IFQ7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VnbWVudHNYOiBudW1iZXIsIHNlZ21lbnRzWTogbnVtYmVyLCBwdWJsaWMgZ2FtZVdpbmRvdzogR2FtZVdpbmRvdykge1xyXG4gICAgICAgIHRoaXMuc2VnbWVudHNYID0gc2VnbWVudHNYO1xyXG4gICAgICAgIHRoaXMuc2VnbWVudHNZID0gc2VnbWVudHNZO1xyXG4gICAgICAgIHRoaXMueEludGVydmFsID0gZ2FtZVdpbmRvdy53aWR0aCAvIHNlZ21lbnRzWDtcclxuICAgICAgICB0aGlzLnlJbnRlcnZhbCA9IGdhbWVXaW5kb3cuaGVpZ2h0IC8gc2VnbWVudHNZO1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5yZWdpc3RlckV2ZW50KFwibW91c2Vtb3ZlXCIsIHRoaXMuYmFzZU9uTW91c2VNb3ZlKTtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cucmVnaXN0ZXJFdmVudChcImNvbnRleHRtZW51XCIsIChlOiBNb3VzZUV2ZW50KSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudHNZOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWdtZW50c1g7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcXVhcmVzLnB1c2goPFQ+PFJlbmRlcmFibGVTcXVhcmU+bmV3IE93bmFibGVTcXVhcmUodGhpcywgaiArIDEsIGkgKyAxKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiYXNlT25Nb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHZhciBncmlkUG9zaXRpb24gPSB0aGlzLmdldEdyaWRQb3NpdGlvbihlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcbiAgICAgICAgdGhpcy5ob3ZlcmVkU3F1YXJlID0gPFQ+dGhpcy5nZXRTcXVhcmUoZ3JpZFBvc2l0aW9uLngsIGdyaWRQb3NpdGlvbi55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvcnRlc3RQYXRoKHNvdXJjZTogVCwgZGVzdGluYXRpb246IFQpOiBUW10ge1xyXG4gICAgICAgIGxldCBkZWx0YVggPSBkZXN0aW5hdGlvbi5ncmlkWCAtIHNvdXJjZS5ncmlkWDtcclxuICAgICAgICBsZXQgZGVsdGFZID0gZGVzdGluYXRpb24uZ3JpZFkgLSBzb3VyY2UuZ3JpZFk7XHJcbiAgICAgICAgbGV0IGFic0RlbHRhWCA9IE1hdGguYWJzKGRlbHRhWCk7XHJcbiAgICAgICAgbGV0IGFic0RlbHRhWSA9IE1hdGguYWJzKGRlbHRhWSk7XHJcbiAgICAgICAgbGV0IHhJc05lZ2F0aXZlID0gZGVsdGFYIDwgMCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBsZXQgeUlzTmVnYXRpdmUgPSBkZWx0YVkgPCAwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBzcXVhcmVzOiBUW10gPSBbXTtcclxuICAgICAgICBsZXQgeEFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGxldCB5QXJyYXk6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYWJzRGVsdGFYOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHggPSB4SXNOZWdhdGl2ZSA/IHNvdXJjZS5ncmlkWCAtIGkgOiBzb3VyY2UuZ3JpZFggKyBpO1xyXG4gICAgICAgICAgICB4QXJyYXkucHVzaCh4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGFic0RlbHRhWTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB5ID0geUlzTmVnYXRpdmUgPyBzb3VyY2UuZ3JpZFkgLSBpIDogc291cmNlLmdyaWRZICsgaTtcclxuICAgICAgICAgICAgeUFycmF5LnB1c2goeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWF4KGFic0RlbHRhWCwgYWJzRGVsdGFZKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0geEFycmF5W2ldID09PSB1bmRlZmluZWQgPyBkZXN0aW5hdGlvbi5ncmlkWCA6IHhBcnJheVtpXTtcclxuICAgICAgICAgICAgbGV0IHkgPSB5QXJyYXlbaV0gPT09IHVuZGVmaW5lZCA/IGRlc3RpbmF0aW9uLmdyaWRZIDogeUFycmF5W2ldO1xyXG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5nZXRTcXVhcmUoeCwgeSk7XHJcbiAgICAgICAgICAgIHNxdWFyZXMucHVzaChzcXVhcmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9iaiA9IHNxdWFyZXMubWFwKHMgPT4geyByZXR1cm4geyB4OiBzLmdyaWRYLCB5OiBzLmdyaWRZIH0gfSk7XHJcbiAgICAgICAgb2JqLmZvckVhY2gocyA9PiBjb25zb2xlLmxvZyhzKSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhvYmopO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc3F1YXJlcyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4QXJyYXkpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coeUFycmF5KTtcclxuICAgICAgICByZXR1cm4gc3F1YXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jbGVhclNjcmVlbigpO1xyXG4gICAgICAgIGxldCBob3ZlcmVkQ29vcmRzID0gdGhpcy5ob3ZlcmVkU3F1YXJlLmdldFBpeGVsQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuZHJhd1NraW5ueUdyaWRCb3goaG92ZXJlZENvb3Jkcy54LCBob3ZlcmVkQ29vcmRzLnksIHRoaXMueEludGVydmFsLCB0aGlzLnlJbnRlcnZhbCwgXCJvcmFuZ2VcIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5zZWdtZW50c1g7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVXaW5kb3cuZHJhd0xpbmUoaSAqIHRoaXMueEludGVydmFsLCAwLCBpICogdGhpcy54SW50ZXJ2YWwsIHRoaXMuZ2FtZVdpbmRvdy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnNlZ21lbnRzWTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5kcmF3TGluZSgwLCBpICogdGhpcy55SW50ZXJ2YWwsIHRoaXMuZ2FtZVdpbmRvdy53aWR0aCwgaSAqIHRoaXMueUludGVydmFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIHNxdWFyZSBvZiB0aGlzLnNxdWFyZXMpIHtcclxuICAgICAgICAgICAgc3F1YXJlLnJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0R3JpZFBvc2l0aW9uKGNsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyKTogUG9pbnQge1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2FtZVdpbmRvdy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBtb3VzZVggPSBjbGllbnRYIC0gb2Zmc2V0LmxlZnQ7XHJcbiAgICAgICAgY29uc3QgbW91c2VZID0gY2xpZW50WSAtIG9mZnNldC50b3A7XHJcbiAgICAgICAgY29uc3QgeEdyaWRCbG9jayA9IE1hdGguZmxvb3IobW91c2VYIC8gdGhpcy54SW50ZXJ2YWwpICsgMTtcclxuICAgICAgICBjb25zdCB5R3JpZEJsb2NrID0gTWF0aC5mbG9vcihtb3VzZVkgLyB0aGlzLnlJbnRlcnZhbCkgKyAxO1xyXG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoeEdyaWRCbG9jaywgeUdyaWRCbG9jayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNxdWFyZXMoKTogQXJyYXk8VD4ge1xyXG4gICAgICAgIHJldHVybiA8QXJyYXk8VD4+dGhpcy5zcXVhcmVzLnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNxdWFyZShncmlkWDogbnVtYmVyLCBncmlkWTogbnVtYmVyKTogVCB7XHJcbiAgICAgICAgaWYgKGdyaWRYID4gdGhpcy5zZWdtZW50c1ggfHwgZ3JpZFkgPiB0aGlzLnNlZ21lbnRzWSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoZ3JpZFggPCAxIHx8IGdyaWRZIDwgMSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBhcnJheVBvcyA9IChncmlkWSAtIDEpICogdGhpcy5zZWdtZW50c1ggKyBncmlkWCAtIDE7XHJcbiAgICAgICAgcmV0dXJuIDxUPnRoaXMuc3F1YXJlc1thcnJheVBvc107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNxdWFyZShzcXVhcmU6IFQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhcnJheVBvcyA9IChzcXVhcmUuZ3JpZFkgLSAxKSAqIHRoaXMuc2VnbWVudHNYICsgc3F1YXJlLmdyaWRYIC0gMTtcclxuICAgICAgICB0aGlzLnNxdWFyZXNbYXJyYXlQb3NdID0gc3F1YXJlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGlvbk9yZGVyLnB1c2goc3F1YXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3F1YXJlcyhzcXVhcmVzOiBUW10pOiB2b2lkIHtcclxuICAgICAgICBzcXVhcmVzLmZvckVhY2godmFsdWUgPT4gdGhpcy5zZXRTcXVhcmUodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZVNxdWFyZXMoc3F1YXJlczogVFtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVzID0gc3F1YXJlcztcclxuICAgICAgICB0aGlzLmFjdGl2YXRpb25PcmRlciA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcHVibGljIGRyYXdHcmlkQm94KHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvciA9IFwiZ3JleVwiLCBpc0ZpbGxhYmxlID0gdHJ1ZSk6IHZvaWRcclxuICAgIC8ve1xyXG4gICAgLy8gICAgaWYgKGlzRmlsbGFibGUpXHJcbiAgICAvLyAgICAgICAgdGhpcy5nYW1lV2luZG93LmZpbGxSZWN0KCgoeCAtIDEpICogdGhpcy54SW50ZXJ2YWwpICsgMSwgKCh5IC0gMSkgKiB0aGlzLnlJbnRlcnZhbCkgKyAxLCB0aGlzLnhJbnRlcnZhbCAtIDIsIHRoaXMueUludGVydmFsIC0gMiwgY29sb3IpO1xyXG4gICAgLy8gICAgZWxzZVxyXG4gICAgLy8gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5zdHJva2VSZWN0KCgoeCAtIDEpICogdGhpcy54SW50ZXJ2YWwpICsgMSwgKCh5IC0gMSkgKiB0aGlzLnlJbnRlcnZhbCkgKyAxLCB0aGlzLnhJbnRlcnZhbCAtIDIsIHRoaXMueUludGVydmFsIC0gMiwgY29sb3IpO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy9wdWJsaWMgZHJhd1NraW5ueUdyaWRCb3goeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yID0gXCJncmV5XCIsIGlzRmlsbGFibGUgPSB0cnVlKTogdm9pZFxyXG4gICAgLy97XHJcbiAgICAvLyAgICBpZiAoaXNGaWxsYWJsZSlcclxuICAgIC8vICAgICAgICB0aGlzLmdhbWVXaW5kb3cuZmlsbFJlY3QoKHggKiB0aGlzLnhJbnRlcnZhbCkgLSB0aGlzLnhJbnRlcnZhbCArIDEsICh5ICogdGhpcy55SW50ZXJ2YWwgLSB0aGlzLnlJbnRlcnZhbCArICh0aGlzLnlJbnRlcnZhbCAvIDQuMCkpICsgMSwgdGhpcy54SW50ZXJ2YWwgLSAyLCB0aGlzLnlJbnRlcnZhbCAvIDIgLSAyLCBjb2xvcik7XHJcbiAgICAvLyAgICBlbHNlXHJcbiAgICAvLyAgICAgICAgdGhpcy5nYW1lV2luZG93LnN0cm9rZVJlY3QoKHggKiB0aGlzLnhJbnRlcnZhbCkgLSB0aGlzLnhJbnRlcnZhbCArIDEsICh5ICogdGhpcy55SW50ZXJ2YWwgLSB0aGlzLnlJbnRlcnZhbCArICh0aGlzLnlJbnRlcnZhbCAvIDQuMCkpICsgMSwgdGhpcy54SW50ZXJ2YWwgLSAyLCB0aGlzLnlJbnRlcnZhbCAvIDIgLSAyLCBjb2xvcik7XHJcbiAgICAvL31cclxuXHJcbiAgICAvL3B1YmxpYyBkcmF3R3JpZENpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3IgPSBcImdyZXlcIik6IHZvaWRcclxuICAgIC8ve1xyXG4gICAgLy8gICAgdGhpcy5nYW1lV2luZG93LmRyYXdDaXJjbGUoeCwgeSwgdGhpcy54SW50ZXJ2YWwsIHRoaXMueUludGVydmFsLCBjb2xvcik7XHJcbiAgICAvL31cclxuXHJcbiAgICAvL3B1YmxpYyBkcmF3R3JpZENpcmNsZVRvcCh4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3IgPSBcImdyZXlcIik6IHZvaWRcclxuICAgIC8ve1xyXG4gICAgLy8gICAgdGhpcy5nYW1lV2luZG93LmRyYXdDaXJjbGVUb3AoeCwgeSwgdGhpcy54SW50ZXJ2YWwsIHRoaXMueUludGVydmFsLCBjb2xvcik7XHJcbiAgICAvL31cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL2dhbWVCb2FyZC50cyIsImltcG9ydCB7IENoZXNzU3F1YXJlLCBFbXB0eUNoZXNzU3F1YXJlIH0gZnJvbSBcIi4vcGllY2VzL2NoZXNzU3F1YXJlXCI7XHJcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuLi8uLi9jb3JlL2dhbWVCb2FyZFwiO1xyXG5pbXBvcnQgeyBSb29rIH0gZnJvbSBcIi4vcGllY2VzL3Jvb2tcIjtcclxuaW1wb3J0IHsgS25pZ2h0IH0gZnJvbSBcIi4vcGllY2VzL2tuaWdodFwiO1xyXG5pbXBvcnQgeyBCaXNob3AgfSBmcm9tIFwiLi9waWVjZXMvYmlzaG9wXCI7XHJcbmltcG9ydCB7IEtpbmcgfSBmcm9tIFwiLi9waWVjZXMva2luZ1wiO1xyXG5pbXBvcnQgeyBRdWVlbiB9IGZyb20gXCIuL3BpZWNlcy9xdWVlblwiO1xyXG5pbXBvcnQgeyBQYXduIH0gZnJvbSBcIi4vcGllY2VzL3Bhd25cIjtcclxuaW1wb3J0IHsgT3duZXIgfSBmcm9tIFwiLi4vLi4vY29yZS9vd25hYmxlU3F1YXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlc3NTcXVhcmVGYWN0b3J5IHtcclxuICAgIHByaXZhdGUgc3RhdGljIHdoaXRlUm9va1NyYyA9IFwiLi9jb250ZW50L3BpZWNlcy93aGl0ZVJvb2sucG5nXCI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB3aGl0ZUtuaWdodFNyYyA9IFwiLi9jb250ZW50L3BpZWNlcy93aGl0ZUtuaWdodC5wbmdcIjtcclxuICAgIHByaXZhdGUgc3RhdGljIHdoaXRlQmlzaG9wU3JjID0gXCIuL2NvbnRlbnQvcGllY2VzL1doaXRlQmlzaG9wLnBuZ1wiO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgd2hpdGVLaW5nU3JjID0gXCIuL2NvbnRlbnQvcGllY2VzL3doaXRlS2luZy5wbmdcIjtcclxuICAgIHByaXZhdGUgc3RhdGljIHdoaXRlUXVlZW5TcmMgPSBcIi4vY29udGVudC9waWVjZXMvV2hpdGVRdWVlbi5wbmdcIjtcclxuICAgIHByaXZhdGUgc3RhdGljIHdoaXRlUGF3blNyYyA9IFwiLi9jb250ZW50L3BpZWNlcy9XaGl0ZVBhd24ucG5nXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYmxhY2tSb29rU3JjID0gXCIuL2NvbnRlbnQvcGllY2VzL0JsYWNrUm9vay5wbmdcIjtcclxuICAgIHByaXZhdGUgc3RhdGljIGJsYWNrS25pZ2h0U3JjID0gXCIuL2NvbnRlbnQvcGllY2VzL0JsYWNrS25pZ2h0LnBuZ1wiO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYmxhY2tCaXNob3BTcmMgPSBcIi4vY29udGVudC9waWVjZXMvYmxhY2tCaXNob3AucG5nXCI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBibGFja0tpbmdTcmMgPSBcIi4vY29udGVudC9waWVjZXMvQmxhY2tLaW5nLnBuZ1wiO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYmxhY2tRdWVlblNyYyA9IFwiLi9jb250ZW50L3BpZWNlcy9ibGFja1F1ZWVuLnBuZ1wiO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYmxhY2tQYXduU3JjID0gXCIuL2NvbnRlbnQvcGllY2VzL2JsYWNrUGF3bi5wbmdcIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFNxdWFyZXMoZ2FtZUJvYXJkOiBHYW1lQm9hcmQ8Q2hlc3NTcXVhcmU+LCBzcXVhcmVzWDogbnVtYmVyLCBzcXVhcmVzWTogbnVtYmVyLCBzcXVhcmVXaWR0aDogbnVtYmVyLCBzcXVhcmVIZWlnaHQ6IG51bWJlcik6IENoZXNzU3F1YXJlW10ge1xyXG4gICAgICAgIC8vd2hpdGUgaWNvbnNcclxuICAgICAgICBjb25zdCB3aGl0ZVJvb2tJY29uID0gbmV3IEltYWdlKHNxdWFyZVdpZHRoLCBzcXVhcmVIZWlnaHQpO1xyXG4gICAgICAgIHdoaXRlUm9va0ljb24uc3JjID0gdGhpcy53aGl0ZVJvb2tTcmM7XHJcbiAgICAgICAgY29uc3Qgd2hpdGVLbmlnaHRJY29uID0gbmV3IEltYWdlKHNxdWFyZVdpZHRoLCBzcXVhcmVIZWlnaHQpO1xyXG4gICAgICAgIHdoaXRlS25pZ2h0SWNvbi5zcmMgPSB0aGlzLndoaXRlS25pZ2h0U3JjO1xyXG4gICAgICAgIGNvbnN0IHdoaXRlQmlzaG9wSWNvbiA9IG5ldyBJbWFnZShzcXVhcmVXaWR0aCwgc3F1YXJlSGVpZ2h0KTtcclxuICAgICAgICB3aGl0ZUJpc2hvcEljb24uc3JjID0gdGhpcy53aGl0ZUJpc2hvcFNyYztcclxuICAgICAgICBjb25zdCB3aGl0ZUtpbmdJY29uID0gbmV3IEltYWdlKHNxdWFyZVdpZHRoLCBzcXVhcmVIZWlnaHQpO1xyXG4gICAgICAgIHdoaXRlS2luZ0ljb24uc3JjID0gdGhpcy53aGl0ZUtpbmdTcmM7XHJcbiAgICAgICAgY29uc3Qgd2hpdGVRdWVlbkljb24gPSBuZXcgSW1hZ2Uoc3F1YXJlV2lkdGgsIHNxdWFyZUhlaWdodCk7XHJcbiAgICAgICAgd2hpdGVRdWVlbkljb24uc3JjID0gdGhpcy53aGl0ZVF1ZWVuU3JjO1xyXG4gICAgICAgIGNvbnN0IHdoaXRlUGF3bkljb24gPSBuZXcgSW1hZ2Uoc3F1YXJlV2lkdGgsIHNxdWFyZUhlaWdodCk7XHJcbiAgICAgICAgd2hpdGVQYXduSWNvbi5zcmMgPSB0aGlzLndoaXRlUGF3blNyYztcclxuXHJcbiAgICAgICAgLy9ibGFjayBpY29uc1xyXG4gICAgICAgIGNvbnN0IGJsYWNrUm9va0ljb24gPSBuZXcgSW1hZ2Uoc3F1YXJlV2lkdGgsIHNxdWFyZUhlaWdodCk7XHJcbiAgICAgICAgYmxhY2tSb29rSWNvbi5zcmMgPSB0aGlzLmJsYWNrUm9va1NyYztcclxuICAgICAgICBjb25zdCBibGFja0tuaWdodEljb24gPSBuZXcgSW1hZ2Uoc3F1YXJlV2lkdGgsIHNxdWFyZUhlaWdodCk7XHJcbiAgICAgICAgYmxhY2tLbmlnaHRJY29uLnNyYyA9IHRoaXMuYmxhY2tLbmlnaHRTcmM7XHJcbiAgICAgICAgY29uc3QgYmxhY2tCaXNob3BJY29uID0gbmV3IEltYWdlKHNxdWFyZVdpZHRoLCBzcXVhcmVIZWlnaHQpO1xyXG4gICAgICAgIGJsYWNrQmlzaG9wSWNvbi5zcmMgPSB0aGlzLmJsYWNrQmlzaG9wU3JjO1xyXG4gICAgICAgIGNvbnN0IGJsYWNrS2luZ0ljb24gPSBuZXcgSW1hZ2Uoc3F1YXJlV2lkdGgsIHNxdWFyZUhlaWdodCk7XHJcbiAgICAgICAgYmxhY2tLaW5nSWNvbi5zcmMgPSB0aGlzLmJsYWNrS2luZ1NyYztcclxuICAgICAgICBjb25zdCBibGFja1F1ZWVuSWNvbiA9IG5ldyBJbWFnZShzcXVhcmVXaWR0aCwgc3F1YXJlSGVpZ2h0KTtcclxuICAgICAgICBibGFja1F1ZWVuSWNvbi5zcmMgPSB0aGlzLmJsYWNrUXVlZW5TcmM7XHJcbiAgICAgICAgY29uc3QgYmxhY2tQYXduSWNvbiA9IG5ldyBJbWFnZShzcXVhcmVXaWR0aCwgc3F1YXJlSGVpZ2h0KTtcclxuICAgICAgICBibGFja1Bhd25JY29uLnNyYyA9IHRoaXMuYmxhY2tQYXduU3JjO1xyXG5cclxuICAgICAgICBsZXQgcGllY2VzOiBDaGVzc1NxdWFyZVtdID0gW1xyXG4gICAgICAgICAgICAvL3doaXRlIG1pc2NcclxuICAgICAgICAgICAgbmV3IFJvb2soZ2FtZUJvYXJkLCB3aGl0ZVJvb2tJY29uLCAxLCAxLCBPd25lci5Db21wdXRlciksXHJcbiAgICAgICAgICAgIG5ldyBLbmlnaHQoZ2FtZUJvYXJkLCB3aGl0ZUtuaWdodEljb24sIDIsIDEsIE93bmVyLkNvbXB1dGVyKSxcclxuICAgICAgICAgICAgbmV3IEJpc2hvcChnYW1lQm9hcmQsIHdoaXRlQmlzaG9wSWNvbiwgMywgMSwgT3duZXIuQ29tcHV0ZXIpLFxyXG4gICAgICAgICAgICBuZXcgS2luZyhnYW1lQm9hcmQsIHdoaXRlS2luZ0ljb24sIDUsIDEsIE93bmVyLkNvbXB1dGVyKSxcclxuICAgICAgICAgICAgbmV3IFF1ZWVuKGdhbWVCb2FyZCwgd2hpdGVRdWVlbkljb24sIDQsIDEsIE93bmVyLkNvbXB1dGVyKSxcclxuICAgICAgICAgICAgbmV3IEJpc2hvcChnYW1lQm9hcmQsIHdoaXRlQmlzaG9wSWNvbiwgNiwgMSwgT3duZXIuQ29tcHV0ZXIpLFxyXG4gICAgICAgICAgICBuZXcgS25pZ2h0KGdhbWVCb2FyZCwgd2hpdGVLbmlnaHRJY29uLCA3LCAxLCBPd25lci5Db21wdXRlciksXHJcbiAgICAgICAgICAgIG5ldyBSb29rKGdhbWVCb2FyZCwgd2hpdGVSb29rSWNvbiwgOCwgMSwgT3duZXIuQ29tcHV0ZXIpLFxyXG5cclxuICAgICAgICAgICAgLy93aGl0ZSBwYXduc1xyXG4gICAgICAgICAgICBuZXcgUGF3bihnYW1lQm9hcmQsIHdoaXRlUGF3bkljb24sIDEsIDIsIE93bmVyLkNvbXB1dGVyKSxcclxuICAgICAgICAgICAgbmV3IFBhd24oZ2FtZUJvYXJkLCB3aGl0ZVBhd25JY29uLCAyLCAyLCBPd25lci5Db21wdXRlciksXHJcbiAgICAgICAgICAgIG5ldyBQYXduKGdhbWVCb2FyZCwgd2hpdGVQYXduSWNvbiwgMywgMiwgT3duZXIuQ29tcHV0ZXIpLFxyXG4gICAgICAgICAgICBuZXcgUGF3bihnYW1lQm9hcmQsIHdoaXRlUGF3bkljb24sIDQsIDIsIE93bmVyLkNvbXB1dGVyKSxcclxuICAgICAgICAgICAgbmV3IFBhd24oZ2FtZUJvYXJkLCB3aGl0ZVBhd25JY29uLCA1LCAyLCBPd25lci5Db21wdXRlciksXHJcbiAgICAgICAgICAgIG5ldyBQYXduKGdhbWVCb2FyZCwgd2hpdGVQYXduSWNvbiwgNiwgMiwgT3duZXIuQ29tcHV0ZXIpLFxyXG4gICAgICAgICAgICBuZXcgUGF3bihnYW1lQm9hcmQsIHdoaXRlUGF3bkljb24sIDcsIDIsIE93bmVyLkNvbXB1dGVyKSxcclxuICAgICAgICAgICAgbmV3IFBhd24oZ2FtZUJvYXJkLCB3aGl0ZVBhd25JY29uLCA4LCAyLCBPd25lci5Db21wdXRlciksXHJcblxyXG4gICAgICAgICAgICAvL2JsYWNrIHBhd25zXHJcbiAgICAgICAgICAgIG5ldyBQYXduKGdhbWVCb2FyZCwgYmxhY2tQYXduSWNvbiwgMSwgNywgT3duZXIuUGxheWVyKSxcclxuICAgICAgICAgICAgbmV3IFBhd24oZ2FtZUJvYXJkLCBibGFja1Bhd25JY29uLCAyLCA3LCBPd25lci5QbGF5ZXIpLFxyXG4gICAgICAgICAgICBuZXcgUGF3bihnYW1lQm9hcmQsIGJsYWNrUGF3bkljb24sIDMsIDcsIE93bmVyLlBsYXllciksXHJcbiAgICAgICAgICAgIG5ldyBQYXduKGdhbWVCb2FyZCwgYmxhY2tQYXduSWNvbiwgNCwgNywgT3duZXIuUGxheWVyKSxcclxuICAgICAgICAgICAgbmV3IFBhd24oZ2FtZUJvYXJkLCBibGFja1Bhd25JY29uLCA1LCA3LCBPd25lci5QbGF5ZXIpLFxyXG4gICAgICAgICAgICBuZXcgUGF3bihnYW1lQm9hcmQsIGJsYWNrUGF3bkljb24sIDYsIDcsIE93bmVyLlBsYXllciksXHJcbiAgICAgICAgICAgIG5ldyBQYXduKGdhbWVCb2FyZCwgYmxhY2tQYXduSWNvbiwgNywgNywgT3duZXIuUGxheWVyKSxcclxuICAgICAgICAgICAgbmV3IFBhd24oZ2FtZUJvYXJkLCBibGFja1Bhd25JY29uLCA4LCA3LCBPd25lci5QbGF5ZXIpLFxyXG5cclxuICAgICAgICAgICAgLy9ibGFjayBtaXNjXHJcbiAgICAgICAgICAgIG5ldyBSb29rKGdhbWVCb2FyZCwgYmxhY2tSb29rSWNvbiwgMSwgOCwgT3duZXIuUGxheWVyKSxcclxuICAgICAgICAgICAgbmV3IEtuaWdodChnYW1lQm9hcmQsIGJsYWNrS25pZ2h0SWNvbiwgMiwgOCwgT3duZXIuUGxheWVyKSxcclxuICAgICAgICAgICAgbmV3IEJpc2hvcChnYW1lQm9hcmQsIGJsYWNrQmlzaG9wSWNvbiwgMywgOCwgT3duZXIuUGxheWVyKSxcclxuICAgICAgICAgICAgbmV3IEtpbmcoZ2FtZUJvYXJkLCBibGFja0tpbmdJY29uLCA0LCA4LCBPd25lci5QbGF5ZXIpLFxyXG4gICAgICAgICAgICBuZXcgUXVlZW4oZ2FtZUJvYXJkLCBibGFja1F1ZWVuSWNvbiwgNSwgOCwgT3duZXIuUGxheWVyKSxcclxuICAgICAgICAgICAgbmV3IEJpc2hvcChnYW1lQm9hcmQsIGJsYWNrQmlzaG9wSWNvbiwgNiwgOCwgT3duZXIuUGxheWVyKSxcclxuICAgICAgICAgICAgbmV3IEtuaWdodChnYW1lQm9hcmQsIGJsYWNrS25pZ2h0SWNvbiwgNywgOCwgT3duZXIuUGxheWVyKSxcclxuICAgICAgICAgICAgbmV3IFJvb2soZ2FtZUJvYXJkLCBibGFja1Jvb2tJY29uLCA4LCA4LCBPd25lci5QbGF5ZXIpLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGxldCBhbGxTcXVhcmVzOiBDaGVzc1NxdWFyZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzWTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3F1YXJlc1g7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBwaWVjZXMuZmlsdGVyKHMgPT4gcy5ncmlkWCA9PT0gaiArIDEgJiYgcy5ncmlkWSA9PT0gaSArIDEpWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSB4ICE9PSB1bmRlZmluZWQgPyB4IDogbmV3IEVtcHR5Q2hlc3NTcXVhcmUoZ2FtZUJvYXJkLCBqICsgMSwgaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgYWxsU3F1YXJlcy5wdXNoKHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWxsU3F1YXJlcztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lcy9jaGVzcy9jaGVzc1NxdWFyZUZhY3RvcnkudHMiLCJpbXBvcnQgeyBDaGVzc1BpZWNlIH0gZnJvbSBcIi4vY2hlc3NQaWVjZVwiO1xyXG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9nYW1lQm9hcmRcIjtcclxuaW1wb3J0IHsgQ2hlc3NTcXVhcmUsIENoZXNzU3F1YXJlVHlwZSB9IGZyb20gXCIuL2NoZXNzU3F1YXJlXCI7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvcG9pbnRcIjtcclxuaW1wb3J0IHsgT3duZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9vd25hYmxlU3F1YXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm9vayBleHRlbmRzIENoZXNzUGllY2Vcclxue1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZUJvYXJkOiBHYW1lQm9hcmQ8Q2hlc3NTcXVhcmU+LCBpY29uOiBIVE1MSW1hZ2VFbGVtZW50LCBncmlkWDogbnVtYmVyLCBncmlkWTogbnVtYmVyLCBvd25lcjogT3duZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZUJvYXJkLCBpY29uLCBncmlkWCwgZ3JpZFksIG93bmVyLCBDaGVzc1NxdWFyZVR5cGUuUm9vayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF2YWlsYWJsZU1vdmVzKCk6IENoZXNzU3F1YXJlW11cclxuICAgIHtcclxuICAgICAgICBsZXQgbW9kaWZpZXJzID0gW1xyXG4gICAgICAgICAgICAocDogUG9pbnQpID0+IG5ldyBQb2ludCgrK3AueCwgcC55KSxcclxuICAgICAgICAgICAgKHA6IFBvaW50KSA9PiBuZXcgUG9pbnQocC54LCArK3AueSksXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KC0tcC54LCBwLnkpLFxyXG4gICAgICAgICAgICAocDogUG9pbnQpID0+IG5ldyBQb2ludChwLngsIC0tcC55KVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IG1vdmVzID0gdGhpcy5nZXRTcXVhcmVTZXF1ZW5jZXMobW9kaWZpZXJzKTtcclxuICAgICAgICBtb3ZlcyA9IHRoaXMuZmlsdGVySW52YWxpZChtb3Zlcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBtb3ZlcztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lcy9jaGVzcy9waWVjZXMvcm9vay50cyIsImltcG9ydCB7IENoZXNzUGllY2UgfSBmcm9tIFwiLi9jaGVzc1BpZWNlXCI7XHJcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2dhbWVCb2FyZFwiO1xyXG5pbXBvcnQgeyBDaGVzc1NxdWFyZSwgQ2hlc3NTcXVhcmVUeXBlIH0gZnJvbSBcIi4vY2hlc3NTcXVhcmVcIjtcclxuaW1wb3J0IHsgT3duZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9vd25hYmxlU3F1YXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgS25pZ2h0IGV4dGVuZHMgQ2hlc3NQaWVjZVxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lQm9hcmQ6IEdhbWVCb2FyZDxDaGVzc1NxdWFyZT4sIGljb246IEhUTUxJbWFnZUVsZW1lbnQsIGdyaWRYOiBudW1iZXIsIGdyaWRZOiBudW1iZXIsIG93bmVyOiBPd25lcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihnYW1lQm9hcmQsIGljb24sIGdyaWRYLCBncmlkWSwgb3duZXIsIENoZXNzU3F1YXJlVHlwZS5LbmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBdmFpbGFibGVNb3ZlcygpOiBDaGVzc1NxdWFyZVtdXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1vdmVzID0gW1xyXG4gICAgICAgICAgICA8Q2hlc3NTcXVhcmU+dGhpcy5nYW1lQm9hcmQuZ2V0U3F1YXJlKHRoaXMuZ3JpZFggLSAyLCB0aGlzLmdyaWRZIC0gMSksXHJcbiAgICAgICAgICAgIDxDaGVzc1NxdWFyZT50aGlzLmdhbWVCb2FyZC5nZXRTcXVhcmUodGhpcy5ncmlkWCAtIDEsIHRoaXMuZ3JpZFkgLSAyKSxcclxuICAgICAgICAgICAgPENoZXNzU3F1YXJlPnRoaXMuZ2FtZUJvYXJkLmdldFNxdWFyZSh0aGlzLmdyaWRYICsgMSwgdGhpcy5ncmlkWSAtIDIpLFxyXG4gICAgICAgICAgICA8Q2hlc3NTcXVhcmU+dGhpcy5nYW1lQm9hcmQuZ2V0U3F1YXJlKHRoaXMuZ3JpZFggKyAyLCB0aGlzLmdyaWRZIC0gMSksXHJcbiAgICAgICAgICAgIDxDaGVzc1NxdWFyZT50aGlzLmdhbWVCb2FyZC5nZXRTcXVhcmUodGhpcy5ncmlkWCArIDIsIHRoaXMuZ3JpZFkgKyAxKSxcclxuICAgICAgICAgICAgPENoZXNzU3F1YXJlPnRoaXMuZ2FtZUJvYXJkLmdldFNxdWFyZSh0aGlzLmdyaWRYICsgMSwgdGhpcy5ncmlkWSArIDIpLFxyXG4gICAgICAgICAgICA8Q2hlc3NTcXVhcmU+dGhpcy5nYW1lQm9hcmQuZ2V0U3F1YXJlKHRoaXMuZ3JpZFggLSAxLCB0aGlzLmdyaWRZICsgMiksXHJcbiAgICAgICAgICAgIDxDaGVzc1NxdWFyZT50aGlzLmdhbWVCb2FyZC5nZXRTcXVhcmUodGhpcy5ncmlkWCAtIDIsIHRoaXMuZ3JpZFkgKyAxKSxcclxuICAgICAgICBdXHJcbiAgICAgICAgbW92ZXMgPSB0aGlzLmZpbHRlckludmFsaWQobW92ZXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gbW92ZXM7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZXMvY2hlc3MvcGllY2VzL2tuaWdodC50cyIsImltcG9ydCB7IENoZXNzUGllY2UgfSBmcm9tIFwiLi9jaGVzc1BpZWNlXCI7XHJcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2dhbWVCb2FyZFwiO1xyXG5pbXBvcnQgeyBDaGVzc1NxdWFyZSwgQ2hlc3NTcXVhcmVUeXBlIH0gZnJvbSBcIi4vY2hlc3NTcXVhcmVcIjtcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9wb2ludFwiO1xyXG5pbXBvcnQgeyBPd25lciB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL293bmFibGVTcXVhcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCaXNob3AgZXh0ZW5kcyBDaGVzc1BpZWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVCb2FyZDogR2FtZUJvYXJkPENoZXNzU3F1YXJlPiwgaWNvbjogSFRNTEltYWdlRWxlbWVudCwgZ3JpZFg6IG51bWJlciwgZ3JpZFk6IG51bWJlciwgb3duZXI6IE93bmVyKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZUJvYXJkLCBpY29uLCBncmlkWCwgZ3JpZFksIG93bmVyLCBDaGVzc1NxdWFyZVR5cGUuQmlzaG9wKTtcclxuICAgICAgICB0aGlzLnNxdXJlVHlwZSA9IENoZXNzU3F1YXJlVHlwZS5CaXNob3A7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF2YWlsYWJsZU1vdmVzKCk6IENoZXNzU3F1YXJlW10ge1xyXG4gICAgICAgIGxldCBtb2RpZmllcnMgPSBbXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KCsrcC54LCArK3AueSksXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KC0tcC54LCArK3AueSksXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KCsrcC54LCAtLXAueSksXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KC0tcC54LCAtLXAueSlcclxuICAgICAgICBdO1xyXG4gICAgICAgIGxldCBtb3ZlcyA9IHRoaXMuZ2V0U3F1YXJlU2VxdWVuY2VzKG1vZGlmaWVycyk7XHJcbiAgICAgICAgbW92ZXMgPSB0aGlzLmZpbHRlckludmFsaWQobW92ZXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gbW92ZXM7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZXMvY2hlc3MvcGllY2VzL2Jpc2hvcC50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvcG9pbnRcIjtcclxuaW1wb3J0IHsgQ2hlc3NTcXVhcmUsIENoZXNzU3F1YXJlVHlwZSB9IGZyb20gXCIuL2NoZXNzU3F1YXJlXCI7XHJcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2dhbWVCb2FyZFwiO1xyXG5pbXBvcnQgeyBDaGVzc1BpZWNlIH0gZnJvbSBcIi4vY2hlc3NQaWVjZVwiO1xyXG5pbXBvcnQgeyBPd25lciB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL293bmFibGVTcXVhcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLaW5nIGV4dGVuZHMgQ2hlc3NQaWVjZVxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lQm9hcmQ6IEdhbWVCb2FyZDxDaGVzc1NxdWFyZT4sIGljb246IEhUTUxJbWFnZUVsZW1lbnQsIGdyaWRYOiBudW1iZXIsIGdyaWRZOiBudW1iZXIsIG93bmVyOiBPd25lcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihnYW1lQm9hcmQsIGljb24sIGdyaWRYLCBncmlkWSwgb3duZXIsIENoZXNzU3F1YXJlVHlwZS5LaW5nKTtcclxuICAgICAgICB0aGlzLnNxdXJlVHlwZSA9IENoZXNzU3F1YXJlVHlwZS5LaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBdmFpbGFibGVNb3ZlcygpOiBDaGVzc1NxdWFyZVtdXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1vZGlmaWVycyA9IFtcclxuICAgICAgICAgICAgKHA6IFBvaW50KSA9PiBuZXcgUG9pbnQoKytwLngsICsrcC55KSxcclxuICAgICAgICAgICAgKHA6IFBvaW50KSA9PiBuZXcgUG9pbnQoLS1wLngsICsrcC55KSxcclxuICAgICAgICAgICAgKHA6IFBvaW50KSA9PiBuZXcgUG9pbnQoKytwLngsIC0tcC55KSxcclxuICAgICAgICAgICAgKHA6IFBvaW50KSA9PiBuZXcgUG9pbnQoLS1wLngsIC0tcC55KSxcclxuICAgICAgICAgICAgKHA6IFBvaW50KSA9PiBuZXcgUG9pbnQoKytwLngsIHAueSksXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KHAueCwgKytwLnkpLFxyXG4gICAgICAgICAgICAocDogUG9pbnQpID0+IG5ldyBQb2ludCgtLXAueCwgcC55KSxcclxuICAgICAgICAgICAgKHA6IFBvaW50KSA9PiBuZXcgUG9pbnQocC54LCAtLXAueSlcclxuICAgICAgICBdO1xyXG4gICAgICAgIGxldCBtb3ZlcyA9IHRoaXMuZ2V0U3F1YXJlU2VxdWVuY2VzKG1vZGlmaWVycywgMSk7XHJcbiAgICAgICAgbW92ZXMgPSB0aGlzLmZpbHRlckludmFsaWQobW92ZXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gbW92ZXM7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZXMvY2hlc3MvcGllY2VzL2tpbmcudHMiLCJpbXBvcnQgeyBDaGVzc1NxdWFyZSwgQ2hlc3NTcXVhcmVUeXBlIH0gZnJvbSBcIi4vY2hlc3NTcXVhcmVcIjtcclxuaW1wb3J0IHsgQ2hlc3NQaWVjZSB9IGZyb20gXCIuL2NoZXNzUGllY2VcIjtcclxuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvZ2FtZUJvYXJkXCI7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvcG9pbnRcIjtcclxuaW1wb3J0IHsgT3duZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9vd25hYmxlU3F1YXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlZW4gZXh0ZW5kcyBDaGVzc1BpZWNlXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVCb2FyZDogR2FtZUJvYXJkPENoZXNzU3F1YXJlPiwgaWNvbjogSFRNTEltYWdlRWxlbWVudCwgZ3JpZFg6IG51bWJlciwgZ3JpZFk6IG51bWJlciwgb3duZXI6IE93bmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGdhbWVCb2FyZCwgaWNvbiwgZ3JpZFgsIGdyaWRZLCBvd25lciwgQ2hlc3NTcXVhcmVUeXBlLlF1ZWVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXZhaWxhYmxlTW92ZXMoKTogQ2hlc3NTcXVhcmVbXVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtb2RpZmllcnMgPSBbXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KCsrcC54LCArK3AueSksXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KC0tcC54LCArK3AueSksXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KCsrcC54LCAtLXAueSksXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KC0tcC54LCAtLXAueSksXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KCsrcC54LCBwLnkpLFxyXG4gICAgICAgICAgICAocDogUG9pbnQpID0+IG5ldyBQb2ludChwLngsICsrcC55KSxcclxuICAgICAgICAgICAgKHA6IFBvaW50KSA9PiBuZXcgUG9pbnQoLS1wLngsIHAueSksXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KHAueCwgLS1wLnkpXHJcbiAgICAgICAgXTtcclxuICAgICAgICBsZXQgbW92ZXMgPSB0aGlzLmdldFNxdWFyZVNlcXVlbmNlcyhtb2RpZmllcnMpO1xyXG4gICAgICAgIG1vdmVzID0gdGhpcy5maWx0ZXJJbnZhbGlkKG1vdmVzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1vdmVzO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWVzL2NoZXNzL3BpZWNlcy9xdWVlbi50cyIsImltcG9ydCB7IENoZXNzUGllY2UgfSBmcm9tIFwiLi9jaGVzc1BpZWNlXCI7XHJcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2dhbWVCb2FyZFwiO1xyXG5pbXBvcnQgeyBDaGVzc1NxdWFyZSwgQ2hlc3NTcXVhcmVUeXBlIH0gZnJvbSBcIi4vY2hlc3NTcXVhcmVcIjtcclxuaW1wb3J0IHsgT3duZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9vd25hYmxlU3F1YXJlXCI7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvcG9pbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXduIGV4dGVuZHMgQ2hlc3NQaWVjZVxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lQm9hcmQ6IEdhbWVCb2FyZDxDaGVzc1NxdWFyZT4sIGljb246IEhUTUxJbWFnZUVsZW1lbnQsIGdyaWRYOiBudW1iZXIsIGdyaWRZOiBudW1iZXIsIG93bmVyOiBPd25lcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihnYW1lQm9hcmQsIGljb24sIGdyaWRYLCBncmlkWSwgb3duZXIsIENoZXNzU3F1YXJlVHlwZS5QYXduKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXZhaWxhYmxlTW92ZXMoKTogQ2hlc3NTcXVhcmVbXVxyXG4gICAge1xyXG4gICAgICAgIHZhciBhYm92ZSA9IDxDaGVzc1NxdWFyZT50aGlzLmdhbWVCb2FyZC5nZXRTcXVhcmUodGhpcy5ncmlkWCwgdGhpcy5ncmlkWSArIDEpO1xyXG4gICAgICAgIGFib3ZlID0gYWJvdmUgIT09IHVuZGVmaW5lZCAmJiBhYm92ZS5vd25lciAhPT0gdGhpcy5vd25lciAmJiBhYm92ZS5vd25lciAhPT0gT3duZXIuRW1wdHlcclxuICAgICAgICAgICAgPyB1bmRlZmluZWQgOiBhYm92ZTtcclxuICAgICAgICB2YXIgYmVsb3cgPSA8Q2hlc3NTcXVhcmU+dGhpcy5nYW1lQm9hcmQuZ2V0U3F1YXJlKHRoaXMuZ3JpZFgsIHRoaXMuZ3JpZFkgLSAxKTtcclxuICAgICAgICBiZWxvdyA9IGJlbG93ICE9PSB1bmRlZmluZWQgJiYgYmVsb3cub3duZXIgIT09IHRoaXMub3duZXIgJiYgYmVsb3cub3duZXIgIT09IE93bmVyLkVtcHR5XHJcbiAgICAgICAgICAgID8gdW5kZWZpbmVkIDogYmVsb3c7XHJcblxyXG4gICAgICAgIGxldCBtb2RpZmllcnMgPSBbXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KCsrcC54LCArK3AueSksXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KC0tcC54LCArK3AueSksXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KCsrcC54LCAtLXAueSksXHJcbiAgICAgICAgICAgIChwOiBQb2ludCkgPT4gbmV3IFBvaW50KC0tcC54LCAtLXAueSlcclxuICAgICAgICBdO1xyXG4gICAgICAgIGxldCBkaWFnb25hbHMgPSB0aGlzLmdldFNxdWFyZVNlcXVlbmNlcyhtb2RpZmllcnMsIDEpLmZpbHRlcihzID0+IHMub3duZXIgIT09IHRoaXMub3duZXIgJiYgcy5vd25lciAhPT0gT3duZXIuRW1wdHkpO1xyXG5cclxuICAgICAgICB2YXIgeCA9IFthYm92ZSwgYmVsb3ddLmNvbmNhdChkaWFnb25hbHMpO1xyXG5cclxuICAgICAgICB2YXIgc3F1YXJlcyA9IHRoaXMuZmlsdGVySW52YWxpZCh4KTtcclxuICAgICAgICByZXR1cm4gc3F1YXJlcztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lcy9jaGVzcy9waWVjZXMvcGF3bi50cyIsImltcG9ydCB7IElDaGVzc01vdmUgfSBmcm9tIFwiLi9pTW92ZVwiO1xyXG5pbXBvcnQgeyBDaGVzc0JvYXJkIH0gZnJvbSBcIi4uLy4uL2NvcmUvY2hlc3NCb2FyZFwiO1xyXG5pbXBvcnQgeyBDaGVzc1NxdWFyZSB9IGZyb20gXCIuL3BpZWNlcy9jaGVzc1NxdWFyZVwiO1xyXG5pbXBvcnQgeyBPd25lciB9IGZyb20gXCIuLi8uLi9jb3JlL293bmFibGVTcXVhcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFsbG93Qmx1ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhbWVCb2FyZDogQ2hlc3NCb2FyZCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldE1vdmUoKTogSUNoZXNzTW92ZSB7XHJcbiAgICAgICAgbGV0IHRha2VQaWVjZW1vdmUgPSB0aGlzLnRha2VQaWVjZU1vdmUoKVxyXG4gICAgICAgIGlmICh0YWtlUGllY2Vtb3ZlKSByZXR1cm4gdGFrZVBpZWNlbW92ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tTW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFuZG9tTW92ZSgpOiBJQ2hlc3NNb3ZlIHtcclxuICAgICAgICB2YXIgY29tcHV0ZXJTcXVhcmVzID0gdGhpcy5nYW1lQm9hcmQuZ2V0U3F1YXJlcygpLmZpbHRlcihzID0+IHMub3duZXIgPT09IE93bmVyLkNvbXB1dGVyKTtcclxuICAgICAgICBsZXQgcmFuZG9tRGVzdGluYXRpb25TcXVhcmU6IENoZXNzU3F1YXJlO1xyXG4gICAgICAgIHdoaWxlIChyYW5kb21EZXN0aW5hdGlvblNxdWFyZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhciByYW5kb21TcXVhcmVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyU3F1YXJlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB2YXIgcmFuZG9tU291cmNlU3F1YXJlID0gY29tcHV0ZXJTcXVhcmVzW3JhbmRvbVNxdWFyZUluZGV4XTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtb3ZlcyA9IHJhbmRvbVNvdXJjZVNxdWFyZS5nZXRBdmFpbGFibGVNb3ZlcygpO1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tTW92ZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW92ZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmFuZG9tRGVzdGluYXRpb25TcXVhcmUgPSBtb3Zlc1swXTtcclxuICAgICAgICAgICAgY29tcHV0ZXJTcXVhcmVzLnNwbGljZShyYW5kb21TcXVhcmVJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8SUNoZXNzTW92ZT57IHNvdXJjZVNxdWFyZTogcmFuZG9tU291cmNlU3F1YXJlLCBkZXN0aW5hdGlvblNxdWFyZTogcmFuZG9tRGVzdGluYXRpb25TcXVhcmUgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRha2VQaWVjZU1vdmUoKTogSUNoZXNzTW92ZSB7XHJcbiAgICAgICAgdmFyIGNvbXB1dGVyU3F1YXJlcyA9IHRoaXMuZ2FtZUJvYXJkLmdldFNxdWFyZXMoKS5maWx0ZXIocyA9PiBzLm93bmVyID09PSBPd25lci5Db21wdXRlcik7XHJcbiAgICAgICAgZm9yICh2YXIgc3F1YXJlIG9mIGNvbXB1dGVyU3F1YXJlcykge1xyXG4gICAgICAgICAgICB2YXIgbW92ZXMgPSBzcXVhcmUuZ2V0QXZhaWxhYmxlTW92ZXMoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgbW92ZSBvZiBtb3Zlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vdmUub3duZXIgIT09IE93bmVyLlBsYXllcikgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPElDaGVzc01vdmU+eyBzb3VyY2VTcXVhcmU6IHNxdWFyZSwgZGVzdGluYXRpb25TcXVhcmU6IG1vdmUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lcy9jaGVzcy9zaGFsbG93Qmx1ZS50cyIsImV4cG9ydCBjbGFzcyBHYW1lV2luZG93IHtcclxuICAgIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHVibGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgd2lkdGg6IG51bWJlciwgcHVibGljIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2VlZWVlZVwiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3TGluZSh4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4MiwgeTIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3Ryb2tlUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgPSBcImJsYWNrXCIpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlsbFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2xvcjogc3RyaW5nID0gXCJibGFja1wiKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhd0NpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgPSBcImdyZXlcIikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyIC0gMTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKCgoeCAtIDEpICogd2lkdGgpICsgd2lkdGggLyAyLCAoKHkgLSAxKSAqIGhlaWdodCkgKyBoZWlnaHQgLyAyLCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3Q2lyY2xlVG9wKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sb3I6IHN0cmluZyA9IFwiZ3JleVwiKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIgLSAxO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoKCh4IC0gMSkgKiB3aWR0aCkgKyB3aWR0aCAvIDIsICgoMSAtIDEpICogaGVpZ2h0KSArIGhlaWdodCAvIDIsIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyU2NyZWVuKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50OiBVSUV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXdJbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCwgeENvb3JkOiBudW1iZXIsIHlDb29yZDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHhDb29yZCwgeUNvb3JkLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhd1NraW5ueUdyaWRCb3goeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2xvciA9IFwiZ3JleVwiLCBpc0ZpbGxhYmxlID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChpc0ZpbGxhYmxlKVxyXG4gICAgICAgICAgICB0aGlzLmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKTtcclxuICAgICAgICAvL3RoaXMuZmlsbFJlY3QoKHggKiB3aWR0aCkgLSB3aWR0aCArIDEsICh5ICogaGVpZ2h0IC0gaGVpZ2h0ICsgKGhlaWdodCAvIDQuMCkpICsgMSwgd2lkdGggLSAyLCBoZWlnaHQgLyAyIC0gMiwgY29sb3IpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zdHJva2VSZWN0KCh4ICogd2lkdGgpIC0gd2lkdGggKyAxLCAoeSAqIGhlaWdodCAtIGhlaWdodCArIChoZWlnaHQgLyA0LjApKSArIDEsIHdpZHRoIC0gMiwgaGVpZ2h0IC8gMiAtIDIsIGNvbG9yKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL2dhbWVXaW5kb3cudHMiXSwic291cmNlUm9vdCI6IiJ9
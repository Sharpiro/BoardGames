import { GameBoard } from "./gameBoard";
import { Point } from "./point";

export abstract class RenderableSquare {
    constructor(protected gameBoard: GameBoard<RenderableSquare>, public gridX: number, public gridY: number) {

    }

    public abstract render(isFillable?: boolean, color?: string): void;

    public equals(otherSquare: RenderableSquare): boolean {
        if (otherSquare == undefined) return false;
        return this.gridX == otherSquare.gridX && this.gridY == otherSquare.gridY;
    }

    public getPixelCoordinates(): Point {
        var xCoord = this.gridX * this.gameBoard.xInterval - this.gameBoard.xInterval;
        var yCoord = this.gridY * this.gameBoard.yInterval - this.gameBoard.yInterval;
        return new Point(xCoord, yCoord);
    }

    public getArrayPosition(): number {
        var pos = ((this.gridY - 1) * (this.gameBoard.segmentsX)) + (this.gridX - 1);
        return pos;
    }

    public getGridPosition(): Point {
        return new Point(this.gridX, this.gridY);
    }

    public setGridPosition(point: Point): void {
        this.gridX = point.x;
        this.gridY = point.y;
    }
}
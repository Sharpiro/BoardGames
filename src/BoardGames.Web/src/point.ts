class Point
{
    constructor(public x: number, public y: number)
    {
    }

    public equals(otherPoint: Point): boolean
    {
        if (this.x === otherPoint.x && this.y === otherPoint.y)
        {
            return true;
        }
        return false;
    }
}
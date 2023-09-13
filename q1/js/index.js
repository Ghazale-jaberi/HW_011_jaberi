class Shape {
    constructor(shapeName) {
        this._shapeName = shapeName;
    }
    get shapeName() {
        return this._shapeName;
    }
    set shapeName(shapeName) {
        this._shapeName = shapeName;
    }
    calcArea() {
        throw new Error("calcArea");
    }
    calcPerimeter() {
        throw new Error("calcPerimeter");
    }
}
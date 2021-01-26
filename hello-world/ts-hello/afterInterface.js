var Point = /** @class */ (function () {
    //Access Modifiers
    //1. public (default in TS)
    //2. private (only accessible inside the class and are not accessible outside the class 
    //            even cannot be accessed with its object)
    //3. protected
    /*
    x: number;
    y: number;
    private z: number; */ //We are using around access modifiers below and omiting this section
    //There is no concept of multiple constructors in TS
    //rather we can have optional parameters to the constructor
    //for that also the rule is , in case of optional parameter
    //all the other parameters to the right of it must be optional as well
    /*
    constructor(x?: number,y?: number, z?: number){
        this.x = x;
        this.y = y;
        this.z = z;
    }*/ // We are using around access modifiers below and omiting this section as well
    function Point(x1, y1, z) {
        this.x1 = x1;
        this.y1 = y1;
        this.z = z;
    }
    Point.prototype.draw = function () {
        console.log('X :' + this.x1 + ' Y :' + this.y1 + ' Z :' + this.z);
        //body of draw
        // this.x and this.y are accessible inside the class
    };
    Point.prototype.getDistance = function (another) {
        //body of getDistance
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
//  point.z = 3;    gives error
var point2 = new Point(3, 4, 5);
point2.draw();
point.draw();

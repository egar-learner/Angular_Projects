message = 'Hi Hello';
//Arrow Function
(function (mess) { return console.log(mess); });
var returnFromArrow = function (message) { return console.log(message); };
var returnFromBracArrow = function (mess) {
    console.log(mess);
};
var withoutParam = function () {
    console.log(message);
};
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X :' + this.x + 'Y :' + this.y);
        //body of draw
        // this.x and this.y are accessible inside the class
    };
    Point.prototype.getDistance = function (another) {
        //body of getDistance
    };
    return Point;
}());
var point = new Point();
point.draw();

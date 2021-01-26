"use strict";
exports.__esModule = true;
exports.PointModule = void 0;
var PointModule = /** @class */ (function () {
    function PointModule(x, y) {
        this.x = x;
        this.y = y;
    }
    PointModule.prototype.draw = function () {
        console.log('X : ' + this.x + ' Y: ' + this.y);
    };
    return PointModule;
}());
exports.PointModule = PointModule;

function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
/**
 * var and let keywords
 */
var number = 1;
var count = 2;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // i is also available outside the for block if it is declared using
    // var keyword where as if i is declared with let keyword it will 
    // not be available outside the for block
    //console.log('Finally: ' + i);
    //cannot find symbol i
    console.log('Finally: ' + i);
}
doSomething();
//NOTE : 'let' keyword is used to declare a variable scope upto the block in which it is declared 
// ALso it is used to have strong typing of a var and have compile time checks
// A variable once defined using 'let' haves a type 'any' and once assigned some value at the time of declaration it becomes
// of that type and the type of that variable cannot be changed further in the program or upto the place
// it is accessible 
//example 1: 
var a = 1; // the variable a is now having a value of 1 and type as 'number'
a = 'Manish'; // String is not assignable to number
var b; // the variable b is now having a type as 'any'
b = 'Manish'; // No error since it was having a type as 'any' in the begining
var c; // Explicitly specifying the type of the variable while declaring
c = 4; // Error number is assigned to a String
c = 'Manish'; //No error as c is declared to be a String in the begining
//Types
var n;
var t;
var s;
var d;
var e; // let e: number[] = [1,2,3,4]
var f; // let f: any[] = {1,true,'mkt',2.4}
//Enums to hold the group of similar constants
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
    Color[Color["PINK"] = 3] = "PINK";
})(Color || (Color = {})); // if we don't specify the values explicitly each element gets a increamented
// value from 0 onwards
// In JS ENUMS are implemented using a explicit function
//Type assertion 
//Ways to explicitly tell the compiler about the type of a variable to get the intellisense
var mess;
mess = 'abc';
var endsWithC = mess.endsWith('c');
var endsWithCAlt = mess.endsWith('b');
//Ways to specify the variable types to the compiler 
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
var point;
point.draw();

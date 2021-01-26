//Interfaces 
//These custom types are used to declare fields and methods and 
//cannot contain any kind of definitions
interface Point{
    x:number,
    y:number
}

class Point{

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

    constructor(public x1?: number, public y1?: number, private _z?: number){ }

    draw () {
        console.log('X :' + this.x1 + ' Y :' + this.y1 +' Z :'+ this.z)
        //body of draw
        // this.x and this.y are accessible inside the class
    }

    getDistance(another: Point){
        //body of getDistance
    }

    get z(){
        return this.z;
    }

    set z(value:number){
        if(value<0)
            throw new Error('Value cannot be less than zero(0)');
        
        this.z = value;
    }
}

let point = new Point();
point.x = 1;
point.y = 2;
//  point.z = 3;    gives error

let point2 = new Point(3,4,5);

//Using the property type of functions . Hence, commenting below code
//console.log(point2.getZ());
//point.setZ(7);

//This is a property and looks like a field to the outside
console.log(point2.z);
point.z = 7;

point2.draw();
point.draw();
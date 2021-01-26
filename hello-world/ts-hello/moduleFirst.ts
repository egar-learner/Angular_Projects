
//export can be used to export classes/functions/variables etc.
export class PointModule {
    constructor(private x?: number, private y?:number){}

    draw() {
        console.log('X : ' + this.x + ' Y: ' + this.y);
    }
}
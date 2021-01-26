import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

//This classs is used to show the binding in its html , the property binding and interpolation binding
export class CourseComponent implements OnInit {

  private _propBind!: string;

  private _interBindStr !: string;

  private _interBind = false;

  constructor() { }

  ngOnInit(): void {
  }

  get propBind (){
    return this._propBind;
}

set propBind(value:string) {
    this._propBind = value;
}

get interBind() {
  return this._interBind;
}

set interBind(value:boolean){
  this._interBind = value;
}

get interBindStr(){
  return this._interBindStr;
}

set interBindStr(value:string){
  this.interBindStr = value;
}

}

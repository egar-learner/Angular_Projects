import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-class-bind]',
  templateUrl: './class-bind.component.html',
  styleUrls: ['./class-bind.component.css']
})
export class ClassBindComponent implements OnInit {

  public name = "codeEvaluation";

  successClass = "text-success";

  hasError = true;

  isSpecial = true;

  //Here we are encapsulating multiple classes together based on some booleans in the class
  messageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

}

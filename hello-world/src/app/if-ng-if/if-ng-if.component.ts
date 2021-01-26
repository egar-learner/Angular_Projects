import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-if-ng-if',
  templateUrl: './if-ng-if.component.html',
  styleUrls: ['./if-ng-if.component.css']
})
export class IfNgIfComponent implements OnInit {

  whichBlock!:boolean;

  changeSelectionBlock(){

  }

  constructor() { }

  ngOnInit(): void {
  }

}

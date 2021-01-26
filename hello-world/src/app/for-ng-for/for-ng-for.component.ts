import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-ng-for',
  templateUrl: './for-ng-for.component.html',
  styleUrls: ['./for-ng-for.component.css']
})
export class ForNgForComponent implements OnInit {

  displayList !:string[];

  clickedOnButton(){
    this.displayList = ['MKT','KMT','KTM','TMK','MTK','TKM'];
  }

  constructor() { }

  ngOnInit(): void {
  }

}

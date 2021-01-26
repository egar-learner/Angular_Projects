import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-bind',
  templateUrl: './style-bind.component.html',
  styleUrls: ['./style-bind.component.css']
})
export class StyleBindComponent implements OnInit {

  styleVal = "pink";

  condVar = false;

  styles = {
    color: "blue",
    //we cannot use font-style here . We have to use camel case fontStyle
    fontStyle : "italic"
  };

  constructor() { }

  ngOnInit(): void {
  }

}

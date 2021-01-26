import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-pipes-in-interpolation]',
  templateUrl: './pipes-in-interpolation.component.html',
  styleUrls: ['./pipes-in-interpolation.component.css']
})
export class PipesInInterpolationComponent implements OnInit {

  //Pipe only alters the values in the view and does not affect the values in the file.
  name = "Sample of working";

  anotherName = 5.678;
  cur = 0.25;

  date = new Date();

  constructor() { }

  //This is called once the component is initialized
  ngOnInit(): void {
  }

}

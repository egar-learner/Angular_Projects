import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  //without any function call this will hold the value from the input where the ngModel is added
  name = ""

  constructor() { }

  ngOnInit(): void {
  }

}

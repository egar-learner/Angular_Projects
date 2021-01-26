import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  greetStr = '';

  callOnClickMethod(){
    alert('Welcome to opportunity');
    this.greetStr = 'Welcome to Eventbinding';
  }

  callOnMouseOver(event:Event){
    alert(event.type);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

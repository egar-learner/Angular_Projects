import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '.app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  //In this class we will check how a child component i.e. InteractionComponent sends and recieves data from the
  //Parent Component i.e. AppComponent

  //This is for recieving data from the parent, we are getting perantData and then creating an alias data for it and using it
  //in our code template
  @Input('parentData') data !: string;

  @Output() event = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.event.emit('Data sent from Child to parent')
  }

}

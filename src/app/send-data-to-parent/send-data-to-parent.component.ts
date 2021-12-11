import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send-data-to-parent',
  templateUrl: './send-data-to-parent.component.html',
  styleUrls: ['./send-data-to-parent.component.css']
})
export class SendDataToParentComponent implements OnInit {

  @Output() parentFunction: EventEmitter<any>=  new EventEmitter();
  @Output() parentObjectFunction: EventEmitter<any>=  new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.parentFunction.emit('This message is sent from the child component');

    let data = {
      name: 'peter',
      age: 20,
      message: 'This message is also sent from the child component'
    };
    this.parentObjectFunction.emit(data);
  }

  sendData() {
    this.parentFunction.emit('This message is sent from the child component via button click');

    let data = {
      name: 'peter',
      age: 20,
      message: 'This message is also sent from the child component via button click'
    };
    this.parentObjectFunction.emit(data);
  }

}

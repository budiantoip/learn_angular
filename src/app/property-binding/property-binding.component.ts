import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  name = 'bruce';
  disabledTextBox=true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleTextBox() {
    this.disabledTextBox = !this.disabledTextBox;
  }

}

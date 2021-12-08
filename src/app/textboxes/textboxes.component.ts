import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textboxes',
  templateUrl: './textboxes.component.html',
  styleUrls: ['./textboxes.component.css']
})
export class TextboxesComponent implements OnInit {
  currentValue="";

  constructor() { }

  ngOnInit(): void {
  }

  getValue(object: any) {
    console.clear();
    console.warn(object.value);
    this.currentValue = object.value;
  }

  getTextBoxValue(value: any) {
    console.clear();
    console.warn(value);
    this.currentValue = value;
  }

}

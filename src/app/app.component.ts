import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'bruce';
  myName="bruce";
  currentValue="";
  disabledTextBox=true;
  show=true;

  

  getMyName() {
    alert('button clicked!');
  }

  getMyDefinedName(myDefinedName: string) {
    alert(myDefinedName);
  }

  setMyName(name: string) {
    alert(name);
  }

  myEvent(evt: any) {
    console.clear();
    console.warn(evt);
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

  toggleTextBox() {
    this.disabledTextBox = !this.disabledTextBox;
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog app';
  name = 'bruce';
  obj = {
    name: 'kelly',
    age: 20
  };
  arr = ['bruce', 'tony', 'peter'];
  siteUrl = window.location.href;
  myName="bruce";
  currentValue="";
  disabledTextBox=true;
  show=true;

  getName() {
    return this.name;
  }

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
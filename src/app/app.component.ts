import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'bruce';
  myName="bruce";
  disabledTextBox=true;
  show=true;
  parentData="bruce";
  parentDataObject={
    name: "bruce",
    age: 20
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
  
}
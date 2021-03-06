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
  reusableComponentUser={
    name: 'peter',
    age: 25,
    address: 'indonesia'
  }
  reusableComponentUsers=[
    {
      name: 'peter',
      age: 25,
      address: 'indonesia'
    },
    {
      name: 'bruce',
      age: 20,
      address: 'usa'
    }
  ]
  dataFromChild=null;
  objectDataFromChild=null;

  getMyName() {
    alert('button clicked!');
  }

  getMyDefinedName(myDefinedName: string) {
    alert(myDefinedName);
  }

  setMyName(name: string) {
    alert(name);
  }

  parentFunction(data: any) {
    console.warn(data);
    this.dataFromChild = data;
  }

  parentObjectFunction(data: any) {
    console.warn(data);
    this.objectDataFromChild = data;
  }
  
}
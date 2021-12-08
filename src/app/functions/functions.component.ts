import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {
  myName="bruce";

  constructor() { }

  ngOnInit(): void {
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

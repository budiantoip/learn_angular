import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {
  show1=true;
  show2=false;
  show3=false;
  show4=true;
  show5="red";

  constructor() { }

  ngOnInit(): void {
  }

}

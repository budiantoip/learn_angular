import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-cases',
  templateUrl: './switch-cases.component.html',
  styleUrls: ['./switch-cases.component.css']
})
export class SwitchCasesComponent implements OnInit {
  color="red";

  constructor() { }

  ngOnInit(): void {
  }

}

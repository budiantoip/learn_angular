import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  color="orange";
  backgroundColor="springgreen";
  isError=false;

  constructor() { }

  ngOnInit(): void {
  }

  updateColor() {
    this.color = "blue";
  }

  toggleError() {
    this.isError = !this.isError;
  }

}

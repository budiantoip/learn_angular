import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  title = 'blog app';
  name = 'bruce';
  obj = {
    name: 'kelly',
    age: 20
  };
  arr = ['bruce', 'tony', 'peter'];
  siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  getName() {
    return this.name;
  }

}

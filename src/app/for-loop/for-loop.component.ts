import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {
  data=['anil', 'sam', 'peter', 'bruce'];
  arrayOfObject=[
    {
      name: 'anil',
      age: 25,
      email: 'xyz@test.com'
    },
    {
      name: 'sam',
      age: 19,
      email: 'xyz@test.com'
    },
    {
      name: 'tony',
      age: 34,
      email: 'xyz@test.com'
    },
    {
      name: 'kelly',
      age: 45,
      email: 'xyz@test.com'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

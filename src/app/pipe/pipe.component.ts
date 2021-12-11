import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  name="peter parkEr";
  today= Date.now();
  string="Hello Angular";
  money=100;

  constructor() { }

  ngOnInit(): void {
  }

}

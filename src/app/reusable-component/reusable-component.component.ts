import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-component',
  templateUrl: './reusable-component.component.html',
  styleUrls: ['./reusable-component.component.css']
})
export class ReusableComponentComponent implements OnInit {

  @Input() hero: any;
  @Input() heroArray: any;
  constructor() { }

  ngOnInit(): void {
    console.warn(this.hero);
    console.warn(this.heroArray);
  }

}

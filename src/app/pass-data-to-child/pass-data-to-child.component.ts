import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pass-data-to-child',
  templateUrl: './pass-data-to-child.component.html',
  styleUrls: ['./pass-data-to-child.component.css']
})
export class PassDataToChildComponent implements OnInit {

  @Input() hero: any;
  @Input() heroObject: any;
  constructor() { }

  ngOnInit(): void {
  }

}

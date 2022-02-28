import { Component, OnInit } from '@angular/core';
import { CallApiUsersService } from './call-api-users.service';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})
export class CallApiComponent implements OnInit {

  data: any;

  constructor(
    private userService: CallApiUsersService
  ) {
    this.getData();
  }

  ngOnInit(): void {
  }

  getData() {
    const data = this.userService.getData().subscribe(
      data => this.data = data
    );
  }

}

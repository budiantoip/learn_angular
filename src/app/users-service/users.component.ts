import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  myData = {
    id: 0,
    age: 0,
    name: ''
  };

  constructor( 
    private userService: UsersService
   ) {
    this.myData = this.userService.getData();
  }

  ngOnInit(): void {
  }

}

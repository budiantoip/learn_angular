import { AssertNotNull } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ShowListFromApiDataUsersServiceService } from './show-list-from-api-data-users-service.service'

@Component({
  selector: 'app-show-list-from-api-data',
  templateUrl: './show-list-from-api-data.component.html',
  styleUrls: ['./show-list-from-api-data.component.css']
})
export class ShowListFromApiDataComponent implements OnInit {

  data: any;

  constructor(
    private userService: ShowListFromApiDataUsersServiceService
  ) {
    this.userService.getData().subscribe(
      data => {
        this.data = data
      }
    )
  }

  ngOnInit(): void {
  }

}

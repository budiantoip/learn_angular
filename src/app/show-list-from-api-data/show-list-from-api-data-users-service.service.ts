import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowListFromApiDataUsersServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get(url);
  }
}

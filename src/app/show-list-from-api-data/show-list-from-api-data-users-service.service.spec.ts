import { TestBed } from '@angular/core/testing';

import { ShowListFromApiDataUsersServiceService } from './show-list-from-api-data-users-service.service';

describe('ShowListFromApiDataUsersServiceService', () => {
  let service: ShowListFromApiDataUsersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowListFromApiDataUsersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

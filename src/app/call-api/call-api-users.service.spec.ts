import { TestBed } from '@angular/core/testing';

import { CallApiUsersService } from './call-api-users.service';

describe('CallApiUsersService', () => {
  let service: CallApiUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallApiUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

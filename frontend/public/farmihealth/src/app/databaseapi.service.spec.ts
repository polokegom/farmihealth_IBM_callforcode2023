import { TestBed } from '@angular/core/testing';

import { DatabaseapiService } from './databaseapi.service';

describe('DatabaseapiService', () => {
  let service: DatabaseapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

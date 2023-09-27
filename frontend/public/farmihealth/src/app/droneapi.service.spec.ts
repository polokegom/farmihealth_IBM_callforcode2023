import { TestBed } from '@angular/core/testing';

import { DroneapiService } from './droneapi.service';

describe('DroneapiService', () => {
  let service: DroneapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DroneapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

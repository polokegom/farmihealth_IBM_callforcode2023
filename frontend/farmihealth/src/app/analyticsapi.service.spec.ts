import { TestBed } from '@angular/core/testing';

import { AnalyticsapiService } from './analyticsapi.service';

describe('AnalyticsapiService', () => {
  let service: AnalyticsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

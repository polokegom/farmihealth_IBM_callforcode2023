import { TestBed } from '@angular/core/testing';

import { AnalyticsseService } from './analyticsse.service';

describe('AnalyticsseService', () => {
  let service: AnalyticsseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

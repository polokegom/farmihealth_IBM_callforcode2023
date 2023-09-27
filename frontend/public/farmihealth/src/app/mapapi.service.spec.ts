import { TestBed } from '@angular/core/testing';

import { MapapiService } from './mapapi.service';

describe('MapapiService', () => {
  let service: MapapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

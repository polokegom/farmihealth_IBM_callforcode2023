import { TestBed } from '@angular/core/testing';

import { GlobVarService } from './glob-var.service';

describe('GlobVarService', () => {
  let service: GlobVarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobVarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authedUserGuard } from './authed-user.guard';

describe('authedUserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authedUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

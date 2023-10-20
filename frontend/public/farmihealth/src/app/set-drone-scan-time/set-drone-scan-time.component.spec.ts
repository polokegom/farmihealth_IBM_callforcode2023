import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDroneScanTimeComponent } from './set-drone-scan-time.component';

describe('SetDroneScanTimeComponent', () => {
  let component: SetDroneScanTimeComponent;
  let fixture: ComponentFixture<SetDroneScanTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetDroneScanTimeComponent]
    });
    fixture = TestBed.createComponent(SetDroneScanTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

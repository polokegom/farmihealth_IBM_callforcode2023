import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDroneStatusComponent } from './view-drone-status.component';

describe('ViewDroneStatusComponent', () => {
  let component: ViewDroneStatusComponent;
  let fixture: ComponentFixture<ViewDroneStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDroneStatusComponent]
    });
    fixture = TestBed.createComponent(ViewDroneStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

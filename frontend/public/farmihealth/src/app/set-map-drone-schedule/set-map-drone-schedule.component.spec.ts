import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMapDroneScheduleComponent } from './set-map-drone-schedule.component';

describe('SetMapDroneScheduleComponent', () => {
  let component: SetMapDroneScheduleComponent;
  let fixture: ComponentFixture<SetMapDroneScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetMapDroneScheduleComponent]
    });
    fixture = TestBed.createComponent(SetMapDroneScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

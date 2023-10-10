import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetmapscheduleComponent } from './setmapschedule.component';

describe('SetmapscheduleComponent', () => {
  let component: SetmapscheduleComponent;
  let fixture: ComponentFixture<SetmapscheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetmapscheduleComponent]
    });
    fixture = TestBed.createComponent(SetmapscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

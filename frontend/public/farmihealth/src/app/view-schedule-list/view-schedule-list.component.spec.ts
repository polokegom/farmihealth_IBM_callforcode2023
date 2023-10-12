import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScheduleListComponent } from './view-schedule-list.component';

describe('ViewScheduleListComponent', () => {
  let component: ViewScheduleListComponent;
  let fixture: ComponentFixture<ViewScheduleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewScheduleListComponent]
    });
    fixture = TestBed.createComponent(ViewScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

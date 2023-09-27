import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneapiComponent } from './droneapi.component';

describe('DroneapiComponent', () => {
  let component: DroneapiComponent;
  let fixture: ComponentFixture<DroneapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DroneapiComponent]
    });
    fixture = TestBed.createComponent(DroneapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronelistComponent } from './dronelist.component';

describe('DronelistComponent', () => {
  let component: DronelistComponent;
  let fixture: ComponentFixture<DronelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DronelistComponent]
    });
    fixture = TestBed.createComponent(DronelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

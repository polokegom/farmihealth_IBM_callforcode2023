import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMapDroneComponent } from './set-map-drone.component';

describe('SetMapDroneComponent', () => {
  let component: SetMapDroneComponent;
  let fixture: ComponentFixture<SetMapDroneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetMapDroneComponent]
    });
    fixture = TestBed.createComponent(SetMapDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

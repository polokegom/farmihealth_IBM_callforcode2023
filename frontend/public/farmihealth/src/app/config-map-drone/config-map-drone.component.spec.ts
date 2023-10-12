import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMapDroneComponent } from './config-map-drone.component';

describe('ConfigMapDroneComponent', () => {
  let component: ConfigMapDroneComponent;
  let fixture: ComponentFixture<ConfigMapDroneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigMapDroneComponent]
    });
    fixture = TestBed.createComponent(ConfigMapDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDroneToMapComponent } from './link-drone-to-map.component';

describe('LinkDroneToMapComponent', () => {
  let component: LinkDroneToMapComponent;
  let fixture: ComponentFixture<LinkDroneToMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkDroneToMapComponent]
    });
    fixture = TestBed.createComponent(LinkDroneToMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

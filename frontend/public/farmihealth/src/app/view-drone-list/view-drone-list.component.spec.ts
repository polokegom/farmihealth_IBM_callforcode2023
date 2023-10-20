import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDroneListComponent } from './view-drone-list.component';

describe('ViewDroneListComponent', () => {
  let component: ViewDroneListComponent;
  let fixture: ComponentFixture<ViewDroneListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDroneListComponent]
    });
    fixture = TestBed.createComponent(ViewDroneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

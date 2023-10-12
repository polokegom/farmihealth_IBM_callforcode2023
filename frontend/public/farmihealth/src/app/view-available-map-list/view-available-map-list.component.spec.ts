import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAvailableMapListComponent } from './view-available-map-list.component';

describe('ViewAvailableMapListComponent', () => {
  let component: ViewAvailableMapListComponent;
  let fixture: ComponentFixture<ViewAvailableMapListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAvailableMapListComponent]
    });
    fixture = TestBed.createComponent(ViewAvailableMapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

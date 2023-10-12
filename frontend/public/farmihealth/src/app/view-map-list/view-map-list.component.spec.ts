import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMapListComponent } from './view-map-list.component';

describe('ViewMapListComponent', () => {
  let component: ViewMapListComponent;
  let fixture: ComponentFixture<ViewMapListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMapListComponent]
    });
    fixture = TestBed.createComponent(ViewMapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

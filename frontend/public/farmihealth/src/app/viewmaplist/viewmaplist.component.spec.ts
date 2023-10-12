import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmaplistComponent } from './viewmaplist.component';

describe('ViewmaplistComponent', () => {
  let component: ViewmaplistComponent;
  let fixture: ComponentFixture<ViewmaplistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmaplistComponent]
    });
    fixture = TestBed.createComponent(ViewmaplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

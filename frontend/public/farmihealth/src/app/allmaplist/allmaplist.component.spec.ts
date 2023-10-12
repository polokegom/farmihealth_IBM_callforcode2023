import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmaplistComponent } from './allmaplist.component';

describe('AllmaplistComponent', () => {
  let component: AllmaplistComponent;
  let fixture: ComponentFixture<AllmaplistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllmaplistComponent]
    });
    fixture = TestBed.createComponent(AllmaplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

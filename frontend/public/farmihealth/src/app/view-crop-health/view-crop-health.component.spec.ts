import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCropHealthComponent } from './view-crop-health.component';

describe('ViewCropHealthComponent', () => {
  let component: ViewCropHealthComponent;
  let fixture: ComponentFixture<ViewCropHealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCropHealthComponent]
    });
    fixture = TestBed.createComponent(ViewCropHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

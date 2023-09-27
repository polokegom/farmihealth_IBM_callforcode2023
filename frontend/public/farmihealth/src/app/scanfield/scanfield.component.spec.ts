import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanfieldComponent } from './scanfield.component';

describe('ScanfieldComponent', () => {
  let component: ScanfieldComponent;
  let fixture: ComponentFixture<ScanfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScanfieldComponent]
    });
    fixture = TestBed.createComponent(ScanfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

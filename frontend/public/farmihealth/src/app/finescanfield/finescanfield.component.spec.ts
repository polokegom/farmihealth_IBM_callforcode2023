import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinescanfieldComponent } from './finescanfield.component';

describe('FinescanfieldComponent', () => {
  let component: FinescanfieldComponent;
  let fixture: ComponentFixture<FinescanfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinescanfieldComponent]
    });
    fixture = TestBed.createComponent(FinescanfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPolyComponent } from './test-poly.component';

describe('TestPolyComponent', () => {
  let component: TestPolyComponent;
  let fixture: ComponentFixture<TestPolyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestPolyComponent]
    });
    fixture = TestBed.createComponent(TestPolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

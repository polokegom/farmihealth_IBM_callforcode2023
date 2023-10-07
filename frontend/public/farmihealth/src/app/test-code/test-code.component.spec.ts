import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCodeComponent } from './test-code.component';

describe('TestCodeComponent', () => {
  let component: TestCodeComponent;
  let fixture: ComponentFixture<TestCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCodeComponent]
    });
    fixture = TestBed.createComponent(TestCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

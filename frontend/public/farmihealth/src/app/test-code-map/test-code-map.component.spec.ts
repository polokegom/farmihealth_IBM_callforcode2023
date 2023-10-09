import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCodeMapComponent } from './test-code-map.component';

describe('TestCodeMapComponent', () => {
  let component: TestCodeMapComponent;
  let fixture: ComponentFixture<TestCodeMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCodeMapComponent]
    });
    fixture = TestBed.createComponent(TestCodeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetmapnameComponent } from './setmapname.component';

describe('SetmapnameComponent', () => {
  let component: SetmapnameComponent;
  let fixture: ComponentFixture<SetmapnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetmapnameComponent]
    });
    fixture = TestBed.createComponent(SetmapnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

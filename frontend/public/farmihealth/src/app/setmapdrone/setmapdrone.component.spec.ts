import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetmapdroneComponent } from './setmapdrone.component';

describe('SetmapdroneComponent', () => {
  let component: SetmapdroneComponent;
  let fixture: ComponentFixture<SetmapdroneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetmapdroneComponent]
    });
    fixture = TestBed.createComponent(SetmapdroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

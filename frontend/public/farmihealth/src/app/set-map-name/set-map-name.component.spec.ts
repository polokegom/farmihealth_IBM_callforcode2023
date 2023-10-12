import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMapNameComponent } from './set-map-name.component';

describe('SetMapNameComponent', () => {
  let component: SetMapNameComponent;
  let fixture: ComponentFixture<SetMapNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetMapNameComponent]
    });
    fixture = TestBed.createComponent(SetMapNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

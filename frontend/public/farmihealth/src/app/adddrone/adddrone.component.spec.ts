import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddroneComponent } from './adddrone.component';

describe('AdddroneComponent', () => {
  let component: AdddroneComponent;
  let fixture: ComponentFixture<AdddroneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddroneComponent]
    });
    fixture = TestBed.createComponent(AdddroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

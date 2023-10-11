import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcropmaphealthComponent } from './viewcropmaphealth.component';

describe('ViewcropmaphealthComponent', () => {
  let component: ViewcropmaphealthComponent;
  let fixture: ComponentFixture<ViewcropmaphealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcropmaphealthComponent]
    });
    fixture = TestBed.createComponent(ViewcropmaphealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

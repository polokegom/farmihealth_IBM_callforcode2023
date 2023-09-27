import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfarmstatusComponent } from './showfarmstatus.component';

describe('ShowfarmstatusComponent', () => {
  let component: ShowfarmstatusComponent;
  let fixture: ComponentFixture<ShowfarmstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowfarmstatusComponent]
    });
    fixture = TestBed.createComponent(ShowfarmstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

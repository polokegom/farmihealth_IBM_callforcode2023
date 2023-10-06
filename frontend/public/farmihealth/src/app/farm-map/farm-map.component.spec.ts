import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmMapComponent } from './farm-map.component';

describe('FarmMapComponent', () => {
  let component: FarmMapComponent;
  let fixture: ComponentFixture<FarmMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmMapComponent]
    });
    fixture = TestBed.createComponent(FarmMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafkaTestComponent } from './kafka-test.component';

describe('KafkaTestComponent', () => {
  let component: KafkaTestComponent;
  let fixture: ComponentFixture<KafkaTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KafkaTestComponent]
    });
    fixture = TestBed.createComponent(KafkaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

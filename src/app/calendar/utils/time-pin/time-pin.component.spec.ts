import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePinComponent } from './time-pin.component';

describe('TimePinComponent', () => {
  let component: TimePinComponent;
  let fixture: ComponentFixture<TimePinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimePinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

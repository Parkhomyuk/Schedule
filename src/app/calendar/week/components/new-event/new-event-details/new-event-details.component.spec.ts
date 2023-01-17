import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventDetailsComponent } from './new-event-details.component';

describe('NewEventDetailsComponent', () => {
  let component: NewEventDetailsComponent;
  let fixture: ComponentFixture<NewEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEventDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

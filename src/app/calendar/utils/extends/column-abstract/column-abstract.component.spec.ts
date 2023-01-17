import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnAbstractComponent } from './column-abstract.component';

describe('ColumnAbstractComponent', () => {
  let component: ColumnAbstractComponent;
  let fixture: ComponentFixture<ColumnAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnAbstractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

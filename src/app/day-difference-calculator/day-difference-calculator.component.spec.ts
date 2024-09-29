import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDifferenceCalculatorComponent } from './day-difference-calculator.component';

describe('DayDifferenceCalculatorComponent', () => {
  let component: DayDifferenceCalculatorComponent;
  let fixture: ComponentFixture<DayDifferenceCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayDifferenceCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayDifferenceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchesimulatorComponent } from './stopwatchesimulator.component';

describe('StopwatchesimulatorComponent', () => {
  let component: StopwatchesimulatorComponent;
  let fixture: ComponentFixture<StopwatchesimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StopwatchesimulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopwatchesimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

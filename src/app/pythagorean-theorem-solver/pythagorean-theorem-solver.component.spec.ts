import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythagoreanTheoremSolverComponent } from './pythagorean-theorem-solver.component';

describe('PythagoreanTheoremSolverComponent', () => {
  let component: PythagoreanTheoremSolverComponent;
  let fixture: ComponentFixture<PythagoreanTheoremSolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythagoreanTheoremSolverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythagoreanTheoremSolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

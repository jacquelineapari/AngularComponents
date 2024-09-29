import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbercomparerComponent } from './numbercomparer.component';

describe('NumbercomparerComponent', () => {
  let component: NumbercomparerComponent;
  let fixture: ComponentFixture<NumbercomparerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbercomparerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbercomparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

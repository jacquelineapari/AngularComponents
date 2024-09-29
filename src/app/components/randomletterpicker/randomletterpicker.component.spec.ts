import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomletterpickerComponent } from './randomletterpicker.component';

describe('RandomletterpickerComponent', () => {
  let component: RandomletterpickerComponent;
  let fixture: ComponentFixture<RandomletterpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomletterpickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomletterpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

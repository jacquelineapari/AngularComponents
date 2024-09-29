import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersequencegameComponent } from './numbersequencegame.component';

describe('NumbersequencegameComponent', () => {
  let component: NumbersequencegameComponent;
  let fixture: ComponentFixture<NumbersequencegameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbersequencegameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersequencegameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessthewordgameComponent } from './guessthewordgame.component';

describe('GuessthewordgameComponent', () => {
  let component: GuessthewordgameComponent;
  let fixture: ComponentFixture<GuessthewordgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuessthewordgameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessthewordgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddorevengameComponent } from './oddorevengame.component';

describe('OddorevengameComponent', () => {
  let component: OddorevengameComponent;
  let fixture: ComponentFixture<OddorevengameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OddorevengameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddorevengameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

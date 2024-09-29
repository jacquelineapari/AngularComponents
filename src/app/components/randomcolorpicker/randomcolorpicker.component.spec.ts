import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomcolorpickerComponent } from './randomcolorpicker.component';

describe('RandomcolorpickerComponent', () => {
  let component: RandomcolorpickerComponent;
  let fixture: ComponentFixture<RandomcolorpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomcolorpickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomcolorpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

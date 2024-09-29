import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimecheckerComponent } from './primechecker.component';

describe('PrimecheckerComponent', () => {
  let component: PrimecheckerComponent;
  let fixture: ComponentFixture<PrimecheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimecheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimecheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

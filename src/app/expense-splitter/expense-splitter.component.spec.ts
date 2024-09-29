import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseSplitterComponent } from './expense-splitter.component';

describe('ExpenseSplitterComponent', () => {
  let component: ExpenseSplitterComponent;
  let fixture: ComponentFixture<ExpenseSplitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseSplitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

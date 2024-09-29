import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollthediceComponent } from './rollthedice.component';

describe('RollthediceComponent', () => {
  let component: RollthediceComponent;
  let fixture: ComponentFixture<RollthediceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollthediceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollthediceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

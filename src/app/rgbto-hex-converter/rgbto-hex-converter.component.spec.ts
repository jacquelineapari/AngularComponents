import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RGBtoHexConverterComponent } from './rgbto-hex-converter.component';

describe('RGBtoHexConverterComponent', () => {
  let component: RGBtoHexConverterComponent;
  let fixture: ComponentFixture<RGBtoHexConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RGBtoHexConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RGBtoHexConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

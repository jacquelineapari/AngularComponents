import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compoundinterestcalculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  principal: number = 0;
  rate: number = 0;
  time: number = 0; 
  frequency: number = 1; 
  compoundInterest: number = 0;

  calculateCompoundInterest() {
    const ratePerPeriod = this.rate / (100 * this.frequency);
    const totalPeriods = this.frequency * this.time;
    this.compoundInterest = this.principal * Math.pow((1 + ratePerPeriod), totalPeriods) - this.principal;
  }
}
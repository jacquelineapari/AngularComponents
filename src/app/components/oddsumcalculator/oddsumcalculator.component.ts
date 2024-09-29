import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-oddsumcalculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  number: number | null = null; 
  sum: number | null = null; 

  calculateOddSum() {
    if (this.number !== null && this.number > 0) {
      this.sum = this.calculateSumOfOdds(this.number);
    } else {
      this.sum = null;
    }
  }

  private calculateSumOfOdds(n: number): number {
    let total = 0;
    for (let i = 1; i <= n; i += 2) {
      total += i;
    }
    return total;
  }
}
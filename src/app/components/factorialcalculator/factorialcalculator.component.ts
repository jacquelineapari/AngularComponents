import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-factorialcalculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {
  number: number | null = null;
  factorialResult: number | null = null;

  calculateFactorial() {
    if (this.number !== null && this.number >= 0) {
      this.factorialResult = this.factorial(this.number);
    } else {
      this.factorialResult = null;
      alert('Please enter a non-negative integer.');
    }
  }

  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }
}
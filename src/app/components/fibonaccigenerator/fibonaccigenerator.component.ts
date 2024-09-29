import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fibonaccigenerator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonaccigeneratorComponent {
  n: number | null = null;
  fibonacciSeries: number[] = [];

  generateFibonacci() {
    if (this.n !== null && this.n > 0) {
      this.fibonacciSeries = this.calculateFibonacci(this.n);
    } else {
      this.fibonacciSeries = [];
    }
  }

  private calculateFibonacci(n: number): number[] {
    const series = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
      series.push(a);
      [a, b] = [b, a + b]; 
    }
    return series;
  }
}
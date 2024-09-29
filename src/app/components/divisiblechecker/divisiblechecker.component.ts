import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-divisiblechecker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {
  firstNumber: number | null = null;
  secondNumber: number | null = null;
  result: string = "";

  checkDivisibility() {
    if (this.secondNumber !== 0 && this.firstNumber !== null && this.secondNumber !== null) {
      if (this.firstNumber % this.secondNumber === 0) {
        this.result = `${this.firstNumber} is divisible by ${this.secondNumber}.`;
      } else {
        this.result = `${this.firstNumber} is not divisible by ${this.secondNumber}.`;
      }
    } else if (this.secondNumber === 0) {
      this.result = "Division by zero is not allowed.";
    }
  }
}
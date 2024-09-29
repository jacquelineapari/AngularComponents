import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiplicationchecker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent {
  firstNumber: number | null = null; // The number to check if it's a multiple
  secondNumber: number | null = null; // The divisor
  isMultiple: string = ""; // Stores the result

  checkMultiple() {
    if (this.firstNumber !== null && this.secondNumber !== null && this.secondNumber !== 0) {
      this.isMultiple = this.firstNumber % this.secondNumber === 0 ? 'Yes' : 'No';
    } else {
      this.isMultiple = 'Invalid Input';
    }
  }
}
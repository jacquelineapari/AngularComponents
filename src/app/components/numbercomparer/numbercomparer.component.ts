import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-numbercomparer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './numbercomparer.component.html',
  styleUrl: './numbercomparer.component.css'
})
export class NumbercomparerComponent {
  number1: number | null = null;
  number2: number | null = null;
  result: string = '';

  compareNumbers() {
    if (this.number1 !== null && this.number2 !== null) {
      if (this.number1 > this.number2) {
        this.result = `Number 1 (${this.number1}) is larger than Number 2 (${this.number2})`;
      } else if (this.number1 < this.number2) {
        this.result = `Number 2 (${this.number2}) is larger than Number 1 (${this.number1})`;
      } else {
        this.result = 'Both numbers are equal';
      }
    }
  }
}
import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  add() {
    console.log("working")
    this.result = this.number1 + this.number2;
  }
  subtract() {
    console.log("working")
    this.result = this.number1 - this.number2;
  }
  multiply() {
    console.log("working")
    this.result = this.number1 * this.number2;
  }
  divide() {
    console.log("working")
    this.result = this.number1 / this.number2;
  }
}

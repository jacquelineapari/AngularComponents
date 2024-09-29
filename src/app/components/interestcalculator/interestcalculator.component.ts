import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-interestcalculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './interestcalculator.component.html',
  styleUrl: './interestcalculator.component.css'
})
export class InterestcalculatorComponent {
  principal: number | null = null; 
  rate: number | null = null; 
  time: number | null = null; 
  simpleInterest: number | null = null; 

  calculateInterest() {
    if (this.principal && this.rate && this.time) {
      this.simpleInterest = (this.principal * this.rate * this.time) / 100;
    } else {
      this.simpleInterest = null;
    }
  }
}
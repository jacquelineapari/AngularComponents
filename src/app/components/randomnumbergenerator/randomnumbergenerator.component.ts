import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-randomnumbergenerator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './randomnumbergenerator.component.html',
  styleUrl: './randomnumbergenerator.component.css'
})
export class RandomnumbergeneratorComponent {
  minValue: number | null = null; 
  maxValue: number | null = null; 
  randomNumber: number | null = null; 

  generateRandomNumber() {
    if (this.minValue !== null && this.maxValue !== null && this.minValue <= this.maxValue) {
      this.randomNumber = Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
    }
  }
}
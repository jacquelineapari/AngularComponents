import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-randomletterpicker',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './randomletterpicker.component.html',
  styleUrl: './randomletterpicker.component.css'
})
export class RandomletterpickerComponent {
  userInput: string = '';
  randomLetter: string = '';

  pickRandomLetter() {
    if (this.userInput.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.userInput.length);
      this.randomLetter = this.userInput[randomIndex];
    } else {
      this.randomLetter = ''; // Clear the output if no input is provided
    }
  }
}
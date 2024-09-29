import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-numbersequencegame',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './numbersequencegame.component.html',
  styleUrl: './numbersequencegame.component.css'
})
export class NumbersequencegameComponent {
  userInput: number | null = null;
  sequence: number[] = [];
  sum: number = 0;
  userGuess: number | null = null;
  result: string = '';

  generateSequence() {
    if (this.userInput !== null) {
      this.sequence = Array.from({ length: this.userInput }, (_, i) => i + 1);
      this.sum = this.sequence.reduce((acc, val) => acc + val, 0);
      this.result = ''; // Reset result on new input
    }
  }

  checkGuess() {
    if (this.userGuess !== null) {
      this.result = this.userGuess === this.sum ? 'You win!' : 'Try again!';
    }
  }
}
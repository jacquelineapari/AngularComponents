import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guessnumbergame',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  randomNumber: number = Math.floor(Math.random() * 100) + 1;
  userGuess: number | null = null;
  feedback: string = '';
  attempts: number = 0;

  checkGuess() {
    if (this.userGuess !== null) {
      this.attempts++;
      if (this.userGuess < this.randomNumber) {
        this.feedback = 'Too low! Try again.';
      } else if (this.userGuess > this.randomNumber) {
        this.feedback = 'Too high! Try again.';
      } else {
        this.feedback = `Correct! You guessed the number in ${this.attempts} attempts.`;
      }
    }
  }

  resetGame() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    this.userGuess = null;
    this.feedback = '';
    this.attempts = 0;
  }
}
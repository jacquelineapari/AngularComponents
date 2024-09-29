import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guessthewordgame',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './guessthewordgame.component.html',
  styleUrl: './guessthewordgame.component.css'
})
export class GuessthewordgameComponent {
  words: string[] = ['angular', 'typescript', 'javascript', 'component', 'service'];
  randomWord: string = '';
  guessedLetters: Set<string> = new Set();
  userInput: string = '';
  attempts: number = 6;

  constructor() {
    this.pickRandomWord();
  }

  pickRandomWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    this.randomWord = this.words[randomIndex];
  }

  guessLetter() {
    if (this.userInput.length === 1 && !this.guessedLetters.has(this.userInput)) {
      this.guessedLetters.add(this.userInput);
      if (!this.randomWord.includes(this.userInput)) {
        this.attempts--;
      }
    }
    this.userInput = '';
  }

  get displayedWord() {
    return this.randomWord
      .split('')
      .map(letter => (this.guessedLetters.has(letter) ? letter : '_'))
      .join(' ');
  }

  isGameOver() {
    return this.attempts <= 0 || this.displayedWord.indexOf('_') === -1;
  }

  resetGame() {
    this.guessedLetters.clear();
    this.attempts = 6;
    this.pickRandomWord();
  }
}
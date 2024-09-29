import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-oddorevengame',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './oddorevengame.component.html',
  styleUrl: './oddorevengame.component.css'
})
export class OddorevengameComponent {
  userNumber: number | null = null;
  randomNumber: number | null = null;
  result: string = '';

  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    this.checkWinner();
  }

  checkWinner() {
    if (this.userNumber !== null && this.randomNumber !== null) {
      const userEven = this.userNumber % 2 === 0;
      const randomEven = this.randomNumber % 2 === 0;
      
      if (userEven === randomEven) {
        this.result = 'You win! Both numbers are either even or odd.';
      } else {
        this.result = 'You lose! One number is odd, the other is even.';
      }
    }
  }
}
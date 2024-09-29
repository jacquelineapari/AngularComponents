import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rockpaperscissors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rockpaperscissors.component.html',
  styleUrl: './rockpaperscissors.component.css'
})
export class RockpaperscissorsComponent {
  userChoice: string = '';
  computerChoice: string = '';
  result: string = '';

  choices: string[] = ['Rock', 'Paper', 'Scissors'];

  playGame() {
    this.computerChoice = this.choices[Math.floor(Math.random() * 3)];
    this.result = this.getWinner(this.userChoice, this.computerChoice);
  }

  getWinner(user: string, computer: string): string {
    if (user === computer) {
      return 'It\'s a draw!';
    }
    if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
}
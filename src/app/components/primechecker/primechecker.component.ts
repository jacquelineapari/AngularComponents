import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primechecker',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './primechecker.component.html',
  styleUrl: './primechecker.component.css'
})
export class PrimecheckerComponent {
  userInput: number | null = null;
  isPrime: boolean | null = null;

  checkPrime() {
    if (this.userInput === null || this.userInput < 2) {
      this.isPrime = false;
      return;
    }

    for (let i = 2; i <= Math.sqrt(this.userInput); i++) {
      if (this.userInput % i === 0) {
        this.isPrime = false;
        return;
      }
    }
    this.isPrime = true;
  }
}
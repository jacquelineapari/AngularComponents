import { Component } from '@angular/core';

@Component({
  selector: 'app-rollthedice',
  standalone: true,
  imports: [],
  templateUrl: './rollthedice.component.html',
  styleUrl: './rollthedice.component.css'
})
export class RollthediceComponent {
  die1: number = 0;
  die2: number = 0;
  sum: number = 0;

  rollDice() {
    this.die1 = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
    this.die2 = Math.floor(Math.random() * 6) + 1;
    this.sum = this.die1 + this.die2;
  }
}
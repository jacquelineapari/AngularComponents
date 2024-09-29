import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    "The best way to predict the future is to create it.",
    "You miss 100% of the shots you don’t take.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Life is like climbing a mountain, you can say you have reached the top only after climbing back down",
    "What doesn't kill you makes you stronger"
  ];

  randomQuote: string | null = null;

  displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wordshuffler',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wordshuffler.component.html',
  styleUrl: './wordshuffler.component.css'
})
export class WordshufflerComponent {
  inputWord: string = ""; 
  shuffledWord: string = "";

  shuffle() {
    this.shuffledWord = this.inputWord
      .split('') 
      .sort(() => Math.random() - 0.5)
      .join('');
  }
}
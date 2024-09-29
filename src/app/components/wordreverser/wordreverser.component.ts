import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wordreverser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wordreverser.component.html',
  styleUrl: './wordreverser.component.css'
})
export class WordreverserComponent {
  inputWord: string = ""; 
  reversedWord: string = "";

  reverse() {
    this.reversedWord = this.inputWord.split('').reverse().join(''); 
  }
}
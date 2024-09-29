import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wordcounter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordcounterComponent {
  inputText: string = ""; 
  wordCount: number = 0; 

  countWords() {
    this.wordCount = this.inputText.trim().split(/\s+/).filter(word => word.length > 0).length;
  }
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindromechecker',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  inputWord: string = '';
  isPalindrome: boolean | null = null;

  check() {
    const cleanedWord = this.inputWord.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    this.isPalindrome = cleanedWord === cleanedWord.split('').reverse().join('');
  }
}
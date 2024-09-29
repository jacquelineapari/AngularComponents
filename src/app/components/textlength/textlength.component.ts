import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-textlength',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
  text: string = ""; 
  length: number = 0; 

  calculateLength() {
    this.length = this.text.length; 
  }
}
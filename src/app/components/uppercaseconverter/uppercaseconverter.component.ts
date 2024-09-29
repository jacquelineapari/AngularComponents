import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-uppercaseconverter',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './uppercaseconverter.component.html',
  styleUrl: './uppercaseconverter.component.css'
})
export class UppercaseconverterComponent {
  inputText: string = ""; 
  uppercasedText: string = ""; 

  convertToUpper() {
    this.uppercasedText = this.inputText;
  }
}
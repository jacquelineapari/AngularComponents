import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmisolver',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {
  height: number | null = null; 
  weight: number | null = null; 
  bmi: number | null = null; 

  calculateBMI() {
    if (this.height && this.weight) {
      this.bmi = this.weight / (this.height * this.height);
    } else {
      this.bmi = null;
    }
  }
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-multiplicationtable',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
  number: number = 0;
  multiplicationTable: number[] = [];

  createTable() {
    if (this.number !== 0) {
      this.multiplicationTable = Array.from({length:10}, (_, i) => (i + 1) * this.number);
    }
  }

}

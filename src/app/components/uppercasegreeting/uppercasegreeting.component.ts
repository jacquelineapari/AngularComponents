import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-uppercasegreeting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {
  name: string = "";
  uppercaseName: string = "";

  displayUppercaseName() {
    this.uppercaseName = this.name.toUpperCase();
  }
}
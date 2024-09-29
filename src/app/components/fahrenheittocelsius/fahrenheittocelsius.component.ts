import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fahrenheittocelsius',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './fahrenheittocelsius.component.html',
  styleUrl: './fahrenheittocelsius.component.css'
})
export class FahrenheittocelsiusComponent {
  fahrenheit: number  = 0;
  celsius: number = 0;

  convertToCelsius() {
    if (this.fahrenheit !== null) {
      this.celsius = (this.fahrenheit - 32) * 5 / 9;
    }
  }
}
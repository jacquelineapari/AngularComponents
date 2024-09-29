import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperatureconverter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css'
})
export class TemperatureconverterComponent {
  celsius: number = 0;
  fahrenheit: number = 0;

  convertToFahrenheit() {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9/5) + 32;
    }
  }

  convertToCelsius() {
    if (this.fahrenheit !== null) {
      this.celsius = (this.fahrenheit - 32) * 5/9;
    }
  }
}
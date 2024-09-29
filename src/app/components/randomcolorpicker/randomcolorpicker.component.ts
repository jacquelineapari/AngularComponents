import { Component } from '@angular/core';

@Component({
  selector: 'app-randomcolorpicker',
  standalone: true,
  imports: [],
  templateUrl: './randomcolorpicker.component.html',
  styleUrl: './randomcolorpicker.component.css'
})
export class RandomcolorpickerComponent {
  randomColor: string = '#ffffff'; // Initial color set to white

  generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.randomColor = color;
  }
}
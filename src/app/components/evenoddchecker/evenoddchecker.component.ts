import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-evenoddchecker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css'
})
export class EvenoddcheckerComponent {
  number1: number = 0;
  result: string = "";

  check() {
    if (this.number1 !== null) {
      this.result = this.number1 % 2 === 0 ? 'Even' : 'Odd'; 
    }
  }
}
import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-userage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css'
})
export class UserageComponent {
  birthyear: number= 0;
  age: number = 0;

  calculateAge() {
    if (this.birthyear) {
      const currentYear = new Date().getFullYear();
      this.age = currentYear - this.birthyear;
    }
  }
}

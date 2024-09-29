import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usergreeting',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {
  name1: string = "";
  greeting: string = "";

  createGreeting() {
    this.greeting = `Hello ${this.name1}, goodmorning!`;
  }
}

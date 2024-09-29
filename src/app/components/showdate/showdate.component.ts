import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-showdate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showdate.component.html',
  styleUrl: './showdate.component.css'
})
export class ShowdateComponent {
  currentDate: Date | null = null;

  showDate() {
    this.currentDate = new Date();
  }
}
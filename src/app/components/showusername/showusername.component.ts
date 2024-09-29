import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-showusername',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './showusername.component.html',
  styleUrl: './showusername.component.css'
})
export class ShowusernameComponent {
  username: string = "";
  displayedUsername: string = "";

  show() {
    this.displayedUsername = this.username;
  }
}

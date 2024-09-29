import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usernamevalidator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = ""; 
  isValid: boolean | null = null; 

  usernameRules = {
    minLength: 5,
    pattern: /^[a-zA-Z0-9]+$/
  };

  validateUsername() {
    if (this.username.length >= this.usernameRules.minLength && this.usernameRules.pattern.test(this.username)) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
}